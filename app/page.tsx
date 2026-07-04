import Link from "next/link";
import type { CSSProperties } from "react";
import HomeFx from "@/components/HomeFx";
import { formatINR, getService } from "@/lib/services";
import { site } from "@/lib/site";

const stats = [
  { label: "Trainings", count: 150, suffix: "+", pill: "conducted" },
  { label: "Participants", count: 20000, suffix: "+", pill: "trained" },
  { label: "Clients", count: 300, suffix: "+", pill: "happy" },
  { label: "Avg. Rating", count: 4.77, suffix: "★", decimals: 2, pill: "120 reviews" },
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

const clients = [
  "National Institute of Design",
  "Central University, Kasargode",
  "Nirma University",
  "PES University",
  "VIT Vellore",
  "PDPU Gandhinagar",
];

const pricedServices = ["consultation", "questionnaire-review", "data-analysis-basic"]
  .map(getService)
  .filter((s): s is NonNullable<typeof s> => Boolean(s));

function PillButton({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`focus-ring inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:scale-105 ${
        dark
          ? "bg-[#16162e] text-white hover:bg-[#2a2a52]"
          : "border border-[#16162e]/15 bg-white/70 text-[#16162e] hover:border-[#16162e]/40"
      }`}
    >
      {children}
    </Link>
  );
}

