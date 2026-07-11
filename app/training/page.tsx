import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import { trainingPrograms } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Pan-India workshops on research methodology, SPSS, R Studio, Jamovi, SmartPLS, academic writing, and data visualization.",
};

export default function TrainingPage() {
  return (
    <>
      <PageHero title="Training">
        <p>
          Our training programmes draw from academic and corporate experience,
          delivered pan-India to universities, research institutions, and
          industry.
        </p>
        <p className="mt-3 font-medium text-cares-gold">
          ★ 4.77 average training rating
        </p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-center text-sm font-medium text-cares-slate">
          150+ trainings · 20,000+ participants · Customizable for your institution
        </p>

        <h2 className="mt-10 text-center font-display text-3xl font-semibold text-cares-navy">
          Training programmes
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trainingPrograms.map((w) => (
            <div key={w.title} className="glass-card fx-lift p-6">
              <h3 className="font-display text-xl font-semibold text-cares-navy">
                {w.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cares-slate">
                {w.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-cares-cream p-8 text-center">
          <h3 className="font-display text-2xl font-semibold text-cares-navy">
            Plan a workshop
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-cares-slate">
            Enquire for individual seats or institutional programmes. We tailor
            content, duration, and tools to your cohort.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button href="/book">Book Now</Button>
            <Button variant="outline" href={`tel:${site.phoneHref}`}>
              Call for institutional quote
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
