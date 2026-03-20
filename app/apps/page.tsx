import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { SurfaceCard } from "@/components/surface-card";
import { apps } from "@/data/apps";

export const metadata: Metadata = {
  title: "Apps / Websites",
  description: "Apps and websites listed on Pebbs.app."
};

export default function AppsPage() {
  return (
    <section className="page-section">
      <div className="section-shell">
        <PageIntro
          eyebrow="Apps / Websites"
          title="Published apps, tools, and web experiences"
          description="A clean directory of public-facing software and web products."
        />
        <div className="mt-10 grid gap-5">
          {apps.map((app) => (
            <SurfaceCard key={app.title} className="rounded-[1.5rem] p-6 sm:p-7">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink">{app.title}</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">{app.description}</p>
              <div className="mt-6">
                <a
                  href={app.link}
                  className="text-sm font-medium text-ink underline decoration-line underline-offset-4"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open website
                </a>
              </div>
            </SurfaceCard>
          ))}
        </div>
      </div>
    </section>
  );
}
