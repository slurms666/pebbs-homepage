import { readdir } from "node:fs/promises";
import path from "node:path";
import { researchPapers } from "@/data/research-papers";
import {
  createSlugFromFilename,
  filenameToTitle,
  formatDisplayDate,
  inferDateFromFilename,
  sortByDateThenTitle
} from "@/lib/content-utils";

const papersDirectory = path.join(process.cwd(), "public", "papers");
const pdfExtensionPattern = /\.pdf$/i;

export type ResearchPaper = {
  slug: string;
  title: string;
  summary?: string;
  filename: string;
  href: string;
  date?: string;
  displayDate?: string;
};

export async function getResearchPapers(): Promise<ResearchPaper[]> {
  try {
    const entries = await readdir(papersDirectory);
    const metadataByFilename = new Map(
      researchPapers.map((paper) => [paper.filename, paper])
    );

    return entries
      .filter((entry) => pdfExtensionPattern.test(entry))
      .map((filename) => {
        const metadata = metadataByFilename.get(filename);
        const date = metadata?.date ?? inferDateFromFilename(filename, pdfExtensionPattern);

        return {
          slug: createSlugFromFilename(filename, pdfExtensionPattern),
          title: metadata?.title ?? filenameToTitle(filename, pdfExtensionPattern),
          summary: metadata?.summary,
          filename,
          href: `/papers/${filename}`,
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
