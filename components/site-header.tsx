"use client";

import { useEffect, useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-20 border-b border-line/80 bg-white/85 backdrop-blur">
      <div className="section-shell py-4">
        <div className="flex items-center justify-between gap-4">
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

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-site-menu"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex items-center rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition hover:bg-stone-100 md:hidden"
          >
            Menu
          </button>

          <nav className="hidden items-center gap-2 md:flex">
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

        {isMenuOpen ? (
          <nav
            id="mobile-site-menu"
            className="mt-4 grid gap-2 rounded-[1.5rem] border border-line bg-white p-3 md:hidden"
          >
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3 text-sm transition ${
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
              className="rounded-2xl border border-ink px-4 py-3 text-sm font-medium text-ink transition hover:bg-ink hover:text-white"
            >
              Discuss a Project
            </a>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
