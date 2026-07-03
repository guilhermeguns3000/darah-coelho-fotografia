import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/services";
import { getBairro, isPublished, localPages } from "@/lib/bairros";
import WhatsAppButton from "@/components/WhatsAppButton";

interface Props {
  params: Promise<{ slug: string; bairro: string }>;
}

// Só os combos da allowlist viram páginas.
export function generateStaticParams() {
  return localPages.map((c) => ({ slug: c.service, bairro: c.bairro }));
}

const BASE = "https://darahcoelhofotografia.com.br";

// Rótulo natural do serviço, sem o sufixo "em Goiânia"
// ("Ensaio de Gestante em Goiânia" -> "Ensaio de Gestante").
function serviceLabel(title: string): string {
  return title.replace(/\s*(em\s+)?Goiânia.*$/i, "").trim();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, bairro } = await params;
  const service = getServiceBySlug(slug);
  const b = getBairro(bairro);
  if (!service || !b || !isPublished(slug, bairro)) return {};

  const label = serviceLabel(service.title);
  const noBairro = `${b.artigo === "a" ? "na" : "no"} ${b.nome}`;
  const title = `${label} ${noBairro} | Darah Coelho`;
  const description = `${label} ${noBairro}, em Goiânia, com a fotógrafa Darah Coelho. ${b.tagline}. Agende pelo WhatsApp.`;

  return {
    title,
    description,
    keywords: [
      `${label} ${b.nome}`,
      `fotógrafa ${b.nome}`,
      `${label.toLowerCase()} Goiânia`,
      ...service.keywords.slice(0, 3),
    ],
    alternates: { canonical: `${BASE}/servicos/${slug}/${bairro}` },
    openGraph: {
      title,
      description,
      images: [{ url: service.heroImage, alt: `${service.shortTitle} ${b.nome}, Goiânia` }],
    },
  };
}

