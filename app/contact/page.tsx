import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { SurfaceCard } from "@/components/surface-card";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Pebbs.app to discuss websites, software, and automation."
};

const contactAreas = [
  "New business websites or website rebuilds",
  "Internal software or customer systems",
  "Automation for repetitive admin and follow-up",
  "Booking, appointment, and CRM workflows"
];

export default function ContactPage() {
  return (
    <section className="page-section">
      <div className="section-shell">
        <PageIntro
          eyebrow="Contact"
          title="Discuss a project"
          description="Pebbs.app works with businesses that need a better website, clearer systems, or less manual admin. If that is the problem, get in touch."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <SurfaceCard className="rounded-[1.75rem] p-7 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
              Enquiries
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-ink">
              Start with a short email.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
              A useful first message is usually enough to begin: what your business does,
              what is not working, and what you want to improve.
            </p>
            <div className="mt-8">
              <a
                href={`mailto:${site.email}`}
                className="rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition hover:bg-black"
              >
                {site.email}
              </a>
            </div>
          </SurfaceCard>

          <SurfaceCard className="rounded-[1.75rem] p-7 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
              Typical work
            </p>
            <div className="mt-5 space-y-4 text-sm leading-6 text-muted">
              {contactAreas.map((area) => (
                <div
                  key={area}
                  className="border-b border-line/80 pb-4 last:border-b-0 last:pb-0"
                >
                  {area}
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm leading-6 text-muted">
              Based in {site.location}. Led by {site.lead}.
            </p>
          </SurfaceCard>
        </div>
      </div>
    </section>
  );
}
