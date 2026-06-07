"use client";

import Link from "next/link";

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-[#e9e2db] text-[#111111]">
      <div className="max-w-4xl mx-auto px-6 py-20">
        
        {/* Botão de voltar */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-[4px] hover:opacity-60 transition mb-12 text-black"
        >
          ← Voltar
        </Link>

        {/* Título principal - COR ESCURA FORÇADA */}
        <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-montserrat)] font-light mb-4 text-black">
          POLÍTICA DE PRIVACIDADE
        </h1>
        
        <h2 className="text-2xl font-[family-name:var(--font-montserrat)] font-light mb-2 text-black">
          CARDEAL STUDIO
        </h2>
        
        <p className="text-sm text-gray-600 mb-12">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>

        {/* Introdução */}
        <div className="space-y-8">
          <div className="bg-white/50 p-6 rounded-lg">
            <p className="text-lg font-medium mb-4 text-black">
              Olá! Seja bem-vindo(a) à Política de Privacidade do Cardeal Studio.
            </p>
            <p className="text-black">
              A presente Política de Privacidade visa esclarecer a política de tratamento de Dados Pessoais ("Dados Pessoais") 
              adotada pelo Cardeal Studio. Para fins de clareza, o Cardeal Studio será denominado como "Cardeal Studio" ou "Nós".
            </p>
          </div>

          {/* Seção 1 */}
          <section>
            <h3 className="text-xl font-medium mb-4 text-black">1. Geral</h3>
            <p className="mb-4 text-black">
              O Cardeal Studio respeita a sua privacidade e sabe que Você se importa em saber como os seus Dados Pessoais 
              são usados e compartilhados. Por isso, agradecemos a sua confiança e garantimos que faremos o tratamento dos seus 
              Dados Pessoais de maneira cuidadosa e sensata, em conformidade com a Lei nº 13.709/2018 ("Lei Geral de Proteção de Dados Pessoais").
            </p>
            <p className="text-black">
              Esta Política de Privacidade foi elaborada para ser clara e objetiva, permitindo que Você compreenda de forma simples 
              como o Cardeal Studio funciona, e como será realizado o tratamento dos seus Dados Pessoais. Caso Você tenha qualquer 
              dúvida, estamos à disposição para ouvi-lo(a). Sua opinião é muito importante para o Cardeal Studio!
            </p>
          </section>

          {/* Seção 2 */}
          <section>
            <h3 className="text-xl font-medium mb-4 text-black">2. Alterações na Política de Privacidade</h3>
            <p className="text-black">
              O Cardeal Studio resguarda-se o direito de a qualquer momento ou periodicamente realizar alterações nesta Política de Privacidade, 
              para cumprir a legislação aplicável ou para satisfazer as mudanças em seu modelo de negócios. Neste caso, a versão atualizada 
              da Política de Privacidade será publicada aqui com a data da "Última atualização".
            </p>
          </section>

          {/* Seção 3 */}
          <section>
            <h3 className="text-xl font-medium mb-4 text-black">3. Informações Coletadas e Finalidade do Tratamento dos Dados Pessoais</h3>
            <p className="mb-4 text-black">
              O Cardeal Studio poderá coletar Dados Pessoais fornecidos voluntariamente por Você, por diferentes meios e plataformas, 
              quando: dos agendamentos; preenchimento e envio de formulários; cadastro para serviços; participação em eventos ou promoções; 
              ou durante a execução de contratos celebrados com o Cardeal Studio.
            </p>
            <p className="mb-4 text-black">
              Os Dados Pessoais que podemos coletar incluem:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-black">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone</li>
              <li>Data de nascimento</li>
              <li>Endereço residencial</li>
              <li>Documento de identificação (quando necessário)</li>
              <li>Fotos para registro de procedimentos (mediante consentimento específico)</li>
            </ul>
          </section>

          {/* Seção 4 - Direitos do titular */}
          <section>
            <h3 className="text-xl font-medium mb-4 text-black">4. Seus Direitos</h3>
            <p className="mb-4 text-black">
              Nos termos da Lei Geral de Proteção de Dados Pessoais, Você tem direito a:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li>Confirmar a existência de tratamento dos seus dados</li>
              <li>Acessar os seus Dados Pessoais</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários</li>
              <li>Solicitar a portabilidade dos dados a outro fornecedor</li>
              <li>Eliminar os Dados Pessoais tratados com seu consentimento</li>
              <li>Revogar seu consentimento a qualquer momento</li>
            </ul>
            <p className="mt-4 text-black">
              Para exercer seus direitos, entre em contato através do e-mail:{' '}
              <a href="mailto:contato@cardealstudio.com" className="underline hover:opacity-60 text-black">
                contato@cardealstudio.com
              </a>
            </p>
          </section>

          {/* Seção 5 - Compartilhamento */}
          <section>
            <h3 className="text-xl font-medium mb-4 text-black">5. Compartilhamento de Dados</h3>
            <p className="text-black">
              O Cardeal Studio poderá compartilhar seus Dados Pessoais com terceiros prestadores de serviços, exclusivamente quando 
              necessário para a execução dos serviços contratados (como plataformas de agendamento, meios de pagamento, etc.). 
              O compartilhamento sempre respeitará os limites da estrita necessidade e mediante seu consentimento quando exigido por lei.
            </p>
          </section>

          {/* Seção 6 - Segurança */}
          <section>
            <h3 className="text-xl font-medium mb-4 text-black">6. Segurança e Armazenamento</h3>
            <p className="text-black">
              O Cardeal Studio adota as melhores práticas de segurança da informação para proteger seus Dados Pessoais contra acessos 
              não autorizados, perda, destruição ou divulgação. Utilizamos sistemas de proteção como firewalls e criptografia SSL, 
              e limitamos o acesso aos dados apenas a funcionários autorizados que necessitam deles para desempenhar suas funções.
            </p>
          </section>

          {/* Seção 7 - Cookies */}
          <section>
            <h3 className="text-xl font-medium mb-4 text-black">7. Cookies e Tecnologias Semelhantes</h3>
            <p className="text-black">
              Nossos canais digitais utilizam cookies para melhorar sua experiência de navegação, lembrar suas preferências e 
              entender como você interage com nosso conteúdo. Você pode configurar seu navegador para bloquear cookies, mas isso 
              pode limitar algumas funcionalidades do site.
            </p>
          </section>

          {/* Seção 8 - Contato */}
          <section className="bg-white/50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-4 text-black">8. Contato</h3>
            <p className="mb-2 text-black">
              Caso Você tenha quaisquer dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus Dados Pessoais, 
              estamos à disposição para ouvi-lo(a).
            </p>
            <p className="mt-4 text-black">
              <strong>E-mail:</strong>{' '}
              <a href="mailto:contato@cardealstudio.com" className="underline hover:opacity-60 text-black">
                contato@cardealstudio.com
              </a>
              <br />
              <strong>WhatsApp:</strong>{' '}
              <a href="https://wa.me/551192693-8136" className="underline hover:opacity-60 text-black">
                (11) 92693-8136
              </a>
            </p>
          </section>

          {/* Seção 9 - Foro */}
          <section>
            <h3 className="text-xl font-medium mb-4 text-black">9. Legislação e Foro</h3>
            <p className="text-black">
              Esta Política de Privacidade é regida pelas leis da República Federativa do Brasil. As Partes elegem o Foro Central 
              da Comarca de São Paulo - SP para solucionar quaisquer controvérsias que surjam em relação a esta Política de Privacidade.
            </p>
          </section>

          {/* Agradecimento final */}
          <div className="border-t pt-8 mt-8 text-center">
            <p className="text-lg text-black">
              Agradecemos a leitura da nossa Política de Privacidade.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              © {new Date().getFullYear()} Cardeal Studio. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}