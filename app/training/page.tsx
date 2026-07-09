import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Pan-India workshops on research methodology, SPSS, R Studio, academic writing, SEM, and more. 150+ trainings delivered to 20,000+ participants.",
};

const workshops = [
  "Research Methodology & Design",
  "SPSS for Data Analysis",
  "R Studio for Statistical Computing",
  "Academic Writing & Publishing",
  "Structural Equation Modeling (SEM)",
  "Qualitative Research Methods",
  "Data Visualization & Reporting",
  "Questionnaire Design & Validation",
];

export default function TrainingPage() {
  return (
    <>
      <PageHero title="Training">
        <p>
          Our training programmes draw from both academic and corporate
          experience, delivered pan-India to universities, research institutions,
          and industry.
        </p>
        <p className="mt-3 font-medium text-cares-gold">
          ★ 4.77 rated by 99 customers
        </p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-center text-sm font-medium text-cares-slate">
          150+ trainings · 20,000+ participants · Customizable for your institution
        </p>

        <h2 className="mt-10 text-center font-display text-3xl font-bold text-cares-navy">
          Popular Workshops
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {workshops.map((w) => (
            <li
              key={w}
              className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <span aria-hidden="true">📚</span>
              <span className="text-sm font-medium text-cares-navy">{w}</span>
            </li>
          ))}
        </ul>

        <div className="mt-14 rounded-2xl bg-cares-cream p-8 text-center">
          <h3 className="font-display text-2xl font-bold text-cares-navy">
            Book a Training Seat
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-cares-slate">
            Individual seats and institutional workshops (10+ participants) —
            tell us your requirement and we&apos;ll get back to you.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button href="/book/?service=training-workshop#enquiry">Book Now</Button>
            <Button variant="outline" href={`tel:${site.phoneHref}`}>
              Call for Institutional Quote
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
