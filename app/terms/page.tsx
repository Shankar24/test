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
            Bookings and payment
          </h2>
          <p className="mt-2">
            All services must be paid for in advance through our online payment
            partner, Razorpay. A booking is confirmed once payment is verified and
            our team contacts you, normally within 1 business day.
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
            Refunds and cancellations
          </h2>
          <p className="mt-2">
            See our{" "}
            <a href="/refunds" className="font-semibold text-cares-teal">
              Refund &amp; Cancellation Policy
            </a>{" "}
            for details.
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
