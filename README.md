# Cardeal Studio

> Beleza sofisticada, atendimento personalizado e experiências exclusivas.

Site institucional one-page do **Cardeal Studio** — salão de beleza em Santana, São Paulo. Construído com Next.js 15, Tailwind CSS v4 e envio de agendamentos/contatos direto via WhatsApp.

🔗 **Produção:** _(em breve)_
📸 **Instagram:** [@cardealstudio_](https://instagram.com/cardealstudio_)
💬 **WhatsApp:** [(11) 92693-8136](https://wa.me/5511926938136)
📍 **Endereço:** R. Alfredo Pujol, 545 — Santana, São Paulo/SP

---

## ✨ Sobre o projeto

O site foi desenhado para ser uma **experiência imersiva em página única**: o visitante rola e descobre toda a marca — do vídeo de abertura à política de privacidade.

**Objetivos principais:**

- **Impactar** na primeira impressão com vídeo em loop no hero
- **Apresentar a marca** com identidade visual elegante (Cormorant + Montserrat, paleta bege/preto)
- **Facilitar o contato** via formulários e WhatsApp
- **Ser rápido e responsivo** em qualquer dispositivo
- **Funcionar sem backend** — sem CRM, sem servidor, sem banco de dados

---

## 🏗️ Stack

| Camada | Tecnologia |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Linguagem | TypeScript |
| Estilização | Tailwind CSS v4 |
| Tipografia | Cormorant Garamond + Montserrat (`next/font`) |
| Ícones | [lucide-react](https://lucide.dev/) |
| Deploy sugerido | [Vercel](https://vercel.com/) |

**Sem dependências de backend.** Formulários enviam direto para o WhatsApp.

---

## 📁 Estrutura de pastas

studio/
├── app/
│ ├── politica-de-privacidade/
│ │ └── page.tsx # Página LGPD
│ ├── favicon.ico
│ ├── globals.css # Estilos globais + tema Tailwind
│ ├── layout.tsx # Layout raiz (fontes, metadata, PWA)
│ ├── opengraph-image.png # Preview em redes sociais
│ └── page.tsx # Home one-page
├── components/
│ ├── AgendamentoForm.tsx # Formulário → WhatsApp
│ ├── ContatoForm.tsx # Formulário de parceria → WhatsApp
│ └── HeroVideo.tsx # Hero com vídeo em loop
├── public/
│ ├── favicon.ico
│ ├── favicon-16x16.png
│ ├── favicon-32x32.png
│ ├── apple-touch-icon.png
│ ├── android-chrome-192x192.png
│ ├── android-chrome-512x512.png
│ ├── site.webmanifest # PWA
│ ├── CardealStudio.png # Logo (fundo transparente)
│ ├── hero-video.mp4
│ └── ... (imagens do site)
├── next.config.ts
├── package.json
└── tsconfig.json


---

## 🚀 Rodando localmente

### Pré-requisitos

- Node.js 18+ (recomendado 20+)
- npm, yarn, pnpm ou bun

### Instalação

```bash
git clone https://github.com/seu-usuario/cardeal-studio.git
cd cardeal-studio/studio
npm install
```

Desenvolvimento
```bash
npm run dev
```
Acesse *http://localhost:3000.*

Build de produção
```bash
npm run build
npm start
```
# 🎨 Design system

Tipografia

Uso	                            Fonte	                       Variável CSS
Títulos (h1, h2)	            Cormorant Garamond (light)	   --font-cormorant
Corpo, botões, navegação	    Montserrat	                   --font-montserrat

# Cores

Token	          Valor	     Uso

bg-primary      #f2eded	Fundo principal
bg-secondary	#e9e2db	Fundo de seções alternadas
text-primary	#111111	Texto principal
text-muted  	#737373	Texto secundário (neutral-500)

# Seções da Home

A Home é one-page com navegação por âncoras:

Seção	     ID	            Descrição

Hero	      —	            Vídeo em loop + logo + CTA WhatsApp
Sobre	     #sobre	        Texto institucional
Galeria	     #galeria	    Grid de imagens
Artista	     #artista	    Bio do Rafael Valério Cardeal
Unidade	     #unidade	    Fotos do espaço + mapa
Agendamento	 #agendamento	Formulário → WhatsApp
Contato	     #contato	    Informações + formulário de parceria

# 💬 Como funcionam os formulários

Os dois formulários (AgendamentoForm e ContatoForm) montam uma mensagem formatada e abrem o WhatsApp Web com o texto pré-preenchido. Nenhum dado é enviado a servidores.

# Fluxo do Agendamento 

Visitante preenche nome, telefone, e-mail, serviço, data, hora e observações

Ao clicar em "Confirmar agendamento", monta uma mensagem em Markdown do WhatsApp

Abre *https://wa.me/5511926938136?text=...* em nova aba

Visitante só aperta "Enviar" no WhatsApp

# Fluxo do Contato

Mesma coisa, mas para mensagens gerais, parcerias e dúvidas.

💡 Para migrar para e-mail futuramente (ex.: Formspree, EmailJS), basta alterar o handleSubmit dos componentes — a UI não precisa mudar.

# 📱 PWA

O site é instalável como app no celular:

Android (Chrome): menu → "Adicionar à tela inicial"

iOS (Safari): compartilhar → "Adicionar à Tela de Início"

Configurado via **public/site.webmanifest:**

Campo	            Valor
Nome	            Cardeal Studio
Cor de tema     	#f2eded
Modo de exibição	standalone
Ícones	            192×192 e 512×512

# 🔐 Privacidade e LGPD
Página dedicada em **/politica-de-privacidade** detalhando:

Dados coletados

Finalidade do tratamento

Direitos do titular (LGPD)

Contato do encarregado

# 📦 Scripts disponíveis

```bash
npm run dev      # Ambiente de desenvolvimento
npm run build    # Build de produção
npm run start    # Executa o build
npm run lint     # ESLint
```

# 🌐 Deploy

Vercel (recomendado)
Faça push do repositório para o GitHub

Acesse *vercel.com* → "New Project"

Importe o repositório

Configure:
```bash
Framework Preset: Next.js
```
Root Directory: studio

Clique em Deploy

Pronto — a Vercel detecta tudo automaticamente.

# Alternativas

Netlify: suporta Next.js com o plugin oficial

Cloudflare Pages: suporte a Next.js via adapter

VPS próprio: *npm run build && npm start* com PM2

# 🔄 Histórico de mudanças

v2.0 — Refatoração one-page
Converte site multi-página em one-page com âncoras

Adiciona HeroVideo com vídeo em loop e logo transparente

Substitui formulários de CRM por envio direto via WhatsApp

Aplica tipografia Cormorant + Montserrat globalmente

Adiciona PWA (site.webmanifest) e favicons completos

Configura metadata, Open Graph e Twitter Card

v1.0 — Versão inicial
Estrutura multi-página com sidebar

Integração com CRM Django (removida na v2.0)

# 🤝 Contribuindo
Projeto pessoal do Cardeal Studio. Para sugestões, entre em contato:
📧 contato@cardealstudio.com

📄 Licença
© 2026 Cardeal Studio. Todos os direitos reservados.