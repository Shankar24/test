import type { ReactNode } from "react";

export default function PageHero({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-gradient-to-br from-cares-navy to-cares-teal text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <h1 className="font-display text-4xl font-bold sm:text-5xl">{title}</h1>
        {children && <div className="mt-4 max-w-2xl text-white/85">{children}</div>}
      </div>
    </section>
  );
}
