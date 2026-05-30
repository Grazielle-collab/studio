import Sidebar from "@/components/Sidebar";

export default function Contato() {
  return (
    <main className="bg-[#f3efea] text-[#111111] min-h-screen font-[family-name:var(--font-montserrat)]">

      <Sidebar />

      <section className="max-w-6xl mx-auto px-8 md:px-20 py-40">

        {/* TÍTULO */}
        <div className="max-w-3xl">

          <p className="uppercase tracking-[8px] text-sm text-neutral-500">
            Contato
          </p>

          <h1 className="mt-8 text-3xl md:text-7xl font-[family-name:var(--font-montserrat)] font-light leading-tight">
            Conexões que vão além da estética.
          </h1>

        </div>

        {/* CONTEÚDO */}
        <div className="grid md:grid-cols-2 gap-24 mt-28">

          {/* INFORMAÇÕES */}
          <div className="space-y-12">

            <div>
              <p className="uppercase tracking-[4px] text-sm text-neutral-500 mb-4">
                Email
              </p>

              <p className="text-xl">
                contato@cardealstudio.com
              </p>
            </div>

            <div>
              <p className="uppercase tracking-[4px] text-sm text-neutral-500 mb-4">
                Telefone
              </p>

              <p className="text-xl">
                +55 (11) 99790-7029
              </p>
            </div>

            <div>
              <p className="uppercase tracking-[4px] text-sm text-neutral-500 mb-4">
                Instagram
              </p>

              <p className="text-xl">
                @cardealstudio_
              </p>
            </div>

          </div>

          {/* FORMULÁRIO */}
          <form className="space-y-10">

            <div>
              <input
                type="text"
                placeholder="Nome"
                className="w-full bg-transparent border-b border-neutral-400 pb-4 outline-none placeholder:text-neutral-500"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="E-mail"
                className="w-full bg-transparent border-b border-neutral-400 pb-4 outline-none placeholder:text-neutral-500"
              />
            </div>

            <div>
              <textarea
                placeholder="Mensagem, parcerias ou experiências..."
                rows={6}
                className="w-full bg-transparent border-b border-neutral-400 pb-4 outline-none placeholder:text-neutral-500 resize-none"
              />
            </div>

            <button
              className="border border-black px-10 py-4 uppercase tracking-[4px] text-sm hover:bg-black hover:text-white transition duration-500"
            >
              Enviar mensagem
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}