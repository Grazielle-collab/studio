// studio/components/AgendamentoForm.tsx
"use client";

import { useState } from "react";

const servicos = [
  "Corte",
  "Escova",
  "Hidratação",
  "Mechas",
  "Coloração",
  "Progressiva",
  "Manicure",
  "Pedicure",
  "Maquiagem",
  "Outro",
];

const WHATSAPP_NUMBER = "5511926938136";

export default function AgendamentoForm() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    servico: "",
    data: "",
    hora: "",
    observacoes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mensagem = [
      "*Novo agendamento pelo site*",
      "",
      `*Nome:* ${formData.nome}`,
      `*Telefone:* ${formData.telefone}`,
      formData.email ? `*E-mail:* ${formData.email}` : null,
      "",
      `*Serviço:* ${formData.servico}`,
      `*Data:* ${formData.data}`,
      `*Hora:* ${formData.hora}`,
      formData.observacoes ? `\n*Observações:*\n${formData.observacoes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;

    // Google Analytics (se configurado)
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: "agendamento",
      });
    }

    window.open(url, "_blank");

    setFormData({
      nome: "",
      telefone: "",
      email: "",
      servico: "",
      data: "",
      hora: "",
      observacoes: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-16 space-y-8 text-left">
      {/* Nome */}
      <div>
        <label className="block text-xs uppercase tracking-[4px] text-neutral-500 mb-2">
          Nome completo *
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

      {/* Telefone e Email */}
      <div className="grid md:grid-cols-2 gap-6">
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
      </div>

      {/* Serviço — select customizado */}
      <div>
        <label className="block text-xs uppercase tracking-[4px] text-neutral-500 mb-2">
          Serviço *
        </label>
        <div className="relative">
          <select
            required
            value={formData.servico}
            onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
            className="w-full bg-transparent border-b border-neutral-400 pb-3 pr-8 outline-none focus:border-black transition cursor-pointer appearance-none text-[#111111]"
            style={{
              // Cor de fundo das opções quando o dropdown abre
              // (funciona no Chrome, Edge, Firefox)
            }}
          >
            <option value="" disabled className="text-neutral-400">
              Selecione um serviço
            </option>
            {servicos.map((s) => (
              <option
                key={s}
                value={s}
                className="bg-[#f2eded] text-[#111111] py-2"
                style={{ backgroundColor: "#f2eded", color: "#111111" }}
              >
                {s}
              </option>
            ))}
          </select>

          {/* Seta customizada (substitui a nativa) */}
          <div className="pointer-events-none absolute right-0 bottom-3 text-neutral-500">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Data e Hora */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-[4px] text-neutral-500 mb-2">
            Data *
          </label>
          <input
            type="date"
            required
            value={formData.data}
            onChange={(e) => setFormData({ ...formData, data: e.target.value })}
            className="w-full bg-transparent border-b border-neutral-400 pb-3 outline-none focus:border-black transition cursor-pointer"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-[4px] text-neutral-500 mb-2">
            Hora *
          </label>
          <input
            type="time"
            required
            value={formData.hora}
            onChange={(e) => setFormData({ ...formData, hora: e.target.value })}
            className="w-full bg-transparent border-b border-neutral-400 pb-3 outline-none focus:border-black transition cursor-pointer"
          />
        </div>
      </div>

      {/* Observações */}
      <div>
        <label className="block text-xs uppercase tracking-[4px] text-neutral-500 mb-2">
          Observações
        </label>
        <textarea
          rows={4}
          value={formData.observacoes}
          onChange={(e) => setFormData({ ...formData, observacoes: e.target.value })}
          className="w-full bg-transparent border-b border-neutral-400 pb-3 outline-none focus:border-black transition resize-none"
          placeholder="Alguma informação adicional?"
        />
      </div>

      {/* Botão */}
      <button
        type="submit"
        className="w-full border border-black py-4 uppercase tracking-[4px] text-sm hover:bg-black hover:text-white transition duration-500"
      >
        Confirmar agendamento
      </button>

      <p className="text-xs text-center text-neutral-500 mt-2">
        Ao clicar, você será redirecionado ao WhatsApp com sua mensagem pronta.
      </p>
    </form>
  );
}