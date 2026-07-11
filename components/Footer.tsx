import Link from "next/link";
import { site } from "@/lib/site";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/training", label: "Training" },
  { href: "/consultancy", label: "Consultancy" },
  { href: "/research", label: "Research" },
  { href: "/gallery", label: "Gallery" },
  { href: "/book", label: "Book Now" },
];

const legalLinks = [
  { href: "/contact", label: "Contact Us" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer className="bg-cares-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <h3 className="font-display text-2xl font-semibold tracking-tight">CARES</h3>
          <p className="mt-2 text-sm text-white/65">{site.fullName}</p>
          <address className="mt-5 text-sm not-italic leading-relaxed text-white/75">
            {site.address}
          </address>
          <p className="mt-3 text-sm">
            <a
              href={`tel:${site.phoneHref}`}
              className="focus-ring rounded hover:text-cares-gold"
            >
              {site.phone}
            </a>
          </p>
          <p className="text-sm">
            <a
              href={`mailto:${site.email}`}
              className="focus-ring rounded hover:text-cares-gold"
            >
              {site.email}
            </a>
          </p>
        </div>

        <nav aria-label="Quick links">
          <h4 className="text-sm font-semibold tracking-wide text-cares-gold">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="focus-ring rounded text-sm text-white/75 transition hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h4 className="text-sm font-semibold tracking-wide text-cares-gold">
            Our Services
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li>Research Methodology Training</li>
            <li>SPSS, R Studio &amp; SmartPLS</li>
            <li>Data Analysis &amp; PLS-SEM</li>
            <li>Dashboards &amp; Reporting</li>
          </ul>
        </div>

        <nav aria-label="Legal and support">
          <h4 className="text-sm font-semibold tracking-wide text-cares-gold">
            Support
          </h4>
          <ul className="mt-4 space-y-2.5">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="focus-ring rounded text-sm text-white/75 transition hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/45">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
