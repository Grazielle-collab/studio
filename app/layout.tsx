// studio/app/layout.tsx
import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

// ============================================
// FONTES
// ============================================

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// ============================================
// METADATA
// ============================================

export const metadata: Metadata = {
  metadataBase: new URL("https://cardealstudio.com"),
  title: {
    default: "Cardeal Studio",
    template: "%s | Cardeal Studio",
  },
  description:
    "Beleza sofisticada, atendimento personalizado e experiências exclusivas.",

  manifest: "/site.webmanifest",

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },

  openGraph: {
    title: "Cardeal Studio",
    description:
      "Beleza sofisticada, atendimento personalizado e experiências exclusivas.",
    url: "https://cardealstudio.com",
    siteName: "Cardeal Studio",
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cardeal Studio",
    description:
      "Beleza sofisticada, atendimento personalizado e experiências exclusivas.",
  },

  keywords: [
    "Cardeal Studio",
    "salão de beleza",
    "Santana",
    "São Paulo",
    "cabelo",
    "estética",
    "agendamento",
  ],
};

// ============================================
// LAYOUT RAIZ
// ============================================

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} ${cormorant.variable} antialiased`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}