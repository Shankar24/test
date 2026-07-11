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
      <section className="mx-auto max-w-3xl space-y-6 px-4 py-16 text-sm text-cares-slate">
        <p>
          CARES ({site.fullName}) respects your privacy. This policy explains what
          information we collect when you use this website and our services, and
          how we use it.
        </p>

        <div>
          <h2 className="font-display text-xl font-semibold text-cares-navy">
            Information we collect
          </h2>
          <p className="mt-2">
            When you submit an enquiry we collect your name, email address, phone
            number, institution, and the project details you provide. We do not
            collect payment card or banking details through this website.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-cares-navy">
            How we use your information
          </h2>
          <p className="mt-2">
            We use your details to respond to your enquiry, discuss suitable
            services, and deliver agreed work. We do not sell your personal
            information.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-cares-navy">
            Data retention
          </h2>
          <p className="mt-2">
            Enquiry and project records are retained only as long as needed to
            deliver services and meet legitimate business or legal requirements.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-cares-navy">Contact</h2>
          <p className="mt-2">
            For privacy questions, email{" "}
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
