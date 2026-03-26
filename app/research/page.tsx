import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { PaperCard } from "@/components/paper-card";
import { SurfaceCard } from "@/components/surface-card";
import { getResearchPapers } from "@/lib/papers";

export const metadata: Metadata = {
  title: "Research",
  description: "Research papers and technical notes from Pebbs.app."
};

export const dynamic = "force-static";

export default async function ResearchPage() {
  const papers = await getResearchPapers();

  return (
    <section className="page-section">
      <div className="section-shell">
        <PageIntro
          eyebrow="Research"
          title="Research papers, studies, and technical notes"
          description="Pebbs.app publishes PDFs directly from the repository. Add a paper to the papers folder and it will appear here automatically on the next build, with optional title and summary details managed in a simple research data file."
        />

        {papers.length > 0 ? (
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {papers.map((paper) => (
              <PaperCard key={paper.slug} paper={paper} />
            ))}
          </div>
        ) : (
          <SurfaceCard className="mt-10 rounded-[1.5rem] border-dashed p-8">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
              No papers yet
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
              Add one or more PDF files to
              <span className="mx-1 font-mono text-ink">/public/papers</span>
              and redeploy. Optional titles and summaries can be added in
              <span className="mx-1 font-mono text-ink">data/research-papers.ts</span>.
              Files named with a leading date such as
              <span className="mx-1 font-mono text-ink">
                2026-03-19-business-automation-for-service-teams.pdf
              </span>
              will be sorted newest first and shown with a formatted date.
            </p>
          </SurfaceCard>
        )}
      </div>
    </section>
  );
}
