// studio/hooks/useScrollDirection.ts
"use client";

import { useEffect, useState } from "react";

type Direction = "up" | "down" | "top";

/**
 * Detecta a direção atual do scroll.
 * - "top": usuário está no topo da página (scrollY < threshold)
 * - "down": usuário está rolando para baixo
 * - "up": usuário está rolando para cima
 */
export function useScrollDirection(threshold = 10): Direction {
  const [direction, setDirection] = useState<Direction>("top");

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateDirection = () => {
      const scrollY = window.scrollY;
      const diff = scrollY - lastScrollY;

      // No topo
      if (scrollY < 100) {
        setDirection("top");
      }
      // Ignora micro oscilações (inércia, trackpad)
      else if (Math.abs(diff) > threshold) {
        setDirection(diff > 0 ? "down" : "up");
      }

      lastScrollY = scrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateDirection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return direction;
}