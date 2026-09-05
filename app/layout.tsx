import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

// ============================================
// FONTES
// ============================================

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// ============================================
// METADATA
// ============================================

export const metadata: Metadata = {
  title: "CardealStudio",
  description: "Beleza sofisticada e experiências exclusivas.",
};

// ============================================
// LAYOUT PRINCIPAL
// ============================================

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${cormorant.variable} ${montserrat.variable}`}
      >
        {/* EMPRESA ID DO CARDEAL STUDIO */}
        <Analytics empresaId={1} />
        {children}
      </body>
    </html>
  );
}