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
    <header className="sticky top-0 z-20 border-b border-line/80 bg-white/85 backdrop-blur">
      <div className="section-shell flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <Link href="/" className="flex w-fit items-center">
          <Image
            src="/pebbs-logo.png"
            alt={site.name}
            width={210}
            height={68}
            priority
            className="h-10 w-auto sm:h-11"
          />
        </Link>
        <nav className="flex flex-wrap items-center gap-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  isActive
                    ? "bg-ink text-white"
                    : "text-muted hover:bg-stone-100 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={`mailto:${site.email}`}
            className="rounded-full border border-ink px-4 py-2 text-sm font-medium text-ink transition hover:bg-ink hover:text-white"
          >
            Discuss a Project
          </a>
        </nav>
      </div>
    </header>
  );
}
