// studio/app/page.tsx
"use client";

import HeroVideo from "@/components/HeroVideo";
import AgendamentoForm from "@/components/AgendamentoForm";
import ContatoForm from "@/components/ContatoForm";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import ImageReveal from "@/components/ImageReveal";
import RevealOnScroll from "@/components/RevealOnScroll";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MapPin, Menu as MenuIcon, X, ArrowUp } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { scrollToSection, scrollToTop } from "@/hooks/useSmoothScroll";

const NAV_LINKS = [
  { href: "sobre", label: "Sobre" },
  { href: "galeria", label: "Galeria" },
  { href: "artista", label: "Artista" },
  { href: "unidade", label: "Unidade" },
  { href: "agendamento", label: "Agendamento" },
  { href: "contato", label: "Contato" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const activeSection = useActiveSection(
    NAV_LINKS.map((l) => l.href),
    120
  );

  const scrollDirection = useScrollDirection(10);
  const showBackToTop = scrollDirection === "down";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const enderecoGoogleMaps =
    "https://www.google.com/maps/dir/?api=1&destination=R.+Alfredo+Pujol,+545+-+Santana,+São+Paulo+-+SP,+02017-010";

  const whatsappLink =
    "https://wa.me/5511926938136?text=Olá!%20Gostaria%20de%20conhecer%20os%20serviços%20do%20CardealStudio";

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    setTimeout(() => scrollToSection(id, 88), 50);
  };

  return (
    <main className="bg-[#f2eded] text-[#111111] min-h-screen">
      <ScrollProgressBar />

      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#f2eded]/90 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <button
            onClick={scrollToTop}
            className={`font-serif text-2xl tracking-wide transition-colors duration-500 cursor-pointer ${
              scrolled ? "text-black" : "text-white"
            }`}
            aria-label="Voltar ao topo"
          >
            Cardeal Studio
          </button>

          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`uppercase tracking-[3px] text-xs transition-all duration-500 relative ${
                  scrolled ? "text-black" : "text-white"
                } ${
                  activeSection === link.href
                    ? "opacity-100"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-2 left-0 h-[1px] bg-current transition-all duration-500 ${
                    activeSection === link.href ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(true)}
            className={`md:hidden flex items-center gap-3 transition-colors duration-500 ${
              scrolled ? "text-black" : "text-white"
            }`}
            aria-label="Abrir menu"
          >
            <span className="uppercase tracking-[3px] text-xs">Menu</span>
            <MenuIcon size={20} />
          </button>
        </div>
      </header>

      {/* MENU MOBILE */}
      <div
        className={`fixed inset-0 bg-[#e9e2db] z-[60] transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-8 right-8"
          aria-label="Fechar menu"
        >
          <X size={32} strokeWidth={1.5} />
        </button>

        <nav className="flex flex-col items-center justify-center h-full gap-10">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-serif text-4xl font-light hover:opacity-60 transition-all duration-500 ${
                activeSection === link.href ? "opacity-100" : "opacity-70"
              } ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              style={{ transitionDelay: menuOpen ? `${index * 60}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* HERO */}
      <HeroVideo />

      {/* SOBRE */}
      <section id="sobre" className="py-20 md:py-32 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <p className="uppercase tracking-[8px] text-xs text-neutral-500 text-center">
              Cardeal Studio
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <h2 className="mt-8 font-serif text-4xl md:text-6xl font-light leading-tight text-center">
              Beleza como expressão artística.
            </h2>
          </RevealOnScroll>

          <div className="mt-16 space-y-8 text-lg leading-[42px] text-neutral-700 max-w-3xl mx-auto text-center md:text-left">
            <RevealOnScroll delay={200}>
              <p>
                O Cardeal Studio nasce da união entre sofisticação, identidade e experiência.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={300}>
              <p>
                Cada atendimento é pensado de forma personalizada, respeitando a
                essência, a individualidade e a beleza única de cada cliente.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={400}>
              <p>
                Mais do que estética, criamos conexões, sensações e momentos que
                transformam autocuidado em arte.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-20 md:py-32 px-6 md:px-16">
        <div className="mb-20 text-center">
          <RevealOnScroll>
            <p className="uppercase tracking-[8px] text-xs text-neutral-500">
              Experiência Cardeal
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl font-light">
              Galeria
            </h2>
          </RevealOnScroll>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["/carol.jpeg", "/tacas.jpeg", "/mack.jpeg"].map((src, i) => (
            <div
              key={i}
              className={`overflow-hidden ${i === 1 ? "md:mt-20" : ""}`}
            >
              <ImageReveal
                src={src}
                alt={`Cardeal Studio ${i + 1}`}
                width={500}
                height={700}
                delay={i * 150}
                className="w-full h-[450px] md:h-[650px]"
                imgClassName="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ARTISTA */}
      <section id="artista" className="py-20 md:py-32 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <ImageReveal
              src="/artista_Rafael.jpeg"
              alt="Rafael Valério Cardeal"
              width={700}
              height={900}
              className="w-full"
              imgClassName="w-full h-auto"
            />
            <RevealOnScroll delay={300}>
              <p className="text-center mt-4 text-xs uppercase tracking-[4px] text-neutral-500">
                Rafael Valério Cardeal
              </p>
            </RevealOnScroll>
          </div>

          <div>
            <RevealOnScroll direction="left" delay={100}>
              <p className="uppercase tracking-[8px] text-xs text-neutral-500">
                Artista Cardeal
              </p>
            </RevealOnScroll>

            <RevealOnScroll direction="left" delay={200}>
              <h2 className="mt-8 font-serif text-4xl md:text-6xl font-light leading-tight">
                Transformando beleza em assinatura.
              </h2>
            </RevealOnScroll>

            <div className="mt-10 space-y-6 text-lg leading-[38px] text-neutral-700">
              <RevealOnScroll direction="left" delay={300}>
                <p>
                  Com uma visão sofisticada e sensível à individualidade, o Artista
                  Cardeal desenvolve experiências que unem estética, autenticidade
                  e expressão pessoal.
                </p>
              </RevealOnScroll>
              <RevealOnScroll direction="left" delay={400}>
                <p>
                  Sua trajetória é marcada pela busca constante por excelência,
                  inovação e um atendimento profundamente personalizado.
                </p>
              </RevealOnScroll>
              <RevealOnScroll direction="left" delay={500}>
                <p>
                  Mais do que tendências, seu trabalho valoriza identidade,
                  presença e a beleza única de cada cliente.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* UNIDADE */}
      <section id="unidade" className="py-20 md:py-32 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <RevealOnScroll>
            <p className="uppercase tracking-[8px] text-xs text-neutral-500">
              Unidade
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <h2 className="mt-8 font-serif text-4xl md:text-6xl font-light leading-tight">
              Um espaço pensado para experiências exclusivas.
            </h2>
          </RevealOnScroll>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">
          {["/cafe.png", "/bey.jpeg", "/bc.jpeg"].map((src, i) => (
            <ImageReveal
              key={i}
              src={src}
              alt="Cardeal Studio"
              width={400}
              height={500}
              delay={i * 150}
              className="rounded-lg w-full h-[280px]"
              imgClassName="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          ))}
        </div>

        <RevealOnScroll delay={200} className="mt-20 max-w-5xl mx-auto">
          <a
            href={enderecoGoogleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-lg bg-white/60 p-10 text-center hover:bg-black hover:text-white transition duration-300 group"
          >
            <MapPin
              size={40}
              className="mx-auto text-neutral-600 mb-4 group-hover:text-white transition"
            />
            <p className="font-medium text-lg">R. Alfredo Pujol, 545</p>
            <p className="text-neutral-500 mt-1 group-hover:text-white/70 transition">
              Santana • São Paulo
            </p>
            <p className="text-sm text-neutral-400 mt-4 flex items-center justify-center gap-1 group-hover:text-white/60">
              Clique para abrir no Google Maps <span>→</span>
            </p>
          </a>
        </RevealOnScroll>
      </section>

      {/* AGENDAMENTO */}
      <section id="agendamento" className="py-20 md:py-32 px-6 md:px-20 bg-[#e9e2db]">
        <div className="max-w-2xl mx-auto">
          <RevealOnScroll>
            <p className="uppercase tracking-[8px] text-xs text-neutral-500 text-center">
              Agendamento
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <h2 className="mt-8 font-serif text-4xl md:text-5xl font-light leading-tight text-center">
              Inicie sua experiência Cardeal.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <p className="mt-8 text-lg leading-9 text-neutral-700 text-center">
              Preencha o formulário abaixo e nossa equipe entrará em contato para
              confirmar seu horário.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={300}>
            <AgendamentoForm />
          </RevealOnScroll>

          <RevealOnScroll delay={400}>
            <p className="mt-8 text-center text-sm text-neutral-500">
              Prefere agendar pelo WhatsApp?{" "}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-60 transition"
              >
                Clique aqui
              </a>
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 md:py-32 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <p className="uppercase tracking-[8px] text-xs text-neutral-500 text-center">
              Contato
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <h2 className="mt-8 font-serif text-4xl md:text-6xl font-light leading-tight text-center">
              Conexões que vão além da estética.
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-20 mt-20">
            <div className="space-y-12">
              {[
                { label: "Email", value: "contato@cardealstudio.com", href: "mailto:contato@cardealstudio.com" },
                { label: "Telefone", value: "+55 (11) 92693-8136", href: "tel:+5511926938136" },
                { label: "Instagram", value: "@cardealstudio_", href: "https://instagram.com/cardealstudio_", external: true },
                { label: "Endereço", value: "R. Alfredo Pujol, 545 — Santana\nSão Paulo, SP", href: enderecoGoogleMaps, external: true },
              ].map((item, i) => (
                <RevealOnScroll key={item.label} direction="right" delay={i * 100}>
                  <div>
                    <p className="uppercase tracking-[4px] text-xs text-neutral-500 mb-4">
                      {item.label}
                    </p>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="text-xl hover:opacity-60 transition whitespace-pre-line"
                    >
                      {item.value}
                    </a>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll direction="left" delay={200}>
              <div>
                <p className="text-xs uppercase tracking-[4px] text-neutral-500 mb-8">
                  Envie uma mensagem
                </p>
                <ContatoForm />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-neutral-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <button
            onClick={scrollToTop}
            className="font-serif text-xl hover:opacity-60 transition cursor-pointer"
          >
            Cardeal Studio
          </button>

          <p className="text-xs text-neutral-500 text-center">
            © {new Date().getFullYear()} Cardeal Studio. Todos os direitos reservados.
          </p>

          <Link
            href="/politica-de-privacidade"
            className="text-xs uppercase tracking-[3px] hover:opacity-60 transition"
          >
            Política de Privacidade
          </Link>
        </div>
      </footer>

      {/* BOTÃO VOLTAR AO TOPO */}
      <button
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
        className={`fixed bottom-24 right-6 z-40 bg-white text-black border border-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 hover:bg-black hover:text-white ${
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp size={18} strokeWidth={1.5} />
      </button>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-black text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition duration-300"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </main>
  );
}