export default async function LocalServicePage({ params }: Props) {
  const { slug, bairro } = await params;
  const service = getServiceBySlug(slug);
  const b = getBairro(bairro);
  if (!service || !b || !isPublished(slug, bairro)) notFound();

  const label = serviceLabel(service.title);
  const labelLc = label.toLowerCase();
  const noBairro = `${b.artigo === "a" ? "na" : "no"} ${b.nome}`;
  const url = `${BASE}/servicos/${slug}/${bairro}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "Photographer"],
        "@id": `${url}/#service`,
        name: "Darah Coelho Fotografia",
        description: `${service.title} ${noBairro}, em Goiânia. ${service.description}`,
        url,
        telephone: "+55-62-98293-3266",
        email: "darahtrabalho@icloud.com",
        priceRange: "$$",
        sameAs: ["https://www.instagram.com/darahcoelho/"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Goiânia",
          addressRegion: "GO",
          addressCountry: "BR",
        },
        areaServed: [{ "@type": "Place", name: `${b.nome}, Goiânia` }],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: BASE },
          { "@type": "ListItem", position: 2, name: "Serviços", item: `${BASE}/servicos` },
          { "@type": "ListItem", position: 3, name: service.shortTitle, item: `${BASE}/servicos/${slug}` },
          { "@type": "ListItem", position: 4, name: b.nome, item: url },
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
          alt={`${service.shortTitle} ${noBairro}, fotógrafa Darah Coelho em Goiânia`}
          fill
          className="object-cover object-center"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <nav className="flex flex-wrap gap-2 text-xs text-neutral-500 tracking-widest uppercase mb-6">
            <Link href="/" className="hover:text-gold transition-colors">Início</Link>
            <span>/</span>
            <Link href="/servicos" className="hover:text-gold transition-colors">Serviços</Link>
            <span>/</span>
            <Link href={`/servicos/${slug}`} className="hover:text-gold transition-colors">{service.shortTitle}</Link>
            <span>/</span>
            <span className="text-gold">{b.nome}</span>
          </nav>
          <p className="text-gold text-xs tracking-widest uppercase mb-3">{b.nome} · Goiânia, GO</p>
          <h1 className="font-serif text-4xl md:text-6xl text-white max-w-3xl leading-tight">
            {label} {noBairro}
          </h1>
          <p className="text-neutral-300 text-lg mt-5 max-w-2xl">{b.tagline}.</p>
        </div>
      </section>

      {/* INTRO + CTA */}
      <section className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <p className="text-neutral-300 text-xl leading-relaxed mb-10">
          {service.description}
        </p>
        <WhatsAppButton
          label={`Agendar ${label} ${noBairro}`}
          message={`Olá, Darah! Tenho interesse em ${service.title} ${noBairro}, em Goiânia. Pode me passar mais informações?`}
        />
      </section>

      {/* O BAIRRO COMO CENÁRIO (conteúdo único) */}
      <section className="bg-dark-100 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gold text-xs tracking-widest uppercase mb-4">Locação</p>
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-8">
            Por que fazer seu {labelLc} {noBairro}
          </h2>
          <div className="space-y-5 mb-10">
            {b.sobre.map((p, i) => (
              <p key={i} className="text-neutral-400 leading-relaxed text-lg">{p}</p>
            ))}
          </div>
          <h3 className="text-white font-medium mb-4">Pontos preferidos para fotografar {noBairro}</h3>
          <ul className="grid md:grid-cols-2 gap-4">
            {b.locacoes.map((loc, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-gold mt-1 shrink-0">✦</span>
                <span className="text-neutral-300">{loc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PACOTES / PREÇOS (reaproveita dados do serviço) */}
      {service.packages && service.packages.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 py-12 md:py-20">
          <p className="text-gold text-xs tracking-widest uppercase mb-4">Investimento</p>
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-8 md:mb-10">
            Pacotes de {labelLc} em Goiânia
          </h2>
          <div className={`grid gap-4 ${service.packages.length <= 2 ? "md:grid-cols-2" : service.packages.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4"}`}>
            {service.packages.map((pkg, i) => (
              <div
                key={i}
                className={`relative p-6 border flex flex-col ${pkg.highlight ? "border-gold bg-dark-200" : "border-dark-300 bg-dark"}`}
              >
                {pkg.highlight && (
                  <span className="absolute -top-3 left-6 bg-gold text-dark text-xs font-medium tracking-widest uppercase px-3 py-1">
                    Mais escolhido
                  </span>
                )}
                <p className="text-gold text-xs tracking-widest uppercase mb-2">{pkg.name}</p>
                <p className="font-serif text-3xl text-white mb-1">{pkg.price}</p>
                {pkg.duration && <p className="text-neutral-500 text-xs tracking-wide mb-5">{pkg.duration}</p>}
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
                    message={`Olá, Darah! Tenho interesse no pacote ${pkg.name} de ${service.title} ${noBairro}. Pode me passar mais informações?`}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQ (reaproveita do serviço) */}
      {service.faqs.length > 0 && (
        <section className="bg-dark-100 py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-8 md:mb-12">
              Perguntas frequentes sobre {labelLc} em Goiânia
            </h2>
            <div className="space-y-8">
              {service.faqs.map((faq, i) => (
                <div key={i} className="border-b border-dark-300 pb-8">
                  <h3 className="text-white font-medium mb-3 text-lg">{faq.question}</h3>
                  <p className="text-neutral-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA FINAL + volta para o serviço (link interno) */}
      <section className="bg-dark-200 border-y border-dark-300 py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-xl md:text-2xl text-white mb-2">
              Agende seu {labelLc} {noBairro}
            </h2>
            <p className="text-neutral-400">
              Atendo em todo o {b.nome} e demais regiões de Goiânia. Veja também a{" "}
              <Link href={`/servicos/${slug}`} className="text-gold hover:underline">
                página completa de {labelLc}
              </Link>.
            </p>
          </div>
          <WhatsAppButton
            label="Falar com a Darah"
            message={`Olá, Darah! Quero saber mais sobre ${service.title} ${noBairro}, em Goiânia.`}
          />
        </div>
      </section>
    </>
  );
}
