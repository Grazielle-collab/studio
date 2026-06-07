"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMessageCircle, FiInstagram } from "react-icons/fi";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BOTÃO MENU */}
      <div className="flex justify-end pt-10 pr-10">
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-4"
        >
          <span className="uppercase tracking-[4px] text-xs text-black">
            Menu
          </span>
          <div className="flex flex-col gap-2">
            <span className="w-8 h-[1px] bg-black"></span>
            <span className="w-8 h-[1px] bg-black"></span>
          </div>
        </button>
      </div>

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[500px] bg-[#e9e2db] z-50 transition-all duration-500 ${
          open ? "translate-x-0 visible" : "translate-x-full invisible"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-10 right-10 text-4xl font-light"
        >
          ×
        </button>

        <div className="flex flex-col justify-center h-full px-16 pt-20">
          <nav className="flex flex-col gap-10">
            <Link
              href="/"
              className="text-3xl font-[family-name:var(--font-montserrat)] font-light hover:translate-x-2 transition duration-300"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/cardeal-studio"
              className="text-3xl font-[family-name:var(--font-montserrat)] font-light hover:translate-x-2 transition duration-300"
              onClick={() => setOpen(false)}
            >
              Cardeal Studio
            </Link>
            <Link
              href="/unidade"
              className="text-3xl font-[family-name:var(--font-montserrat)] font-light hover:translate-x-2 transition duration-300"
              onClick={() => setOpen(false)}
            >
              Unidade
            </Link>
            <Link
              href="/agendamento"
              className="text-3xl font-[family-name:var(--font-montserrat)] font-light hover:translate-x-2 transition duration-300"
              onClick={() => setOpen(false)}
            >
              Agendamento
            </Link>
            <Link
              href="/artista-cardeal"
              className="text-3xl font-[family-name:var(--font-montserrat)] font-light hover:translate-x-2 transition duration-300"
              onClick={() => setOpen(false)}
            >
              Artista Cardeal
            </Link>
            <Link
              href="/contato"
              className="text-3xl font-[family-name:var(--font-montserrat)] font-light hover:translate-x-2 transition duration-300"
              onClick={() => setOpen(false)}
            >
              Contato
            </Link>
          </nav>

          <div className="flex gap-6 mt-20">
            <Link
              href="https://wa.me/551192693-8136?text=Olá!%20Gostaria%20de%20conhecer%20os%20serviços%20do%20CardealStudio%20"
              target="_blank"
              className="hover:opacity-60 transition duration-300"
            >
              <FiMessageCircle size={24} strokeWidth={1.5} />
            </Link>
            <Link
              href="https://instagram.com/cardealstudio_"
              target="_blank"
              className="hover:opacity-60 transition duration-300"
            >
              <FiInstagram size={24} strokeWidth={1.5} />
            </Link>
            <Link
              href="/politica-de-privacidade"
              className="hover:opacity-60 transition duration-300 flex items-center gap-2"
              onClick={() => setOpen(false)}
            >
              <span className="text-sm font-[family-name:var(--font-montserrat)]">
                Política de Privacidade
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}