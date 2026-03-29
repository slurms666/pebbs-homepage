import Image from "next/image";
import type { DesignHighlight, DesignPiece } from "@/lib/design";
import { SurfaceCard } from "@/components/surface-card";

type DesignCardProps = {
  piece: DesignPiece | DesignHighlight;
};

export function DesignCard({ piece }: DesignCardProps) {
  const imageHref = "imageHref" in piece ? piece.imageHref : piece.href;
  const isSvg = imageHref.toLowerCase().endsWith(".svg");
  const summary =
    piece.summary ??
    "Artwork, identity studies, and design work published directly from the repository.";
  const label = "label" in piece ? piece.label : "Artwork";

  return (
    <SurfaceCard className="h-full rounded-[1.1rem] p-5 sm:p-6">
      <a href={piece.href} target="_blank" rel="noreferrer" className="block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[0.95rem] border border-line bg-stone-100">
          <Image
            src={imageHref}
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
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">{label}</p>
          <h2 className="mt-3 font-display text-2xl leading-[1.02] tracking-[-0.03em] text-ink">
            {piece.title}
          </h2>
        </div>
        {piece.displayDate ? (
          <span className="rounded-[0.75rem] border border-line bg-white/75 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {piece.displayDate}
          </span>
        ) : null}
      </div>
      <p className="mt-4 text-sm leading-7 text-muted">{summary}</p>
      <div className="mt-5 flex flex-wrap gap-4 font-mono text-[11px] uppercase tracking-[0.18em]">
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
