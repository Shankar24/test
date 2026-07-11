import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import { consultancyServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Consultancy",
  description:
    "End-to-end research consultancy — questionnaire design, data analysis, PLS-SEM, reporting, dashboards, and publication support.",
};

export default function ConsultancyPage() {
  return (
    <>
      <PageHero title="Consultancy">
        <p>
          CARES provides end-to-end research support — from questionnaire design
          through statistical analysis to publication-ready reports and
          dashboards.
        </p>
        <p className="mt-3 font-medium text-cares-gold">
          ★ 4.76 consultancy rating
        </p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center font-display text-3xl font-semibold text-cares-navy">
          Consultancy services
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {consultancyServices.map((s) => (
            <div
              key={s.title}
              className="glass-card flex flex-col justify-between p-6 sm:flex-row sm:items-center sm:gap-6"
            >
              <div>
                <h3 className="font-display text-xl font-semibold text-cares-navy">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-cares-slate">
                  {s.description}
                </p>
              </div>
              <Button href="/book" className="mt-4 shrink-0 sm:mt-0">
                Book Now
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/book" variant="outline">
            Submit an enquiry
          </Button>
        </div>
      </section>
    </>
  );
}
