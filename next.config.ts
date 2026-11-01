// studio/next.config.ts
import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // 1. Habilita o processamento de arquivos MDX para o blog
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // 2. Mantém seus redirecionamentos
  async redirects() {
    return [
      {
        source: "/agendamento",
        destination: "/agendamento/",
        permanent: true,
      },
    ];
  },

  // 3. Configuração de imagens
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

// Envolve a configuração com o plugin MDX
const withMDX = createMDX({
  options: {
    // ✅ Passamos o nome do plugin como string para o Turbopack conseguir processar
    remarkPlugins: [["remark-frontmatter"]],
  },
});

// Exporta a configuração unificada
export default withMDX(nextConfig);