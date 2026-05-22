import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Book Fotográfico Goiânia – Ensaio de Moda | Darah Coelho",
  description:
    "Book fotográfico em Goiânia com direção de arte e olhar editorial. Fotógrafa Darah Coelho — ensaios de moda, book pessoal e editorial para modelos, marcas e agências. Agende.",
  keywords: [
    "book fotográfico Goiânia",
    "ensaio de moda Goiânia",
    "fotógrafa moda Goiânia",
    "book de moda Goiânia",
    "ensaio editorial Goiânia",
    "book pessoal Goiânia",
  ],
  alternates: {
    canonical: "https://darahcoelhofotografia.com.br/book-fotografico-goiania",
  },
  openGraph: {
    title: "Book Fotográfico Goiânia – Ensaio de Moda | Darah Coelho",
    description:
      "Book fotográfico em Goiânia com direção de arte. Fotógrafa Darah Coelho — ensaios de moda, book pessoal e editorial. Agende sua sessão.",
    images: [
      {
        url: "https://res.cloudinary.com/djjacet57/image/upload/f_auto,q_auto,w_1920/darah/boda%202/capa-1?w=1200&q=80",
        alt: "Book fotográfico Goiânia — Darah Coelho",
      },
    ],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "Photographer"],
      "@id": "https://darahcoelhofotografia.com.br/book-fotografico-goiania/#page",
      name: "Darah Coelho Fotografia",
      description:
        "Book fotográfico e ensaio de moda em Goiânia com direção de arte e atendimento personalizado.",
      url: "https://darahcoelhofotografia.com.br/book-fotografico-goiania",
      email: "contato@darahcoelhofotografia.com.br",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Goiânia",
        addressRegion: "GO",
        addressCountry: "BR",
      },
      areaServed: ["Goiânia", "Aparecida de Goiânia", "São Paulo"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Book Fotográfico e Ensaio de Moda",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Book de Moda Goiânia",
              description:
                "Ensaio editorial de moda em Goiânia com direção de arte completa.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Book Pessoal Goiânia",
              description:
                "Ensaio fotográfico pessoal em Goiânia com direção de poses e resultado autêntico.",
            },
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: "https://darahcoelhofotografia.com.br",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Book Fotográfico Goiânia",
          item: "https://darahcoelhofotografia.com.br/book-fotografico-goiania",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quanto custa um book fotográfico em Goiânia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O valor varia conforme o tipo de book (moda, pessoal, editorial), número de looks e locação. Entre em contato para receber um orçamento personalizado.",
          },
        },
        {
          "@type": "Question",
          name: "Qual a diferença entre book de moda e book pessoal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O book de moda tem foco em ensaio editorial com styling, direção de arte e estética fashion — ideal para modelos e marcas. O book pessoal é mais intimista, voltado para expressar a personalidade e o momento de vida de cada pessoa.",
          },
        },
        {
          "@type": "Question",
          name: "A fotógrafa atende em São Paulo além de Goiânia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. Darah Coelho atende regularmente em São Paulo e pode se deslocar para outras cidades mediante consulta.",
          },
        },
        {
          "@type": "Question",
          name: "Preciso ter experiência como modelo para fazer um book?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Não. A direção de poses está presente do início ao fim da sessão. Você não precisa saber posar — é exatamente para isso que a fotógrafa está ali.",
          },
        },
      ],
    },
  ],
};

