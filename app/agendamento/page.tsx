import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function Agendamento() {
  return (
    <main className="bg-[#f1ece8] text-[#111111] min-h-screen font-[family-name:var(--font-montserrat)]">

      <Sidebar />

      <section className="max-w-5xl mx-auto px-8 md:px-20 py-40">

        {/* TÍTULO */}
        <div className="max-w-3xl">

          <p className="uppercase tracking-[8px] text-sm text-neutral-500">
            Agendamento
          </p>

          <h1 className="mt-8 text-3xl md:text-7xl font-[family-name:var(--font-montserrat)] font-light leading-tight">
            Inicie sua experiência Cardeal.
          </h1>

          <p className="mt-12 text-xl leading-[40px] text-neutral-700">
            Entre em contato através dos nossos canais
            e descubra uma experiência pensada exclusivamente para você.
          </p>

        </div>

        {/* LINKS */}
        <div className="mt-32 space-y-10">

          {/* WHATSAPP */}
          <Link
            href="https://wa.me/5511997907029"
            target="_blank"
            className="flex items-center justify-between border-b border-neutral-400 pb-8 group"
          >

            <div>
              <p className="uppercase tracking-[6px] text-sm text-neutral-500">
                WhatsApp
              </p>

              <h2 className="mt-4 text-4xl font-[family-name:var(--font-montserrat)] font-light">
                Atendimento personalizado
              </h2>
            </div>

            <span className="text-2xl group-hover:translate-x-2 transition duration-300">
              →
            </span>

          </Link>

          {/* INSTAGRAM */}
          <Link
            href="https://instagram.com/cardealstudio_"
            target="_blank"
            className="flex items-center justify-between border-b border-neutral-400 pb-8 group"
          >

            <div>
              <p className="uppercase tracking-[6px] text-sm text-neutral-500">
                Instagram
              </p>

              <h2 className="mt-4 text-4xl font-[family-name:var(--font-montserrat)] font-light">
                Conheça nosso universo visual
              </h2>
            </div>

            <span className="text-2xl group-hover:translate-x-2 transition duration-300">
              →
            </span>

          </Link>

        </div>

      </section>

    </main>
  );
}