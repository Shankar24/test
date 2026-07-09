import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Consultancy",
  description:
    "End-to-end research support — questionnaire design, statistical analysis, publication-ready reports, and interactive dashboards.",
};

export default function ConsultancyPage() {
  const consultancyServices = services.filter((s) => s.id !== "training-workshop");

  return (
    <>
      <PageHero title="Consultancy">
        <p>
          CARES provides end-to-end research support — from questionnaire design
          through statistical analysis to publication-ready reports and
          dashboards.
        </p>
        <p className="mt-3 font-medium text-cares-gold">
          ★ 4.76 rated by 21 customers
        </p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center font-display text-3xl font-bold text-cares-navy">
          Our Consultancy Services
        </h2>
        <div className="mt-10 space-y-4">
          {consultancyServices.map((s) => (
            <div
              key={s.id}
              className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-display text-lg font-bold text-cares-navy">
                  {s.name}
                </h3>
                <p className="mt-1 text-sm text-cares-slate">{s.description}</p>
                <p className="mt-1 text-xs text-cares-slate">⏱ {s.turnaround}</p>
              </div>
              <div className="flex shrink-0 items-center gap-4">
                <Link
                  href={`/book/?service=${s.id}#enquiry`}
                  className="focus-ring rounded-lg bg-cares-teal px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cares-blue"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/book">View All Services</Button>
        </div>
      </section>
    </>
  );
}
