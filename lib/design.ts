import { readdir } from "node:fs/promises";
import path from "node:path";
import { designGroups } from "@/data/design-groups";
import { designMetadata } from "@/data/design-metadata";
import {
  createSlugFromFilename,
  filenameToTitle,
  formatDisplayDate,
  inferDateFromFilename,
  sortByDateThenTitle
} from "@/lib/content-utils";

const designDirectory = path.join(process.cwd(), "public", "design");
const designAssetExtensionPattern = /\.(png|jpe?g|webp|gif|avif|svg|mp4|webm|mov)$/i;
const videoExtensionPattern = /\.(mp4|webm|mov)$/i;

export type DesignMediaType = "image" | "video";

export type DesignPiece = {
  slug: string;
  title: string;
  summary?: string;
  filename: string;
  assetHref: string;
  viewerHref: string;
  mediaType: DesignMediaType;
  date?: string;
  displayDate?: string;
};

export type DesignGroup = {
  slug: string;
  title: string;
  client?: string;
  description: string;
  date?: string;
  displayDate?: string;
  media: DesignPiece[];
};

export type DesignHighlight = {
  slug: string;
  title: string;
  summary: string;
  href: string;
  previewHref: string;
  previewType: DesignMediaType;
  date?: string;
  displayDate?: string;
  label: string;
};

export type DesignGallery = {
  groups: DesignGroup[];
  standalonePieces: DesignPiece[];
};

function getMediaType(filename: string): DesignMediaType {
  return videoExtensionPattern.test(filename) ? "video" : "image";
}

function getViewerHref(filename: string) {
  return `/design?media=${encodeURIComponent(filename)}`;
}

function toDesignPiece(filename: string): DesignPiece {
  const metadata = designMetadata[filename];
  const date = metadata?.date ?? inferDateFromFilename(filename, designAssetExtensionPattern);

  return {
    slug: createSlugFromFilename(filename, designAssetExtensionPattern),
    title: metadata?.title ?? filenameToTitle(filename, designAssetExtensionPattern),
    summary: metadata?.summary,
    filename,
    assetHref: `/design/${filename}`,
    viewerHref: getViewerHref(filename),
    mediaType: getMediaType(filename),
    date,
    displayDate: date ? formatDisplayDate(date) : undefined
  };
}

export async function getDesignGallery(): Promise<DesignGallery> {
  try {
    const entries = await readdir(designDirectory);
    const pieces = entries
      .filter((entry) => designAssetExtensionPattern.test(entry))
      .map(toDesignPiece)
      .sort(sortByDateThenTitle);

    const pieceMap = new Map(pieces.map((piece) => [piece.filename, piece]));
    const groupedFilenames = new Set<string>();

    const groups = designGroups
      .flatMap((group) => {
        const media = group.media
          .map((filename) => {
            groupedFilenames.add(filename);
            return pieceMap.get(filename);
          })
          .filter((piece): piece is DesignPiece => Boolean(piece));

        if (media.length === 0) {
          return [];
        }

        const date = group.date ?? media.find((item) => item.date)?.date;

        return [
          {
            slug: group.slug,
            title: group.title,
            client: group.client,
            description: group.description,
            date,
            displayDate: date ? formatDisplayDate(date) : undefined,
            media
          }
        ];
      })
      .sort(sortByDateThenTitle);

    const standalonePieces = pieces.filter((piece) => !groupedFilenames.has(piece.filename));

    return {
      groups,
      standalonePieces
    };
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      return {
        groups: [],
        standalonePieces: []
      };
    }

    throw error;
  }
}

export async function getDesignHighlights(limit = 2): Promise<DesignHighlight[]> {
  const gallery = await getDesignGallery();

  const groupHighlights: DesignHighlight[] = gallery.groups.flatMap((group) => {
      const preview = group.media.find((item) => item.mediaType === "image") ?? group.media[0];

      if (!preview) {
        return [];
      }

      return [
        {
          slug: group.slug,
          title: group.title,
          summary: group.description,
          href: `${preview.viewerHref}#${group.slug}`,
          previewHref: preview.assetHref,
          previewType: preview.mediaType,
          date: group.date,
          displayDate: group.displayDate,
          label: `${group.media.length} piece${group.media.length === 1 ? "" : "s"}`
        }
      ];
    });

  const standaloneHighlights: DesignHighlight[] = gallery.standalonePieces.map((piece) => ({
    slug: piece.slug,
    title: piece.title,
    summary:
      piece.summary ??
      (piece.mediaType === "video"
        ? "Video work published directly from the repository."
        : "Artwork, identity studies, and design work published directly from the repository."),
    href: piece.viewerHref,
    previewHref: piece.assetHref,
    previewType: piece.mediaType,
    date: piece.date,
    displayDate: piece.displayDate,
    label: piece.mediaType === "video" ? "Video" : "Artwork"
  }));

  return [...groupHighlights, ...standaloneHighlights]
    .sort(sortByDateThenTitle)
    .slice(0, limit);
}
