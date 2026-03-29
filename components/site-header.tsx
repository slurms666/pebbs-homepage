"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/design", label: "Design" },
  { href: "/research", label: "Research" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-line/90 bg-[rgba(250,250,245,0.9)] backdrop-blur-md">
      <div className="section-shell flex flex-col gap-4 py-4 xl:flex-row xl:items-center xl:justify-between xl:gap-8">
        <Link href="/" className="flex w-fit items-center">
          <Image
            src="/pebbs-logo.png"
            alt={site.name}
            width={210}
            height={68}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>
        <nav className="flex flex-wrap items-center gap-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-[0.8rem] border px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] transition ${
                  isActive
                    ? "border-ink bg-ink text-panel"
                    : "border-white/0 bg-white/75 text-muted hover:border-line hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={`mailto:${site.email}`}
            className="rounded-[0.8rem] border border-ink bg-white px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition hover:bg-ink hover:text-panel"
          >
            Discuss a Project
          </a>
        </nav>
      </div>
    </header>
  );
}
