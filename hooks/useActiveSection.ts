// studio/hooks/useActiveSection.ts
"use client";

import { useEffect, useState } from "react";

/**
 * Detecta qual seção está visível na tela com base no scroll.
 * Usa IntersectionObserver para performance.
 */
export function useActiveSection(sectionIds: string[], offset = 120) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        {
          // Considera a seção "ativa" quando ela cruza a linha do offset
          rootMargin: `-${offset}px 0px -60% 0px`,
          threshold: 0,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds, offset]);

  return active;
}