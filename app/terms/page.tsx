import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using CARES India services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Service" />
      <section className="mx-auto max-w-3xl space-y-6 px-4 py-16 text-sm text-cares-slate">
        <p>
          These terms govern your use of this website and the training,
          consultancy, and research services provided by CARES ({site.fullName}),
          Bangalore, India.
        </p>

        <div>
          <h2 className="font-display text-xl font-semibold text-cares-navy">
            Enquiries and engagements
          </h2>
          <p className="mt-2">
            Submitting an enquiry through this website does not create a binding
            service contract. Engagements begin once scope, timelines, and
            commercial terms are agreed with our team.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-cares-navy">
            Service delivery
          </h2>
          <p className="mt-2">
            Timelines are indicative and start once we have received all required
            inputs (datasets, questionnaires, project briefs). Complex projects may
            require a revised timeline, which we will agree with you before
            starting.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-cares-navy">
            Intellectual property
          </h2>
          <p className="mt-2">
            Deliverables are provided for your research use. Our analysis support
            does not replace academic integrity obligations or institutional
            authorship policies.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-cares-navy">
            Limitation of liability
          </h2>
          <p className="mt-2">
            CARES provides professional research support in good faith. We are not
            liable for academic outcomes, publication decisions, or third-party
            interpretations of results beyond the agreed scope of work.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-cares-navy">Contact</h2>
          <p className="mt-2">
            Questions about these terms? Email{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-cares-teal">
              {site.email}
            </a>{" "}
            or call {site.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
