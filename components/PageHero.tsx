import type { ReactNode } from "react";

export default function PageHero({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-cares-navy text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-hero-glow opacity-90"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-cares-blue/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cares-gold">
          CARES
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {children && (
          <div className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
