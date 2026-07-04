import type { Metadata } from "next";
import Button from "@/components/Button";
import { getService } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Booking Confirmed",
  robots: { index: false },
};

type Props = {
  searchParams: Promise<{ order?: string; service?: string }>;
};

export default async function SuccessPage({ searchParams }: Props) {
  const { order, service: serviceId } = await searchParams;
  const service = serviceId ? getService(serviceId) : undefined;

  return (
    <section className="mx-auto max-w-xl px-4 py-20 text-center">
      <div
        aria-hidden="true"
        className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl"
      >
        ✓
      </div>
      <h1 className="mt-6 font-display text-3xl font-bold text-cares-navy">
        Payment successful
      </h1>
      <p className="mt-3 text-cares-slate">
        Thank you for booking with CARES. Our team will contact you within 1
        business day to confirm details and begin work.
      </p>

      <div className="mt-8 rounded-2xl bg-cares-cream p-6 text-left text-sm">
        {order && (
          <p>
            <span className="font-semibold text-cares-navy">Order reference:</span>{" "}
            <span className="font-mono">{order}</span>
          </p>
        )}
        {service && (
          <p className="mt-1">
            <span className="font-semibold text-cares-navy">Service:</span>{" "}
            {service.name}
          </p>
        )}
        <p className="mt-3 text-cares-slate">
          Please keep your Razorpay payment confirmation email as your receipt. For
          any questions, call{" "}
          <a href={`tel:${site.phoneHref}`} className="font-semibold text-cares-teal">
            {site.phone}
          </a>{" "}
          or email{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-cares-teal">
            {site.email}
          </a>
          .
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/">Back to Home</Button>
        <Button variant="outline" href="/book">
          Book Another Service
        </Button>
      </div>
    </section>
  );
}
