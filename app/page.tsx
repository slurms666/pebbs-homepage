import { DesignCard } from "@/components/design-card";
import Link from "next/link";
import { PaperCard } from "@/components/paper-card";
import { SectionHeading } from "@/components/section-heading";
import { SurfaceCard } from "@/components/surface-card";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { getDesignHighlights } from "@/lib/design";
import { getResearchPapers } from "@/lib/papers";

export const dynamic = "force-static";

const practicalPoints = [
  "Professional websites that win trust quickly",
  "Software that fits the way a business actually works",
  "Automation that reduces admin and follow-up"
];

const businessFacts = [
  `Based in ${site.location}`,
  `Led by ${site.lead}`,
  "Focused on small and medium-sized businesses"
];

export default async function HomePage() {
  const papers = await getResearchPapers();
  const designHighlights = await getDesignHighlights();
  const latestPapers = papers.slice(0, 2);
  const latestDesign = designHighlights.slice(0, 2);
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
  const primaryServices = services.filter((service) => service.priority === "Primary");
  const supportServices = services.filter((service) => service.priority === "Support");

  return (
    <>
      <section className="section-shell pb-12 pt-8 sm:pb-14 sm:pt-10">
        <div className="paper-panel hairline subtle-grid overflow-hidden rounded-[1.3rem] shadow-card">
          <div className="grid gap-10 px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-[minmax(0,1.4fr)_22rem] lg:px-14">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
                Liverpool digital development
              </p>
              <div className="mt-5 h-px w-20 bg-ink/15" />
              <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.92] tracking-[-0.04em] text-ink sm:text-6xl lg:text-[5.2rem]">
                {site.headline}
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                {site.subheadline}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${site.email}`}
                  className="rounded-[0.85rem] bg-ink px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-panel transition hover:bg-black"
                >
                  Discuss a Project
                </a>
                <Link
                  href="/services"
                  className="rounded-[0.85rem] border border-line bg-white/80 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition hover:bg-white"
                >
                  View Services
                </Link>
                <Link
                  href="/research"
                  className="rounded-[0.85rem] border border-line bg-white/80 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition hover:bg-white"
                >
                  Explore Research
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              <SurfaceCard className="rounded-[1.05rem] bg-panel p-6">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                  What we help with
                </p>
                <div className="mt-5 space-y-4">
                  {practicalPoints.map((point) => (
                    <div
                      key={point}
                      className="border-l border-line/80 pl-4 text-sm leading-7 text-ink"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </SurfaceCard>
              <SurfaceCard className="rounded-[1.05rem] p-6">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                  Pebbs.app
                </p>
                <div className="mt-5 space-y-3 text-sm leading-6 text-muted">
                  {businessFacts.map((fact) => (
                    <p key={fact}>{fact}</p>
                  ))}
                </div>
              </SurfaceCard>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Services"
            title="Practical digital work for businesses that need better systems"
            description="Pebbs.app is software-led first. Websites, software, and automation sit at the centre of the work, with support services around them where they are useful."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {primaryServices.map((service) => (
              <SurfaceCard key={service.title} className="h-full rounded-[1.05rem] p-6">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                  {service.priority}
                </p>
                <h2 className="mt-4 font-display text-[2rem] leading-[1.02] tracking-[-0.03em] text-ink">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted">{service.description}</p>
              </SurfaceCard>
            ))}
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {supportServices.map((service) => (
              <SurfaceCard key={service.title} className="h-full rounded-[1.05rem] bg-panel p-6">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                  Support service
                </p>
                <h2 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-ink">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section border-y border-line/70">
        <div className="section-shell">
          <div className="flex items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Selected Work"
              title="The kind of work Pebbs.app delivers"
              description="Examples of the commercial problems the business is set up to solve for service-led companies and growing SMEs."
            />
            <Link href="/projects" className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-ink md:inline-flex">
              View Projects
            </Link>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <SurfaceCard key={project.title} className="h-full rounded-[1.05rem] p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-[0.75rem] border border-line bg-white/75 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    {project.status}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    {project.sector}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-[2rem] leading-[1.02] tracking-[-0.03em] text-ink">
                  {project.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted">{project.description}</p>
                <p className="mt-5 border-t border-line/80 pt-5 text-sm leading-7 text-ink">
                  {project.outcome}
                </p>
                {project.link ? (
                  <div className="mt-5">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink underline decoration-line underline-offset-4"
                    >
                      {project.linkLabel ?? "Visit project"}
                    </a>
                  </div>
                ) : null}
              </SurfaceCard>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-shell">
          <div className="flex items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Design"
              title="Design work published the same way"
              description="Design uses the same low-maintenance approach as Research. Add artwork files to the repository and they appear automatically on the next build."
            />
            <Link href="/design" className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-ink md:inline-flex">
              View Design
            </Link>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {latestDesign.length > 0 ? (
              latestDesign.map((piece) => <DesignCard key={piece.slug} piece={piece} />)
            ) : (
              <SurfaceCard className="rounded-[1.5rem] border-dashed p-6 lg:col-span-2">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                  Design
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
                  No design work has been added yet. Place image files in
                  <span className="mx-1 font-mono text-ink">/public/design</span>
                  and they will be listed automatically on the Design page.
                </p>
              </SurfaceCard>
            )}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-shell">
          <div className="flex items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Research"
              title="Research, notes, and working papers"
              description="Pebbs.app also publishes research and technical notes. The research section is maintained directly from the repository by adding PDF files to the papers folder."
            />
            <Link href="/research" className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-ink md:inline-flex">
              View Research
            </Link>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {latestPapers.length > 0 ? (
              latestPapers.map((paper) => <PaperCard key={paper.slug} paper={paper} />)
            ) : (
              <SurfaceCard className="rounded-[1.5rem] border-dashed p-6 lg:col-span-2">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                  Research
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
                  No papers have been added yet. Place PDF files in
                  <span className="mx-1 font-mono text-ink">/public/papers</span>
                  and they will be listed automatically on the research page.
                </p>
              </SurfaceCard>
            )}
          </div>
        </div>
      </section>

      <section className="page-section border-y border-line/70">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <SectionHeading
            eyebrow="About"
            title="A Liverpool-based development business built around useful digital work"
            description={site.positioning}
          />
          <SurfaceCard className="rounded-[1.05rem] bg-panel p-6">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
              Good fit
            </p>
            <div className="mt-5 space-y-4 text-sm leading-6 text-muted">
              <p>Local companies that need a stronger website and clearer messaging.</p>
              <p>Service businesses that want less admin and faster response times.</p>
              <p>Growing teams that need joined-up systems instead of patchwork tools.</p>
            </div>
          </SurfaceCard>
        </div>
      </section>

      <section className="page-section">
        <div className="section-shell">
          <div className="paper-panel hairline subtle-grid rounded-[1.25rem] px-6 py-10 sm:px-10 sm:py-12">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
              Contact
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[0.98] tracking-[-0.03em] text-ink sm:text-5xl">
              Clear websites, better systems, and less manual work.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
              If your business needs a better website, custom software, booking tools,
              automation, or a cleaner digital setup, Pebbs.app is available for
              project discussions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}`}
                className="rounded-[0.85rem] bg-ink px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-panel transition hover:bg-black"
              >
                Get in Touch
              </a>
              <Link
                href="/contact"
                className="rounded-[0.85rem] border border-line bg-white/80 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition hover:bg-white"
              >
                Contact Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
