import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: "Refund and cancellation terms for CARES India services and workshops.",
};

export default function RefundsPage() {
  return (
    <>
      <PageHero title="Refund & Cancellation Policy" />
      <section className="mx-auto max-w-3xl space-y-6 px-4 py-16 text-sm text-cares-slate">
        <div>
          <h2 className="font-display text-xl font-bold text-cares-navy">
            Consultation calls
          </h2>
          <p className="mt-2">
            You may reschedule a consultation call up to 24 hours before the
            scheduled time at no cost. Cancellations made at least 24 hours in
            advance receive a full refund; later cancellations are non-refundable.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-cares-navy">
            Analysis, review, and reporting services
          </h2>
          <p className="mt-2">
            A full refund is available if you cancel before work has begun. Once
            work has started, refunds are prorated based on work completed. No
            refund is available after final deliverables have been shared.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-cares-navy">
            Training workshops
          </h2>
          <p className="mt-2">
            Seats cancelled 7 or more days before the workshop receive a full
            refund. Cancellations within 7 days may be transferred to a future
            workshop or another participant, but are not refundable.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-cares-navy">
            How refunds are processed
          </h2>
          <p className="mt-2">
            Approved refunds are issued to the original payment method via
            Razorpay within 7–10 business days. To request a refund, email{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-cares-teal">
              {site.email}
            </a>{" "}
            with your order reference, or call {site.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
