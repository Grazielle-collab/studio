// studio/components/HeroVideo.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroVideo() {
  const [videoReady, setVideoReady] = useState(false);

  const whatsappLink =
    "https://wa.me/5511926938136?text=Olá!%20Gostaria%20de%20conhecer%20os%20serviços%20do%20CardealStudio";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* VÍDEO DE FUNDO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onCanPlay={() => setVideoReady(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY ESCURO para contraste do texto */}
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* CONTEÚDO SOBREPOSTO */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 text-white">
        <Image
          src="/CardealStudio(1).png"
          alt="Cardeal Studio"
          width={400}
          height={400}
          priority
          className="w-[220px] md:w-[380px] brightness-0 invert"
        />

        <p className="mt-10 max-w-xl text-lg md:text-xl leading-9 text-white/90 font-light">
          Beleza sofisticada, atendimento personalizado e experiências exclusivas.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-14 inline-block border border-white px-10 py-4 uppercase tracking-[4px] text-sm hover:bg-white hover:text-black transition duration-500"
        >
          Agendar atendimento
        </a>
      </div>

      {/* INDICADOR DE SCROLL */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 z-20 text-white">
        <span className="text-[10px] uppercase tracking-[4px]">Role</span>
        <div className="w-[1px] h-12 bg-white/60 animate-pulse" />
      </div>
    </section>
  );
}