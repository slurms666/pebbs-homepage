"use client";

import Image from "next/image";
import Link from "next/link";
import { ShareActions } from "@/components/share-actions";
import type { DesignGroup } from "@/lib/design";
import { SurfaceCard } from "@/components/surface-card";

type DesignGroupCardProps = {
  group: DesignGroup;
};

export function DesignGroupCard({ group }: DesignGroupCardProps) {
  return (
    <SurfaceCard className="rounded-[1.75rem] p-6 sm:p-7">
      <div id={group.slug} className="scroll-mt-28">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">Design group</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-ink">
              {group.title}
            </h2>
            {group.client ? (
              <p className="mt-2 text-sm font-medium text-ink">{group.client}</p>
            ) : null}
          </div>
          {group.displayDate ? (
            <span className="w-fit rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              {group.displayDate}
            </span>
          ) : null}
        </div>

        <p className="mt-5 max-w-3xl text-sm leading-7 text-muted">{group.description}</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {group.media.map((item) => {
            const isSvg = item.mediaType === "image" && item.assetHref.toLowerCase().endsWith(".svg");

            const sharePath = `${item.viewerHref}#${group.slug}`;

            return (
              <div key={item.filename}>
                <Link href={sharePath} scroll={false} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-line bg-stone-100">
                    {item.mediaType === "video" ? (
                      <video
                        src={item.assetHref}
                        className="h-full w-full object-cover"
                        muted
                        playsInline
                        loop
                        preload="metadata"
                        autoPlay
                      />
                    ) : (
                      <Image
                        src={item.assetHref}
                        alt={item.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, 50vw"
                        className="object-cover"
                        unoptimized={isSvg}
                      />
                    )}
                  </div>
                </Link>
                <div className="mt-3">
                  <p className="text-sm font-medium text-ink">{item.title}</p>
                  <ShareActions
                    path={sharePath}
                    title={item.title}
                    className="mt-2"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SurfaceCard>
  );
}
