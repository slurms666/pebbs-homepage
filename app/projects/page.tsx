import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { SurfaceCard } from "@/components/surface-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected project examples from Pebbs.app."
};

export default function ProjectsPage() {
  return (
    <section className="page-section">
      <div className="section-shell">
        <PageIntro
          eyebrow="Projects"
          title="Selected work and representative delivery"
          description="A small sample of the kind of project work Pebbs.app is built to deliver for service-led businesses and growing SMEs."
        />
        <div className="mt-10 grid gap-5">
          {projects.map((project) => (
            <SurfaceCard key={project.title} className="rounded-[1.75rem] p-6 sm:p-7">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                      {project.status}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                      {project.sector}
                    </span>
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-ink">
                    {project.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-muted">{project.description}</p>
                </div>
                <div className="max-w-sm border-t border-line/80 pt-5 lg:w-full lg:max-w-xs lg:border-t-0 lg:border-l lg:pl-6 lg:pt-0">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                    Outcome
                  </p>
                  <p className="mt-3 text-sm leading-6 text-ink">{project.outcome}</p>
                </div>
              </div>
            </SurfaceCard>
          ))}
        </div>
      </div>
    </section>
  );
}
