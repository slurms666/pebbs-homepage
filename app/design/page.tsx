import type { Metadata } from "next";
import { DesignCard } from "@/components/design-card";
import { DesignGroupCard } from "@/components/design-group-card";
import { PageIntro } from "@/components/page-intro";
import { SurfaceCard } from "@/components/surface-card";
import { getDesignGallery } from "@/lib/design";

export const metadata: Metadata = {
  title: "Design",
  description: "Design work, artwork, and visual studies from Pebbs.app."
};

export const dynamic = "force-static";

export default async function DesignPage() {
  const gallery = await getDesignGallery();
  const hasContent = gallery.groups.length > 0 || gallery.standalonePieces.length > 0;

  return (
    <section className="page-section">
      <div className="section-shell">
        <PageIntro
          eyebrow="Design"
          title="Artwork, branding, and visual design work"
          description="Pebbs.app can publish design work directly from the repository. Add image files to the design folder, and use the optional group file when several pieces belong to the same company or project."
        />

        {hasContent ? (
          <div className="mt-10 space-y-10">
            {gallery.groups.length > 0 ? (
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                  Grouped work
                </p>
                <div className="mt-5 space-y-5">
                  {gallery.groups.map((group) => (
                    <DesignGroupCard key={group.slug} group={group} />
                  ))}
                </div>
              </div>
            ) : null}

            {gallery.standalonePieces.length > 0 ? (
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                  Individual pieces
                </p>
                <div className="mt-5 grid gap-5 lg:grid-cols-3">
                  {gallery.standalonePieces.map((piece) => (
                    <DesignCard key={piece.slug} piece={piece} />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ) : (
          <SurfaceCard className="mt-10 rounded-[1.5rem] border-dashed p-8">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
              No design work yet
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
              Add image files to
              <span className="mx-1 font-mono text-ink">/public/design</span>
              and redeploy. If several files belong together, group them in
              <span className="mx-1 font-mono text-ink">data/design-groups.ts</span>.
              Optional titles, dates, and single-image summaries can still be added in
              <span className="mx-1 font-mono text-ink">data/design-metadata.ts</span>.
            </p>
          </SurfaceCard>
        )}
      </div>
    </section>
  );
}
