import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How CARES India collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <section className="prose-cares mx-auto max-w-3xl space-y-6 px-4 py-16 text-sm text-cares-slate">
        <p>
          CARES ({site.fullName}) respects your privacy. This policy explains what
          information we collect when you use this website and our services, and
          how we use it.
        </p>

        <div>
          <h2 className="font-display text-xl font-bold text-cares-navy">
            Information we collect
          </h2>
          <p className="mt-2">
            When you book a service we collect your name, email address, phone
            number, institution, and the project details you provide. Payment card
            and banking details are processed directly by Razorpay and are never
            stored on our servers.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-cares-navy">
            How we use your information
          </h2>
          <p className="mt-2">
            We use your details to deliver the service you booked, to communicate
            about your project, and to issue receipts. We do not sell or share
            your personal information with third parties except as required to
            process payments (Razorpay) or comply with the law.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-cares-navy">
            Data you share for analysis
          </h2>
          <p className="mt-2">
            Research datasets you share with us are treated as confidential, used
            only for the commissioned work, and deleted on request after project
            completion.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-cares-navy">Contact</h2>
          <p className="mt-2">
            For any privacy questions or data deletion requests, email{" "}
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
