import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Multidisciplinary research support — rigorous methodology, data collection, analysis, and actionable insights for complex problems.",
};

const areas = [
  {
    title: "Applied & Multidisciplinary Research",
    description:
      "Research design and execution across commerce, management, social sciences, education, and health — tailored to your problem statement.",
  },
  {
    title: "Survey & Field Studies",
    description:
      "Sampling strategy, instrument development, pilot testing, and field data collection support with quality controls.",
  },
  {
    title: "Statistical Modelling",
    description:
      "Regression, factor analysis, SEM, and multivariate techniques with clear interpretation and publication-ready outputs.",
  },
  {
    title: "Research Reporting",
    description:
      "Structured reports, executive summaries, and dashboards that translate findings into actionable recommendations.",
  },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero title="Research">
        <p>
          Multidisciplinary research support to address complex problems with
          rigorous methodology and actionable insights.
        </p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {areas.map((a) => (
            <div
              key={a.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <h2 className="font-display text-lg font-bold text-cares-navy">
                {a.title}
              </h2>
              <p className="mt-2 text-sm text-cares-slate">{a.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-cares-cream p-8 text-center">
          <h2 className="font-display text-2xl font-bold text-cares-navy">
            Have a research problem in mind?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-cares-slate">
            Start with an expert consultation call — we&apos;ll help you scope the
            methodology, data needs, and deliverables.
          </p>
          <div className="mt-6">
            <Button href="/book/consultation">Book a Consultation</Button>
          </div>
        </div>
      </section>
    </>
  );
}
