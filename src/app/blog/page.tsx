import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Dicas de Fotografia em Goiânia – Darah Coelho",
  description:
    "Dicas de fotografia, inspirações para ensaios e informações sobre serviços fotográficos em Goiânia. Blog da fotógrafa Darah Coelho.",
  alternates: { canonical: "https://darahcoelhofotografia.com.br/blog" },
};

const BASE = "https://res.cloudinary.com/djjacet57/image/upload/c_fill,g_face,ar_16:7,w_800,f_auto,q_auto";

const posts = [
  {
    slug: "quanto-custa-ensaio-moda-goiania",
    title: "Quanto custa um ensaio de moda em Goiânia?",
    excerpt: "Entenda o que influencia o investimento em um book de moda e o que esperar de uma sessão editorial profissional em Goiânia.",
    date: "2026-05-01",
    category: "Moda",
    heroImg: `${BASE}/darah/moda%20feminina/sem-ti-tulo-01`,
    heroAlt: "Book de moda Goiânia – Darah Coelho",
  },
  {
    slug: "melhor-epoca-fotos-externas-goiania",
    title: "Melhor época do ano para fotos externas em Goiânia",
    excerpt: "Goiânia tem clima específico que afeta diretamente a qualidade das fotos ao ar livre. Veja quando e como planejar seu ensaio.",
    date: "2026-04-15",
    category: "Dicas",
    heroImg: `${BASE}/darah/ensaio%20pessoal/img-0717`,
    heroAlt: "Ensaio externo Goiânia – fotógrafa Darah Coelho",
  },
  {
    slug: "ensaio-gestante-quando-fazer",
    title: "Ensaio gestante: quando fazer e como se preparar",
    excerpt: "A janela ideal para o ensaio de gestante, como escolher o look, o que esperar da sessão e como aproveitar ao máximo.",
    date: "2026-04-01",
    category: "Gestante",
    heroImg: `${BASE}/darah/Gestante/cecfd24b-94e9-4c9c-a9ea-a0f98a0a1c61`,
    heroAlt: "Ensaio gestante Goiânia – Darah Coelho fotógrafa",
  },
  {
    slug: "o-que-e-fotografia-editorial",
    title: "O que é fotografia editorial e para quem é?",
    excerpt: "Diferença entre book pessoal e fotografia editorial, como funciona o processo criativo e quem pode se beneficiar de um editorial.",
    date: "2026-03-20",
    category: "Moda",
    heroImg: `${BASE}/darah/moda%20feminina/img-40`,
    heroAlt: "Fotografia editorial moda Goiânia – Darah Coelho",
  },
  {
    slug: "como-escolher-fotografa-casamento-goiania",
    title: "Como escolher a fotógrafa de casamento certa em Goiânia",
    excerpt: "5 critérios fundamentais para escolher a fotógrafa do seu casamento em Goiânia, além do portfólio.",
    date: "2026-03-05",
    category: "Casamento",
    heroImg: `${BASE}/darah/casamento/img-0836`,
    heroAlt: "Fotógrafa casamento Goiânia – Darah Coelho",
  },
  {
    slug: "looks-ensaio-fotografico",
    title: "Looks para ensaio fotográfico: o que vestir",
    excerpt: "Guia completo de combinações de roupas que funcionam para ensaios em estúdio e ao ar livre, com dicas de cores e estilos.",
    date: "2026-02-20",
    category: "Dicas",
    heroImg: `${BASE}/darah/moda%20feminina/sem-titulo-43`,
    heroAlt: "Looks para ensaio fotográfico Goiânia – Darah Coelho",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-16 max-w-7xl mx-auto px-6">
        <p className="text-gold text-xs tracking-widest uppercase mb-4">Conteúdo</p>
        <h1 className="font-serif text-5xl text-white mb-4">Blog</h1>
        <p className="text-neutral-400 max-w-xl leading-relaxed">
          Dicas de fotografia, inspirações e informações sobre ensaios em Goiânia.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group border border-dark-300 hover:border-gold transition-colors"
            >
              <div className="relative aspect-[16/7] overflow-hidden">
                <Image
                  src={post.heroImg}
                  alt={post.heroAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span className="text-gold text-xs tracking-widest uppercase">{post.category}</span>
                <h2 className="font-serif text-xl text-white mt-3 mb-3 group-hover:text-gold transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <p className="text-neutral-600 text-xs">
                  {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