export default function BookFotograficoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <section className="relative h-[80vh] flex items-end pb-20 overflow-hidden pt-16">
        <Image
          src="https://res.cloudinary.com/djjacet57/image/upload/f_auto,q_auto,w_1920/darah/boda%202/capa-1?w=1920&q=80"
          alt="Book fotográfico Goiânia — ensaio de moda Darah Coelho"
          fill
          className="object-cover object-top"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <nav className="flex gap-2 text-xs text-neutral-500 tracking-widest uppercase mb-6">
            <Link href="/" className="hover:text-gold transition-colors">Início</Link>
            <span>/</span>
            <span className="text-gold">Book Fotográfico</span>
          </nav>
          <p className="text-gold text-xs tracking-widest uppercase mb-3">Goiânia e São Paulo</p>
          <h1 className="font-serif text-5xl md:text-7xl text-white max-w-3xl leading-tight mb-4">
            Book Fotográfico<br />
            <span className="text-gold">Goiânia</span>
          </h1>
          <p className="text-neutral-300 text-lg max-w-xl leading-relaxed">
            Ensaio de moda e book pessoal com direção de arte, estética editorial e atendimento personalizado.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-neutral-300 text-xl leading-relaxed mb-6">
          Um book fotográfico em Goiânia feito com intenção é diferente de qualquer outra sessão de fotos. Cada imagem é pensada para transmitir <span className="text-gold">verdade, leveza e elegância</span> — com direção de arte do briefing à entrega final.
        </p>
        <div className="space-y-5 text-neutral-400 leading-relaxed">
          <p>
            A Darah Coelho é fotógrafa especializada em book fotográfico e ensaio de moda em Goiânia. Com olhar editorial e atendimento completamente personalizado, cada sessão começa com uma conversa — sobre quem você é, o que quer transmitir e qual estética combina com o seu momento. O resultado são imagens com identidade própria, que contam uma história.
          </p>
          <p>
            Seja para portfólio profissional, material para agências de moda, redes sociais ou simplesmente para se ver de um ângulo diferente, o book fotográfico em Goiânia pode ser tão fashion ou tão intimista quanto você quiser. Atendemos modelos profissionais e iniciantes, marcas locais e pessoas que nunca fizeram uma sessão fotográfica na vida.
          </p>
          <p>
            As sessões são realizadas em estúdio próprio em Goiânia — com iluminação controlada e cenários montados para cada proposta visual — ou em locações externas cuidadosamente selecionadas. Para projetos maiores ou de moda, também atendemos em São Paulo. A Darah dirige cada pose, cada expressão e cada enquadramento para que você não precise adivinhar o que fazer na frente da câmera.
          </p>
        </div>
        <div className="mt-10">
          <WhatsAppButton
            label="Agendar meu book"
            message="Olá! Vi seu trabalho no site Darah Coelho Fotografia e queria pedir um orçamento e tirar algumas dúvidas."
          />
        </div>
      </section>

      {/* DOIS TIPOS DE BOOK */}
      <section className="bg-dark-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gold text-xs tracking-widest uppercase mb-3">Serviços</p>
          <h2 className="font-serif text-3xl text-white mb-12">
            Tipos de book fotográfico em Goiânia
          </h2>
          <div className="grid md:grid-cols-2 gap-1">
            {/* Book de Moda */}
            <Link
              href="/servicos/book-de-moda-goiania"
              className="group relative aspect-[4/5] overflow-hidden block"
            >
              <Image
                src="https://res.cloudinary.com/djjacet57/image/upload/f_auto,q_auto,w_1920/darah/boda%202/capa-1?w=800&q=80"
                alt="Book de moda fotógrafa Goiânia — editorial e fashion"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-gold text-xs tracking-widest uppercase mb-2">Editorial</p>
                <h3 className="font-serif text-3xl text-white mb-3">Book de Moda</h3>
                <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
                  Ensaio editorial com direção de arte completa — styling, locação, luz e composição para um book com identidade fashion.
                </p>
                <p className="text-gold text-sm mt-4 group-hover:underline">Ver mais sobre book de moda →</p>
              </div>
            </Link>

            {/* Book Pessoal */}
            <Link
              href="/servicos/ensaio-pessoal-goiania"
              className="group relative aspect-[4/5] overflow-hidden block"
            >
              <Image
                src="https://res.cloudinary.com/djjacet57/image/upload/f_auto,q_auto,w_800/darah/ensaio%20pessoal/img-0725"
                alt="Book pessoal ensaio fotográfico Goiânia — autenticidade e leveza"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-gold text-xs tracking-widest uppercase mb-2">Pessoal</p>
                <h3 className="font-serif text-3xl text-white mb-3">Book Pessoal</h3>
                <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
                  Ensaio que revela quem você é — com leveza, autenticidade e direção de poses que te faz sentir à vontade desde o primeiro clique.
                </p>
                <p className="text-gold text-sm mt-4 group-hover:underline">Ver mais sobre ensaio pessoal →</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="font-serif text-3xl text-white mb-12">
          Perguntas frequentes sobre book fotográfico em Goiânia
        </h2>
        <div className="space-y-8">
          {[
            {
              q: "Quanto custa um book fotográfico em Goiânia?",
              a: "O investimento varia conforme o tipo de book (moda, pessoal, editorial), o número de looks e a locação escolhida. Entre em contato pelo WhatsApp para receber um orçamento personalizado para o seu projeto.",
            },
            {
              q: "Qual a diferença entre book de moda e book pessoal?",
              a: "O book de moda tem foco editorial — com styling, direção de arte e estética fashion, ideal para modelos e marcas. O book pessoal é mais intimista, voltado para expressar a personalidade e o momento de vida de cada pessoa.",
            },
            {
              q: "A fotógrafa atende em São Paulo além de Goiânia?",
              a: "Sim. Darah Coelho atende regularmente em São Paulo e pode se deslocar para outras cidades mediante consulta. Entre em contato para verificar disponibilidade.",
            },
            {
              q: "Preciso ter experiência como modelo para fazer um book?",
              a: "Não. A direção de poses está presente do início ao fim da sessão. Você não precisa saber posar — é exatamente para isso que a fotógrafa está ali.",
            },
          ].map((faq, i) => (
            <div key={i} className="border-b border-dark-300 pb-8">
              <h3 className="text-white font-medium mb-3 text-lg">{faq.q}</h3>
              <p className="text-neutral-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-200 border-y border-dark-300 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl text-white mb-4">
            Pronta para o seu book fotográfico em Goiânia?
          </h2>
          <p className="text-neutral-400 mb-8 text-lg leading-relaxed">
            Entre em contato e vamos planejar juntos o ensaio que vai contar a sua história do jeito que ela merece ser contada.
          </p>
          <WhatsAppButton
            label="Falar com a Darah"
            message="Olá! Vi seu trabalho no site Darah Coelho Fotografia e queria pedir um orçamento e tirar algumas dúvidas."
          />
        </div>
      </section>
    </>
  );
}
