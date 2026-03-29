import Image from "next/image";
import type { DesignGroup } from "@/lib/design";
import { SurfaceCard } from "@/components/surface-card";

type DesignGroupCardProps = {
  group: DesignGroup;
};

export function DesignGroupCard({ group }: DesignGroupCardProps) {
  return (
    <SurfaceCard className="rounded-[1.15rem] p-6 sm:p-7">
      <div id={group.slug} className="scroll-mt-28">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">Design group</p>
            <h2 className="mt-3 font-display text-3xl leading-[1.02] tracking-[-0.03em] text-ink">
              {group.title}
            </h2>
            {group.client ? (
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{group.client}</p>
            ) : null}
          </div>
          {group.displayDate ? (
            <span className="w-fit rounded-[0.75rem] border border-line bg-white/75 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              {group.displayDate}
            </span>
          ) : null}
        </div>

        <p className="mt-5 max-w-3xl text-sm leading-7 text-muted">{group.description}</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {group.images.map((image) => {
            const isSvg = image.href.toLowerCase().endsWith(".svg");

            return (
              <a
                key={image.filename}
                href={image.href}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[0.95rem] border border-line bg-stone-100">
                  <Image
                    src={image.href}
                    alt={image.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover"
                    unoptimized={isSvg}
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </SurfaceCard>
  );
}
