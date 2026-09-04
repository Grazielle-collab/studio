// studio/components/Sidebar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { FiMessageCircle, FiInstagram } from "react-icons/fi";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const origem = searchParams.get('origem') || '';

  const isActive = (path: string) => pathname === path;

  const getLink = (path: string) => {
    return origem ? `${path}?origem=${origem}` : path;
  };

  // Função para registrar cliques
  const registrarClique = async (origem: string) => {
    try {
      await fetch("http://127.0.0.1:8000/api/lead/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: `Lead ${origem} - Cardeal Studio`,
          telefone: "00000000000",
          origem: origem,
          mensagem: `Clique no botão ${origem}`,
        }),
      });
    } catch (error) {
      console.error('Erro ao registrar:', error);
    }
  };

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
              href={getLink("/")}
              className={`text-3xl font-[family-name:var(--font-montserrat)] font-light hover:translate-x-2 transition duration-300 ${
                isActive("/") ? "text-black" : "text-gray-600"
              }`}
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href={getLink("/cardeal-studio")}
              className={`text-3xl font-[family-name:var(--font-montserrat)] font-light hover:translate-x-2 transition duration-300 ${
                isActive("/cardeal-studio") ? "text-black" : "text-gray-600"
              }`}
              onClick={() => setOpen(false)}
            >
              Cardeal Studio
            </Link>
            <Link
              href={getLink("/unidade")}
              className={`text-3xl font-[family-name:var(--font-montserrat)] font-light hover:translate-x-2 transition duration-300 ${
                isActive("/unidade") ? "text-black" : "text-gray-600"
              }`}
              onClick={() => setOpen(false)}
            >
              Unidade
            </Link>
            <Link
              href={getLink("/agendamento")}
              className={`text-3xl font-[family-name:var(--font-montserrat)] font-light hover:translate-x-2 transition duration-300 ${
                isActive("/agendamento") ? "text-black" : "text-gray-600"
              }`}
              onClick={() => setOpen(false)}
            >
              Agendamento
            </Link>
            <Link
              href={getLink("/artista-cardeal")}
              className={`text-3xl font-[family-name:var(--font-montserrat)] font-light hover:translate-x-2 transition duration-300 ${
                isActive("/artista-cardeal") ? "text-black" : "text-gray-600"
              }`}
              onClick={() => setOpen(false)}
            >
              Artista Cardeal
            </Link>
            <Link
              href={getLink("/contato")}
              className={`text-3xl font-[family-name:var(--font-montserrat)] font-light hover:translate-x-2 transition duration-300 ${
                isActive("/contato") ? "text-black" : "text-gray-600"
              }`}
              onClick={() => setOpen(false)}
            >
              Contato
            </Link>
          </nav>

          <div className="flex gap-6 mt-20">
            {/* WhatsApp - com rastreamento */}
            <Link
              href="https://wa.me/5511926938136?text=Olá!%20Gostaria%20de%20conhecer%20os%20serviços%20do%20CardealStudio%20"
              target="_blank"
              className="hover:opacity-60 transition duration-300"
              onClick={() => registrarClique('Sidebar - WhatsApp')}
            >
              <FiMessageCircle size={24} strokeWidth={1.5} />
            </Link>

            {/* Instagram - com rastreamento */}
            <Link
              href="https://instagram.com/cardealstudio_"
              target="_blank"
              className="hover:opacity-60 transition duration-300"
              onClick={() => registrarClique('Sidebar - Instagram')}
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