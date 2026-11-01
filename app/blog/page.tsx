// studio/app/blog/page.tsx
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main className="bg-[#f2eded] text-[#111111] min-h-screen py-32 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        
        {/* Botão de voltar */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-[4px] hover:opacity-60 transition mb-12 text-black"
        >
          ← Voltar para o início
        </Link>

        <div className="text-center mb-20">
          <p className="uppercase tracking-[8px] text-xs text-neutral-500">Experiência Cardeal</p>
          <h1 className="mt-6 font-serif text-4xl md:text-6xl font-light">Nosso Blog</h1>
        </div>

        <div className="grid gap-12">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="border-b border-neutral-300 pb-8 flex flex-col md:flex-row gap-8 items-center">
                {/* Imagem de capa */}
                {post.meta.image && (
                  <div className="w-full md:w-1/3 overflow-hidden rounded-lg">
                    <img 
                      src={post.meta.image} 
                      alt={post.meta.title} 
                      className="w-full h-[200px] object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                )}
                
                {/* Texto */}
                <div className="w-full md:w-2/3">
                  <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">
                    {new Date(post.meta.date).toLocaleDateString('pt-BR')}
                  </p>
                  <h2 className="text-3xl font-serif group-hover:text-neutral-600 transition mb-4">
                    {post.meta.title}
                  </h2>
                  <p className="text-neutral-600">{post.meta.description}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}