import Link from "next/link";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line/80 bg-white/70">
      <div className="section-shell flex flex-col gap-6 py-8 text-sm text-muted lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-ink">{`Copyright ${new Date().getFullYear()} ${site.name}`}</p>
          <p className="mt-1">
            {site.location}-based digital development for modern businesses.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
          <Link href="/services" className="hover:text-ink">
            Services
          </Link>
          <Link href="/projects" className="hover:text-ink">
            Projects
          </Link>
          <Link href="/design" className="hover:text-ink">
            Design
          </Link>
          <Link href="/research" className="hover:text-ink">
            Research
          </Link>
          <a href={`mailto:${site.email}`} className="hover:text-ink">
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
