import Sidebar from "@/components/Sidebar";

export default function CardealStudio() {
  return (
    <main className="bg-[#f3efea] text-[#111111] min-h-screen font-[family-name:var(--font-montserrat)]">

      <Sidebar />

      <section className="max-w-5xl mx-auto px-10 md:px-20 py-40">

        <p className="uppercase tracking-[8px] text-sm text-neutral-500">
          Cardeal Studio
        </p>

        <h1 className="mt-8 text-3xl md:text-7xl font-[family-name:var(--font-montserrat)] font-light leading-tight">
          Beleza como expressão artística.
        </h1>

        <div className="mt-20 space-y-10 text-lg leading-[42px] text-neutral-700 max-w-3xl">

          <p>
            O Cardeal Studio nasce da união entre sofisticação,
            identidade e experiência.
          </p>

          <p>
            Cada atendimento é pensado de forma personalizada,
            respeitando a essência, a individualidade e a beleza
            única de cada cliente.
          </p>

          <p>
            Mais do que estética, criamos conexões, sensações
            e momentos que transformam autocuidado em arte.
          </p>

        </div>

      </section>

    </main>
  );
}