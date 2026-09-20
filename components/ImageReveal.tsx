// studio/components/ImageReveal.tsx
"use client";

import Image, { ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";

interface ImageRevealProps extends Omit<ImageProps, "className"> {
  delay?: number;
  className?: string;
  imgClassName?: string;
}

export default function ImageReveal({
  delay = 0,
  className = "",
  imgClassName = "",
  ...imageProps
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback: se por algum motivo o observer não disparar em 800ms,
    // força visibilidade (evita imagens "sumidas" para sempre)
    const timeout = setTimeout(() => setVisible(true), 800);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          clearTimeout(timeout);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.01, // dispara com qualquer pixel visível
        rootMargin: "0px 0px 0px 0px",
      }
    );

    observer.observe(el);
    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Camada de "cortina" — desliza para a direita quando visível */}
      <div
        className="absolute inset-0 bg-[#f2eded] z-10 pointer-events-none"
        style={{
          transform: visible ? "translateX(101%)" : "translateX(0)",
          transition: `transform 1200ms cubic-bezier(0.77, 0, 0.175, 1) ${delay}ms`,
        }}
      />

      <Image
        {...imageProps}
        className={`${imgClassName} w-full h-full`}
        style={{
          transform: visible ? "scale(1)" : "scale(1.1)",
          opacity: visible ? 1 : 0.6,
          transition: `transform 1400ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, opacity 900ms ease-out ${delay}ms`,
        }}
      />
    </div>
  );
}