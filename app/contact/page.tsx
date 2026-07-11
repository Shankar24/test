import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with CARES India for training, consultancy, and research services. Call, email, or visit our Bangalore office.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us">
        <p>
          Questions about a workshop, a custom package, or an institutional
          engagement? We respond within 1 business day.
        </p>
      </PageHero>

      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="grid gap-5 sm:grid-cols-3">
          <a
            href={`tel:${site.phoneHref}`}
            className="glass-card focus-ring p-6 text-center transition hover:shadow-lift"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cares-gold">
              Phone
            </p>
            <h2 className="mt-3 font-semibold text-cares-navy">Call Us</h2>
            <p className="mt-1 text-sm text-cares-teal">{site.phone}</p>
          </a>
          <a
            href={`mailto:${site.email}`}
            className="glass-card focus-ring p-6 text-center transition hover:shadow-lift"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cares-gold">
              Email
            </p>
            <h2 className="mt-3 font-semibold text-cares-navy">Email Us</h2>
            <p className="mt-1 text-sm text-cares-teal">{site.email}</p>
          </a>
          <div className="glass-card p-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cares-gold">
              Office
            </p>
            <h2 className="mt-3 font-semibold text-cares-navy">Visit Us</h2>
            <address className="mt-1 text-sm not-italic text-cares-slate">
              {site.address}
            </address>
          </div>
        </div>

        <div className="mt-12 rounded-3xl bg-cares-cream p-8 text-center">
          <h2 className="font-display text-2xl font-semibold text-cares-navy">
            Ready to begin?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-cares-slate">
            Submit an enquiry and our team will contact you with the right next
            step.
          </p>
          <div className="mt-6">
            <Button href="/book">Book Now</Button>
          </div>
        </div>
      </section>
    </>
  );
}
