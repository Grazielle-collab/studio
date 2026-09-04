// studio/app/contato/page.tsx
"use client";

import Sidebar from "@/components/Sidebar";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { crmService } from "@/services/crmService";

export default function Contato() {
  const searchParams = useSearchParams();
  const [origem, setOrigem] = useState("Site - Contato");
  
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
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
        email: formData.email,
        telefone: formData.telefone,
        origem: origem,
        mensagem: formData.mensagem,
      });

      console.log('Lead enviado:', resultado);
      setStatus('success');
      
      setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
      
      setTimeout(() => {
        window.location.href = '/obrigado';
      }, 2000);
      
    } catch (error) {
      console.error('Erro:', error);
      setStatus('error');
    }
  };

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
          {/* INFORMAÇÕES DE CONTATO */}
          <div className="space-y-12">
            <div>
              <p className="uppercase tracking-[4px] text-sm text-neutral-500 mb-4">Email</p>
              <p className="text-xl">contato@cardealstudio.com</p>
            </div>
            <div>
              <p className="uppercase tracking-[4px] text-sm text-neutral-500 mb-4">Telefone</p>
              <p className="text-xl">+55 (11) 92693-8136</p>
            </div>
            <div>
              <p className="uppercase tracking-[4px] text-sm text-neutral-500 mb-4">Instagram</p>
              <p className="text-xl">@cardealstudio_</p>
            </div>
          </div>

          {/* FORMULÁRIO */}
          <form onSubmit={handleSubmit} className="space-y-10">
            <div>
              <input
                name="nome"
                type="text"
                placeholder="Nome"
                required
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="w-full bg-transparent border-b border-neutral-400 pb-4 outline-none placeholder:text-neutral-500"
              />
            </div>

            <div>
              <input
                name="email"
                type="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-neutral-400 pb-4 outline-none placeholder:text-neutral-500"
              />
            </div>

            <div>
              <input
                name="telefone"
                type="tel"
                placeholder="Telefone (com DDD)"
                required
                value={formData.telefone}
                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                className="w-full bg-transparent border-b border-neutral-400 pb-4 outline-none placeholder:text-neutral-500"
              />
            </div>

            <div>
              <textarea
                name="mensagem"
                placeholder="Mensagem, parcerias ou experiências..."
                rows={6}
                required
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                className="w-full bg-transparent border-b border-neutral-400 pb-4 outline-none placeholder:text-neutral-500 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="border border-black px-10 py-4 uppercase tracking-[4px] text-sm hover:bg-black hover:text-white transition duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Enviando...' : 'Enviar mensagem'}
            </button>

            {status === 'success' && (
              <p className="text-green-600 text-sm">✓ Mensagem enviada com sucesso!</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-sm">✗ Erro ao enviar. Tente novamente.</p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}