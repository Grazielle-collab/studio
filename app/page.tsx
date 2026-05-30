
///import WhatsAppButton from "@/components/WhatsAppButton";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
      <main className="bg-[#f2eded] text-[#111111] min-h-screen font-[family-name:var(--font-montserrat)]">
      <Sidebar />
      {/* HERO */}
      <section className="flex flex-col items-center justify-center pl-0 md:pl-25 h-screen px-6 text-center">

        {/* LOGO */}
        <Image
          src="/CardealStudio.png"
          alt="Cardeal Studio"
          width={320}
          height={320}
          className="w-[220px] md:w-[320px]"
        />

        {/* TEXTO */}
        <p className="mt-10 max-w-xl text-lg md:text-xl leading-9 text-neutral-700">
          Beleza sofisticada, atendimento personalizado e experiências exclusivas.
        </p>

        {/* BOTÃO */}
        <a
          href="https://wa.me/5511997907029?text=Olá!%20Gostaria%20de%20conhecer%20os%20serviços%20do%20CardealStudio%20"
          target="_blank"
          className="mt-14 border border-black px-10 py-4 uppercase tracking-[4px] text-sm hover:bg-black hover:text-white transition duration-500"
        >
          Agendar atendimento
        </a>

      </section>
    </main>
  );
}

//////

{/* GALERIA */}
<section className="px-6 md:px-16 pt-20 py-32">

  <div className="mb-20 text-center">
    <p className="uppercase tracking-[8px] text-sm text-neutral-500">
      Experiência Cardeal
    </p>

    <h2 className="mt-6 text-5xl md:text-6xl font-[family-name:var(--font-cormorant)] font-light">
      Galeria
    </h2>
  </div>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="overflow-hidden">
      <Image
        src="/file.svg"
        alt="Cardeal Studio"
        width={500}
        height={700}
        className="w-full h-[650px] object-cover hover:scale-105 transition duration-700"
      />
    </div>

    <div className="overflow-hidden md:mt-20">
      <Image
        src="/globe.svg"
        alt="Cardeal Studio"
        width={500}
        height={700}
        className="w-full h-[650px] object-cover hover:scale-105 transition duration-700"
      />
    </div>

    <div className="overflow-hidden">
      <Image
        src="/vercel.svg"
        alt="Cardeal Studio"
        width={500}
        height={700}
        className="w-full h-[650px] object-cover hover:scale-105 transition duration-700"
      />
    </div>

  </div>

</section>