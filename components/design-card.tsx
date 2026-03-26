import Image from "next/image";
import type { DesignPiece } from "@/lib/design";
import { SurfaceCard } from "@/components/surface-card";

type DesignCardProps = {
  piece: DesignPiece;
};

export function DesignCard({ piece }: DesignCardProps) {
  const isSvg = piece.href.toLowerCase().endsWith(".svg");

  return (
    <SurfaceCard className="h-full rounded-[1.5rem] p-5 sm:p-6">
      <a href={piece.href} target="_blank" rel="noreferrer" className="block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-line bg-stone-100">
          <Image
            src={piece.href}
            alt={piece.title}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
            unoptimized={isSvg}
          />
        </div>
      </a>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
            Design
          </p>
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
      <p className="mt-4 text-sm leading-6 text-muted">
        {piece.summary ??
          "Artwork, identity studies, and design work published directly from the repository."}
      </p>
      <div className="mt-5 flex flex-wrap gap-4 text-sm">
        <a
          href={piece.href}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-ink underline decoration-line underline-offset-4"
        >
          View artwork
        </a>
      </div>
    </SurfaceCard>
  );
}
