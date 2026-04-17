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

export function PageShareBar() {
  const pathname = usePathname();
  const [pageTitle, setPageTitle] = useState(pageTitles[pathname] ?? "Pebbs.app");
  const shareUrl = new URL(pathname, siteBaseUrl).toString();

  useEffect(() => {
    setPageTitle(document.title || pageTitles[pathname] || "Pebbs.app");
  }, [pathname]);

  return (
    <div className="section-shell pt-3 sm:pt-4">
      <div className="flex justify-center md:justify-end">
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
                <span
                  aria-hidden="true"
                  className="block h-5 w-5 bg-current"
                  style={{
                    WebkitMaskImage: `url(/share-icons/${platformKey}.svg)`,
                    WebkitMaskPosition: "center",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskSize: "contain",
                    maskImage: `url(/share-icons/${platformKey}.svg)`,
                    maskPosition: "center",
                    maskRepeat: "no-repeat",
                    maskSize: "contain"
                  }}
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
