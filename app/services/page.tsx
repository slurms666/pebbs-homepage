import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { SurfaceCard } from "@/components/surface-card";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Websites, software, automation, and digital systems from Pebbs.app."
};

export default function ServicesPage() {
  const primaryServices = services.filter((service) => service.priority === "Primary");
  const supportServices = services.filter((service) => service.priority === "Support");

  return (
    <section className="page-section">
      <div className="section-shell">
        <PageIntro
          eyebrow="Services"
          title="Websites, software and digital systems for growing businesses"
          description="Pebbs.app focuses first on the work that changes how a business operates: better websites, better software, and better systems. Support services sit around that where they make sense."
        />

        <div className="mt-10">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
            Core services
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            {primaryServices.map((service) => (
              <SurfaceCard key={service.title} className="h-full rounded-[1.5rem] p-6 sm:p-7">
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted">{service.description}</p>
              </SurfaceCard>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
            Supporting services
          </p>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {supportServices.map((service) => (
              <SurfaceCard key={service.title} className="h-full rounded-[1.5rem] bg-panel p-6 sm:p-7">
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted">{service.description}</p>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
