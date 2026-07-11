"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Item = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
};

export default function MediaLightbox({
  items,
  openIndex,
  onClose,
}: {
  items: Item[];
  openIndex: number | null;
  onClose: () => void;
}) {
  const open = openIndex !== null;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (openIndex !== null) setCurrent(openIndex);
  }, [openIndex]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % items.length);
      if (e.key === "ArrowLeft")
        setCurrent((c) => (c - 1 + items.length) % items.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, items.length, onClose]);

  if (!open) return null;
  const item = items[current];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title || item.alt}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-cares-navy/85 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close preview"
        className="focus-ring absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20"
        onClick={onClose}
      >
        Close
      </button>

      <button
        type="button"
        aria-label="Previous"
        className="focus-ring absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white hover:bg-white/20 sm:block"
        onClick={(e) => {
          e.stopPropagation();
          setCurrent((c) => (c - 1 + items.length) % items.length);
        }}
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next"
        className="focus-ring absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white hover:bg-white/20 sm:block"
        onClick={(e) => {
          e.stopPropagation();
          setCurrent((c) => (c + 1) % items.length);
        }}
      >
        ›
      </button>

      <div
        className="max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-lift"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/10] bg-cares-cream">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 896px"
            priority
          />
        </div>
        {(item.title || item.description) && (
          <div className="border-t border-cares-navy/5 px-5 py-4">
            {item.title && (
              <h3 className="font-display text-xl font-semibold text-cares-navy">
                {item.title}
              </h3>
            )}
            {item.description && (
              <p className="mt-1 text-sm text-cares-slate">{item.description}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
