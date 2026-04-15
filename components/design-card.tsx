"use client";

import Image from "next/image";
import Link from "next/link";
import type { DesignHighlight, DesignPiece } from "@/lib/design";
import { SurfaceCard } from "@/components/surface-card";

type DesignCardProps = {
  piece: DesignPiece | DesignHighlight;
};

export function DesignCard({ piece }: DesignCardProps) {
  const previewHref = "previewHref" in piece ? piece.previewHref : piece.assetHref;
  const mediaType = "previewType" in piece ? piece.previewType : piece.mediaType;
  const linkHref = "href" in piece ? piece.href : piece.viewerHref;
  const isSvg = mediaType === "image" && previewHref.toLowerCase().endsWith(".svg");
  const summary =
    piece.summary ??
    "Artwork, identity studies, and design work published directly from the repository.";
  const label = "label" in piece ? piece.label : "Artwork";

  return (
    <SurfaceCard className="h-full rounded-[1.5rem] p-5 sm:p-6">
      <Link href={linkHref} scroll={false} className="block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-line bg-stone-100">
          {mediaType === "video" ? (
            <video
              src={previewHref}
              className="h-full w-full object-cover"
              muted
              playsInline
              loop
              preload="metadata"
              autoPlay
            />
          ) : (
            <Image
              src={previewHref}
              alt={piece.title}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
              unoptimized={isSvg}
            />
          )}
        </div>
      </Link>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">{label}</p>
          <h2 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-ink">
            {piece.title}
          </h2>
        </div>
        {piece.displayDate ? (
          <span className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {piece.displayDate}
          </span>
        ) : null}
      </div>
      <p className="mt-4 text-sm leading-6 text-muted">{summary}</p>
      <div className="mt-5 flex flex-wrap gap-4 text-sm">
        <Link
          href={linkHref}
          scroll={false}
          className="font-medium text-ink underline decoration-line underline-offset-4"
        >
          View {mediaType === "video" ? "video" : "artwork"}
        </Link>
      </div>
    </SurfaceCard>
  );
}
