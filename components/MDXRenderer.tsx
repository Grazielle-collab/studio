// studio/components/MDXRenderer.tsx
"use client";

import { useEffect, useState } from "react";

export default function MDXRenderer({ slug }: { slug: string }) {
  const [Post, setPost] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    // Import dinâmico no cliente
    import(`@/content/blog/${slug}.mdx`)
      .then((mod) => setPost(() => mod.default))
      .catch((err) => console.error("Erro ao carregar MDX:", err));
  }, [slug]);

  if (!Post) return <p className="text-neutral-500">Carregando conteúdo...</p>;

  return <Post />;
}