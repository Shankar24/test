import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { formatINR, services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book & Pay",
  description:
    "Select a CARES service, submit your project details, and pay securely online via Razorpay.",
};

export default function BookPage() {
  return (
    <>
      <PageHero title="Book & Pay">
        <p>
          Select a service, submit your project details, and pay securely via
          Razorpay. Our team will confirm and begin work within 1 business day.
        </p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.id}
              className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <span className="self-start rounded-full bg-cares-cream px-3 py-1 text-xs font-semibold text-cares-teal">
                {s.category}
              </span>
              <h2 className="mt-4 font-display text-lg font-bold text-cares-navy">
                {s.name}
              </h2>
              <p className="mt-2 text-sm text-cares-slate">{s.description}</p>
              <ul className="mt-4 flex-1 space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-cares-slate">
                    <span className="text-cares-teal" aria-hidden="true">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-end justify-between border-t border-gray-100 pt-4">
                <div>
                  <p className="font-display text-2xl font-bold text-cares-teal">
                    {formatINR(s.price)}
                  </p>
                  <p className="text-xs text-cares-slate">{s.turnaround}</p>
                </div>
                <Link
                  href={`/book/${s.id}`}
                  className="focus-ring rounded-lg bg-cares-teal px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cares-blue"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-cares-slate">
          Need a custom package or institutional quote? Call{" "}
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
