import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { SurfaceCard } from "@/components/surface-card";
import { site } from "@/data/site";
import { faqSections } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about websites, software, automation, and digital systems from Pebbs.app."
};

export default function FaqPage() {
  return (
    <section className="page-section">
      <div className="section-shell">
        <PageIntro
          eyebrow="FAQ"
          title="Questions businesses ask before they improve their website or systems"
          description={`${site.name} works with businesses in Liverpool, across the UK, and remotely further afield. This FAQ explains the services we offer, who they suit, and how they can help businesses run more effectively.`}
        />

        <div className="mt-10 space-y-10">
          {faqSections.map((section) => (
            <div key={section.title}>
              <div className="max-w-3xl">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                  {section.eyebrow}
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-ink">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-muted">{section.description}</p>
              </div>

              <div className="mt-6 grid gap-5">
                {section.items.map((item) => (
                  <SurfaceCard key={item.question} className="rounded-[1.75rem] p-6 sm:p-7">
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-ink">
                      {item.question}
                    </h3>
                    <p className="mt-4 max-w-4xl text-sm leading-7 text-muted sm:text-base">
                      {item.answer}
                    </p>
                  </SurfaceCard>
                ))}
              </div>
            </div>
          ))}
        </div>

        <SurfaceCard className="mt-12 rounded-[1.75rem] bg-panel p-6 sm:p-7">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
            Contact
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-ink">
            Need an answer that is specific to your business?
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
            If you want to talk through websites, automation, software, or digital
            systems for your business, contact Pebbs.app directly at {site.email}.
          </p>
        </SurfaceCard>
      </div>
    </section>
  );
}
