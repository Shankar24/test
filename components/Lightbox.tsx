"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";

export type LightboxItem = {
  src: string;
  title: string;
  description?: string;
};

export default function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}) {
  const item = items[index];
  const prev = useCallback(
    () => onNavigate((index - 1 + items.length) % items.length),
    [index, items.length, onNavigate]
  );
  const next = useCallback(
    () => onNavigate((index + 1) % items.length),
    [index, items.length, onNavigate]
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fx-fade fixed inset-0 z-[100] flex items-center justify-center bg-cares-navy/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close preview"
        onClick={onClose}
        className="focus-ring absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl text-white transition hover:bg-white/20"
      >
        ✕
      </button>

      {items.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="focus-ring absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="focus-ring absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
          >
            →
          </button>
        </>
      )}

      <figure
        className="max-h-full w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
          <Image
            src={item.src}
            alt={item.title}
            width={1200}
            height={900}
            className="max-h-[72vh] w-full object-contain"
          />
        </div>
        <figcaption className="mt-4 text-center">
          <p className="text-base font-semibold text-white">{item.title}</p>
          {item.description && (
            <p className="mx-auto mt-1 max-w-xl text-sm text-white/70">
              {item.description}
            </p>
          )}
          {items.length > 1 && (
            <p className="mt-2 text-xs text-white/50">
              {index + 1} of {items.length}
            </p>
          )}
        </figcaption>
      </figure>
    </div>
  );
}
