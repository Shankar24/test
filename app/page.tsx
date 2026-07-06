import Link from "next/link";
import HomeFx from "@/components/HomeFx";
import { formatINR, getService } from "@/lib/services";
import { site } from "@/lib/site";

const stats = [
  { label: "Training programmes", count: 150, suffix: "+" },
  { label: "Participants trained", count: 20000, suffix: "+" },
  { label: "Clients served", count: 300, suffix: "+" },
  { label: "Avg. workshop rating", count: 4.77, suffix: "★", decimals: 2 },
];

const serviceCards = [
  {
    title: "Research Design & Methodology",
    body: "Formulate the research problem, select the correct methodology, and leave with a clear research roadmap.",
    href: "/book/consultation",
    cta: "Book a call",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <path d="M9 21h6M12 17v4M12 3a6 6 0 0 0-4 10.5c.6.5 1 1.4 1 2.5h6c0-1.1.4-2 1-2.5A6 6 0 0 0 12 3Z" />
      </svg>
    ),
  },
  {
    title: "Questionnaire Design & Review",
    body: "Better-designed instruments — item-by-item feedback on clarity, bias, scales, and reliability.",
    href: "/book/questionnaire-review",
    cta: "Get a review",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
      </svg>
    ),
  },
  {
    title: "Statistical Analysis",
    body: "Correctly selected techniques, analysis in R, SPSS, AMOS, SmartPLS or Python — and results you can defend.",
    href: "/book/data-analysis-basic",
    cta: "Order analysis",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <path d="M3 3v18h18M8 17V9m5 8V5m5 12v-6" />
      </svg>
    ),
  },
];

const tools = ["R", "SPSS", "AMOS", "SmartPLS", "Python", "Power BI"];

const journey = [
  {
    step: "01",
    title: "Formulate the problem",
    body: "Turn a topic or dataset into a researchable question with a suitable design.",
  },
  {
    step: "02",
    title: "Choose the right methods",
    body: "Select the statistical technique and software that actually fit your data.",
  },
  {
    step: "03",
    title: "Defend your findings",
    body: "Interpret results correctly and communicate conclusions with confidence.",
  },
];

const clients = [
  "National Institute of Design",
  "Central University, Kasargode",
  "Nirma University",
  "PES University",
  "VIT Vellore",
  "PDPU Gandhinagar",
];

const testimonials = [
  {
    name: "Santhosh Kumari",
    role: "University of Jammu",
    quote: "Thoughtful guidance and a helpful environment.",
  },
  {
    name: "Research Scholar",
    role: "R Studio Workshop",
    quote: "An outstanding experience — great support for my research.",
  },
];

