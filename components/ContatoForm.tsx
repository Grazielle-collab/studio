// studio/components/ContatoForm.tsx
"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "5511926938136";

export default function ContatoForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Monta a mensagem formatada em Markdown do WhatsApp
    const texto = [
      "*Mensagem pelo site*",
      "",
      `*Nome:* ${formData.nome}`,
      formData.email ? `*E-mail:* ${formData.email}` : null,
      `*Telefone:* ${formData.telefone}`,
      "",
      "*Mensagem:*",
      formData.mensagem,
    ]
      .filter(Boolean)
      .join("\n");

    // Abre WhatsApp com a mensagem pré-preenchida
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");

    // Limpa o formulário
    setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 text-left">
      <div>
        <label className="block text-xs uppercase tracking-[4px] text-neutral-500 mb-2">
          Nome *
        </label>
        <input
          type="text"
          required
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          className="w-full bg-transparent border-b border-neutral-400 pb-3 outline-none focus:border-black transition"
          placeholder="Seu nome"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-[4px] text-neutral-500 mb-2">
            E-mail
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-transparent border-b border-neutral-400 pb-3 outline-none focus:border-black transition"
            placeholder="seu@email.com"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-[4px] text-neutral-500 mb-2">
            Telefone (com DDD) *
          </label>
          <input
            type="tel"
            required
            value={formData.telefone}
            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
            className="w-full bg-transparent border-b border-neutral-400 pb-3 outline-none focus:border-black transition"
            placeholder="(11) 99999-9999"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-[4px] text-neutral-500 mb-2">
          Mensagem *
        </label>
        <textarea
          rows={6}
          required
          value={formData.mensagem}
          onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
          className="w-full bg-transparent border-b border-neutral-400 pb-3 outline-none focus:border-black transition resize-none"
          placeholder="Mensagem, parcerias ou experiências..."
        />
      </div>

      <button
        type="submit"
        className="border border-black px-10 py-4 uppercase tracking-[4px] text-sm hover:bg-black hover:text-white transition duration-500"
      >
        Enviar mensagem
      </button>

      <p className="text-xs text-neutral-500 mt-2">
        Ao clicar, você será redirecionado ao WhatsApp com sua mensagem pronta.
      </p>
    </form>
  );
}