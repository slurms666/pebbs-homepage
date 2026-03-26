import type { Metadata } from "next";
import { DesignCard } from "@/components/design-card";
import { PageIntro } from "@/components/page-intro";
import { SurfaceCard } from "@/components/surface-card";
import { getDesignPieces } from "@/lib/design";

export const metadata: Metadata = {
  title: "Design",
  description: "Design work, artwork, and visual studies from Pebbs.app."
};

export const dynamic = "force-static";

export default async function DesignPage() {
  const pieces = await getDesignPieces();

  return (
    <section className="page-section">
      <div className="section-shell">
        <PageIntro
          eyebrow="Design"
          title="Artwork, branding, and visual design work"
          description="Pebbs.app can also publish design work directly from the repository. Add image files to the design folder and they will appear here automatically on the next build."
        />

        {pieces.length > 0 ? (
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {pieces.map((piece) => (
              <DesignCard key={piece.slug} piece={piece} />
            ))}
          </div>
        ) : (
          <SurfaceCard className="mt-10 rounded-[1.5rem] border-dashed p-8">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
              No design work yet
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
              Add image files to
              <span className="mx-1 font-mono text-ink">/public/design</span>
              and redeploy. Optional titles, dates, and summaries can be added in
              <span className="mx-1 font-mono text-ink">data/design-metadata.ts</span>.
            </p>
          </SurfaceCard>
        )}
      </div>
    </section>
  );
}
