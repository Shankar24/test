"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/training", label: "Training" },
  { href: "/consultancy", label: "Consultancy" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function linkCls(href: string, base: string, active: string, inactive: string) {
    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
    return `${base} ${isActive ? active : inactive}`;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-cares-navy/10 bg-white/95 backdrop-blur">
      <div className="bg-cares-navy text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-sm">
          <a href={`tel:${site.phoneHref}`} className="focus-ring rounded hover:text-cares-gold">
            For appointments: {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="focus-ring hidden rounded hover:text-cares-gold sm:block"
          >
            {site.email}
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="focus-ring group rounded">
          <span className="font-display text-2xl font-bold text-cares-navy">
            CARES
          </span>
          <p className="hidden text-xs text-cares-slate sm:block">{site.fullName}</p>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={linkCls(
                l.href,
                "focus-ring rounded-full px-3 py-1.5 text-sm font-medium transition",
                "bg-cares-cream text-cares-navy",
                "text-cares-slate hover:text-cares-navy"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/book"
            className="focus-ring rounded-full bg-cares-teal px-5 py-2 text-sm font-semibold text-white transition hover:bg-cares-blue"
          >
            Book &amp; Pay
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="focus-ring rounded-lg p-2 text-cares-navy md:hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="border-t border-gray-100 bg-white px-4 pb-4 pt-2 md:hidden"
        >
          <ul className="space-y-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={linkCls(
                    l.href,
                    "focus-ring block rounded-lg px-3 py-2.5 text-sm font-medium",
                    "bg-cares-cream text-cares-teal",
                    "text-cares-slate hover:bg-cares-cream"
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/book"
                className="focus-ring block rounded-lg bg-cares-teal px-3 py-2.5 text-center text-sm font-semibold text-white"
              >
                Book &amp; Pay
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
