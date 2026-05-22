import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Darah Coelho Fotografia | Fotógrafa em Goiânia",
  description:
    "Fotógrafa profissional em Goiânia especializada em moda, ensaios, casamento, gestante e fotografia para e-commerce. Atendimento personalizado com direção artística.",
  alternates: { canonical: "https://darahcoelhofotografia.com.br" },
};

const featuredServices = services.slice(0, 6);

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen flex items-end pb-20 overflow-hidden">
        <Image
          src="https://res.cloudinary.com/djjacet57/image/upload/f_auto,q_auto,w_1920/darah/ensaio%20pessoal/img-0717"
          alt="Fotógrafa Darah Coelho — ensaio de moda em Goiânia"
          fill
          className="object-cover"
          style={{ objectPosition: "50% 70%" }}
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <p className="text-gold text-xs tracking-widest uppercase mb-4 [text-shadow:0_1px_6px_rgba(0,0,0,0.9)]">
            Fotógrafa em Goiânia
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-white max-w-2xl leading-tight mb-6 [text-shadow:0_2px_12px_rgba(0,0,0,0.8)]">
            Darah Coelho
            <br />
            <span className="text-gold">Fotografia</span>
          </h1>
          <p className="text-neutral-200 text-lg max-w-lg mb-8 leading-relaxed [text-shadow:0_1px_8px_rgba(0,0,0,0.9)]">
            Cada foto pensada para transmitir verdade, leveza e elegância.
            Especializada em moda, ensaios e casamento em Goiânia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppButton label="Agende sua sessão" />
            <Link
              href="/galeria"
              className="inline-flex items-center gap-2 px-7 py-4 border border-white/30 text-white text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all"
            >
              Ver portfólio
            </Link>
          </div>
        </div>
      </section>

      {/* SOBRE RÁPIDO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-gold text-xs tracking-widest uppercase mb-4">Sobre a Darah</p>
          <h2 className="font-serif text-4xl text-white mb-6 leading-tight">
            Uma experiência fotográfica com direção, estilo e propósito
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-4">
            Me chamo Darah Coelho e sou fotógrafa profissional baseada em Goiânia, GO.
            Trabalho com fotografia de moda, ensaios pessoais, casamentos, gestantes,
            newborn e fotografia de produto para e-commerce.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-8">
            Meu diferencial está no atendimento personalizado e na direção artística
            presente em cada sessão — desde o briefing até a entrega das fotos editadas.
            Atendo também em São Paulo.
          </p>
          <Link
            href="/sobre"
            className="text-gold text-sm tracking-widest uppercase underline underline-offset-4 hover:text-gold-light transition-colors"
          >
            Conhecer mais →
          </Link>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="https://res.cloudinary.com/djjacet57/image/upload/f_auto,q_auto,w_800/darah/Darah%20coelho/img-3777"
            alt="Fotógrafa Darah Coelho em Goiânia"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="bg-dark-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-widest uppercase mb-4">O que faço</p>
            <h2 className="font-serif text-4xl text-white">Serviços em Goiânia</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {featuredServices.map((service) => (
              <Link
                key={service.slug}
                href={`/servicos/${service.slug}`}
                className="group relative aspect-[4/5] overflow-hidden block"
              >
                <Image
                  src={service.heroImage}
                  alt={`${service.shortTitle} — fotógrafa Goiânia`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-gold text-xs tracking-widest uppercase mb-1">Goiânia</p>
                  <h3 className="font-serif text-xl text-white">{service.shortTitle}</h3>
                  <p className="text-neutral-400 text-sm mt-1 group-hover:text-neutral-300 transition-colors">
                    Ver mais →
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/servicos"
              className="inline-block px-8 py-4 border border-dark-400 text-neutral-400 text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all"
            >
              Ver todos os serviços
            </Link>
          </div>
        </div>
      </section>

      {/* PORTFÓLIO PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-gold text-xs tracking-widest uppercase mb-2">Trabalhos recentes</p>
            <h2 className="font-serif text-4xl text-white">Portfólio</h2>
          </div>
          <Link href="/galeria" className="text-sm text-neutral-500 tracking-widest uppercase hover:text-gold transition-colors hidden md:block">
            Ver galeria completa →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {[
            { src: "https://res.cloudinary.com/djjacet57/image/upload/f_auto,q_auto,w_600/darah/moda%20feminina/sem-ti-tulo-01", alt: "Book de moda Goiânia", span: "row-span-2" },
            { src: "https://res.cloudinary.com/djjacet57/image/upload/f_auto,q_auto,w_600/darah/eventos%20corporativos/0x7a9837", alt: "Fotografia eventos Goiânia" },
            { src: "https://res.cloudinary.com/djjacet57/image/upload/f_auto,q_auto,w_600/darah/Gestante/cecfd24b-94e9-4c9c-a9ea-a0f98a0a1c61", alt: "Ensaio gestante Goiânia" },
            { src: "https://res.cloudinary.com/djjacet57/image/upload/f_auto,q_auto,w_600/darah/ensaio%20pessoal/img-0725", alt: "Ensaio pessoal Goiânia" },
            { src: "https://res.cloudinary.com/djjacet57/image/upload/f_auto,q_auto,w_600/darah/moda%20feminina/img-40", alt: "Ensaio moda editorial Goiânia" },
          ].map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden ${img.span ?? "aspect-square"} ${img.span ? "aspect-auto" : ""}`}
              style={img.span ? { gridRow: "span 2" } : {}}
            >
              <div className="relative w-full h-full min-h-[200px]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="bg-dark-100 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold text-xs tracking-widest uppercase mb-4">Feedbacks</p>
          <h2 className="font-serif text-4xl text-white mb-16">O que dizem os clientes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "A Darah captou exatamente o que eu queria no ensaio de moda. Profissionalismo, direção impecável e fotos lindíssimas.", name: "Ana Clara", service: "Ensaio de Moda" },
              { text: "As fotos do nosso casamento ficaram perfeitas. Ela sabe capturar os momentos reais sem perder a estética.", name: "Mariana & Felipe", service: "Casamento" },
              { text: "Ensaio de gestante mais especial que eu poderia ter. A Darah nos deixou completamente à vontade.", name: "Gabriela", service: "Gestante" },
            ].map((t, i) => (
              <div key={i} className="bg-dark-200 p-6 text-left border border-dark-300">
                <p className="text-neutral-400 leading-relaxed mb-4 text-sm">"{t.text}"</p>
                <p className="text-white font-medium text-sm">{t.name}</p>
                <p className="text-gold text-xs tracking-widest uppercase mt-1">{t.service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="https://res.cloudinary.com/djjacet57/image/upload/f_auto,q_auto,w_1920/darah/moda%20feminina/sem-ti-tulo-05"
          alt="Fotógrafa Goiânia — agende sua sessão"
          fill
          className="object-cover object-center opacity-30"
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <p className="text-gold text-xs tracking-widest uppercase mb-4">Goiânia e São Paulo</p>
          <h2 className="font-serif text-5xl text-white mb-6 leading-tight">
            Sua história merece ser registrada com estilo
          </h2>
          <p className="text-neutral-400 mb-10 text-lg leading-relaxed">
            Entre em contato e vamos criar juntos uma experiência fotográfica única — com direção, propósito e muita arte.
          </p>
          <WhatsAppButton label="Falar com a Darah" message="Olá, Darah! Gostaria de agendar uma sessão fotográfica." />
        </div>
      </section>
    </>
  );
}
