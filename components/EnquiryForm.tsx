"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import Button from "@/components/Button";
import { enquirySchema, type Enquiry } from "@/lib/booking-schema";
import { getService, services } from "@/lib/services";
import { site } from "@/lib/site";

const inputCls =
  "w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-cares-teal focus:ring-2 focus:ring-cares-teal/20";

const emptyEnquiry: Enquiry = {
  name: "",
  email: "",
  phone: "",
  institution: "",
  service: "",
  description: "",
  deadline: "",
};

function buildMailto(enquiry: Enquiry): string {
  const subject = `Booking enquiry: ${enquiry.service} — ${enquiry.name}`;
  const body = [
    `Full Name: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    `Phone: ${enquiry.phone}`,
    `Institution / Organization: ${enquiry.institution}`,
    `Service Required: ${enquiry.service}`,
    `Preferred Date / Deadline: ${enquiry.deadline || "Not specified"}`,
    "",
    "Project / Requirement Description:",
    enquiry.description,
  ].join("\n");
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function EnquiryForm() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof Enquiry, string>>>({});
  const [enquiry, setEnquiry] = useState<Enquiry>(emptyEnquiry);

  // Pre-select a service when arriving via links like /book/?service=consultation
  useEffect(() => {
    const preselected = getService(searchParams.get("service") ?? "");
    if (preselected) {
      setEnquiry((e) => (e.service ? e : { ...e, service: preselected.name }));
    }
  }, [searchParams]);

  function update(field: keyof Enquiry, value: string) {
    setEnquiry((e) => ({ ...e, [field]: value }));
    setFieldErrors((errs) => ({ ...errs, [field]: undefined }));
  }

  function handleSubmit(e: React.FormEvent) {
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

    // Static site — no backend. Open a pre-filled email in the visitor's mail
    // app and show the confirmation with fallback contact details.
    window.location.href = buildMailto(parsed.data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-cares-teal/20 bg-white p-8 text-center shadow-sm">
        <div
          aria-hidden="true"
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cares-teal/10 text-3xl text-cares-teal"
        >
          ✓
        </div>
        <h2 className="mt-5 font-display text-2xl font-bold text-cares-navy">
          Thank you. Our team will contact you soon.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-cares-slate">
          Your email app should have opened with your enquiry pre-filled — just
          press send. If it didn&apos;t open, you can reach us directly at{" "}
          <a
            href={`mailto:${site.email}`}
            className="focus-ring rounded font-semibold text-cares-teal"
          >
            {site.email}
          </a>{" "}
          or call{" "}
          <a
            href={`tel:${site.phoneHref}`}
            className="focus-ring rounded font-semibold text-cares-teal"
          >
            {site.phone}
          </a>
          .
        </p>
        <div className="mt-6">
          <Button variant="outline" onClick={() => setSubmitted(false)}>
            Send another enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8"
    >
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
          <option value="" disabled>
            Select a service…
          </option>
          {services.map((s) => (
            <option key={s.id} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Other / Not sure yet">Other / Not sure yet</option>
        </select>
      </Field>

      <Field
        label="Project / Requirement Description *"
        id="description"
        error={fieldErrors.description}
      >
        <textarea
          id="description"
          required
          rows={4}
          value={enquiry.description}
          onChange={(e) => update("description", e.target.value)}
          className={inputCls}
          placeholder="Describe your research stage, data, tools you prefer (SPSS, R, AMOS, SmartPLS…), and what you need help with"
        />
      </Field>

      <Field label="Preferred Date or Deadline" id="deadline" error={fieldErrors.deadline}>
        <input
          id="deadline"
          type="date"
          value={enquiry.deadline}
          onChange={(e) => update("deadline", e.target.value)}
          className={inputCls}
        />
      </Field>

      <Button type="submit" className="w-full">
        Send Enquiry
      </Button>
      <p className="text-center text-xs text-cares-slate">
        No payment required — we&apos;ll get back to you within 1 business day.
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
