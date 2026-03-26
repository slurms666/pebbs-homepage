import { readdir } from "node:fs/promises";
import path from "node:path";
import { paperMetadata } from "@/data/paper-metadata";

const papersDirectory = path.join(process.cwd(), "public", "papers");
const pdfExtensionPattern = /\.pdf$/i;
const datedFilenamePattern = /^(\d{4})-(\d{2})-(\d{2})[-_\s]+(.+)$/;

export type ResearchPaper = {
  slug: string;
  title: string;
  summary?: string;
  filename: string;
  href: string;
  date?: string;
  displayDate?: string;
};

export function filenameToTitle(filename: string) {
  const baseName = filename.replace(pdfExtensionPattern, "");
  const dateMatch = baseName.match(datedFilenamePattern);
  const titleSource = dateMatch ? dateMatch[4] : baseName;

  return titleSource
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map((word) => {
      if (!word) {
        return word;
      }

      if (/^[A-Z0-9]+$/.test(word)) {
        return word;
      }

      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function inferDate(filename: string) {
  const baseName = filename.replace(pdfExtensionPattern, "");
  const dateMatch = baseName.match(datedFilenamePattern);

  if (!dateMatch) {
    return undefined;
  }

  const [, year, month, day] = dateMatch;
  const isoDate = `${year}-${month}-${day}`;
  const parsed = new Date(`${isoDate}T00:00:00Z`);

  if (Number.isNaN(parsed.getTime())) {
    return undefined;
  }

  return isoDate;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    timeZone: "UTC"
  }).format(new Date(`${date}T00:00:00Z`));
}

function createSlug(filename: string) {
  return filename
    .replace(pdfExtensionPattern, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function comparePapers(a: ResearchPaper, b: ResearchPaper) {
  if (a.date && b.date) {
    return b.date.localeCompare(a.date);
  }

  if (a.date) {
    return -1;
  }

  if (b.date) {
    return 1;
  }

  return a.title.localeCompare(b.title);
}

export async function getResearchPapers(): Promise<ResearchPaper[]> {
  try {
    const entries = await readdir(papersDirectory);

    return entries
      .filter((entry) => pdfExtensionPattern.test(entry))
      .map((filename) => {
        const metadata = paperMetadata[filename];
        const date = metadata?.date ?? inferDate(filename);

        return {
          slug: createSlug(filename),
          title: metadata?.title ?? filenameToTitle(filename),
          summary: metadata?.summary,
          filename,
          href: `/papers/${filename}`,
          date,
          displayDate: date ? formatDate(date) : undefined
        };
      })
      .sort(comparePapers);
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
