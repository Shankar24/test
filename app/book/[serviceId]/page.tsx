import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookingForm from "@/components/BookingForm";
import { getService, services } from "@/lib/services";

type Props = { params: Promise<{ serviceId: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ serviceId: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceId } = await params;
  const service = getService(serviceId);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `Book ${service.name}`,
    description: service.description,
  };
}

export default async function BookServicePage({ params }: Props) {
  const { serviceId } = await params;
  const service = getService(serviceId);
  if (!service) notFound();

  return (
    <section className="mx-auto max-w-2xl px-4 py-12">
      <Link
        href="/book"
        className="focus-ring rounded text-sm font-medium text-cares-teal hover:underline"
      >
        ← All services
      </Link>
      <h1 className="mt-4 font-display text-3xl font-bold text-cares-navy">
        Book: {service.name}
      </h1>
      <p className="mt-2 text-sm text-cares-slate">{service.description}</p>
      <div className="mt-8">
        <BookingForm service={service} />
      </div>
    </section>
  );
}
