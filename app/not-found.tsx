import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="font-display text-6xl font-bold text-cares-teal">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-cares-navy">
        Page not found
      </h1>
      <p className="mt-3 text-cares-slate">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/">Back to Home</Button>
        <Button variant="outline" href="/book">
          View Services
        </Button>
      </div>
    </section>
  );
}
