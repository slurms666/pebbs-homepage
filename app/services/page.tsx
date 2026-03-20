import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { SurfaceCard } from "@/components/surface-card";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Technical services offered by Pebbs.app."
};

export default function ServicesPage() {
  return (
    <section className="page-section">
      <div className="section-shell">
        <PageIntro
          eyebrow="Services"
          title="Focused technical services"
          description="Simple service descriptions that can be edited in one place without touching page layout code."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <SurfaceCard key={service.title} className="h-full rounded-[1.5rem] p-6 sm:p-7">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                Service
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-ink">
                {service.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">{service.description}</p>
            </SurfaceCard>
          ))}
        </div>
      </div>
    </section>
  );
}
