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
          <h2 className="font-display text-xl font-bold text-cares-navy">
            Bookings and enquiries
          </h2>
          <p className="mt-2">
            Bookings are made by sending an enquiry through this website, by
            email, or by phone. A booking is confirmed once our team contacts
            you and both sides agree on scope, timelines, and fees — normally
            within 1 business day of your enquiry.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-cares-navy">
            Service delivery
          </h2>
          <p className="mt-2">
            Turnaround times shown on the website are indicative and start once we
            have received all required inputs (datasets, questionnaires, project
            briefs). Complex projects may require a revised timeline, which we
            will agree with you before starting.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-cares-navy">
            Intellectual property and academic integrity
          </h2>
          <p className="mt-2">
            Deliverables are provided for your research use. Our analysis support
            is intended to complement your own scholarship; you remain responsible
            for how outputs are used in academic submissions.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-cares-navy">
            Cancellations and rescheduling
          </h2>
          <p className="mt-2">
            Consultation calls can be rescheduled up to 24 hours before the
            agreed time at no cost. Workshop seats can be transferred to a
            future workshop or another participant with at least 7 days&apos;
            notice. For project work, cancellation terms are agreed as part of
            the project scope before work begins.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-cares-navy">Contact</h2>
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
