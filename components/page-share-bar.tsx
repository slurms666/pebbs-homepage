"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  getSharePlatformHref,
  preferredPlatformOrder,
  sharePlatformDefinitions,
  siteBaseUrl
} from "@/lib/share-platforms";

const pageTitles: Record<string, string> = {
  "/": "Home | Pebbs.app",
  "/services": "Services | Pebbs.app",
  "/projects": "Projects | Pebbs.app",
  "/design": "Design | Pebbs.app",
  "/research": "Research | Pebbs.app",
  "/faq": "FAQ | Pebbs.app",
  "/contact": "Contact | Pebbs.app"
};

const socialProfiles = [
  {
    href: "https://www.facebook.com/profile.php?id=61566248830933",
    iconHref: "/share-icons/facebook.svg",
    label: "Facebook",
    colorClass: "text-[#1877f2] hover:text-stone-400"
  },
  {
    href: "https://github.com/slurms666/",
    iconHref: "/social-icons/github.svg",
    label: "GitHub",
    colorClass: "text-[#111111] hover:text-stone-400"
  }
];

function MaskedIcon({ iconHref }: { iconHref: string }) {
  return (
    <span
      aria-hidden="true"
      className="block h-5 w-5 bg-current"
      style={{
        WebkitMaskImage: `url(${iconHref})`,
        WebkitMaskPosition: "center",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskImage: `url(${iconHref})`,
        maskPosition: "center",
        maskRepeat: "no-repeat",
        maskSize: "contain"
      }}
    />
  );
}

export function PageShareBar() {
  const pathname = usePathname();
  const [pageTitle, setPageTitle] = useState(pageTitles[pathname] ?? "Pebbs.app");
  const shareUrl = new URL(pathname, siteBaseUrl).toString();

  useEffect(() => {
    setPageTitle(document.title || pageTitles[pathname] || "Pebbs.app");
  }, [pathname]);

  return (
    <div className="section-shell pt-3 sm:pt-4">
      <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
        <div className="hairline inline-flex max-w-full flex-wrap items-center justify-center gap-3 rounded-[1.15rem] bg-white/92 px-3 py-2 shadow-card sm:px-4">
          {socialProfiles.map((profile) => (
            <a
              key={profile.label}
              href={profile.href}
              aria-label={`Visit Pebbs.app on ${profile.label}`}
              className={`inline-flex h-6 w-6 items-center justify-center overflow-visible transition-colors ${profile.colorClass}`}
              rel="noreferrer"
              target="_blank"
              title={`Pebbs.app on ${profile.label}`}
            >
              <MaskedIcon iconHref={profile.iconHref} />
            </a>
          ))}
        </div>

        <div className="hairline inline-flex max-w-full flex-wrap items-center justify-center gap-3 rounded-[1.15rem] bg-white/92 px-3 py-2 shadow-card sm:px-4">
          {preferredPlatformOrder.map((platformKey) => {
            const platform = sharePlatformDefinitions[platformKey];
            const href = getSharePlatformHref(platformKey, {
              title: pageTitle,
              url: shareUrl,
              imageUrl: shareUrl
            });
            const isEmail = platformKey === "email";

            return (
              <a
                key={platformKey}
                href={href}
                aria-label={`Share this page on ${platform.label}`}
                className={`inline-flex h-6 w-6 items-center justify-center overflow-visible text-stone-400 transition-colors ${platform.hoverColorClass}`}
                rel={isEmail ? undefined : "noreferrer"}
                target={isEmail ? undefined : "_blank"}
                title={`Share on ${platform.label}`}
              >
                <MaskedIcon iconHref={`/share-icons/${platformKey}.svg`} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
