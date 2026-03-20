import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { SurfaceCard } from "@/components/surface-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Project portfolio for Pebbs.app."
};

export default function ProjectsPage() {
  return (
    <section className="page-section">
      <div className="section-shell">
        <PageIntro
          eyebrow="Projects"
          title="Current and selected project work"
          description="A compact list of projects with their status, purpose, and destination."
        />
        <div className="mt-10 grid gap-5">
          {projects.map((project) => (
            <SurfaceCard key={project.title} className="rounded-[1.5rem] p-6 sm:p-7">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-3xl">
                  <h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink">
                    {project.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
                </div>
                <span className="w-fit rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {project.status}
                </span>
              </div>
              <div className="mt-6">
                <a
                  href={project.link}
                  className="text-sm font-medium text-ink underline decoration-line underline-offset-4"
                  target={project.link.startsWith("http") ? "_blank" : undefined}
                  rel={project.link.startsWith("http") ? "noreferrer" : undefined}
                >
                  Visit link
                </a>
              </div>
            </SurfaceCard>
          ))}
        </div>
      </div>
    </section>
  );
}
