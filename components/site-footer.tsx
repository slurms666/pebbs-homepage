import Link from "next/link";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-line/90 bg-[rgba(250,250,245,0.88)]">
      <div className="section-shell flex flex-col gap-6 py-8 text-sm text-muted xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Pebbs.app
          </p>
          <p className="text-ink">{`Copyright ${new Date().getFullYear()} ${site.name}`}</p>
          <p className="mt-1">
            {site.location}-based digital development for modern businesses.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em]">
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
          <Link href="/faq" className="hover:text-ink">
            FAQ
          </Link>
          <a href={`mailto:${site.email}`} className="hover:text-ink">
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
