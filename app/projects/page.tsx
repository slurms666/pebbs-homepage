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
          title="Selected projects and active development"
          description="A mix of live Pebbs projects and representative delivery work that shows the kind of practical digital systems Pebbs.app builds."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <SurfaceCard key={project.title} className="h-full rounded-[1.75rem] p-6 sm:p-7">
              <div className="flex h-full flex-col">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                    {project.status}
                  </p>
                  <h2 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-ink">
                    {project.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-muted">{project.description}</p>
                </div>

                <div className="mt-6 border-t border-line/80 pt-5">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                    {project.sector}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-ink">{project.outcome}</p>
                  {project.link ? (
                    <div className="mt-5">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-ink underline decoration-line underline-offset-4"
                      >
                        {project.linkLabel ?? "Visit project"}
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            </SurfaceCard>
          ))}

          <SurfaceCard className="rounded-[1.75rem] bg-panel p-6 sm:p-7 md:col-span-2 xl:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
              More to come
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
              Pebbs.app is always working on new projects. Check back as more work is
              published over time.
            </p>
          </SurfaceCard>
        </div>
      </div>
    </section>
  );
}
