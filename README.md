# Cardeal Studio

> Beleza sofisticada, atendimento personalizado e experiências exclusivas.

Site institucional e sistema de agendamento do **Cardeal Studio** — salão de beleza localizado em Santana, São Paulo. Construído com Next.js 15, Tailwind CSS e integração com CRM Django para captura de leads.

🔗 **Produção:** https://cardealstudio.com _(ajuste conforme o domínio final)_
📸 **Instagram:** [@cardealstudio_](https://instagram.com/cardealstudio_)
💬 **WhatsApp:** [(11) 92693-8136](https://wa.me/5511926938136)

---

## ✨ Sobre o projeto

O Cardeal Studio é um espaço de beleza que une sofisticação, identidade e experiência. O site foi desenhado para:

- **Apresentar a marca** com uma identidade visual elegante (tipografia Cormorant + Montserrat, paleta bege/preto)
- **Encantar na primeira impressão** com um vídeo de abertura em loop no hero
- **Facilitar o contato** via WhatsApp, formulários e formulário de agendamento
- **Capturar leads** de forma rastreável, registrando a origem (Instagram, Google, WhatsApp, etc.)
- **Integrar com CRM próprio** (Django) para gestão dos agendamentos

---

## 🏗️ Stack

| Camada | Tecnologia |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Linguagem | TypeScript |
| Estilização | Tailwind CSS v4 |
| Tipografia | Cormorant Garamond + Montserrat (`next/font`) |
| Ícones | [lucide-react](https://lucide.dev/) + [react-icons](https://react-icons.github.io/react-icons/) |
| HTTP | Fetch API nativa |
| CRM | Django REST (projeto separado) |

---

## 📁 Estrutura de pastas

studio/
├── app/
│ ├── politica-de-privacidade/ # Página LGPD
│ ├── favicon.ico
│ ├── globals.css # Estilos globais + tema Tailwind
│ ├── layout.tsx # Layout raiz (fontes, metadata)
│ ├── opengraph-image.png # Preview em redes sociais
│ └── page.tsx # Home one-page
├── components/
│ ├── HeroVideo.tsx # Hero com vídeo em loop
│ ├── InstagramButton.tsx # Botão com tracking
│ └── WhatsAppButton.tsx # Botão flutuante
├── public/ # Imagens, vídeo, logo
├── .env.local # Variáveis de ambiente (não versionado)
├── next.config.ts
├── package.json
└── tsconfig.json


---

## 🚀 Rodando localmente

### Pré-requisitos

- Node.js 18+
- npm, yarn, pnpm ou bun
- Acesso ao CRM Django (local ou remoto)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/cardeal-studio.git
cd cardeal-studio/studio

# Instale as dependências
npm install

Variáveis de ambiente
Crie o arquivo .env.local na raiz de studio/:

NEXT_PUBLIC_API_URL=http://127.0.0.1:8000/api

Desenvolvimento

venv\Scripts\activate

npm run dev

Acesse http://localhost:3000.

Build de produção

npm run build
npm start

🎨 Design system
Tipografia
Uso	Fonte	Variável CSS
Títulos (h1, h2)	Cormorant Garamond (light)	--font-cormorant
Corpo, botões, navegação	Montserrat	--font-montserrat
Cores
Token	Valor	Uso
bg-primary	#f2eded	Fundo principal
bg-secondary	#e9e2db	Fundo de seções alternadas
text-primary	#111111	Texto principal
accent	#b89b7c	(reservado) Detalhes dourados

Seções da Home
A Home é um one-page com navegação por âncoras:

Seção	ID	Descrição
Hero	—	Vídeo em loop + logo + CTA WhatsApp
Sobre	#sobre	Texto institucional
Galeria	#galeria	Grid de imagens do trabalho
Artista	#artista	Bio do Rafael Valério Cardeal
Unidade	#unidade	Fotos do espaço + mapa
Agendamento	#agendamento	CTA + formulário
Contato	#contato	Email, telefone, Instagram

🔐 Privacidade e LGPD
O site possui uma página de Política de Privacidade em /politica-de-privacidade que detalha:

Dados coletados (nome, email, telefone, etc.)

Finalidade do tratamento

Direitos do titular

Contato do encarregado

📦 Scripts disponíveis

npm run dev      # Ambiente de desenvolvimento
npm run build    # Build de produção
npm run start    # Executa o build
npm run lint  

🤝 Contribuindo
Projeto pessoal do Cardeal Studio. Para sugestões, entre em contato pelo email contato@cardealstudio.com.

📄 Licença
© 2026 Cardeal Studio. Todos os direitos reservados.   # ESLint