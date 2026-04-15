import type { Metadata } from "next";
import { DesignGallery } from "@/components/design-gallery";
import { PageIntro } from "@/components/page-intro";
import { getDesignGallery } from "@/lib/design";

export const metadata: Metadata = {
  title: "Design",
  description: "Design work, artwork, and visual studies from Pebbs.app."
};

export const dynamic = "force-static";

export default async function DesignPage() {
  const gallery = await getDesignGallery();

  return (
    <section className="page-section">
      <div className="section-shell">
        <PageIntro
          eyebrow="Design"
          title="Artwork, branding, and visual design work"
          description="Pebbs.app can publish design work directly from the repository. Add image or video files to the design folder, and use the optional group file when several pieces belong to the same company or project."
        />
        <DesignGallery gallery={gallery} />
      </div>
    </section>
  );
}
