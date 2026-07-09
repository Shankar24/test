"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox, { type LightboxItem } from "@/components/Lightbox";

export default function ModelShowcase({ items }: { items: LightboxItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <article
            key={item.src}
            className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-cares-gold/40 hover:shadow-xl"
          >
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Preview ${item.title}`}
              className="focus-ring relative block overflow-hidden bg-cares-cream"
            >
              <Image
                src={item.src}
                alt={item.title}
                width={640}
                height={480}
                className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-cares-navy/0 transition duration-300 group-hover:bg-cares-navy/40">
                <span className="translate-y-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-cares-navy opacity-0 shadow transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  View model
                </span>
              </span>
            </button>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-sm font-bold tracking-tight text-cares-navy">
                {item.title}
              </h3>
              {item.description && (
                <p className="mt-1.5 flex-1 text-xs leading-relaxed text-cares-slate">
                  {item.description}
                </p>
              )}
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="focus-ring mt-4 self-start text-xs font-semibold text-cares-teal transition hover:text-cares-blue"
              >
                Preview →
              </button>
            </div>
          </article>
        ))}
      </div>

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
