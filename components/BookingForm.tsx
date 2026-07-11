"use client";

import { useState, type ReactNode } from "react";
import Button from "@/components/Button";
import { enquiryServices } from "@/lib/content";
import { enquirySchema, type Enquiry } from "@/lib/booking-schema";

const inputCls =
  "w-full rounded-xl border border-cares-navy/10 bg-white/80 px-4 py-2.5 text-sm outline-none transition focus:border-cares-blue focus:ring-2 focus:ring-cares-blue/20";

const emptyEnquiry: Enquiry = {
  name: "",
  email: "",
  phone: "",
  institution: "",
  service: "Training",
  description: "",
  deadline: "",
};

export default function BookingForm({
  defaultService,
}: {
  defaultService?: (typeof enquiryServices)[number];
}) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof Enquiry, string>>
  >({});
  const [enquiry, setEnquiry] = useState<Enquiry>({
    ...emptyEnquiry,
    service: defaultService ?? "Training",
  });

  function update(field: keyof Enquiry, value: string) {
    setEnquiry((b) => ({ ...b, [field]: value }));
    setFieldErrors((e) => ({ ...e, [field]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const parsed = enquirySchema.safeParse(enquiry);
    if (!parsed.success) {
      const errs: Partial<Record<keyof Enquiry, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Enquiry;
        if (!errs[key]) errs[key] = issue.message;
      }
      setFieldErrors(errs);
      return;
    }

    setSubmitting(true);
    // Client-side acknowledgement only — no backend or payment APIs.
    await new Promise((r) => setTimeout(r, 450));
    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-cares-gold/30 bg-cares-cream/80 p-8 text-center shadow-glass"
      >
        <div
          aria-hidden="true"
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cares-navy text-xl text-white"
        >
          ✓
        </div>
        <h2 className="mt-5 font-display text-2xl font-semibold text-cares-navy">
          Enquiry received
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-cares-slate">
          Thank you. Your enquiry has been received. Our team will contact you soon.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setEnquiry({
              ...emptyEnquiry,
              service: defaultService ?? "Training",
            });
          }}
          className="focus-ring mt-6 text-sm font-semibold text-cares-teal hover:underline"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name *" id="name" error={fieldErrors.name}>
          <input
            id="name"
            autoComplete="name"
            required
            value={enquiry.name}
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
            value={enquiry.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputCls}
            placeholder="you@university.edu"
          />
        </Field>
        <Field label="Phone Number *" id="phone" error={fieldErrors.phone}>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            required
            value={enquiry.phone}
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
            value={enquiry.institution}
            onChange={(e) => update("institution", e.target.value)}
            className={inputCls}
            placeholder="University / Company name"
          />
        </Field>
      </div>

      <Field label="Service Required *" id="service" error={fieldErrors.service}>
        <select
          id="service"
          required
          value={enquiry.service}
          onChange={(e) => update("service", e.target.value)}
          className={inputCls}
        >
          {enquiryServices.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label="Project or Requirement Description *"
        id="description"
        error={fieldErrors.description}
      >
        <textarea
          id="description"
          required
          rows={5}
          value={enquiry.description}
          onChange={(e) => update("description", e.target.value)}
          className={inputCls}
          placeholder="Tell us about your research stage, data status, preferred tools, and expected outcomes..."
        />
      </Field>

      <Field
        label="Preferred Date or Deadline"
        id="deadline"
        error={fieldErrors.deadline}
      >
        <input
          id="deadline"
          type="date"
          value={enquiry.deadline}
          onChange={(e) => update("deadline", e.target.value)}
          className={inputCls}
        />
      </Field>

      <Button type="submit" disabled={submitting} className="w-full">
        {submitting ? "Sending..." : "Submit Enquiry"}
      </Button>
      <p className="text-center text-xs text-cares-slate">
        We typically respond within 1 business day.
      </p>
    </form>
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
