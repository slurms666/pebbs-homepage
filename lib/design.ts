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
const imageExtensionPattern = /\.(png|jpe?g|webp|gif|avif|svg)$/i;

export type DesignPiece = {
  slug: string;
  title: string;
  summary?: string;
  filename: string;
  href: string;
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
  images: DesignPiece[];
};

export type DesignHighlight = {
  slug: string;
  title: string;
  summary: string;
  href: string;
  imageHref: string;
  date?: string;
  displayDate?: string;
  label: string;
};

export type DesignGallery = {
  groups: DesignGroup[];
  standalonePieces: DesignPiece[];
};

function toDesignPiece(filename: string): DesignPiece {
  const metadata = designMetadata[filename];
  const date = metadata?.date ?? inferDateFromFilename(filename, imageExtensionPattern);

  return {
    slug: createSlugFromFilename(filename, imageExtensionPattern),
    title: metadata?.title ?? filenameToTitle(filename, imageExtensionPattern),
    summary: metadata?.summary,
    filename,
    href: `/design/${filename}`,
    date,
    displayDate: date ? formatDisplayDate(date) : undefined
  };
}

export async function getDesignGallery(): Promise<DesignGallery> {
  try {
    const entries = await readdir(designDirectory);
    const pieces = entries
      .filter((entry) => imageExtensionPattern.test(entry))
      .map(toDesignPiece)
      .sort(sortByDateThenTitle);

    const pieceMap = new Map(pieces.map((piece) => [piece.filename, piece]));
    const groupedFilenames = new Set<string>();

    const groups = designGroups
      .flatMap((group) => {
        const images = group.images
          .map((filename) => {
            groupedFilenames.add(filename);
            return pieceMap.get(filename);
          })
          .filter((piece): piece is DesignPiece => Boolean(piece));

        if (images.length === 0) {
          return [];
        }

        const date = group.date ?? images.find((image) => image.date)?.date;

        return [
          {
            slug: group.slug,
            title: group.title,
            client: group.client,
            description: group.description,
            date,
            displayDate: date ? formatDisplayDate(date) : undefined,
            images
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

  const groupHighlights: DesignHighlight[] = gallery.groups.map((group) => ({
    slug: group.slug,
    title: group.title,
    summary: group.description,
    href: `/design#${group.slug}`,
    imageHref: group.images[0].href,
    date: group.date,
    displayDate: group.displayDate,
    label: `${group.images.length} piece${group.images.length === 1 ? "" : "s"}`
  }));

  const standaloneHighlights: DesignHighlight[] = gallery.standalonePieces.map((piece) => ({
    slug: piece.slug,
    title: piece.title,
    summary:
      piece.summary ??
      "Artwork, identity studies, and design work published directly from the repository.",
    href: piece.href,
    imageHref: piece.href,
    date: piece.date,
    displayDate: piece.displayDate,
    label: "Artwork"
  }));

  return [...groupHighlights, ...standaloneHighlights]
    .sort(sortByDateThenTitle)
    .slice(0, limit);
}
