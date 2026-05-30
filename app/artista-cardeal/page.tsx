import Image from "next/image";
import Sidebar from "@/components/Sidebar";

export default function ArtistaCardeal() {
  return (
    <main className="bg-[#f3efea] text-[#111111] min-h-screen font-[family-name:var(--font-montserrat)]">

      <Sidebar />

      <section className="max-w-6xl mx-auto px-8 md:px-20 py-40 grid md:grid-cols-2 gap-20 items-center">

        {/* FOTO */}
        <div className="overflow-hidden">
          <Image
            src="/artista_Rafael.jpeg"
            alt="Artista Cardeal"
            width={700}
            height={900}
            className="w-full h-auto"
          />
        </div>

        {/* TEXTO */}
        <div>

          <p className="uppercase tracking-[8px] text-sm text-neutral-500">
            Artista Cardeal
          </p>

          <h1 className="mt-8 text-4xl md:text-7xl font-[family-name:var(--font-montserrat)] font-light leading-tight">
            Transformando beleza em assinatura.
          </h1>

          <div className="mt-14 space-y-8 text-lg leading-[40px] text-neutral-700">

            <p>
              Com uma visão sofisticada e sensível à individualidade,
              o Artista Cardeal desenvolve experiências que unem estética,
              autenticidade e expressão pessoal.
            </p>

            <p>
              Sua trajetória é marcada pela busca constante por excelência,
              inovação e um atendimento profundamente personalizado.
            </p>

            <p>
              Mais do que tendências, seu trabalho valoriza identidade,
              presença e a beleza única de cada cliente.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}