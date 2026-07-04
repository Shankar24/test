import Link from "next/link";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site";

const offerings = [
  {
    href: "/training",
    icon: "📚",
    title: "Training",
    rating: "★ 4.77 rated by 99 customers",
    description:
      "Pan-India workshops on research methods, SPSS, R Studio, and academic writing — built from real academic and corporate experience.",
  },
  {
    href: "/consultancy",
    icon: "📊",
    title: "Consultancy",
    rating: "★ 4.76 rated by 21 customers",
    description:
      "Questionnaire design, data analysis, reporting, and dashboards for industry and academic research projects.",
  },
  {
    href: "/research",
    icon: "🔬",
    title: "Research",
    rating: null,
    description:
      "Multidisciplinary research support to address complex problems with rigorous methodology and actionable insights.",
  },
];

const clients = [
  { name: "National Institute of Design", city: "Bangalore" },
  { name: "Central University", city: "Kasargode" },
  { name: "Nirma University", city: "Ahmedabad" },
  { name: "PES University", city: "Bangalore" },
  { name: "VIT", city: "Vellore" },
  { name: "PDPU University", city: "Gandhinagar" },
];

const testimonials = [
  {
    quote:
      "Taking a workshop with CARES has really jumpstarted my learning productivity. They provided thoughtful guidance and created a helpful environment for students to share their work in progress.",
    name: "Santhosh Kumari",
    role: "Dept. of Commerce, University of Jammu",
  },
  {
    quote:
      "Attending the workshop on R Studio delivered by CARES proved to be an outstanding experience. This workshop will provide great support in my research.",
    name: "Research Scholar",
    role: "R Studio Workshop Participant",
  },
  {
    quote:
      "Focused, professional, calmly delivered with a perfect balance of theory and practice. CARES is excellent at constructive feedback.",
    name: "Workshop Participant",
    role: "Research Methodology Training",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-cares-navy via-cares-navy to-cares-teal text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-cares-gold">
            {site.tagline}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Research expertise you can build on
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            {site.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="secondary" href="/book">
              Book a Service &amp; Pay Online
            </Button>
            <Button variant="ghost" href="/consultancy">
              Explore Consultancy
            </Button>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <SectionHeading
          title="What We Offer"
          subtitle="From training thousands of participants to delivering bespoke analysis for universities and corporations across India."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {offerings.map((o) => (
            <Link
              key={o.href}
              href={o.href}
              className="focus-ring group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-3xl" aria-hidden="true">
                {o.icon}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-cares-navy">
                {o.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-cares-slate">{o.description}</p>
              {o.rating && (
                <p className="mt-3 text-sm font-medium text-cares-gold">{o.rating}</p>
              )}
              <span className="mt-4 text-sm font-semibold text-cares-teal group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-cares-cream">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-14 md:grid-cols-4">
          {site.stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-bold text-cares-teal sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-cares-slate">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <SectionHeading
          title="Our Clients & Reach"
          subtitle="Trusted by leading universities and organizations across India."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((c) => (
            <li
              key={c.name}
              className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <p className="font-semibold text-cares-navy">{c.name}</p>
              <p className="text-sm text-cares-slate">{c.city}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials */}
      <section className="bg-cares-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
            What Our Clients Say
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
              >
                <blockquote className="flex-1 text-sm leading-relaxed text-white/85">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-white/60">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:py-20">
        <h2 className="font-display text-3xl font-bold text-cares-navy sm:text-4xl">
          Ready to start your project?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-cares-slate">
          Book a consultation, submit your questionnaire for review, or order data
          analysis — pay securely online via Razorpay.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/book">View Services &amp; Book</Button>
          <Button variant="outline" href={`tel:${site.phoneHref}`}>
            Call {site.phone}
          </Button>
        </div>
      </section>
    </>
  );
}
