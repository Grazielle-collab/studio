// studio/app/politica-de-privacidade/page.tsx
"use client";

import Link from "next/link";

export default function PoliticaPrivacidade() {
  return (
    <main className="bg-[#f2eded] text-[#111111] min-h-screen">
      {/* Botão de voltar */}
      <div className="max-w-4xl mx-auto px-6 md:px-10 pt-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[4px] hover:opacity-60 transition"
        >
          ← Voltar
        </Link>
      </div>

      {/* Cabeçalho */}
      <header className="max-w-4xl mx-auto px-6 md:px-10 pt-20 pb-16 text-center">
        <p className="uppercase tracking-[8px] text-xs text-neutral-500">
          Documento legal
        </p>

        <h1 className="mt-8 font-serif text-4xl md:text-6xl font-light leading-tight">
          Política de Privacidade
        </h1>

        <p className="mt-6 text-sm text-neutral-500">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>
      </header>

      {/* Conteúdo */}
      <article className="max-w-3xl mx-auto px-6 md:px-10 pb-32 space-y-12 text-lg leading-[38px] text-neutral-700">
        {/* Introdução destacada */}
        <div className="bg-white/60 p-8 rounded-lg border border-neutral-200">
          <p className="text-xl font-medium mb-4 text-black">
            Olá! Seja bem-vindo(a) à Política de Privacidade do Cardeal Studio.
          </p>
          <p>
            A presente Política visa esclarecer a política de tratamento de Dados
            Pessoais adotada pelo Cardeal Studio. Para fins de clareza, o Cardeal
            Studio será denominado como <em>"Cardeal Studio"</em> ou{" "}
            <em>"Nós"</em>.
          </p>
        </div>

        <section>
          <h2 className="font-serif text-2xl md:text-3xl font-light mb-6 text-black">
            1. Geral
          </h2>
          <p className="mb-4">
            O Cardeal Studio respeita a sua privacidade e sabe que Você se importa
            em saber como os seus Dados Pessoais são usados e compartilhados. Por
            isso, agradecemos a sua confiança e garantimos que faremos o
            tratamento dos seus Dados Pessoais de maneira cuidadosa e sensata, em
            conformidade com a Lei nº 13.709/2018 ("Lei Geral de Proteção de
            Dados Pessoais").
          </p>
          <p>
            Esta Política foi elaborada para ser clara e objetiva, permitindo que
            Você compreenda de forma simples como o Cardeal Studio funciona e
            como será realizado o tratamento dos seus Dados Pessoais. Caso tenha
            qualquer dúvida, estamos à disposição para ouvi-lo(a).
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl md:text-3xl font-light mb-6 text-black">
            2. Alterações na Política de Privacidade
          </h2>
          <p>
            O Cardeal Studio resguarda-se o direito de a qualquer momento ou
            periodicamente realizar alterações nesta Política de Privacidade,
            para cumprir a legislação aplicável ou para satisfazer as mudanças em
            seu modelo de negócios. Neste caso, a versão atualizada será
            publicada aqui com a data da "Última atualização".
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl md:text-3xl font-light mb-6 text-black">
            3. Informações Coletadas e Finalidade
          </h2>
          <p className="mb-4">
            O Cardeal Studio poderá coletar Dados Pessoais fornecidos
            voluntariamente por Você, por diferentes meios e plataformas, quando:
            dos agendamentos; preenchimento e envio de formulários; cadastro para
            serviços; participação em eventos ou promoções; ou durante a execução
            de contratos celebrados com o Cardeal Studio.
          </p>
          <p className="mb-4">Os Dados Pessoais que podemos coletar incluem:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Nome completo</li>
            <li>Endereço de e-mail</li>
            <li>Número de telefone</li>
            <li>Data de nascimento</li>
            <li>Endereço residencial</li>
            <li>Documento de identificação (quando necessário)</li>
            <li>
              Fotos para registro de procedimentos (mediante consentimento
              específico)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl md:text-3xl font-light mb-6 text-black">
            4. Seus Direitos
          </h2>
          <p className="mb-4">
            Nos termos da Lei Geral de Proteção de Dados Pessoais, Você tem
            direito a:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Confirmar a existência de tratamento dos seus dados</li>
            <li>Acessar os seus Dados Pessoais</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
            <li>
              Solicitar a anonimização, bloqueio ou eliminação de dados
              desnecessários
            </li>
            <li>Solicitar a portabilidade dos dados a outro fornecedor</li>
            <li>Eliminar os Dados Pessoais tratados com seu consentimento</li>
            <li>Revogar seu consentimento a qualquer momento</li>
          </ul>
          <p className="mt-6">
            Para exercer seus direitos, entre em contato através do e-mail:{" "}
            <a
              href="mailto:contato@cardealstudio.com"
              className="underline hover:opacity-60"
            >
              contato@cardealstudio.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl md:text-3xl font-light mb-6 text-black">
            5. Compartilhamento de Dados
          </h2>
          <p>
            O Cardeal Studio poderá compartilhar seus Dados Pessoais com terceiros
            prestadores de serviços, exclusivamente quando necessário para a
            execução dos serviços contratados (como plataformas de agendamento,
            meios de pagamento, etc.). O compartilhamento sempre respeitará os
            limites da estrita necessidade e mediante seu consentimento quando
            exigido por lei.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl md:text-3xl font-light mb-6 text-black">
            6. Segurança e Armazenamento
          </h2>
          <p>
            O Cardeal Studio adota as melhores práticas de segurança da informação
            para proteger seus Dados Pessoais contra acessos não autorizados,
            perda, destruição ou divulgação. Utilizamos sistemas de proteção como
            firewalls e criptografia SSL, e limitamos o acesso aos dados apenas a
            funcionários autorizados que necessitam deles para desempenhar suas
            funções.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl md:text-3xl font-light mb-6 text-black">
            7. Cookies e Tecnologias Semelhantes
          </h2>
          <p>
            Nossos canais digitais utilizam cookies para melhorar sua experiência
            de navegação, lembrar suas preferências e entender como você interage
            com nosso conteúdo. Você pode configurar seu navegador para bloquear
            cookies, mas isso pode limitar algumas funcionalidades do site.
          </p>
        </section>

        <section className="bg-white/60 p-8 rounded-lg border border-neutral-200">
          <h2 className="font-serif text-2xl md:text-3xl font-light mb-6 text-black">
            8. Contato
          </h2>
          <p className="mb-6">
            Caso Você tenha quaisquer dúvidas sobre esta Política de Privacidade
            ou sobre o tratamento dos seus Dados Pessoais, estamos à disposição
            para ouvi-lo(a).
          </p>
          <p className="space-y-2">
            <span className="block">
              <strong>E-mail:</strong>{" "}
              <a
                href="mailto:contato@cardealstudio.com"
                className="underline hover:opacity-60"
              >
                contato@cardealstudio.com
              </a>
            </span>
            <span className="block">
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/5511926938136"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-60"
              >
                (11) 92693-8136
              </a>
            </span>
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl md:text-3xl font-light mb-6 text-black">
            9. Legislação e Foro
          </h2>
          <p>
            Esta Política de Privacidade é regida pelas leis da República
            Federativa do Brasil. As Partes elegem o Foro Central da Comarca de
            São Paulo - SP para solucionar quaisquer controvérsias que surjam em
            relação a esta Política de Privacidade.
          </p>
        </section>

        {/* Agradecimento final */}
        <div className="border-t border-neutral-300 pt-12 mt-12 text-center">
          <p className="font-serif text-xl font-light">
            Agradecemos a leitura da nossa Política de Privacidade.
          </p>
        </div>
      </article>
    </main>
  );
}