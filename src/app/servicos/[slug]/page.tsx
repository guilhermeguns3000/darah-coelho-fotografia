import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug, getAllServiceSlugs, toCardImage } from "@/lib/services";
import WhatsAppButton from "@/components/WhatsAppButton";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `https://darahcoelhofotografia.com.br/servicos/${slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [{ url: service.heroImage, alt: service.keywords[0] }],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "Photographer"],
        "@id": `https://darahcoelhofotografia.com.br/servicos/${slug}/#service`,
        name: "Darah Coelho Fotografia",
        description: service.description,
        url: `https://darahcoelhofotografia.com.br/servicos/${slug}`,
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
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: service.title,
          itemListElement: [{
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: service.title, description: service.description },
          }],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: "https://darahcoelhofotografia.com.br" },
          { "@type": "ListItem", position: 2, name: "Serviços", item: "https://darahcoelhofotografia.com.br/servicos" },
          { "@type": "ListItem", position: 3, name: service.title, item: `https://darahcoelhofotografia.com.br/servicos/${slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <section className="relative h-[70vh] flex items-end pb-16 overflow-hidden pt-16">
        <Image
          src={service.heroImage}
          alt={`${service.keywords[0]}, fotógrafa Darah Coelho em Goiânia`}
          fill
          className="object-cover object-center"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          {/* Breadcrumb */}
          <nav className="flex gap-2 text-xs text-neutral-500 tracking-widest uppercase mb-6">
            <Link href="/" className="hover:text-gold transition-colors">Início</Link>
            <span>/</span>
            <Link href="/servicos" className="hover:text-gold transition-colors">Serviços</Link>
            <span>/</span>
            <span className="text-gold">{service.shortTitle}</span>
          </nav>
          <p className="text-gold text-xs tracking-widest uppercase mb-3">Goiânia, GO</p>
          <h1 className="font-serif text-4xl md:text-6xl text-white max-w-3xl leading-tight">
            {service.headline}
          </h1>
        </div>
      </section>

      {/* DESCRIÇÃO */}
      <section className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <p className="text-neutral-300 text-xl leading-relaxed mb-10">{service.description}</p>
        {service.noPortfolio && (
          <p className="text-xs text-neutral-500 tracking-widest uppercase border border-dark-400 inline-block px-4 py-2 mb-8">
            Portfólio desta especialidade em produção — entre em contato para ver exemplos
          </p>
        )}
        <WhatsAppButton
          label={`Agendar ${service.shortTitle}`}
          message={`Olá, Darah! Tenho interesse em ${service.title}. Pode me passar mais informações?`}
        />
      </section>

      {/* PACOTES / PREÇOS */}
      {service.packages && service.packages.length > 0 && (
        <section className="bg-dark-100 py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-gold text-xs tracking-widest uppercase mb-4">Investimento</p>
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-8 md:mb-10">
              Pacotes de {service.shortTitle.toLowerCase()} em Goiânia
            </h2>
            <div className={`grid gap-4 ${service.packages.length <= 2 ? "md:grid-cols-2" : service.packages.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4"}`}>
              {service.packages.map((pkg, i) => (
                <div
                  key={i}
                  className={`relative p-6 border flex flex-col ${
                    pkg.highlight
                      ? "border-gold bg-dark-200"
                      : "border-dark-300 bg-dark"
                  }`}
                >
                  {pkg.highlight && (
                    <span className="absolute -top-3 left-6 bg-gold text-dark text-xs font-medium tracking-widest uppercase px-3 py-1">
                      Mais escolhido
                    </span>
                  )}
                  <p className="text-gold text-xs tracking-widest uppercase mb-2">{pkg.name}</p>
                  <p className="font-serif text-3xl text-white mb-1">{pkg.price}</p>
                  {pkg.duration && (
                    <p className="text-neutral-500 text-xs tracking-wide mb-5">{pkg.duration}</p>
                  )}
                  <ul className="space-y-2 flex-1">
                    {pkg.includes.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-neutral-400">
                        <span className="text-gold shrink-0 mt-0.5">✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <WhatsAppButton
                      label="Quero este pacote"
                      message={`Olá, Darah! Tenho interesse no pacote ${pkg.name} de ${service.title}. Pode me passar mais informações?`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-neutral-600 text-xs mt-6">
              Pagamento parcial realizado até 24h antes da sessão. O material fica disponível por 1 mês no link do Drive — salve dentro desse prazo.
            </p>
          </div>
        </section>
      )}

      {/* CORPO DO TEXTO — SEO content */}
      <section className="max-w-4xl mx-auto px-6 pb-4">
        <div className="space-y-5">
          {service.bodyText.map((paragraph, i) => (
            <p key={i} className="text-neutral-400 leading-relaxed text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* O QUE INCLUI */}
      <section className="bg-dark-100 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-8 md:mb-10">
            O que inclui o {service.shortTitle.toLowerCase()} em Goiânia
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {service.deliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-gold mt-1 shrink-0">✦</span>
                <span className="text-neutral-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <h2 className="font-serif text-2xl md:text-3xl text-white mb-8 md:mb-12">Como funciona o {service.shortTitle.toLowerCase()} com a Darah Coelho</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {service.process.map((p, i) => (
            <div key={i} className="flex gap-5">
              <div className="shrink-0 w-10 h-10 border border-gold flex items-center justify-center text-gold font-serif text-lg">
                {i + 1}
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">{p.step}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA MEIO */}
      <section className="bg-dark-200 border-y border-dark-300 py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-xl md:text-2xl text-white mb-2">Agende seu {service.shortTitle.toLowerCase()} em Goiânia</h2>
            <p className="text-neutral-400">Entre em contato pelo WhatsApp para verificar disponibilidade e orçamento.</p>
          </div>
          <WhatsAppButton
            label="Falar com a Darah"
            message={`Olá, Darah! Quero saber mais sobre ${service.title} em Goiânia.`}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <h2 className="font-serif text-2xl md:text-3xl text-white mb-8 md:mb-12">
          Perguntas frequentes sobre {service.shortTitle.toLowerCase()} em Goiânia
        </h2>
        <div className="space-y-8">
          {service.faqs.map((faq, i) => (
            <div key={i} className="border-b border-dark-300 pb-8">
              <h3 className="text-white font-medium mb-3 text-lg">{faq.question}</h3>
              <p className="text-neutral-400 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-neutral-500 text-sm leading-relaxed">
          Acompanhe o trabalho da Darah Coelho no{" "}
          <a
            href="https://www.instagram.com/darahcoelho/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline"
          >
            Instagram @darahcoelho
          </a>{" "}
          e veja os bastidores das sessões, editoriais e ensaios realizados em Goiânia.
        </p>
      </section>

      {/* OUTROS SERVIÇOS */}
      <section className="bg-dark-100 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-8 md:mb-10">Outros serviços em Goiânia</h2>
          <div className="grid md:grid-cols-3 gap-1">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                href={`/servicos/${s.slug}`}
                className="group relative aspect-[4/3] overflow-hidden block"
              >
                <Image
                  src={toCardImage(s.heroImage)}
                  alt={`${s.keywords[0]}, Darah Coelho fotógrafa Goiânia`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-serif text-lg text-white">{s.shortTitle}</h3>
                  <p className="text-gold text-xs mt-1">Ver mais →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
