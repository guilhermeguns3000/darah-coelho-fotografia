import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services, toCardImage } from "@/lib/services";

export const metadata: Metadata = {
  title: "Serviços de Fotografia em Goiânia | Darah Coelho",
  description:
    "Fotógrafa profissional em Goiânia com serviços de book de moda, ensaio pessoal, casamento, gestante, família, batismo, eventos corporativos e videomaker. Atendimento personalizado.",
  alternates: { canonical: "https://darahcoelhofotografia.com.br/servicos" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "Photographer"],
      "@id": "https://darahcoelhofotografia.com.br/#business",
      name: "Darah Coelho Fotografia",
      description: "Fotógrafa profissional em Goiânia especializada em moda, casamento, ensaio pessoal, gestante, newborn, família e eventos.",
      url: "https://darahcoelhofotografia.com.br",
      telephone: "+55-62-98293-3266",
      email: "contato@darahcoelhofotografia.com.br",
      priceRange: "$$",
      sameAs: ["https://www.instagram.com/darahcoelho/"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Goiânia",
        addressRegion: "GO",
        addressCountry: "BR",
      },
      areaServed: ["Goiânia", "Aparecida de Goiânia", "Anápolis", "São Paulo"],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: "https://darahcoelhofotografia.com.br" },
        { "@type": "ListItem", position: 2, name: "Serviços de Fotografia em Goiânia", item: "https://darahcoelhofotografia.com.br/servicos" },
      ],
    },
    {
      "@type": "ItemList",
      name: "Serviços de fotografia em Goiânia",
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.title,
        url: `https://darahcoelhofotografia.com.br/servicos/${s.slug}`,
      })),
    },
  ],
};

export default function ServicosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="pt-24 md:pt-32 pb-10 md:pb-16 max-w-7xl mx-auto px-6">
        <nav className="flex gap-2 text-xs text-neutral-500 tracking-widest uppercase mb-8">
          <Link href="/" className="hover:text-gold transition-colors">Início</Link>
          <span>/</span>
          <span className="text-gold">Serviços</span>
        </nav>
        <p className="text-gold text-xs tracking-widest uppercase mb-4">Goiânia, GO</p>
        <h1 className="font-serif text-3xl md:text-5xl text-white mb-6">Serviços de Fotografia em Goiânia</h1>
        <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
          A Darah Coelho é fotógrafa profissional em Goiânia com serviços de book de moda, ensaio pessoal,
          fotografia de casamento, ensaio de gestante, família, batismo, eventos corporativos e videomaker.
          Cada sessão com atendimento personalizado, direção artística e resultado que reflete a identidade
          única de cada cliente.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/servicos/${service.slug}`}
              className="group relative aspect-[4/5] overflow-hidden block"
            >
              <Image
                src={toCardImage(service.heroImage)}
                alt={`${service.keywords[0]}, fotógrafa Darah Coelho Goiânia`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-gold text-xs tracking-widest uppercase mb-1">Goiânia</p>
                <h2 className="font-serif text-xl text-white">{service.shortTitle}</h2>
                <p className="text-neutral-400 text-sm mt-2 leading-snug line-clamp-2">
                  {service.description.split(".")[0]}.
                </p>
                <p className="text-gold text-xs mt-3">Saiba mais →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
