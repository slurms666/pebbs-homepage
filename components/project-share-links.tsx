import {
  getPlatformShareHref,
  type SharePlatform
} from "@/lib/project-sharing";

type ProjectShareLinksProps = {
  imageUrl?: string;
  platforms: SharePlatform[];
  title: string;
  url: string;
};

export function ProjectShareLinks({
  imageUrl,
  platforms,
  title,
  url
}: ProjectShareLinksProps) {
  const availablePlatforms = platforms.filter(
    (platform) => !(platform.requiresImage && !imageUrl)
  );

  if (availablePlatforms.length === 0) {
    return null;
  }

  return (
    <div className="mt-auto border-t border-line/80 pt-5">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {availablePlatforms.map((platform) => {
          const href = getPlatformShareHref(platform.key, {
            title,
            url,
            imageUrl
          });
          const isEmail = platform.key === "email";

          return (
            <a
              key={platform.key}
              href={href}
              aria-label={`Share ${title} on ${platform.label}`}
              className={`inline-flex h-6 w-6 items-center justify-center overflow-visible text-stone-400 transition-colors ${platform.hoverColorClass}`}
              rel={isEmail ? undefined : "noreferrer"}
              target={isEmail ? undefined : "_blank"}
              title={`Share on ${platform.label}`}
            >
              <span
                aria-hidden="true"
                className="block h-5 w-5 bg-current"
                style={{
                  WebkitMaskImage: `url(${platform.iconHref})`,
                  WebkitMaskPosition: "center",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskSize: "contain",
                  maskImage: `url(${platform.iconHref})`,
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
  );
}
