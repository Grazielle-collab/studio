// studio/hooks/useSmoothScroll.ts
"use client";

export function scrollToSection(id: string, offset = 88) {
  const element = document.getElementById(id);
  if (!element) return;

  if (typeof window !== "undefined" && window.lenis) {
    // ⚠️ No Lenis, offset positivo empurra PARA BAIXO.
    // Para compensar o header fixo, precisamos empurrar a seção para baixo
    // em `offset` px, então passamos POSITIVO.
    (window.lenis as unknown as {
      scrollTo: (
        target: HTMLElement,
        options: { offset: number; duration: number },
      ) => void;
    }).scrollTo(element, {
      offset: offset, // ✅ positivo agora
      duration: 1.4,
    });
  } else {
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export function scrollToTop() {
  if (typeof window !== "undefined" && window.lenis) {
    (window.lenis as unknown as {
      scrollTo: (target: number, options: { duration: number }) => void;
    }).scrollTo(0, { duration: 1.4 });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}