// studio/components/AgendamentoForm.tsx
"use client";

import { useState } from "react";

const servicos = [
  "Corte",
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

    // Monta a mensagem formatada em Markdown do WhatsApp
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

    // Abre WhatsApp com a mensagem pré-preenchida
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");

    // Limpa o formulário
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

      {/* Serviço */}
      <div>
        <label className="block text-xs uppercase tracking-[4px] text-neutral-500 mb-2">
          Serviço *
        </label>
        <select
          required
          value={formData.servico}
          onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
          className="w-full bg-transparent border-b border-neutral-400 pb-3 outline-none focus:border-black transition cursor-pointer"
        >
          <option value="">Selecione um serviço</option>
          {servicos.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
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
            className="w-full bg-transparent border-b border-neutral-400 pb-3 outline-none focus:border-black transition"
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
            className="w-full bg-transparent border-b border-neutral-400 pb-3 outline-none focus:border-black transition"
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