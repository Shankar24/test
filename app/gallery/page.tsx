import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { GalleryGrid } from "@/components/MediaGrids";
import { galleryImages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from CARES workshops, training programmes, and institutional engagements across India.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero title="Gallery">
        <p>
          A curated look at CARES training sessions, collaborations, and research
          engagements.
        </p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <GalleryGrid images={galleryImages} />
      </section>
    </>
  );
}
