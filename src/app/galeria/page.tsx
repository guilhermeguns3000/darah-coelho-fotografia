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

const BASE = "https://res.cloudinary.com/djjacet57/image/upload/f_auto,q_auto,w_800";

const galleryImages = [
  { src: `${BASE}/darah/moda%20feminina/sem-ti-tulo-01`, alt: "Book de moda fotógrafa Goiânia", service: "Moda", slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-ti-tulo-022`, alt: "Ensaio editorial moda Goiânia", service: "Moda", slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/img-40`, alt: "Book moda feminina Goiânia", service: "Moda", slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-ti-tulo-067`, alt: "Fotografia fashion Goiânia", service: "Moda", slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/ensaio%20pessoal/img-0725`, alt: "Ensaio pessoal fotógrafa Goiânia", service: "Ensaio Pessoal", slug: "ensaio-pessoal-goiania" },
  { src: `${BASE}/darah/ensaio%20pessoal/img-0717`, alt: "Book pessoal Goiânia", service: "Ensaio Pessoal", slug: "ensaio-pessoal-goiania" },
  { src: `${BASE}/darah/ensaio%20pessoal/img-0729`, alt: "Ensaio feminino Goiânia", service: "Ensaio Pessoal", slug: "ensaio-pessoal-goiania" },
  { src: `${BASE}/darah/Gestante/cecfd24b-94e9-4c9c-a9ea-a0f98a0a1c61`, alt: "Ensaio gestante fotógrafa Goiânia", service: "Gestante", slug: "ensaio-gestante-goiania" },
  { src: `${BASE}/darah/Gestante/524ac503-32df-4e54-bbb1-a424ad42de67`, alt: "Fotografia gestante Goiânia", service: "Gestante", slug: "ensaio-gestante-goiania" },
  { src: `${BASE}/darah/eventos%20corporativos/0x7a9832`, alt: "Fotografia eventos corporativos Goiânia", service: "Eventos", slug: "eventos-corporativos-goiania" },
  { src: `${BASE}/darah/eventos%20corporativos/0x7a0117`, alt: "Cobertura evento Goiânia", service: "Eventos", slug: "eventos-corporativos-goiania" },
  { src: `${BASE}/darah/batizado/img-6589`, alt: "Fotografia batismo Goiânia", service: "Batismo", slug: "fotografia-batismo-goiania" },
  { src: `${BASE}/darah/casamento/img-0836`, alt: "Fotografia casamento Goiânia", service: "Casamento", slug: "fotografia-casamento-goiania" },
  { src: `${BASE}/darah/casamento/img-0833`, alt: "Fotógrafa casamento Goiânia", service: "Casamento", slug: "fotografia-casamento-goiania" },
  { src: `${BASE}/darah/casamento/img-0844`, alt: "Casamento fotógrafa Goiânia", service: "Casamento", slug: "fotografia-casamento-goiania" },
];

export default function GaleriaPage() {
  return (
    <>
      <section className="pt-32 pb-16 max-w-7xl mx-auto px-6">
        <p className="text-gold text-xs tracking-widest uppercase mb-4">Portfólio</p>
        <h1 className="font-serif text-5xl text-white mb-4">Galeria</h1>
        <p className="text-neutral-400 max-w-xl leading-relaxed">
          Uma seleção de trabalhos de moda, ensaios, casamentos e mais, todos realizados em Goiânia e São Paulo.
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
