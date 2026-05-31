import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import { MapPin } from "lucide-react";

export default function Unidade() {
  // Link do Google Maps para o endereço
  const enderecoGoogleMaps = "https://www.google.com/maps/dir/?api=1&destination=R.+Alfredo+Pujol,+545+-+Santana,+São+Paulo+-+SP,+02017-010";

  return (
    <main className="bg-[#f3efea] text-[#111111] min-h-screen font-[family-name:var(--font-montserrat)]">

      <Sidebar />

      <section className="px-8 md:px-20 py-40">

        <div className="max-w-5xl mx-auto">

          <p className="uppercase tracking-[8px] text-sm text-neutral-500">
            Unidade
          </p>

          <h1 className="mt-8 text-3xl md:text-7xl font-[family-name:var(--font-montserrat)] font-light leading-tight">
            Um espaço pensado para experiências exclusivas.
          </h1>

        </div>

        {/* GALERIA - IMAGENS MENORES */}
        <div className="grid md:grid-cols-3 gap-6 mt-28 max-w-5xl mx-auto">

          <div className="overflow-hidden rounded-lg">
            <Image
              src="/cafe.png"
              alt="Cardeal Studio"
              width={400}
              height={500}
              className="w-full h-[280px] object-cover hover:scale-105 transition duration-700"
            />
          </div>

          <div className="overflow-hidden rounded-lg">
            <Image
              src="/bey.jpeg"
              alt="Cardeal Studio"
              width={400}
              height={500}
              className="w-full h-[280px] object-cover hover:scale-105 transition duration-700"
            />
          </div>

          <div className="overflow-hidden rounded-lg">
            <Image
              src="/bc.jpeg"
              alt="Cardeal Studio"
              width={400}
              height={500}
              className="w-full h-[280px] object-cover hover:scale-105 transition duration-700"
            />
          </div>

        </div>

        {/* LOCALIZAÇÃO - CARD COM HOVER ESCURO */}
        <div className="mt-32 max-w-5xl mx-auto">

          <p className="uppercase tracking-[8px] text-sm text-neutral-500">
            Localização
          </p>

          <a
            href={enderecoGoogleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-10 overflow-hidden rounded-lg bg-neutral-100 p-8 text-center hover:bg-black hover:text-white transition duration-300 group"
          >
            <MapPin size={40} className="mx-auto text-neutral-600 mb-4 group-hover:text-white transition" />
            <p className="font-medium text-lg">R. Alfredo Pujol, 545</p>
            <p className="text-neutral-500 mt-1 group-hover:text-white/70 transition">Santana • São Paulo</p>
            <p className="text-sm text-neutral-400 mt-4 flex items-center justify-center gap-1 group-hover:text-white/60">
              Clique para abrir no Google Maps
              <span>→</span>
            </p>
          </a>

        </div>

      </section>

    </main>
  );
}