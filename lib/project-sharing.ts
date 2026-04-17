import { readdir } from "node:fs/promises";
import path from "node:path";
import type { ProjectEntry } from "@/data/projects";
import {
  preferredPlatformOrder,
  sharePlatformDefinitions,
  siteBaseUrl,
  type SharePlatformKey
} from "@/lib/share-platforms";

const iconDirectory = path.join(process.cwd(), "public", "share-icons");

export type SharePlatform = {
  iconHref: string;
  key: SharePlatformKey;
  label: string;
  hoverColorClass: string;
  requiresImage?: boolean;
};

export async function getAvailableSharePlatforms(): Promise<SharePlatform[]> {
  try {
    const entries = await readdir(iconDirectory);

    return entries
      .map((entry) => entry.replace(/\.svg$/i, "").toLowerCase() as SharePlatformKey)
      .filter((key) => key in sharePlatformDefinitions)
      .sort((left, right) => {
        const leftIndex = preferredPlatformOrder.indexOf(left);
        const rightIndex = preferredPlatformOrder.indexOf(right);

        if (leftIndex === -1 && rightIndex === -1) {
          return left.localeCompare(right);
        }

        if (leftIndex === -1) {
          return 1;
        }

        if (rightIndex === -1) {
          return -1;
        }

        return leftIndex - rightIndex;
      })
      .map((key) => {
        const definition = sharePlatformDefinitions[key];

        return {
          iconHref: `/share-icons/${key}.svg`,
          key,
          label: definition.label,
          hoverColorClass: definition.hoverColorClass,
          requiresImage: definition.requiresImage
        };
      });
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

export function createProjectSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getProjectShareUrl(project: ProjectEntry, slug: string) {
  if (project.link && /^https?:\/\//i.test(project.link)) {
    return project.link;
  }

  return new URL(`/projects#${slug}`, siteBaseUrl).toString();
}

export function getProjectShareImageUrl(project: ProjectEntry) {
  if (!project.imageSrc) {
    return undefined;
  }

  return new URL(project.imageSrc, siteBaseUrl).toString();
}

export function getPlatformShareHref(
  platformKey: SharePlatformKey,
  options: {
    title: string;
    url: string;
    imageUrl?: string;
  }
) {
  return sharePlatformDefinitions[platformKey]?.buildHref(options) ?? options.url;
}
