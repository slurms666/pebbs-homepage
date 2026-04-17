import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { ProjectShareLinks } from "@/components/project-share-links";
import { SurfaceCard } from "@/components/surface-card";
import { projects } from "@/data/projects";
import {
  createProjectSlug,
  getAvailableSharePlatforms,
  getProjectShareImageUrl,
  getProjectShareUrl
} from "@/lib/project-sharing";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected project examples from Pebbs.app."
};

export const dynamic = "force-dynamic";

function shuffleProjects() {
  const items = [...projects];

  for (let index = items.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [items[index], items[randomIndex]] = [items[randomIndex], items[index]];
  }

  return items;
}

export default async function ProjectsPage() {
  const shuffledProjects = shuffleProjects();
  const sharePlatforms = await getAvailableSharePlatforms();

  return (
    <section className="page-section">
      <div className="section-shell">
        <PageIntro
          eyebrow="Projects"
          title="Selected projects and active development"
          description="A mix of live Pebbs projects and representative delivery work that shows the kind of practical digital systems Pebbs.app builds."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {shuffledProjects.map((project) => {
            const slug = createProjectSlug(project.title);
            const shareUrl = getProjectShareUrl(project, slug);
            const shareImageUrl = getProjectShareImageUrl(project);

            return (
              <SurfaceCard key={project.title} className="h-full rounded-[1.75rem] p-6 sm:p-7">
                <div id={slug} className="flex h-full scroll-mt-28 flex-col">
                  {project.imageSrc ? (
                    <div className="mb-6">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.15rem] border border-line bg-panel">
                        <Image
                          src={project.imageSrc}
                          alt={project.imageAlt ?? project.title}
                          fill
                          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 40vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ) : null}

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
                    {project.downloadHref ? (
                      <div className="mt-3">
                        <a
                          href={project.downloadHref}
                          download
                          className="text-sm font-medium text-ink underline decoration-line underline-offset-4"
                        >
                          {project.downloadLabel ?? "Download"}
                        </a>
                      </div>
                    ) : null}
                    {project.helperHref ? (
                      <div className="mt-3">
                        <a
                          href={project.helperHref}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-medium text-ink underline decoration-line underline-offset-4"
                        >
                          {project.helperLabel ?? "More info"}
                        </a>
                        {project.helperText ? (
                          <p className="mt-2 text-sm leading-6 text-muted">{project.helperText}</p>
                        ) : null}
                      </div>
                    ) : null}
                    {project.researchHref ? (
                      <div className="mt-3">
                        <a
                          href={project.researchHref}
                          className="text-sm font-medium text-ink underline decoration-line underline-offset-4"
                        >
                          {project.researchLabel ?? "View research"}
                        </a>
                        {project.researchText ? (
                          <p className="mt-2 text-sm leading-6 text-muted">{project.researchText}</p>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                  <ProjectShareLinks
                    imageUrl={shareImageUrl}
                    platforms={sharePlatforms}
                    title={project.title}
                    url={shareUrl}
                  />
                </div>
              </SurfaceCard>
            );
          })}

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
