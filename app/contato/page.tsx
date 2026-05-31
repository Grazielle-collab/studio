"use client";

import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function Contato() {
  const [status, setStatus] = useState("");

  return (
    <main className="bg-[#f3efea] text-[#111111] min-h-screen font-[family-name:var(--font-montserrat)]">

      <Sidebar />

      <section className="max-w-6xl mx-auto px-8 md:px-20 py-40">

        <div className="max-w-3xl">
          <p className="uppercase tracking-[8px] text-sm text-neutral-500">Contato</p>
          <h1 className="mt-8 text-3xl md:text-7xl font-light leading-tight">
            Conexões que vão além da estética.
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-24 mt-28">

          <div className="space-y-12">
            <div>
              <p className="uppercase tracking-[4px] text-sm text-neutral-500 mb-4">Email</p>
              <p className="text-xl">contato@cardealstudio.com</p>
            </div>
            <div>
              <p className="uppercase tracking-[4px] text-sm text-neutral-500 mb-4">Telefone</p>
              <p className="text-xl">+55 (11) 99790-7029</p>
            </div>
            <div>
              <p className="uppercase tracking-[4px] text-sm text-neutral-500 mb-4">Instagram</p>
              <p className="text-xl">@cardealstudio_</p>
            </div>
          </div>

          {/* FORMULÁRIO COM FORMSUBMIT */}
          <form 
            action="https://formsubmit.co/contato@cardealstudio.com" 
            method="POST"
            onSubmit={() => setStatus("enviando")}
            className="space-y-10"
          >
            {/* Redirecionar para uma página de obrigado após enviar */}
            <input type="hidden" name="_next" value="https://seu-site.com/obrigado" />
            {/* Desativar captcha (opcional, mas recomendado) */}
            <input type="hidden" name="_captcha" value="false" />
            
            <div>
              <input
                name="nome"
                type="text"
                placeholder="Nome"
                required
                className="w-full bg-transparent border-b border-neutral-400 pb-4 outline-none placeholder:text-neutral-500"
              />
            </div>

            <div>
              <input
                name="email"
                type="email"
                placeholder="E-mail"
                required
                className="w-full bg-transparent border-b border-neutral-400 pb-4 outline-none placeholder:text-neutral-500"
              />
            </div>

            <div>
              <textarea
                name="mensagem"
                placeholder="Mensagem, parcerias ou experiências..."
                rows={6}
                required
                className="w-full bg-transparent border-b border-neutral-400 pb-4 outline-none placeholder:text-neutral-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="border border-black px-10 py-4 uppercase tracking-[4px] text-sm hover:bg-black hover:text-white transition duration-500"
            >
              {status === "enviando" ? "Enviando..." : "Enviar mensagem"}
            </button>
          </form>

        </div>

      </section>

    </main>
  );
}