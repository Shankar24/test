import Image from "next/image";
import Link from "next/link";
import HomeFx from "@/components/HomeFx";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import { GalleryGrid, ResearchModelGrid } from "@/components/MediaGrids";
import {
  consultancyServices,
  galleryImages,
  researchModels,
  testimonials,
  trainingPrograms,
} from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <HomeFx />

      {/* 1. Hero */}
      <section className="relative min-h-[88vh] overflow-hidden bg-cares-navy text-white">
        <Image
          src="/assets/gallery/1.jpg"
          alt="CARES research training and consultancy"
          fill
          priority
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-cares-navy via-cares-navy/92 to-cares-teal/80"
        />
        <div
          aria-hidden="true"
          className="fx-drift pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-cares-blue/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="fx-drift pointer-events-none absolute bottom-0 left-10 h-64 w-64 rounded-full bg-cares-gold/20 blur-3xl"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-4 py-20">
          <p className="fx-up text-xs font-semibold uppercase tracking-[0.28em] text-cares-gold">
            CARES
          </p>
          <h1 className="fx-up fx-d1 mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            Applied Research, Analytics &amp; Training for Smarter Decisions
          </h1>
          <p className="fx-up fx-d2 mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            CARES helps scholars, institutions, NGOs, and businesses transform
            research ideas into rigorous methodology, meaningful data analysis,
            insightful dashboards, and publication-ready reports.
          </p>
          <div className="fx-up fx-d3 mt-9 flex flex-wrap gap-3">
            <Button href="/book" variant="secondary">
              Book Now
            </Button>
            <Button href="#services" variant="ghost">
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Trust indicators */}
      <section className="relative z-10 -mt-10 px-4">
        <div
          data-reveal
          className="mx-auto grid max-w-6xl gap-3 rounded-2xl border border-white/70 bg-white/85 p-4 shadow-lift backdrop-blur sm:grid-cols-5 sm:p-5"
        >
          {site.stats.map((s) => (
            <div key={s.label} className="rounded-xl bg-cares-cream/80 px-3 py-4 text-center">
              <p
                className="font-display text-2xl font-semibold text-cares-navy sm:text-3xl"
                data-count={s.count}
                data-decimals={"decimals" in s ? s.decimals : 0}
                data-suffix={s.suffix}
              >
                {s.value}
              </p>
              <p className="mt-1 text-[11px] font-medium leading-snug text-cares-slate sm:text-xs">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. About CARES */}
      <section className="section-pad mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2" data-reveal>
          <div>
            <SectionHeading
              eyebrow="About CARES"
              title="A Bangalore centre for rigorous research support"
            />
            <p className="mt-5 text-sm leading-relaxed text-cares-slate sm:text-base">
              {site.fullName} partners with universities, research institutions,
              NGOs, and businesses across India. We combine academic depth with
              practical analytics — from methodology design to dashboards and
              publication-ready reporting.
            </p>
            <div className="mt-7">
              <Button href="/about" variant="outline">
                Learn more about us
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl shadow-lift">
            <Image
              src="/assets/gallery/4.jpg"
              alt="CARES workshop and research engagement"
              width={900}
              height={700}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-cares-navy/80 to-transparent p-6 text-white">
              <p className="font-display text-xl font-semibold">
                20+ years of applied research practice
              </p>
              <p className="mt-1 text-sm text-white/75">
                Training · Consultancy · Research — delivered pan-India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Training + 5. Consultancy */}
      <section
        id="services"
        className="bg-gradient-to-b from-cares-cream to-white section-pad"
      >
        <div className="mx-auto max-w-6xl">
          <div data-reveal>
            <SectionHeading
              eyebrow="Training"
              title="Training programmes that build lasting capability"
              subtitle="Practical workshops for scholars, faculty, and professional teams."
            />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {trainingPrograms.map((p) => (
              <div
                key={p.title}
                data-reveal
                className="glass-card fx-lift p-5"
              >
                <h3 className="font-display text-lg font-semibold text-cares-navy">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-cares-slate">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/training" variant="outline">
              View all training
            </Button>
          </div>

          <div className="mt-20" data-reveal>
            <SectionHeading
              eyebrow="Consultancy"
              title="End-to-end research consultancy"
              subtitle="From instrument design to analysis, modelling, and publication support."
            />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {consultancyServices.map((s) => (
              <div
                key={s.title}
                data-reveal
                className="glass-card fx-lift p-5"
              >
                <h3 className="font-display text-lg font-semibold text-cares-navy">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-cares-slate">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/consultancy" variant="outline">
              Explore consultancy
            </Button>
          </div>
        </div>
      </section>

      {/* 6. Research & Data Visualization Models */}
      <section className="section-pad mx-auto max-w-6xl">
        <div data-reveal>
          <SectionHeading
            eyebrow="Research"
            title="Research &amp; data visualization models"
            subtitle="A selection of modelling and analytics outputs from CARES projects."
          />
        </div>
        <div className="mt-10" data-reveal>
          <ResearchModelGrid models={researchModels} />
        </div>
        <div className="mt-8 text-center">
          <Button href="/research" variant="outline">
            View research services
          </Button>
        </div>
      </section>

      {/* 7. Gallery */}
      <section className="bg-cares-cream/60 section-pad">
        <div className="mx-auto max-w-6xl">
          <div data-reveal>
            <SectionHeading
              eyebrow="Gallery"
              title="Moments from workshops and engagements"
              subtitle="A glimpse of CARES training programmes and institutional collaborations."
            />
          </div>
          <div className="mt-10" data-reveal>
            <GalleryGrid images={galleryImages} limit={9} />
          </div>
          <div className="mt-8 text-center">
            <Button href="/gallery" variant="outline">
              Open full gallery
            </Button>
          </div>
        </div>
      </section>

      {/* 8. Trusted institutions */}
      <section className="section-pad mx-auto max-w-6xl">
        <div data-reveal>
          <SectionHeading
            eyebrow="Trusted institutions"
            title="Chosen by leading universities and institutes"
          />
        </div>
        <div className="fx-marquee mt-10" data-reveal>
          <div className="fx-marquee-track">
            {[...site.institutions, ...site.institutions].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="whitespace-nowrap rounded-full border border-cares-navy/10 bg-white px-5 py-2 text-sm font-semibold text-cares-navy shadow-sm"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="bg-gradient-to-b from-white to-cares-cream section-pad">
        <div className="mx-auto max-w-6xl">
          <div data-reveal>
            <SectionHeading
              eyebrow="Testimonials"
              title="What our clients say"
            />
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                data-reveal
                className="glass-card fx-lift p-6"
              >
                <p className="text-sm leading-relaxed text-cares-slate">
                  “{t.quote}”
                </p>
                <footer className="mt-4">
                  <p className="font-semibold text-cares-navy">{t.name}</p>
                  <p className="text-xs text-cares-slate">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Contact CTA */}
      <section className="section-pad px-4">
        <div
          data-reveal
          className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-cares-navy px-6 py-14 text-center text-white shadow-lift sm:px-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-hero-glow opacity-80"
          />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cares-gold">
              Get in touch
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to advance your research?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
              Share your requirement and our team will guide you on the right
              training, consultancy, or analytics engagement.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/book" variant="secondary">
                Book Now
              </Button>
              <Button href="/contact" variant="ghost">
                Contact Us
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/60">
              <Link href={`tel:${site.phoneHref}`} className="hover:text-cares-gold">
                {site.phone}
              </Link>
              {" · "}
              <Link href={`mailto:${site.email}`} className="hover:text-cares-gold">
                {site.email}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
