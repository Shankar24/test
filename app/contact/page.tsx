import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with CARES India for training, consultancy, and research services. Call, email, or visit our Bangalore office.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us">
        <p>
          Questions about a workshop, a custom package, or an institutional quote?
          We respond within 1 business day.
        </p>
      </PageHero>

      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          <a
            href={`tel:${site.phoneHref}`}
            className="focus-ring rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
          >
            <span className="text-2xl" aria-hidden="true">
              📞
            </span>
            <h2 className="mt-3 font-semibold text-cares-navy">Call Us</h2>
            <p className="mt-1 text-sm text-cares-teal">{site.phone}</p>
          </a>
          <a
            href={`mailto:${site.email}`}
            className="focus-ring rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
          >
            <span className="text-2xl" aria-hidden="true">
              ✉️
            </span>
            <h2 className="mt-3 font-semibold text-cares-navy">Email Us</h2>
            <p className="mt-1 text-sm text-cares-teal">{site.email}</p>
          </a>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
            <span className="text-2xl" aria-hidden="true">
              📍
            </span>
            <h2 className="mt-3 font-semibold text-cares-navy">Visit Us</h2>
            <address className="mt-1 text-sm not-italic text-cares-slate">
              {site.address}
            </address>
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-cares-cream p-8 text-center">
          <h2 className="font-display text-2xl font-bold text-cares-navy">
            Ready to book?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-cares-slate">
            Browse our services and pay securely online — we&apos;ll confirm your
            booking within 1 business day.
          </p>
          <div className="mt-6">
            <Button href="/book">View Services &amp; Book</Button>
          </div>
        </div>
      </section>
    </>
  );
}
