export const siteBaseUrl = "https://pebbs.app";

export type SharePlatformKey =
  | "facebook"
  | "x"
  | "pinterest"
  | "reddit"
  | "telegram"
  | "whatsapp"
  | "email";

export type SharePlatformDefinition = {
  label: string;
  hoverColorClass: string;
  requiresImage?: boolean;
  buildHref: (options: { title: string; url: string; imageUrl?: string }) => string;
};

export const sharePlatformDefinitions: Record<SharePlatformKey, SharePlatformDefinition> = {
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
  pinterest: {
    label: "Pinterest",
    hoverColorClass: "hover:text-[#e60023]",
    requiresImage: true,
    buildHref: ({ title, url, imageUrl }) =>
      `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(imageUrl ?? url)}&description=${encodeURIComponent(title)}`
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
  }
};

export const preferredPlatformOrder: SharePlatformKey[] = [
  "facebook",
  "x",
  "pinterest",
  "reddit",
  "telegram",
  "whatsapp",
  "email"
];

export function getSharePlatformHref(
  platformKey: SharePlatformKey,
  options: {
    title: string;
    url: string;
    imageUrl?: string;
  }
) {
  return sharePlatformDefinitions[platformKey].buildHref(options);
}
