import Link from "next/link";
import { PaperCard } from "@/components/paper-card";
import { SectionHeading } from "@/components/section-heading";
import { SurfaceCard } from "@/components/surface-card";
import { projects } from "@/data/projects";
import { getResearchPapers } from "@/lib/papers";

export const dynamic = "force-static";

const featuredAreas = [
  {
    href: "/projects",
    eyebrow: "Projects",
    title: "Practical product work",
    description:
      "A concise view of active and shipped projects, with links and status information."
  },
  {
    href: "/services",
    eyebrow: "Services",
    title: "Technical services",
    description:
      "Focused support for product strategy, prototyping, engineering, and research workflows."
  },
  {
    href: "/apps",
    eyebrow: "Apps / Websites",
    title: "Public-facing products",
    description:
      "Applications, websites, and tools published under Pebbs.app and related experiments."
  },
  {
    href: "/research",
    eyebrow: "Research Papers",
    title: "Automatically indexed PDFs",
    description:
      "Research papers are listed automatically from the repository without manual page edits."
  }
];

export default async function HomePage() {
  const papers = await getResearchPapers();
  const latestPapers = papers.slice(0, 3);
  const selectedProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <>
      <section className="section-shell pb-8 pt-10 sm:pb-12 sm:pt-14">
        <div className="hairline overflow-hidden rounded-[2rem] bg-white/85 shadow-card backdrop-blur">
          <div className="grid gap-10 px-6 py-14 sm:px-10 sm:py-16 lg:grid-cols-[1.4fr_0.8fr] lg:px-14">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
                Pebbs.app
              </p>
              <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
                Precise apps, technical tools, services, and research.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                Pebbs.app is a minimal home for software projects, client services,
                product experiments, and research papers. The site is designed to stay
                simple: edit a data file for content, or drop a PDF into a folder to
                publish it on the research page.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition hover:bg-black"
                >
                  View Projects
                </Link>
                <Link
                  href="/research"
                  className="rounded-full border border-line bg-white px-5 py-3 text-sm font-medium text-ink transition hover:bg-stone-50"
                >
                  Browse Research
                </Link>
              </div>
            </div>

            <div className="grid gap-4 self-end sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[1.5rem] border border-line bg-panel p-5">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                  Maintainability
                </p>
                <p className="mt-3 text-sm leading-6 text-ink">
                  No CMS, no database, no admin layer. Content lives in plain TypeScript
                  files and PDFs inside the repository.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-line bg-panel p-5">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                  Deployment
                </p>
                <p className="mt-3 text-sm leading-6 text-ink">
                  Built for Next.js on Vercel with static-friendly server rendering and a
                  structure that stays easy to edit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Overview"
            title="One quiet place for products, services, and research."
            description="Each section is intentionally lightweight, direct, and easy to maintain."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredAreas.map((area) => (
              <SurfaceCard
                key={area.href}
                href={area.href}
                className="h-full min-h-[220px] rounded-[1.5rem] p-6"
              >
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                  {area.eyebrow}
                </p>
                <h2 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-ink">
                  {area.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted">{area.description}</p>
                <span className="mt-8 inline-flex text-sm font-medium text-ink">
                  Open section
                </span>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section border-y border-line/80 bg-white/70">
        <div className="section-shell">
          <div className="flex items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Latest Research"
              title="Recent papers from the repository"
              description="PDF files inside /public/papers are discovered automatically during the build."
            />
            <Link href="/research" className="hidden text-sm font-medium text-ink md:inline-flex">
              View all papers
            </Link>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {latestPapers.length > 0 ? (
              latestPapers.map((paper) => <PaperCard key={paper.slug} paper={paper} />)
            ) : (
              <div className="rounded-[1.5rem] border border-dashed border-line bg-white p-6 text-sm leading-6 text-muted lg:col-span-3">
                No research papers have been added yet. Place PDF files in
                <span className="mx-1 font-mono text-ink">/public/papers</span>
                and they will appear here automatically on the next build or deployment.
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-shell">
          <div className="flex items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Selected Projects"
              title="A few example initiatives"
              description="Projects are defined in a single data file so the list stays straightforward to update."
            />
            <Link href="/projects" className="hidden text-sm font-medium text-ink md:inline-flex">
              View all projects
            </Link>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {selectedProjects.map((project) => (
              <SurfaceCard key={project.title} className="h-full rounded-[1.5rem] p-6">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink">
                    {project.title}
                  </h2>
                  <span className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    {project.status}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted">{project.description}</p>
                <div className="mt-6">
                  <Link
                    href={project.link}
                    className="text-sm font-medium text-ink underline decoration-line underline-offset-4"
                    target={project.link.startsWith("http") ? "_blank" : undefined}
                    rel={project.link.startsWith("http") ? "noreferrer" : undefined}
                  >
                    Explore project
                  </Link>
                </div>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