function GlassTile({
  className,
  style,
  children,
}: {
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}) {
  return (
    <div
      style={style}
      className={`absolute flex items-center justify-center rounded-3xl border border-white/70 bg-white/40 shadow-xl shadow-indigo-900/10 backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-[#eef0f7]">
      <HomeFx />

      {/* ============ HERO ============ */}
      <section className="relative mx-auto max-w-6xl px-4 pb-10 pt-14">
        {/* drifting background blobs */}
        <div
          aria-hidden="true"
          className="fx-drift pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#5b5bd6]/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="fx-drift pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-[#0d7377]/10 blur-3xl"
          style={{ animationDelay: "-8s" }}
        />

        <div className="relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="fx-up text-4xl font-bold leading-[1.08] tracking-tight text-[#16162e] sm:text-5xl md:text-[3.4rem]">
              Grow your research with smart data solutions
            </h1>
            <p className="fx-up fx-d1 mt-5 max-w-md text-sm leading-relaxed text-[#16162e]/60">
              Questionnaire design, statistical analysis, dashboards, and
              pan-India training — delivered by expert analysts for academia and
              industry.
            </p>
            <div className="fx-up fx-d2 mt-8 flex flex-wrap items-center gap-3">
              <PillButton href="/book" dark>
                Book a Service
              </PillButton>
              <PillButton href="/consultancy">
                <span
                  aria-hidden="true"
                  className="flex h-5 w-5 items-center justify-center rounded-full bg-[#16162e] text-[10px] text-white"
                >
                  →
                </span>
                Explore Consultancy
              </PillButton>
            </div>
          </div>

          {/* 3D glass composition */}
          <div className="relative mx-auto h-[380px] w-full max-w-md" aria-hidden="true">
            <span className="fx-pulse absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#5b5bd6] text-lg text-white shadow-lg">
              +
            </span>

            <GlassTile
              className="fx-float left-6 top-6 h-24 w-24"
              style={{ "--rot": "-12deg" } as CSSProperties}
            >
              <span className="flex gap-1.5">
                <span className="h-4 w-4 rounded-md bg-pink-400" />
                <span className="h-4 w-4 rounded-md bg-emerald-400" />
              </span>
            </GlassTile>
            <GlassTile
              className="fx-float-2 right-16 top-0 h-24 w-24"
              style={{ "--rot": "12deg" } as CSSProperties}
            >
              <span className="text-2xl">📊</span>
            </GlassTile>
            <GlassTile
              className="fx-float-3 right-0 top-36 h-24 w-24"
              style={{ "--rot": "6deg" } as CSSProperties}
            >
              <span className="flex flex-col gap-1.5">
                <span className="h-3 w-10 rounded-full bg-amber-300" />
                <span className="h-3 w-6 rounded-full bg-[#5b5bd6]" />
              </span>
            </GlassTile>
            <GlassTile
              className="fx-float-2 left-0 top-44 hidden h-20 w-20 sm:flex"
              style={{ "--rot": "20deg", animationDelay: "2s" } as CSSProperties}
            >
              <span className="text-xl">🔬</span>
            </GlassTile>

            {/* dish with cylinders */}
            <div className="fx-up fx-d1 absolute bottom-0 left-1/2 h-24 w-80 -translate-x-1/2 rounded-[50%] border border-white/70 bg-white/40 shadow-2xl shadow-indigo-900/20 backdrop-blur-md" />
            <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 items-end gap-4">
              <span
                className="fx-cyl h-28 w-12 rounded-t-full bg-gradient-to-b from-white/80 to-[#c7c9f4] shadow-lg"
                style={{ animationDelay: "0.4s, 1.6s" }}
              />
              <span
                className="fx-cyl h-44 w-14 rounded-t-full bg-gradient-to-b from-[#8a8ae8] to-[#5b5bd6] shadow-lg"
                style={{ animationDelay: "0.6s, 2s" }}
              />
              <span
                className="fx-cyl h-36 w-12 rounded-t-full bg-gradient-to-b from-[#67d6da] to-[#0d7377] shadow-lg"
                style={{ animationDelay: "0.8s, 2.4s" }}
              />
            </div>
          </div>
        </div>

        {/* ============ DARK BANNER ============ */}
        <div
          data-reveal
          className="relative mt-10 flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-[#16162e] px-8 py-7 text-white shadow-xl"
        >
          <div className="flex items-center gap-3">
            <span className="fx-bob flex h-10 w-10 items-center justify-center rounded-xl bg-[#5b5bd6] font-bold">
              C
            </span>
            <div>
              <p className="text-sm font-semibold">CARES {site.tagline}</p>
              <p className="text-xs text-white/50">
                Center for Applied Research and Educational Services
              </p>
            </div>
          </div>
          <p className="text-sm text-white/70">
            <span className="font-semibold text-white">150+ trainings</span> delivered
            · <span className="font-semibold text-white">★ 4.77</span> average rating
          </p>
          <Link
            href="/book"
            className="focus-ring rounded-full bg-[#5b5bd6] px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-105 hover:bg-[#4a4ac2]"
          >
            Get Started
          </Link>
        </div>

        {/* ============ STAT CHIPS ============ */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-reveal
              style={{ transitionDelay: `${i * 0.12}s` }}
              className="fx-lift flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm"
            >
              <div>
                <p className="text-xs text-[#16162e]/50">{s.label}</p>
                <p
                  data-count={s.count}
                  data-suffix={s.suffix}
                  data-decimals={s.decimals ?? 0}
                  className="mt-1 text-2xl font-bold tracking-tight text-[#16162e]"
                >
                  0{s.suffix}
                </p>
              </div>
              <span className="rounded-full bg-[#eef0f7] px-3 py-1 text-[11px] font-medium text-[#5b5bd6]">
                {s.pill}
              </span>
            </div>
          ))}
        </div>

        {/* ============ BENTO ROW 1 ============ */}
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div
            data-reveal
            className="fx-lift flex flex-col rounded-3xl bg-[#16162e] p-8 text-white shadow-xl"
          >
            <span className="self-start rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/70">
              Consultancy
            </span>
            <h2 className="mt-5 text-2xl font-bold tracking-tight">
              Tailored research support
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
              Questionnaire design, data analysis, reporting, and dashboards —
              scoped to your project, from pilot study to publication.
            </p>
            <Link
              href="/consultancy"
              className="focus-ring mt-6 self-start rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold transition hover:scale-105 hover:bg-white/10"
            >
              Learn more
            </Link>
          </div>

          <div
            data-reveal
            style={{ transitionDelay: "0.12s" }}
            className="fx-lift flex flex-col items-center justify-center rounded-3xl bg-white p-8 text-center shadow-sm"
          >
            <span className="rounded-full bg-[#eef0f7] px-3 py-1 text-[11px] font-medium text-[#5b5bd6]">
              Training
            </span>
            <div className="mt-6 flex -space-x-3" aria-hidden="true">
              <span className="fx-wiggle-hover flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-[#8a8ae8] to-[#5b5bd6] text-2xl shadow-md">
                👩‍🏫
              </span>
              <span className="fx-wiggle-hover flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-[#67d6da] to-[#0d7377] text-2xl shadow-md">
                👨‍💻
              </span>
              <span className="fx-wiggle-hover flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-amber-300 to-[#c9a227] text-2xl shadow-md">
                👩‍🔬
              </span>
            </div>
            <h2 className="mt-6 text-xl font-bold tracking-tight text-[#16162e]">
              My training experience
            </h2>
            <p className="mt-2 text-sm text-[#16162e]/60">
              SPSS, R Studio, research methodology, and academic writing —
              hands-on workshops across India.
            </p>
            <Link
              href="/training"
              className="focus-ring mt-6 rounded-full bg-[#16162e] px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-105 hover:bg-[#2a2a52]"
            >
              View workshops
            </Link>
          </div>

          <div
            data-reveal
            style={{ transitionDelay: "0.24s" }}
            className="fx-lift flex flex-col rounded-3xl bg-white p-8 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-[#eef0f7] px-3 py-1 text-[11px] font-medium text-[#5b5bd6]">
                Client outcomes
              </span>
              <span className="text-xs font-semibold text-[#16162e]">★ 4.77</span>
            </div>
            <div className="mt-6 flex h-20 items-end gap-2" aria-hidden="true">
              {[40, 65, 50, 80, 60, 95, 75].map((h, i) => (
                <span
                  key={i}
                  style={{ height: `${h}%`, transitionDelay: `${0.3 + i * 0.08}s` }}
                  className={`fx-bar w-full rounded-full ${i === 5 ? "bg-[#5b5bd6]" : "bg-[#eef0f7]"}`}
                />
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="rounded-2xl border border-[#eef0f7] p-4 transition hover:border-[#5b5bd6]/30"
                >
                  <blockquote className="text-xs text-[#16162e]/60">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-2 text-xs">
                    <span className="font-semibold text-[#16162e]">{t.name}</span>
                    <span className="text-[#16162e]/40"> · {t.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        {/* ============ BENTO ROW 2 ============ */}
        <div className="mt-4 grid gap-4 lg:grid-cols-5">
          <div data-reveal className="fx-lift rounded-3xl bg-white p-8 shadow-sm lg:col-span-3">
            <h2 className="max-w-sm text-2xl font-bold tracking-tight text-[#16162e]">
              Move your project forward with transparent pricing
            </h2>
            <p className="mt-3 max-w-md text-sm text-[#16162e]/60">
              Fixed prices, clear turnaround times, and secure online payment via
              Razorpay. Institutional quotes available on request.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {pricedServices.map((s, i) => (
                <div
                  key={s.id}
                  data-reveal
                  style={{ transitionDelay: `${0.15 + i * 0.12}s` }}
                  className="fx-lift flex flex-col rounded-2xl border border-[#eef0f7] bg-[#fafbfe] p-4"
                >
                  <p className="text-[11px] font-medium text-[#16162e]/50">
                    {s.category}
                  </p>
                  <p className="mt-1 text-lg font-bold tracking-tight text-[#16162e]">
                    {formatINR(s.price)}
                  </p>
                  <p className="mt-1 flex-1 text-[11px] leading-snug text-[#16162e]/50">
                    {s.name}
                  </p>
                  <Link
                    href={`/book/${s.id}`}
                    className="focus-ring mt-3 rounded-full bg-[#16162e] px-4 py-1.5 text-center text-xs font-semibold text-white transition hover:scale-105 hover:bg-[#2a2a52]"
                  >
                    Book
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div
            data-reveal
            style={{ transitionDelay: "0.12s" }}
            className="fx-lift relative flex flex-col overflow-hidden rounded-3xl bg-[#16162e] p-8 text-white shadow-xl lg:col-span-2"
          >
            <span className="fx-bob absolute -right-4 top-8 rounded-full bg-[#5b5bd6] px-4 py-2 text-xs font-semibold shadow-lg">
              20,000+ trained
            </span>
            <div className="mt-4 flex h-28 items-end gap-3" aria-hidden="true">
              {[35, 55, 75, 60, 90].map((h, i) => (
                <span
                  key={i}
                  style={{ height: `${h}%`, transitionDelay: `${0.3 + i * 0.1}s` }}
                  className={`fx-bar w-full rounded-t-xl ${
                    i === 4
                      ? "bg-gradient-to-t from-[#5b5bd6] to-[#8a8ae8]"
                      : "bg-white/10"
                  }`}
                />
              ))}
            </div>
            <p
              data-count="4.77"
              data-decimals="2"
              className="mt-6 text-4xl font-bold tracking-tight"
            >
              0.00
            </p>
            <p className="mt-1 flex-1 text-sm text-white/60">
              Average workshop rating from 120 reviews across universities and
              industry.
            </p>
            <Link
              href="/book/training-workshop"
              className="focus-ring mt-6 self-start rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#16162e] transition hover:scale-105 hover:bg-white/90"
            >
              Book a seat
            </Link>
          </div>
        </div>

        {/* ============ CLIENTS MARQUEE + CTA ============ */}
        <div data-reveal className="mt-4 rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-center text-xs font-medium uppercase tracking-widest text-[#16162e]/40">
            Trusted by leading institutions across India
          </p>
          <div className="fx-marquee mt-5" aria-hidden="false">
            <ul className="fx-marquee-track text-sm font-semibold text-[#16162e]/60">
              {[...clients, ...clients].map((c, i) => (
                <li key={i} className="flex items-center gap-3 whitespace-nowrap">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-[#5b5bd6]"
                  />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          data-reveal
          className="fx-gradient mt-4 rounded-3xl bg-gradient-to-br from-[#5b5bd6] via-[#7a5bd6] to-[#3d3da8] p-10 text-center text-white shadow-xl"
        >
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to start your project?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/75">
            Book a consultation, submit your questionnaire for review, or order
            data analysis — pay securely online via Razorpay.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/book"
              className="focus-ring rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#16162e] transition hover:scale-105 hover:bg-white/90"
            >
              View Services &amp; Book
            </Link>
            <a
              href={`tel:${site.phoneHref}`}
              className="focus-ring rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-white/10"
            >
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
