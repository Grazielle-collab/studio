// studio/hooks/useSmoothScroll.ts
"use client";

/**
 * Rola suavemente para uma seção, compensando o header fixo.
 * Usa `window.scrollTo` com behavior smooth (nativo, mas confiável).
 */
export function scrollToSection(id: string, offset = 88) {
  const element = document.getElementById(id);
  if (!element) return;

  const top =
    element.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
}

/**
 * Rola para o topo da página.
 */
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}