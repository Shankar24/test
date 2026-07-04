import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "CARES is a Bangalore-based organization specializing in research training, consultancy, and applied research services for academia and industry across India.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About CARES">
        <p>{site.fullName}</p>
      </PageHero>

      <section className="mx-auto max-w-3xl px-4 py-16">
        <div className="space-y-5 text-cares-slate">
          <p>
            CARES (Center for Applied Research and Educational Services) is a
            Bangalore-based organization specializing in research training,
            consultancy, and applied research services for academic institutions
            and industry across India.
          </p>
          <p>
            With over 150 trainings delivered to 20,000+ participants and a client
            base of 300+ organizations, we bring deep expertise in questionnaire
            design, statistical data analysis, research reporting, and interactive
            dashboards.
          </p>
          <p>
            Our team combines academic rigor with practical industry experience,
            delivering workshops on SPSS, R Studio, research methodology, and
            data-driven decision making for universities, NGOs, and corporations.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-cares-cream p-6">
            <h2 className="font-display text-lg font-bold text-cares-navy">
              Our Mission
            </h2>
            <p className="mt-2 text-sm text-cares-slate">
              To empower researchers and organizations with the skills and
              analytical support needed to produce rigorous, actionable research
              outcomes.
            </p>
          </div>
          <div className="rounded-2xl bg-cares-cream p-6">
            <h2 className="font-display text-lg font-bold text-cares-navy">
              Our Approach
            </h2>
            <p className="mt-2 text-sm text-cares-slate">
              Multidisciplinary, client-focused, and grounded in both theory and
              hands-on practice — from workshop delivery to end-to-end data
              analysis projects.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button href="/book">Book a Service</Button>
        </div>
      </section>
    </>
  );
}
