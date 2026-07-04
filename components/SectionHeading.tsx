import type { ReactNode } from "react";

export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="font-display text-3xl font-bold text-cares-navy sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-cares-slate">{subtitle}</p>}
    </div>
  );
}
