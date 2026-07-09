import type { Metadata } from "next";
import Button from "@/components/Button";
import GalleryGrid from "@/components/GalleryGrid";
import PageHero from "@/components/PageHero";
import { listAssetImages, titleFromFilename } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Moments from CARES training programmes, workshops, and research events across India.",
};

export default function GalleryPage() {
  const items = listAssetImages("gallery").map((src) => ({
    src,
    title: titleFromFilename(src),
  }));

  return (
    <>
      <PageHero title="Gallery">
        <p>
          Moments from our training programmes, workshops, and research events
          with universities and institutions across India.
        </p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16">
        {items.length > 0 ? (
          <GalleryGrid items={items} />
        ) : (
          <div className="mx-auto max-w-xl rounded-2xl bg-cares-cream p-10 text-center">
            <span className="text-3xl" aria-hidden="true">
              📷
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold text-cares-navy">
              Photos coming soon
            </h2>
            <p className="mt-2 text-sm text-cares-slate">
              We&apos;re curating photographs from our recent workshops and
              training programmes. Check back shortly.
            </p>
          </div>
        )}

        <div className="mt-14 text-center">
          <p className="text-sm text-cares-slate">
            Want CARES at your institution?
          </p>
          <div className="mt-4">
            <Button href="/book">Book Now</Button>
          </div>
        </div>
      </section>
    </>
  );
}
