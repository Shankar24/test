import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import EnquiryForm from "@/components/EnquiryForm";
import PageHero from "@/components/PageHero";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Now",
  description:
    "Tell us about your research or training requirement and the CARES team will contact you within 1 business day. No payment required.",
};

export default function BookPage() {
  return (
    <>
      <PageHero title="Book Now">
        <p>
          Tell us what you need — our team will get in touch within 1 business
          day to discuss scope, timelines, and next steps.
        </p>
      </PageHero>

      <section id="enquiry" className="mx-auto max-w-3xl px-4 py-16">
        <Suspense fallback={null}>
          <EnquiryForm />
        </Suspense>
      </section>

      <section
        aria-labelledby="services-list-heading"
        className="mx-auto max-w-6xl px-4 pb-16"
      >
        <h2
          id="services-list-heading"
          className="text-center font-display text-3xl font-bold text-cares-navy"
        >
          What you can book
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.id}
              className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="self-start rounded-full bg-cares-cream px-3 py-1 text-xs font-semibold text-cares-teal">
                {s.category}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-cares-navy">
                {s.name}
              </h3>
              <p className="mt-2 text-sm text-cares-slate">{s.description}</p>
              <ul className="mt-4 flex-1 space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-cares-slate">
                    <span className="text-cares-gold" aria-hidden="true">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={`/book/?service=${s.id}#enquiry`}
                className="focus-ring mt-6 rounded-lg bg-cares-teal px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-cares-blue"
              >
                Enquire about this
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-cares-slate">
          Prefer to talk? Call{" "}
          <a
            href={`tel:${site.phoneHref}`}
            className="focus-ring rounded font-semibold text-cares-teal hover:underline"
          >
            {site.phone}
          </a>{" "}
          or email{" "}
          <a
            href={`mailto:${site.email}`}
            className="focus-ring rounded font-semibold text-cares-teal hover:underline"
          >
            {site.email}
          </a>
        </p>
      </section>
    </>
  );
}
