import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Now",
  description:
    "Submit an enquiry for CARES training, consultancy, research, dashboards, or analytics support. Our team will contact you soon.",
};

export default function BookPage() {
  return (
    <>
      <PageHero title="Book Now">
        <p>
          Share your requirement and we will get back to you with the right next
          step for training, consultancy, or research support.
        </p>
      </PageHero>

      <section className="mx-auto max-w-2xl px-4 py-16">
        <div className="glass-card p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-cares-navy">
            Enquiry form
          </h2>
          <p className="mt-2 text-sm text-cares-slate">
            No payment required — this is an enquiry only. Prefer to talk first?
            Call{" "}
            <a
              href={`tel:${site.phoneHref}`}
              className="font-semibold text-cares-teal hover:underline"
            >
              {site.phone}
            </a>{" "}
            or email{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-semibold text-cares-teal hover:underline"
            >
              {site.email}
            </a>
            .
          </p>
          <div className="mt-8">
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
}
