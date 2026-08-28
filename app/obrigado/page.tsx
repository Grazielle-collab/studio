// studio/app/obrigado/page.tsx
export default function Obrigado() {
  return (
    <main className="bg-[#f3efea] text-[#111111] min-h-screen font-[family-name:var(--font-montserrat)]">
      <div className="flex items-center justify-center min-h-screen px-8">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-light mb-8">✨ Obrigado!</h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Sua mensagem foi recebida com sucesso. 
            Entraremos em contato em breve.
          </p>
          <a 
            href="/"
            className="inline-block mt-12 border border-black px-10 py-4 uppercase tracking-[4px] text-sm hover:bg-black hover:text-white transition duration-500"
          >
            Voltar para o início
          </a>
        </div>
      </div>
    </main>
  );
}