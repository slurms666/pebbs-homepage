import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { PaperCard } from "@/components/paper-card";
import { getResearchPapers } from "@/lib/papers";

export const metadata: Metadata = {
  title: "Research Papers",
  description: "Research papers discovered automatically from /public/papers."
};

export const dynamic = "force-static";

export default async function ResearchPage() {
  const papers = await getResearchPapers();

  return (
    <section className="page-section">
      <div className="section-shell">
        <PageIntro
          eyebrow="Research Papers"
          title="Automatically indexed PDFs"
          description="The page scans /public/papers at build time, infers titles and dates from filenames, and shows metadata when available."
        />

        {papers.length > 0 ? (
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {papers.map((paper) => (
              <PaperCard key={paper.slug} paper={paper} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-[1.5rem] border border-dashed border-line bg-white p-8">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
              No papers yet
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
              Add one or more PDF files to
              <span className="mx-1 font-mono text-ink">/public/papers</span>
              and redeploy. Files named with a leading date such as
              <span className="mx-1 font-mono text-ink">
                2026-03-19-agentic-systems-for-small-teams.pdf
              </span>
              will be sorted newest first and shown with a formatted date.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
