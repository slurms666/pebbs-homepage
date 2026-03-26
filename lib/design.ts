import { readdir } from "node:fs/promises";
import path from "node:path";
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

export async function getDesignPieces(): Promise<DesignPiece[]> {
  try {
    const entries = await readdir(designDirectory);

    return entries
      .filter((entry) => imageExtensionPattern.test(entry))
      .map((filename) => {
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
      })
      .sort(sortByDateThenTitle);
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      return [];
    }

    throw error;
  }
}
