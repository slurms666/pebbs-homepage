import { readdir } from "node:fs/promises";
import path from "node:path";
import type { ProjectEntry } from "@/data/projects";

const siteBaseUrl = "https://pebbs.app";
const iconDirectory = path.join(process.cwd(), "public", "share-icons");

type SharePlatformDefinition = {
  label: string;
  hoverColorClass: string;
  requiresImage?: boolean;
  buildHref: (options: { title: string; url: string; imageUrl?: string }) => string;
};

export type SharePlatform = {
  iconHref: string;
  key: string;
  label: string;
  hoverColorClass: string;
  requiresImage?: boolean;
};

const sharePlatformDefinitions: Record<string, SharePlatformDefinition> = {
  facebook: {
    label: "Facebook",
    hoverColorClass: "hover:text-[#1877f2]",
    buildHref: ({ url }) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  },
  x: {
    label: "X",
    hoverColorClass: "hover:text-[#111111]",
    buildHref: ({ title, url }) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
  },
  reddit: {
    label: "Reddit",
    hoverColorClass: "hover:text-[#ff4500]",
    buildHref: ({ title, url }) =>
      `https://www.reddit.com/submit?title=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
  },
  telegram: {
    label: "Telegram",
    hoverColorClass: "hover:text-[#26a5e4]",
    buildHref: ({ title, url }) =>
      `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
  },
  whatsapp: {
    label: "WhatsApp",
    hoverColorClass: "hover:text-[#25d366]",
    buildHref: ({ title, url }) =>
      `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`
  },
  email: {
    label: "Email",
    hoverColorClass: "hover:text-[#4f46e5]",
    buildHref: ({ title, url }) =>
      `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${title}\n\n${url}`)}`
  },
  pinterest: {
    label: "Pinterest",
    hoverColorClass: "hover:text-[#e60023]",
    requiresImage: true,
    buildHref: ({ title, url, imageUrl }) =>
      `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(imageUrl ?? url)}&description=${encodeURIComponent(title)}`
  }
};

const preferredPlatformOrder = [
  "facebook",
  "x",
  "pinterest",
  "reddit",
  "telegram",
  "whatsapp",
  "email"
];

export async function getAvailableSharePlatforms(): Promise<SharePlatform[]> {
  try {
    const entries = await readdir(iconDirectory);

    return entries
      .map((entry) => entry.replace(/\.svg$/i, "").toLowerCase())
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
  platformKey: string,
  options: {
    title: string;
    url: string;
    imageUrl?: string;
  }
) {
  return sharePlatformDefinitions[platformKey]?.buildHref(options) ?? options.url;
}
