import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import { ResearchModelGrid } from "@/components/MediaGrids";
import { researchModels } from "@/lib/content";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Multidisciplinary research support with modelling, dashboards, data visualization, and actionable insight delivery.",
};

const areas = [
  {
    title: "Applied & Multidisciplinary Research",
    description:
      "Research design and execution across commerce, management, social sciences, education, and health.",
  },
  {
    title: "Survey & Field Studies",
    description:
      "Sampling strategy, instrument development, pilot testing, and quality-controlled field support.",
  },
  {
    title: "Statistical Modelling",
    description:
      "Regression, factor analysis, SEM/PLS-SEM, and multivariate techniques with clear interpretation.",
  },
  {
    title: "Visualization & Reporting",
    description:
      "Dashboards, executive summaries, and publication-ready outputs that communicate findings with confidence.",
  },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero title="Research">
        <p>
          Multidisciplinary research support to address complex problems with
          rigorous methodology, analytics, and actionable insights.
        </p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-5 sm:grid-cols-2">
          {areas.map((a) => (
            <div key={a.title} className="glass-card p-6">
              <h2 className="font-display text-xl font-semibold text-cares-navy">
                {a.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-cares-slate">
                {a.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-center font-display text-3xl font-semibold text-cares-navy">
            Research &amp; data visualization models
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-cares-slate">
            Explore representative modelling and analytics views. Click any card
            to preview.
          </p>
          <div className="mt-10">
            <ResearchModelGrid models={researchModels} />
          </div>
        </div>

        <div className="mt-14 rounded-3xl bg-cares-navy px-6 py-10 text-center text-white">
          <h2 className="font-display text-2xl font-semibold">
            Have a research problem in mind?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-white/75">
            Tell us about your question, data, and timeline — we will help scope
            the right approach.
          </p>
          <div className="mt-6">
            <Button href="/book" variant="secondary">
              Book Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
