// studio/components/RevealOnScroll.tsx
"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  /** Delay em ms para efeito cascata */
  delay?: number;
  /** Direção de entrada */
  direction?: "up" | "down" | "left" | "right";
  /** Distância do deslocamento em px */
  distance?: number;
  /** Duração em ms */
  duration?: number;
  /** Classes extras */
  className?: string;
  /** Se deve disparar apenas uma vez */
  once?: boolean;
}

export default function RevealOnScroll({
  children,
  delay = 0,
  direction = "up",
  distance = 40,
  duration = 900,
  className = "",
  once = true,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const translate = {
    up: `translate3d(0, ${distance}px, 0)`,
    down: `translate3d(0, -${distance}px, 0)`,
    left: `translate3d(${distance}px, 0, 0)`,
    right: `translate3d(-${distance}px, 0, 0)`,
  }[direction];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0, 0, 0)" : translate,
        transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: visible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}