import type { ResearchPaper } from "@/lib/papers";
import { SurfaceCard } from "@/components/surface-card";

type PaperCardProps = {
  paper: ResearchPaper;
};

export function PaperCard({ paper }: PaperCardProps) {
  return (
    <SurfaceCard className="h-full rounded-[1.5rem] p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
            Research
          </p>
          <h2 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-ink sm:text-2xl">
            {paper.title}
          </h2>
        </div>
        {paper.displayDate ? (
          <span className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {paper.displayDate}
          </span>
        ) : null}
      </div>

      <p className="mt-5 font-mono text-xs text-muted">{paper.filename}</p>
      <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
        {paper.summary ??
          "Direct PDF access for notes, studies, and technical working papers published by Pebbs.app."}
      </p>

      <div className="mt-7 flex flex-wrap gap-4 text-sm">
        <a
          href={paper.href}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-ink underline decoration-line underline-offset-4"
        >
          Open PDF
        </a>
        <a
          href={paper.href}
          download
          className="font-medium text-muted underline decoration-line underline-offset-4"
        >
          Download
        </a>
      </div>
    </SurfaceCard>
  );
}
