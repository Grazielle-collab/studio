// studio/hooks/useSmoothScroll.ts
"use client";

export function scrollToSection(id: string, offset = 88) {
  const element = document.getElementById(id);
  if (!element) return;

  if (typeof window !== "undefined" && window.lenis) {
    window.lenis.scrollTo(element, { offset: -offset, duration: 1.4 });
  } else {
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export function scrollToTop() {
  if (typeof window !== "undefined" && window.lenis) {
    window.lenis.scrollTo(0, { duration: 1.4 });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}