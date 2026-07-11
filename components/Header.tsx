"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/training", label: "Training" },
  { href: "/consultancy", label: "Consultancy" },
  { href: "/research", label: "Research" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function linkCls(href: string, base: string, active: string, inactive: string) {
    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
    return `${base} ${isActive ? active : inactive}`;
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrolled
          ? "border-b border-cares-navy/10 bg-white/90 shadow-sm backdrop-blur-xl"
          : "border-b border-transparent bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="bg-cares-navy text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs sm:text-sm">
          <a
            href={`tel:${site.phoneHref}`}
            className="focus-ring rounded hover:text-cares-gold"
          >
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

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5">
        <Link href="/" className="focus-ring group rounded">
          <span className="font-display text-2xl font-semibold tracking-tight text-cares-navy sm:text-[1.7rem]">
            CARES
          </span>
          <p className="hidden text-[11px] leading-tight text-cares-slate lg:block">
            {site.fullName}
          </p>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 xl:flex"
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={linkCls(
                l.href,
                "focus-ring rounded-full px-3 py-1.5 text-sm font-medium transition",
                "bg-cares-soft text-cares-navy",
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
            className="focus-ring hidden rounded-full bg-cares-navy px-5 py-2 text-sm font-semibold text-white transition hover:bg-cares-teal sm:inline-flex"
          >
            Book Now
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="focus-ring rounded-lg p-2 text-cares-navy xl:hidden"
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
          className="border-t border-cares-navy/5 bg-white px-4 pb-4 pt-2 xl:hidden"
        >
          <ul className="space-y-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={linkCls(
                    l.href,
                    "focus-ring block rounded-lg px-3 py-2.5 text-sm font-medium",
                    "bg-cares-soft text-cares-navy",
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
                className="focus-ring mt-1 block rounded-lg bg-cares-navy px-3 py-2.5 text-center text-sm font-semibold text-white"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
