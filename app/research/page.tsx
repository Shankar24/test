import type { Metadata } from "next";
import Button from "@/components/Button";
import ModelShowcase from "@/components/ModelShowcase";
import PageHero from "@/components/PageHero";
import { listAssetImages, titleFromFilename } from "@/lib/images";

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

// Titles and descriptions for known research-model images. Any image dropped
// into public/assets/research-models/ that isn't listed here still appears,
// with a title derived from its filename.
const modelMeta: Record<string, { title: string; description: string }> = {
  "pls-sem-path-model": {
    title: "PLS-SEM Path Model",
    description:
      "Partial least squares structural equation model with latent constructs, indicator loadings, and path coefficients.",
  },
  "structural-model-output": {
    title: "Structural Model Output",
    description:
      "Estimated structural model with standardised estimates and model fit indices ready for publication.",
  },
  "mediation-moderation-model": {
    title: "Mediation & Moderation Model",
    description:
      "Conditional process model showing direct, indirect, and moderated pathways between study variables.",
  },
  "dashboard-analytics-view": {
    title: "Dashboard Analytics View",
    description:
      "Interactive dashboard translating survey data into KPIs, trends, and drill-down visualisations.",
  },
  "factor-analysis-visualization": {
    title: "Factor Analysis Visualization",
    description:
      "Scree plot and rotated factor loadings used to establish construct dimensionality and reliability.",
  },
  "research-framework-model": {
    title: "Research Framework Model",
    description:
      "Conceptual framework mapping hypothesised relationships between independent, mediating, and outcome variables.",
  },
  "data-interpretation-output": {
    title: "Data Interpretation Output",
    description:
      "Regression results with coefficient plots and confidence intervals, interpreted for defensible conclusions.",
  },
  "business-analytics-dashboard": {
    title: "Business Analytics Dashboard",
    description:
      "Executive analytics view combining performance metrics, segment comparisons, and forecast trends.",
  },
};

function modelItems() {
  return listAssetImages("research-models").map((src) => {
    const stem = (src.split("/").pop() ?? "").replace(/\.[^.]+$/, "");
    const meta = modelMeta[stem];
    return {
      src,
      title: meta?.title ?? titleFromFilename(src),
      description: meta?.description,
    };
  });
}

export default function ResearchPage() {
  const models = modelItems();

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
      </section>

      {models.length > 0 && (
        <section
          aria-labelledby="models-heading"
          className="border-y border-gray-100 bg-cares-cream/60"
        >
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-cares-gold">
                Sample outputs
              </p>
              <h2
                id="models-heading"
                className="mt-2 font-display text-3xl font-bold text-cares-navy sm:text-4xl"
              >
                Research &amp; Data Visualization Models
              </h2>
              <p className="mt-3 text-sm text-cares-slate">
                The kind of models, dashboards, and visualisations we build —
                click any card to preview it in detail.
              </p>
            </div>
            <div className="mt-10">
              <ModelShowcase items={models} />
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl bg-cares-cream p-8 text-center">
          <h2 className="font-display text-2xl font-bold text-cares-navy">
            Have a research problem in mind?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-cares-slate">
            Start with an expert consultation call — we&apos;ll help you scope the
            methodology, data needs, and deliverables.
          </p>
          <div className="mt-6">
            <Button href="/book/?service=consultation#enquiry">
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
