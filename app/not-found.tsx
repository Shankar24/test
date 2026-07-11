import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cares-gold">
        404
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-cares-navy">
        Page not found
      </h1>
      <p className="mt-3 text-sm text-cares-slate">
        The page you are looking for may have moved or no longer exists.
      </p>
      <Link
        href="/"
        className="focus-ring mt-8 inline-flex rounded-full bg-cares-navy px-6 py-3 text-sm font-semibold text-white"
      >
        Back to Home
      </Link>
    </section>
  );
}
