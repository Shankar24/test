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
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <h3 className="font-display text-xl font-bold">CARES</h3>
          <p className="mt-2 text-sm text-white/70">{site.fullName}</p>
          <address className="mt-4 text-sm not-italic text-white/80">
            {site.address}
          </address>
          <p className="mt-2 text-sm">
            <a href={`tel:${site.phoneHref}`} className="focus-ring rounded hover:text-cares-gold">
              {site.phone}
            </a>
          </p>
          <p className="text-sm">
            <a href={`mailto:${site.email}`} className="focus-ring rounded hover:text-cares-gold">
              {site.email}
            </a>
          </p>
        </div>

        <nav aria-label="Quick links">
          <h4 className="font-semibold text-cares-gold">Quick Links</h4>
          <ul className="mt-3 space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="focus-ring rounded text-sm text-white/80 hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h4 className="font-semibold text-cares-gold">Our Services</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>Questionnaire Design</li>
            <li>Data Analysis &amp; Reporting</li>
            <li>Research Dashboards</li>
            <li>SPSS &amp; R Studio Training</li>
          </ul>
        </div>

        <nav aria-label="Legal and support">
          <h4 className="font-semibold text-cares-gold">Support</h4>
          <ul className="mt-3 space-y-2">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="focus-ring rounded text-sm text-white/80 hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
