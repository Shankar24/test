"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox, { type LightboxItem } from "@/components/Lightbox";

export default function GalleryGrid({ items }: { items: LightboxItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {items.map((item, i) => (
          <li key={item.src}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="focus-ring group relative block w-full overflow-hidden rounded-2xl bg-cares-cream shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Image
                src={item.src}
                alt={item.title}
                width={640}
                height={480}
                className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cares-navy/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between p-4 opacity-0 transition duration-300 group-hover:opacity-100">
                <span className="text-left text-sm font-semibold text-white">
                  {item.title}
                </span>
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-sm text-white backdrop-blur"
                >
                  +
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {open !== null && (
        <Lightbox
          items={items}
          index={open}
          onClose={() => setOpen(null)}
          onNavigate={setOpen}
        />
      )}
    </>
  );
}
