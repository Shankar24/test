"use client";

import { useEffect } from "react";

function countUp(el: HTMLElement, reduced: boolean) {
  if (el.dataset.counted) return;
  el.dataset.counted = "1";
  const target = parseFloat(el.dataset.count || "0");
  const decimals = parseInt(el.dataset.decimals || "0", 10);
  const suffix = el.dataset.suffix || "";
  const format = (v: number) =>
    (decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString("en-IN")) +
    suffix;

  if (reduced) {
    el.textContent = format(target);
    return;
  }

  const duration = 1400;
  const start = performance.now();
  function frame(now: number) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = format(target * eased);
    if (p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

export default function HomeFx() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.add("in-view");
          el.querySelectorAll<HTMLElement>("[data-count]").forEach((c) =>
            countUp(c, reduced)
          );
          if (el.dataset.count) countUp(el, reduced);
          io.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
