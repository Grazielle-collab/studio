// studio/app/agendamento/page.tsx
"use client";

import Sidebar from "@/components/Sidebar";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { crmService } from "@/services/crmService";

export default function Agendamento() {
  const searchParams = useSearchParams();
  const [origem, setOrigem] = useState("Site - Agendamento");
  
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    servico: '',
    data: '',
    hora: '',
    observacoes: '',
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Captura a origem da URL
  useEffect(() => {
    const origemParam = searchParams.get('origem');
    if (origemParam) {
      const origens = {
        'instagram': 'Instagram - Cardeal Studio',
        'google': 'Google - Cardeal Studio',
        'facebook': 'Facebook - Cardeal Studio',
        'whatsapp': 'WhatsApp - Cardeal Studio',
        'email': 'E-mail Marketing - Cardeal Studio',
        'indicacao': 'Indicação - Cardeal Studio',
      };
      setOrigem(origens[origemParam as keyof typeof origens] || origemParam);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const resultado = await crmService.enviarLead({
        nome: formData.nome,
        telefone: formData.telefone,
        email: formData.email,
        origem: origem,
        mensagem: `
          Serviço: ${formData.servico}
          Data: ${formData.data}
          Hora: ${formData.hora}
          Observações: ${formData.observacoes}
        `,
      });

      console.log('Agendamento enviado:', resultado);
      setStatus('success');
      
      setFormData({
        nome: '',
        telefone: '',
        email: '',
        servico: '',
        data: '',
        hora: '',
        observacoes: '',
      });

      setTimeout(() => {
        window.location.href = '/obrigado';
      }, 2000);
      
    } catch (error) {
      console.error('Erro:', error);
      setStatus('error');
    }
  };

  return (
    <main className="bg-[#f1ece8] text-[#111111] min-h-screen font-[family-name:var(--font-montserrat)]">
      <Sidebar />

      <section className="max-w-5xl mx-auto px-8 md:px-20 py-40">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[8px] text-sm text-neutral-500">Agendamento</p>
          <h1 className="mt-8 text-3xl md:text-7xl font-light leading-tight">
            Inicie sua experiência Cardeal.
          </h1>
          <p className="mt-12 text-xl leading-[40px] text-neutral-700">
            Preencha o formulário abaixo e nossa equipe entrará em contato para confirmar seu horário.
          </p>
        </div>

        <div className="mt-20 max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-sm uppercase tracking-[4px] text-neutral-500 mb-2">
                Nome completo *
              </label>
              <input
                type="text"
                required
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="w-full bg-transparent border-b border-neutral-400 pb-3 outline-none placeholder:text-neutral-400"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label className="block text-sm uppercase tracking-[4px] text-neutral-500 mb-2">
                Telefone (com DDD) *
              </label>
              <input
                type="tel"
                required
                value={formData.telefone}
                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                className="w-full bg-transparent border-b border-neutral-400 pb-3 outline-none placeholder:text-neutral-400"
                placeholder="(11) 99999-9999"
              />
            </div>

            <div>
              <label className="block text-sm uppercase tracking-[4px] text-neutral-500 mb-2">
                E-mail
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-neutral-400 pb-3 outline-none placeholder:text-neutral-400"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm uppercase tracking-[4px] text-neutral-500 mb-2">
                Serviço *
              </label>
              <select
                required
                value={formData.servico}
                onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                className="w-full bg-transparent border-b border-neutral-400 pb-3 outline-none text-neutral-700"
              >
                <option value="">Selecione um serviço</option>
                <option value="Corte">Corte</option>
                <option value="Coloração">Coloração</option>
                <option value="Progressiva">Progressiva</option>
                <option value="Manicure">Manicure</option>
                <option value="Pedicure">Pedicure</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm uppercase tracking-[4px] text-neutral-500 mb-2">
                  Data *
                </label>
                <input
                  type="date"
                  required
                  value={formData.data}
                  onChange={(e) => setFormData({ ...formData, data: e.target.value })}
                  className="w-full bg-transparent border-b border-neutral-400 pb-3 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-[4px] text-neutral-500 mb-2">
                  Hora *
                </label>
                <input
                  type="time"
                  required
                  value={formData.hora}
                  onChange={(e) => setFormData({ ...formData, hora: e.target.value })}
                  className="w-full bg-transparent border-b border-neutral-400 pb-3 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm uppercase tracking-[4px] text-neutral-500 mb-2">
                Observações
              </label>
              <textarea
                rows={4}
                value={formData.observacoes}
                onChange={(e) => setFormData({ ...formData, observacoes: e.target.value })}
                className="w-full bg-transparent border-b border-neutral-400 pb-3 outline-none placeholder:text-neutral-400 resize-none"
                placeholder="Alguma informação adicional?"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full border border-black py-4 uppercase tracking-[4px] text-sm hover:bg-black hover:text-white transition duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Enviando...' : 'Agendar'}
            </button>

            {status === 'success' && (
              <div className="bg-green-50 border border-green-400 text-green-700 px-4 py-3 rounded">
                ✅ Agendamento realizado! Entraremos em contato para confirmar.
              </div>
            )}
            {status === 'error' && (
              <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded">
                ❌ Erro ao agendar. Tente novamente ou ligue para (11) 92693-8136.
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}