const pricedServices = ["consultation", "questionnaire-review", "data-analysis-basic"]
  .map(getService)
  .filter((s): s is NonNullable<typeof s> => Boolean(s));

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-cares-cream">
      <HomeFx />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-6">
        {/* ============ HERO CARD ============ */}
        <section className="relative overflow-hidden rounded-[2rem] bg-white shadow-sm">
          <div
            aria-hidden="true"
            className="fx-drift pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#2b59f5]/10 blur-3xl"
          />
          <div className="relative grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <p className="fx-up inline-flex items-center gap-2 rounded-full bg-cares-cream px-4 py-1.5 text-xs font-semibold text-cares-teal">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-cares-teal" />
                For scholars, faculty &amp; institutions
              </p>
              <h1 className="fx-up fx-d1 mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-cares-navy sm:text-5xl lg:text-[3.3rem]">
                Turn complex research into clear, credible insight
              </h1>
              <p className="fx-up fx-d2 mt-5 max-w-lg text-sm leading-relaxed text-cares-slate sm:text-base">
                CARES helps scholars, faculty, and institutions design stronger
                studies, analyse data correctly, and communicate findings with
                confidence — from research question to defensible conclusions.
              </p>
              <div className="fx-up fx-d3 mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/book/consultation"
                  className="focus-ring inline-flex items-center gap-2 rounded-full bg-cares-teal px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-cares-blue"
                >
                  Book a Research Clarity Call
                </Link>
                <Link
                  href="/contact"
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-cares-navy/15 bg-white px-6 py-3 text-sm font-semibold text-cares-navy transition hover:scale-105 hover:border-cares-navy/40"
                >
                  Request a Training Proposal
                  <span
                    aria-hidden="true"
                    className="flex h-5 w-5 items-center justify-center rounded-full bg-cares-navy text-[10px] text-white"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* hero visual */}
            <div className="relative mx-auto h-[320px] w-full max-w-sm sm:h-[360px]" aria-hidden="true">
              <span className="fx-pulse absolute -right-1 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-cares-teal text-lg text-white shadow-lg">
                +
              </span>
              <div className="absolute inset-x-4 bottom-0 top-6 rounded-[1.75rem] bg-gradient-to-br from-[#2b59f5] via-[#4a6ef7] to-[#0d1330] shadow-xl" />
              {/* mock analysis window */}
              <div className="fx-float absolute inset-x-10 top-14 rounded-2xl border border-white/50 bg-white/90 p-4 shadow-xl backdrop-blur">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-[10px] font-medium text-cares-slate">
                    model_results.R
                  </span>
                </div>
                <div className="mt-3 flex h-20 items-end gap-1.5">
                  {[45, 70, 55, 90, 65, 100, 80].map((h, i) => (
                    <span
                      key={i}
                      style={{ height: `${h}%`, transitionDelay: `${0.3 + i * 0.07}s` }}
                      className={`fx-bar w-full rounded-t ${i === 5 ? "bg-cares-teal" : "bg-cares-cream"}`}
                    />
                  ))}
                </div>
                <p className="mt-3 rounded-lg bg-cares-cream px-3 py-1.5 text-[10px] font-medium text-cares-navy">
                  R² = 0.81 · p &lt; 0.001 · hypothesis supported
                </p>
              </div>
              <div className="fx-float-2 absolute bottom-6 left-0 rounded-xl border border-white/60 bg-white/95 px-4 py-3 shadow-lg">
                <p className="text-[10px] font-medium text-cares-slate">Research roadmap</p>
                <p className="text-sm font-bold text-cares-navy">Design → Data → Defence</p>
              </div>
              <div className="fx-float-3 absolute bottom-16 right-2 rounded-xl bg-cares-navy px-4 py-3 text-white shadow-lg">
                <p className="text-[10px] text-white/60">Avg. rating</p>
                <p className="text-sm font-bold">★ 4.77</p>
              </div>
            </div>
          </div>

          {/* stats strip inside hero card */}
          <div className="relative grid grid-cols-2 gap-px border-t border-cares-cream bg-cares-cream lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} data-reveal className="bg-white px-6 py-5 text-center">
                <p
                  data-count={s.count}
                  data-suffix={s.suffix}
                  data-decimals={s.decimals ?? 0}
                  className="text-2xl font-bold tracking-tight text-cares-navy"
                >
                  0{s.suffix}
                </p>
                <p className="mt-1 text-xs text-cares-slate">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ SERVICE CARDS ROW ============ */}
        <section aria-labelledby="services-heading" className="mt-10">
          <h2 id="services-heading" className="sr-only">
            What CARES helps you with
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map((c, i) => (
              <article
                key={c.title}
                data-reveal
                style={{ transitionDelay: `${i * 0.1}s` }}
                className="fx-lift flex flex-col rounded-3xl border border-white bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cares-cream text-cares-teal">
                    {c.icon}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-8 w-8 rounded-full border border-cares-navy/10 bg-cares-navy/[0.03]"
                  />
                </div>
                <h3 className="mt-5 text-base font-bold tracking-tight text-cares-navy">
                  {c.title}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-cares-slate">
                  {c.body}
                </p>
                <Link
                  href={c.href}
                  className="focus-ring mt-5 self-start rounded-full bg-cares-navy px-4 py-2 text-xs font-semibold text-white transition hover:scale-105 hover:bg-cares-blue"
                >
                  {c.cta}
                </Link>
              </article>
            ))}

            {/* dark card, as in the mockup's fourth tile */}
            <article
              data-reveal
              style={{ transitionDelay: "0.3s" }}
              className="fx-lift flex flex-col rounded-3xl bg-cares-navy p-6 text-white shadow-xl"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </span>
                <span aria-hidden="true" className="h-8 w-8 rounded-full bg-cares-teal/40" />
              </div>
              <h3 className="mt-5 text-base font-bold tracking-tight">
                Training for Institutions
              </h3>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-white/60">
                Practical workshops that turn complex research and statistical
                methods into usable skills for your scholars and faculty.
              </p>
              <div className="mt-5 flex gap-2">
                <Link
                  href="/training"
                  className="focus-ring rounded-full bg-white px-4 py-2 text-xs font-semibold text-cares-navy transition hover:scale-105"
                >
                  Workshops
                </Link>
                <Link
                  href="/contact"
                  className="focus-ring rounded-full border border-white/30 px-4 py-2 text-xs font-semibold text-white transition hover:scale-105 hover:bg-white/10"
                >
                  Proposal
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* ============ THE GAP WE BRIDGE ============ */}
        <section aria-labelledby="gap-heading" className="mt-10 grid items-center gap-6 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-[1fr_1.2fr]">
            <div
              data-reveal
              className="fx-lift flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#93b4ff] via-[#b8c9f7] to-[#e6ecfb] p-6 shadow-sm"
            >
              <span className="self-start rounded-full bg-white/70 px-3 py-1 text-[11px] font-semibold text-cares-navy">
                The starting point
              </span>
              <p className="mt-10 text-xl font-bold leading-snug tracking-tight text-cares-navy">
                “I have a research question.”
              </p>
            </div>
            <div
              data-reveal
              style={{ transitionDelay: "0.12s" }}
              className="fx-lift relative flex flex-col justify-between overflow-hidden rounded-3xl bg-cares-navy p-6 text-white shadow-xl"
            >
              <span
                aria-hidden="true"
                className="fx-bob absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-cares-teal text-sm"
              >
                ✓
              </span>
              <span className="self-start rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/80">
                Where you finish
              </span>
              <p className="mt-10 text-xl font-bold leading-snug tracking-tight">
                “I can confidently explain what my evidence shows.”
              </p>
            </div>
          </div>

          <div data-reveal style={{ transitionDelay: "0.15s" }}>
            <h2
              id="gap-heading"
              className="text-3xl font-bold leading-tight tracking-tight text-cares-navy sm:text-4xl"
            >
              We bridge the gap between a question and a defensible answer
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cares-slate">
              Researchers often have a topic or a dataset but struggle with
              methodology, questionnaire design, choosing the right statistical
              technique, and interpreting results. CARES walks with you through
              every step.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Analysis tools we work with">
              {tools.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-cares-navy/10 bg-white px-4 py-1.5 text-xs font-semibold text-cares-navy"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ JOURNEY / EXPERT ROW ============ */}
        <section aria-labelledby="journey-heading" className="mt-10 grid gap-4 lg:grid-cols-5">
          <div
            data-reveal
            className="fx-lift relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm lg:col-span-3"
          >
            <h2 id="journey-heading" className="text-2xl font-bold tracking-tight text-cares-navy">
              A clear roadmap for your research
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {journey.map((j, i) => (
                <div
                  key={j.step}
                  data-reveal
                  style={{ transitionDelay: `${0.15 + i * 0.12}s` }}
                  className="rounded-2xl border border-cares-cream bg-[#fafbfe] p-5"
                >
                  <span className="text-xs font-bold text-cares-teal">{j.step}</span>
                  <h3 className="mt-2 text-sm font-bold text-cares-navy">{j.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-cares-slate">{j.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            data-reveal
            style={{ transitionDelay: "0.12s" }}
            className="fx-lift relative flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a2350] via-cares-navy to-[#3a2d66] p-8 text-white shadow-xl lg:col-span-2"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#f77257]/30 blur-2xl"
            />
            <span className="self-start rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/80">
              Led by experience
            </span>
            <h2 className="mt-5 text-2xl font-bold tracking-tight">
              20+ years across corporate, academic &amp; research practice
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
              CARES is led by Shankar M.M., with a training catalogue that goes
              far beyond generic research consulting — delivered pan-India for
              universities, institutions, and companies.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="focus-ring rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-cares-navy transition hover:scale-105"
              >
                Meet the team
              </Link>
              <Link
                href="/research"
                className="focus-ring rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-105 hover:bg-white/10"
              >
                Research services
              </Link>
            </div>
          </div>
        </section>

        {/* ============ PRICING ============ */}
        <section aria-labelledby="pricing-heading" className="mt-10">
          <div data-reveal className="fx-lift rounded-3xl bg-white p-8 shadow-sm">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2
                  id="pricing-heading"
                  className="text-2xl font-bold tracking-tight text-cares-navy"
                >
                  Transparent pricing, secure payment
                </h2>
                <p className="mt-2 max-w-md text-sm text-cares-slate">
                  Fixed prices and clear turnaround times, paid securely online
                  via Razorpay. Institutional quotes on request.
                </p>
              </div>
              <Link
                href="/book"
                className="focus-ring rounded-full border border-cares-navy/15 px-5 py-2.5 text-sm font-semibold text-cares-navy transition hover:scale-105 hover:border-cares-navy/40"
              >
                View all services
              </Link>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {pricedServices.map((s, i) => (
                <div
                  key={s.id}
                  data-reveal
                  style={{ transitionDelay: `${0.12 + i * 0.1}s` }}
                  className="fx-lift flex flex-col rounded-2xl border border-cares-cream bg-[#fafbfe] p-5"
                >
                  <p className="text-[11px] font-medium text-cares-slate">{s.category}</p>
                  <p className="mt-1 text-xl font-bold tracking-tight text-cares-navy">
                    {formatINR(s.price)}
                  </p>
                  <p className="mt-1 flex-1 text-xs leading-snug text-cares-slate">{s.name}</p>
                  <Link
                    href={`/book/${s.id}`}
                    className="focus-ring mt-4 rounded-full bg-cares-teal px-4 py-2 text-center text-xs font-semibold text-white transition hover:scale-105 hover:bg-cares-blue"
                  >
                    Book now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ TRUST: CLIENTS + TESTIMONIALS ============ */}
        <section aria-labelledby="trust-heading" className="mt-10 grid gap-4 lg:grid-cols-5">
          <div
            data-reveal
            className="fx-lift flex flex-col rounded-3xl bg-cares-navy p-8 text-white shadow-xl lg:col-span-2"
          >
            <h2 id="trust-heading" className="text-2xl font-bold tracking-tight">
              Trusted by institutions across India
            </h2>
            <p className="mt-3 text-sm text-white/60">
              Universities, research institutions, and companies choose CARES for
              practical, engaging, professionally delivered programmes.
            </p>
            <ul className="mt-6 flex-1 space-y-2.5">
              {clients.map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm text-white/80">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-cares-gold" />
                  {c}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="focus-ring mt-6 self-start rounded-full bg-cares-teal px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-105 hover:bg-cares-blue"
            >
              Request a proposal
            </Link>
          </div>

          <div className="grid gap-4 lg:col-span-3">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                data-reveal
                style={{ transitionDelay: `${i * 0.12}s` }}
                className="fx-lift flex items-center gap-5 rounded-3xl bg-white p-6 shadow-sm"
              >
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#93b4ff] to-cares-teal text-lg font-bold text-white"
                >
                  {t.name.charAt(0)}
                </span>
                <div className="flex-1">
                  <blockquote className="text-sm leading-relaxed text-cares-navy">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-2 text-xs text-cares-slate">
                    <span className="font-semibold text-cares-navy">{t.name}</span> · {t.role}
                  </figcaption>
                </div>
                <span
                  aria-hidden="true"
                  className="hidden h-8 w-8 shrink-0 rounded-full bg-cares-teal/15 sm:block"
                />
              </figure>
            ))}
            <div
              data-reveal
              style={{ transitionDelay: "0.24s" }}
              className="fx-lift flex items-center justify-between gap-4 rounded-3xl bg-white p-6 shadow-sm"
            >
              <div>
                <p
                  data-count="4.77"
                  data-decimals="2"
                  className="text-3xl font-bold tracking-tight text-cares-navy"
                >
                  0.00
                </p>
                <p className="mt-1 text-xs text-cares-slate">
                  Average rating from 120 workshop reviews
                </p>
              </div>
              <div className="flex h-14 items-end gap-1.5" aria-hidden="true">
                {[40, 65, 50, 80, 100].map((h, i) => (
                  <span
                    key={i}
                    style={{ height: `${h}%`, transitionDelay: `${0.3 + i * 0.08}s` }}
                    className={`fx-bar w-3 rounded-full ${i === 4 ? "bg-cares-teal" : "bg-cares-cream"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section aria-labelledby="cta-heading" className="mt-10">
          <div
            data-reveal
            className="fx-gradient relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#2b59f5] via-[#3d4ed8] to-[#0d1330] p-10 text-white shadow-xl sm:p-14"
          >
            <div
              aria-hidden="true"
              className="fx-drift pointer-events-none absolute -left-20 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 id="cta-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Where are you in your research journey?
                </h2>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/70">
                  Tell us your research stage, question, data status, preferred
                  software, and deadline — or share your institution&apos;s
                  training needs. We&apos;ll take it from there.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  href="/book/consultation"
                  className="focus-ring rounded-full bg-white px-6 py-3.5 text-center text-sm font-semibold text-cares-navy transition hover:scale-105"
                >
                  Book a Research Clarity Call
                </Link>
                <Link
                  href="/contact"
                  className="focus-ring rounded-full border border-white/40 px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:scale-105 hover:bg-white/10"
                >
                  Request a Training or Consulting Proposal
                </Link>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="focus-ring rounded-full px-6 py-2 text-center text-sm font-medium text-white/70 transition hover:text-white"
                >
                  or call {site.phone}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
