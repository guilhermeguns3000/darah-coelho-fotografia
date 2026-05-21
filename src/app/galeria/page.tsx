import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Galeria de Fotos | Darah Coelho Fotografia Goiânia",
  description:
    "Portfólio da fotógrafa Darah Coelho em Goiânia. Trabalhos de moda, ensaio pessoal, casamento, gestante, newborn e fotografia para e-commerce.",
  alternates: { canonical: "https://darahcoelhofotografia.com.br/galeria" },
  robots: { index: true, follow: true },
};

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80", alt: "Book de moda fotógrafa Goiânia", service: "Moda", slug: "book-de-moda-goiania" },
  { src: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&q=80", alt: "Fotografia casamento Goiânia", service: "Casamento", slug: "fotografia-casamento-goiania" },
  { src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&q=80", alt: "Ensaio gestante fotógrafa Goiânia", service: "Gestante", slug: "ensaio-gestante-goiania" },
  { src: "https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=800&q=80", alt: "Ensaio newborn fotógrafa Goiânia", service: "Newborn", slug: "ensaio-newborn-goiania" },
  { src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80", alt: "Ensaio pessoal fotógrafa Goiânia", service: "Ensaio Pessoal", slug: "ensaio-pessoal-goiania" },
  { src: "https://images.unsplash.com/photo-1478369402113-1fd53f17e8b4?w=800&q=80", alt: "Ensaio família fotógrafa Goiânia", service: "Família", slug: "ensaio-familia-goiania" },
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", alt: "Fotografia eventos corporativos Goiânia", service: "Eventos", slug: "eventos-corporativos-goiania" },
  { src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80", alt: "Fotografia produto e-commerce Goiânia", service: "Produto", slug: "fotografia-produto-ecommerce-goiania" },
  { src: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&q=80", alt: "Fotografia batismo Goiânia", service: "Batismo", slug: "fotografia-batismo-goiania" },
  { src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80", alt: "Videomaker Goiânia", service: "Videomaker", slug: "videomaker-goiania" },
  { src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80", alt: "Ensaio editorial moda Goiânia", service: "Moda", slug: "book-de-moda-goiania" },
  { src: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&q=80", alt: "Pré-wedding fotógrafa Goiânia", service: "Casamento", slug: "fotografia-casamento-goiania" },
];

export default function GaleriaPage() {
  return (
    <>
      <section className="pt-32 pb-16 max-w-7xl mx-auto px-6">
        <p className="text-gold text-xs tracking-widest uppercase mb-4">Portfólio</p>
        <h1 className="font-serif text-5xl text-white mb-4">Galeria</h1>
        <p className="text-neutral-400 max-w-xl leading-relaxed">
          Uma seleção de trabalhos de moda, ensaios, casamentos e mais — todos realizados em Goiânia e São Paulo.
        </p>
      </section>

      {/* Filtros por serviço */}
      <section className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 bg-gold text-dark text-xs tracking-widest uppercase">Todos</span>
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/servicos/${s.slug}`}
              className="px-4 py-2 border border-dark-400 text-neutral-500 text-xs tracking-widest uppercase hover:border-gold hover:text-gold transition-all"
            >
              {s.shortTitle}
            </Link>
          ))}
        </div>
      </section>

      {/* Grid masonry-style */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-1 space-y-1">
          {galleryImages.map((img, i) => (
            <Link
              key={i}
              href={`/servicos/${img.slug}`}
              className="group block relative overflow-hidden break-inside-avoid"
            >
              <div className="relative w-full overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={i % 3 === 0 ? 1000 : 600}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    {img.service}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
