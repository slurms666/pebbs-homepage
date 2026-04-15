"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { DesignCard } from "@/components/design-card";
import { DesignGroupCard } from "@/components/design-group-card";
import { SurfaceCard } from "@/components/surface-card";
import type { DesignGallery as DesignGalleryData } from "@/lib/design";

type DesignGalleryProps = {
  gallery: DesignGalleryData;
};

function shuffleList<T>(items: T[]) {
  const shuffled = items.slice();

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const current = shuffled[index];
    shuffled[index] = shuffled[randomIndex];
    shuffled[randomIndex] = current;
  }

  return shuffled;
}

function flattenMedia(gallery: DesignGalleryData) {
  return [
    ...gallery.standalonePieces,
    ...gallery.groups.flatMap((group) => group.media)
  ];
}

export function DesignGallery({ gallery }: DesignGalleryProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [groupOrder, setGroupOrder] = useState(gallery.groups);
  const [standaloneOrder, setStandaloneOrder] = useState(gallery.standalonePieces);
  const allMedia = flattenMedia(gallery);
  const activeFilename = searchParams.get("media");
  const activeMedia = activeFilename
    ? allMedia.find((item) => item.filename === activeFilename) ?? null
    : null;

  useEffect(() => {
    setGroupOrder(shuffleList(gallery.groups));
    setStandaloneOrder(shuffleList(gallery.standalonePieces));
  }, [gallery.groups, gallery.standalonePieces]);

  useEffect(() => {
    if (!activeMedia) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeMedia]);

  useEffect(() => {
    if (!activeMedia) {
      return undefined;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (window.history.length > 1) {
          router.back();
        } else {
          router.replace(pathname, { scroll: false });
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeMedia, pathname, router]);

  function closeViewer() {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.replace(pathname, { scroll: false });
  }

  const hasContent = groupOrder.length > 0 || standaloneOrder.length > 0;

  if (!hasContent) {
    return (
      <SurfaceCard className="mt-10 rounded-[1.5rem] border-dashed p-8">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
          No design work yet
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
          Add image or video files to
          <span className="mx-1 font-mono text-ink">/public/design</span>
          and redeploy. If several files belong together, group them in
          <span className="mx-1 font-mono text-ink">data/design-groups.ts</span>.
          Optional titles, dates, and single-item summaries can still be added in
          <span className="mx-1 font-mono text-ink">data/design-metadata.ts</span>.
        </p>
      </SurfaceCard>
    );
  }

  return (
    <>
      <div className="mt-10 space-y-10">
        {groupOrder.length > 0 ? (
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
              Grouped work
            </p>
            <div className="mt-5 space-y-5">
              {groupOrder.map((group) => (
                <DesignGroupCard key={group.slug} group={group} />
              ))}
            </div>
          </div>
        ) : null}

        {standaloneOrder.length > 0 ? (
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
              Individual pieces
            </p>
            <div className="mt-5 grid gap-5 lg:grid-cols-3">
              {standaloneOrder.map((piece) => (
                <DesignCard key={piece.slug} piece={piece} />
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {activeMedia ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label={activeMedia.title}
        >
          <button
            type="button"
            aria-label="Close viewer"
            className="absolute inset-0 cursor-default"
            onClick={closeViewer}
          />

          <div className="relative z-10 flex max-h-full w-full max-w-6xl flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-2xl">
            <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4 sm:px-6">
              <div className="min-w-0">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                  {activeMedia.mediaType === "video" ? "Video" : "Artwork"}
                </p>
                <h2 className="mt-2 truncate text-xl font-semibold tracking-[-0.03em] text-ink">
                  {activeMedia.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={closeViewer}
                className="rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition hover:bg-stone-50"
              >
                Back to gallery
              </button>
            </div>

            <div className="overflow-auto bg-stone-100 p-4 sm:p-6">
              <div className="flex min-h-[40vh] items-center justify-center overflow-hidden rounded-[1.25rem] border border-line bg-white">
                {activeMedia.mediaType === "video" ? (
                  <video
                    src={activeMedia.assetHref}
                    controls
                    autoPlay
                    playsInline
                    className="max-h-[75vh] w-full bg-black object-contain"
                  />
                ) : (
                  <img
                    src={activeMedia.assetHref}
                    alt={activeMedia.title}
                    className="max-h-[75vh] w-full object-contain"
                  />
                )}
              </div>
              {activeMedia.summary ? (
                <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">{activeMedia.summary}</p>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
