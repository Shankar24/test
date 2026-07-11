"use client";

import Image from "next/image";
import { useState } from "react";
import MediaLightbox from "@/components/MediaLightbox";

export function ResearchModelGrid({
  models,
}: {
  models: readonly {
    title: string;
    description: string;
    image: string;
  }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = models.map((m) => ({
    src: m.image,
    alt: m.title,
    title: m.title,
    description: m.description,
  }));

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {models.map((m, i) => (
          <button
            key={m.title}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="fx-lift group overflow-hidden rounded-2xl border border-white/60 bg-white/70 text-left shadow-glass backdrop-blur"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-cares-soft">
              <Image
                src={m.image}
                alt={m.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cares-navy/50 via-transparent to-transparent opacity-70" />
            </div>
            <div className="p-4">
              <h3 className="font-display text-lg font-semibold text-cares-navy">
                {m.title}
              </h3>
              <p className="mt-1.5 line-clamp-2 text-sm text-cares-slate">
                {m.description}
              </p>
            </div>
          </button>
        ))}
      </div>
      <MediaLightbox
        items={items}
        openIndex={openIndex}
        onClose={() => setOpenIndex(null)}
      />
    </>
  );
}

export function GalleryGrid({
  images,
  limit,
}: {
  images: readonly string[];
  limit?: number;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shown = limit ? images.slice(0, limit) : images;
  const items = shown.map((src, i) => ({
    src,
    alt: `CARES gallery image ${i + 1}`,
  }));

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {shown.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/50 bg-white/60 shadow-glass"
          >
            <div className="relative overflow-hidden">
              <Image
                src={src}
                alt={`CARES gallery image ${i + 1}`}
                width={800}
                height={600}
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-cares-navy/0 transition group-hover:bg-cares-navy/20" />
            </div>
          </button>
        ))}
      </div>
      <MediaLightbox
        items={items}
        openIndex={openIndex}
        onClose={() => setOpenIndex(null)}
      />
    </>
  );
}
