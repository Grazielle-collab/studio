// studio/app/blog/[slug]/page.tsx
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import MDXRenderer from "@/components/MDXRenderer"; // 👈 Importa o componente cliente

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-[#f2eded] text-[#111111] min-h-screen py-32 px-6 md:px-20">
      <article className="max-w-3xl mx-auto">
        
        {/* Botão de voltar */}
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-[4px] hover:opacity-60 transition mb-12 text-black"
        >
          ← Voltar para o Blog
        </Link>

        {/* Cabeçalho do Post (Metadados) */}
        <header className="mb-16">
          <p className="text-xs uppercase tracking-widest text-neutral-500 mb-4">
            {new Date(post.meta.date).toLocaleDateString('pt-BR')}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-6">
            {post.meta.title}
          </h1>
          
          {post.meta.image && (
            <div className="w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg mt-8">
              <img 
                src={post.meta.image} 
                alt={post.meta.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </header>

        {/* Conteúdo do Post (Renderizado pelo Componente Cliente) */}
        <div className="prose prose-lg prose-neutral mx-auto prose-headings:font-serif prose-headings:font-light prose-a:text-[#111111]">
          <MDXRenderer slug={slug} />
        </div>
        
      </article>
    </main>
  );
}