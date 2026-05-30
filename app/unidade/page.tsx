import Image from "next/image";
import Sidebar from "@/components/Sidebar";

export default function Unidade() {
  return (
    <main className="bg-[#f3efea] text-[#111111] min-h-screen font-[family-name:var(--font-montserrat)]">

      <Sidebar />

      <section className="px-8 md:px-20 py-40">

        <div className="max-w-5xl mx-auto">

          <p className="uppercase tracking-[8px] text-sm text-neutral-500">
            Unidade
          </p>

          <h1 className="mt-8 text-6xl md:text-8xl font-[family-name:var(--font-montserrat)] font-light leading-tight">
            Um espaço pensado para experiências exclusivas.
          </h1>

        </div>

        {/* GALERIA */}
        <div className="grid md:grid-cols-2 gap-8 mt-28 max-w-6xl mx-auto">

          <div className="overflow-hidden">
            <Image
              src="/cafe.png"
              alt="Cardeal Studio"
              width={350}
              height={900}
              className="w-full h-[350px] object-cover hover:scale-105 transition duration-700"
            />
          </div>

          <div className="overflow-hidden md:mt-24">
            <Image
              src="/bey.jpeg"
              alt="Cardeal Studio"
              width={350}
              height={900}
              className="w-full h-[350px] object-cover hover:scale-105 transition duration-700"
            />
          </div>

          <div className="overflow-hidden">
            <Image
              src="/bc.jpeg"
              alt="Cardeal Studio"
              width={350}
              height={900}
              className="w-full h-[350px] object-cover hover:scale-105 transition duration-700"
            />
          </div>

        </div>


        {/* LOCALIZAÇÃO */}
        <div className="mt-32 max-w-6xl mx-auto">

          <p className="uppercase tracking-[8px] text-sm text-neutral-500">
            Localização
          </p>

          <div className="mt-10 space-y-4 text-lg text-neutral-700">

            <p>
              R. Alfredo Pujol, 545
            </p>

            <p>
              Santana • São Paulo — SP
            </p>

            <p>
              CEP 02017-010
            </p>

            <p>
              Atendimento mediante agendamento.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}