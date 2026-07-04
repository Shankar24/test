"use client";

import Script from "next/script";
import { useRouter } from "next/navigation";
import { useState, type ReactNode } from "react";
import Button from "@/components/Button";
import { bookingSchema, type Booking } from "@/lib/booking-schema";
import { formatINR, type Service } from "@/lib/services";

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void };
  }
}

const inputCls =
  "w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-cares-teal focus:ring-2 focus:ring-cares-teal/20";

const emptyBooking: Booking = {
  name: "",
  email: "",
  phone: "",
  institution: "",
  projectTitle: "",
  description: "",
  deadline: "",
};

export default function BookingForm({ service }: { service: Service }) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof Booking, string>>>({});
  const [booking, setBooking] = useState<Booking>(emptyBooking);

  function update(field: keyof Booking, value: string) {
    setBooking((b) => ({ ...b, [field]: value }));
    setFieldErrors((e) => ({ ...e, [field]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const parsed = bookingSchema.safeParse(booking);
    if (!parsed.success) {
      const errs: Partial<Record<keyof Booking, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Booking;
        if (!errs[key]) errs[key] = issue.message;
      }
      setFieldErrors(errs);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/payments/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serviceId: service.id, booking: parsed.data }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create order");

      const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
      if (!keyId || !window.Razorpay) {
        throw new Error(
          "Payment gateway is unavailable right now. Please call us to complete your booking."
        );
      }

      new window.Razorpay({
        key: keyId,
        amount: data.amount,
        currency: data.currency,
        name: "CARES India",
        description: service.name,
        order_id: data.razorpayOrderId,
        prefill: {
          name: parsed.data.name,
          email: parsed.data.email,
          contact: parsed.data.phone,
        },
        theme: { color: "#0d7377" },
        handler: async (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) => {
          const verifyRes = await fetch("/api/payments/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              orderId: data.orderId,
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            }),
          });
          const verifyData = await verifyRes.json();
          if (verifyRes.ok) {
            router.push(
              `/book/success?order=${encodeURIComponent(data.orderId)}&service=${encodeURIComponent(service.id)}`
            );
          } else {
            setError(verifyData.error || "Payment verification failed");
            setSubmitting(false);
          }
        },
        modal: { ondismiss: () => setSubmitting(false) },
      }).open();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setSubmitting(false);
    }
  }

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="rounded-xl bg-cares-cream p-4">
          <p className="text-sm text-cares-slate">Selected service</p>
          <p className="font-semibold text-cares-navy">{service.name}</p>
          <p className="font-display text-xl font-bold text-cares-teal">
            {formatINR(service.price)}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full Name *" id="name" error={fieldErrors.name}>
            <input
              id="name"
              autoComplete="name"
              required
              value={booking.name}
              onChange={(e) => update("name", e.target.value)}
              className={inputCls}
              placeholder="Dr. John Doe"
            />
          </Field>
          <Field label="Email *" id="email" error={fieldErrors.email}>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={booking.email}
              onChange={(e) => update("email", e.target.value)}
              className={inputCls}
              placeholder="you@university.edu"
            />
          </Field>
          <Field label="Phone *" id="phone" error={fieldErrors.phone}>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              required
              value={booking.phone}
              onChange={(e) => update("phone", e.target.value)}
              className={inputCls}
              placeholder="+91 98765 43210"
            />
          </Field>
          <Field
            label="Institution / Organization *"
            id="institution"
            error={fieldErrors.institution}
          >
            <input
              id="institution"
              autoComplete="organization"
              required
              value={booking.institution}
              onChange={(e) => update("institution", e.target.value)}
              className={inputCls}
              placeholder="University / Company name"
            />
          </Field>
        </div>

        <Field label="Project Title *" id="projectTitle" error={fieldErrors.projectTitle}>
          <input
            id="projectTitle"
            required
            value={booking.projectTitle}
            onChange={(e) => update("projectTitle", e.target.value)}
            className={inputCls}
            placeholder="e.g. Employee Engagement Survey Analysis"
          />
        </Field>

        <Field
          label="Project Description *"
          id="description"
          error={fieldErrors.description}
        >
          <textarea
            id="description"
            required
            rows={4}
            value={booking.description}
            onChange={(e) => update("description", e.target.value)}
            className={inputCls}
            placeholder="Describe your data, research questions, sample size, tools used, and expected deliverables..."
          />
        </Field>

        <Field label="Preferred Deadline" id="deadline" error={fieldErrors.deadline}>
          <input
            id="deadline"
            type="date"
            value={booking.deadline}
            onChange={(e) => update("deadline", e.target.value)}
            className={inputCls}
          />
        </Field>

        {error && (
          <div role="alert" className="rounded-lg bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        <Button type="submit" disabled={submitting} className="w-full">
          {submitting ? "Processing..." : `Pay ${formatINR(service.price)} via Razorpay`}
        </Button>
        <p className="text-center text-xs text-cares-slate">
          Secure payment via Razorpay · UPI, Cards, Net Banking accepted
        </p>
      </form>
    </>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-cares-navy">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
