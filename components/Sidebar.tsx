"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Camera } from "lucide-react";

export default function Sidebar() {

  const [open, setOpen] = useState(false);

  return (
    <>
      
      {/* BOTÃO MENU */}
    <button
    onClick={() => setOpen(true)}
    className="fixed top-10 right-10 z-50 flex items-center gap-4"
    >

    <span className="uppercase tracking-[4px] text-xs text-black">
        Menu
    </span>

    <div className="flex flex-col gap-2">
        <span className="w-8 h-[1px] bg-black"></span>
        <span className="w-8 h-[1px] bg-black"></span>
    </div>

    </button>

      {/* SIDEBAR */}
      <div
    className={`fixed top-0 right-0 h-full w-full md:w-[500px] bg-[#e9e2db] z-50 transition-transform duration-500 ${
    open ? "translate-x-0" : "translate-x-full"
    }`}
    >
        {/* FECHAR */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-10 right-10 text-4xl font-light"
        >
          ×
        </button>

        {/* MENU */}
        <div className="flex flex-col justify-center h-full px-16">

          <nav className="flex flex-col gap-10">

            <Link
              href="/"
              className="text-3xl font-[family-name:var(--font-montserrat)] font-light hover:translate-x-2 transition duration-300"
            >
              Home
            </Link>

            <Link
              href="/cardeal-studio"
              className="text-3xl font-[family-name:var(--font-montserrat)] font-light hover:translate-x-2 transition duration-300"
            >
              Cardeal Studio
            </Link>

            <Link
              href="/unidade"
              className="text-3xl font-[family-name:var(--font-montserrat)] font-light hover:translate-x-2 transition duration-300"
            >
              Unidade
            </Link>

            <Link
              href="/agendamento"
              className="text-3xl font-[family-name:var(--font-montserrat)] font-light hover:translate-x-2 transition duration-300"
            >
              Agendamento
            </Link>

            <Link
              href="/artista-cardeal"
              className="text-3xl font-[family-name:var(--font-montserrat)] font-light hover:translate-x-2 transition duration-300"
            >
              Artista Cardeal
            </Link>

            <Link
              href="/contato"
              className="text-3xl font-[family-name:var(--font-montserrat)] font-light hover:translate-x-2 transition duration-300"
            >
              Contato
            </Link>

          </nav>
          <div className="flex gap-6 mt-20">

    <Link
        href="https://wa.me/5511997907029"
        target="_blank"
        className="hover:opacity-60 transition duration-300"
    >
        <MessageCircle size={24} strokeWidth={1.5} />
    </Link>

    <Link
        href="https://instagram.com/cardealstudio_"
        target="_blank"
        className="hover:opacity-60 transition duration-300"
    >
    <Camera size={24} strokeWidth={1.5} />
  </Link>

</div>

        </div>

      </div>

    </>
  );
}