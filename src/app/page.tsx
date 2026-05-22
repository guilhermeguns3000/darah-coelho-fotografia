import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import { services, toCardImage } from "@/lib/services";

export const metadata: Metadata = {
  title: "Darah Coelho Fotografia | Fotógrafa em Goiânia",
  description:
    "Fotógrafa profissional em Goiânia especializada em moda, ensaios, casamento, gestante e fotografia para e-commerce. Atendimento personalizado com direção artística.",
  alternates: { canonical: "https://darahcoelhofotografia.com.br" },
};

const featuredServices = services.slice(0, 6);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quanto custa um ensaio fotográfico em Goiânia?",
      acceptedAnswer: { "@type": "Answer", text: "O investimento varia conforme o tipo de ensaio, número de looks e duração da sessão. Book de moda, ensaio pessoal e ensaio de gestante têm pacotes diferentes. Entre em contato pelo WhatsApp para receber um orçamento personalizado." },
    },
    {
      "@type": "Question",
      name: "A fotógrafa Darah Coelho atende fora de Goiânia?",
      acceptedAnswer: { "@type": "Answer", text: "Sim. Além de Goiânia, atendo regularmente em São Paulo e posso me deslocar para qualquer cidade do Brasil mediante consulta. Casamentos e eventos corporativos em outras cidades têm orçamento com deslocamento incluso." },
    },
    {
      "@type": "Question",
      name: "Em quanto tempo recebo as fotos depois do ensaio?",
      acceptedAnswer: { "@type": "Answer", text: "Ensaio de moda: até 2 dias úteis. Ensaio pessoal: até 7 dias úteis. Gestante e família: até 15 dias úteis. Casamentos: até 30 dias. Eventos corporativos: até 20 dias. A entrega é feita via link do Drive, disponível por 1 mês." },
    },
    {
      "@type": "Question",
      name: "Preciso ter experiência com fotos para fazer um ensaio?",
      acceptedAnswer: { "@type": "Answer", text: "Não. Todas as sessões têm direção de poses do início ao fim. Você não precisa saber posar — é exatamente para isso que a Darah está lá. A maioria dos clientes nunca tinha feito um ensaio antes e o resultado surpreende." },
    },
    {
      "@type": "Question",
      name: "Qual a melhor época para fazer fotos externas em Goiânia?",
      acceptedAnswer: { "@type": "Answer", text: "A estação seca (abril a setembro) é a mais recomendada para ensaios externos em Goiânia, com céu azul, luz bonita e sem risco de chuva. Junho e julho são os meses ideais. Na estação chuvosa, agendamos sessões pela manhã e trabalhamos com plano B." },
    },
    {
      "@type": "Question",
      name: "Como funciona o agendamento de uma sessão fotográfica?",
      acceptedAnswer: { "@type": "Answer", text: "O primeiro passo é entrar em contato pelo WhatsApp para verificar disponibilidade e alinhar o tipo de sessão desejada. Após a confirmação, realizamos um briefing criativo para planejar locação, looks e conceito antes do dia da sessão." },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* HERO */}
      <section className="relative h-screen flex items-end pb-20 overflow-hidden">
        <Image
          src="https://res.cloudinary.com/djjacet57/image/upload/f_auto,q_auto,w_1920/darah/ensaio%20pessoal/img-0717"
          alt="Fotógrafa Darah Coelho, ensaio de moda em Goiânia"
          fill
          className="object-cover"
          style={{ objectPosition: "50% 70%" }}
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-transparent to-transparent" />
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
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <p className="text-gold text-xs tracking-widest uppercase mb-4">Sobre a Darah</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-tight">
            Uma experiência fotográfica com direção, estilo e propósito
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-4">
            Me chamo Darah Coelho e sou fotógrafa profissional baseada em Goiânia, GO.
            Trabalho com fotografia de moda, ensaios pessoais, casamentos, gestantes,
            newborn e fotografia de produto para e-commerce.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-8">
            Meu diferencial está no atendimento personalizado e na direção artística
            presente em cada sessão, desde o briefing até a entrega das fotos editadas.
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
          <div
            className="absolute inset-0"
            style={{ animation: "kenburns 12s ease-in-out infinite", transformOrigin: "center center" }}
          >
            <Image
              src="https://res.cloudinary.com/djjacet57/image/upload/f_auto,q_auto:best,w_800/darah/Darah%20coelho/img-3778"
              alt="Fotógrafa Darah Coelho em Goiânia"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 45%, rgba(10,10,10,0.6) 100%)" }} />
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="bg-dark-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-16">
            <p className="text-gold text-xs tracking-widest uppercase mb-4">O que faço</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white">Serviços em Goiânia</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {featuredServices.map((service) => (
              <Link
                key={service.slug}
                href={`/servicos/${service.slug}`}
                className="group relative aspect-[4/5] overflow-hidden block"
              >
                <Image
                  src={toCardImage(service.heroImage)}
                  alt={`${service.shortTitle}, fotógrafa Goiânia`}
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
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex justify-between items-end mb-8 md:mb-12">
          <div>
            <p className="text-gold text-xs tracking-widest uppercase mb-2">Trabalhos recentes</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white">Portfólio em Goiânia</h2>
          </div>
          <Link href="/galeria" className="text-sm text-neutral-500 tracking-widest uppercase hover:text-gold transition-colors hidden md:block">
            Ver galeria completa →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {[
            { src: "https://res.cloudinary.com/djjacet57/image/upload/c_fill,g_auto,ar_1:2,w_600,f_auto,q_auto/darah/moda%20feminina/img-40", alt: "Book de moda Goiânia", large: true },
            { src: "https://res.cloudinary.com/djjacet57/image/upload/c_fill,g_face,ar_1:1,w_600,f_auto,q_auto/darah/moda%20feminina/sem-titulo-05", alt: "Ensaio moda feminina Goiânia" },
            { src: "https://res.cloudinary.com/djjacet57/image/upload/c_fill,g_face,ar_1:1,w_600,f_auto,q_auto/darah/casamento/img_0836", alt: "Fotógrafa casamento Goiânia" },
            { src: "https://res.cloudinary.com/djjacet57/image/upload/c_fill,g_face,ar_1:1,w_600,f_auto,q_auto/darah/ensaio%20pessoal/img-0725", alt: "Ensaio pessoal Goiânia" },
            { src: "https://res.cloudinary.com/djjacet57/image/upload/c_fill,g_face,ar_1:1,w_600,f_auto,q_auto/darah/moda%20masculina/sem-titulo-27", alt: "Book masculino Goiânia" },
            { src: "https://res.cloudinary.com/djjacet57/image/upload/c_fill,g_auto,ar_1:1,w_600,f_auto,q_auto/darah/Gestante/cecfd24b-94e9-4c9c-a9ea-a0f98a0a1c61", alt: "Ensaio gestante Goiânia" },
            { src: "https://res.cloudinary.com/djjacet57/image/upload/c_fill,g_auto,ar_1:1,w_600,f_auto,q_auto/darah/eventos%20corporativos/0x7a9832", alt: "Fotografia corporativa Goiânia" },
          ].map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden ${img.large ? "aspect-auto" : "aspect-square"}`}
              style={img.large ? { gridRow: "span 2" } : {}}
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
      <section className="bg-dark-100 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-16">
            <p className="text-gold text-xs tracking-widest uppercase mb-4">Depoimentos reais</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white">O que dizem os clientes</h2>
          </div>

          {/* Depoimentos em destaque */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { text: "Já fazia um tempo que estávamos procurando uma profissional que entendesse a necessidade da nossa marca, e vc conseguiu fazer isso com excelência. Pontualidade incrível, belíssimo atendimento de uma simpatia sem igual.", name: "Janaina Stuart", service: "Book de Moda" },
              { text: "Vc é gigante sério. Foi tão leve e pela primeira vez me senti especial! Quero ter clientes fixos pra gente fotografar juntas. Obrigada por me ceder seu tempo que é muito valioso.", name: "Wellen Rocha", service: "Ensaio Pessoal" },
              { text: "Vc é uma das melhores partes do meu trabalho Darah, sempre fico feliz com o resultado do trampo, isso me faz tão bem! Muito obrigado.", name: "Leonardo Diniz Atos", service: "Eventos Corporativos" },
            ].map((t, i) => (
              <div key={i} className="bg-dark-200 p-6 text-left border border-dark-300">
                <p className="text-gold text-2xl leading-none mb-4 font-serif">"</p>
                <p className="text-neutral-300 leading-relaxed mb-5 text-sm">"{t.text}"</p>
                <p className="text-white font-medium text-sm">{t.name}</p>
                <p className="text-gold text-xs tracking-widest uppercase mt-1">{t.service}</p>
              </div>
            ))}
          </div>

          {/* Prints reais dos clientes */}
          <div>
            <p className="text-neutral-500 text-xs tracking-widest uppercase text-center mb-6">Prints reais de clientes</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              {[
                "darah/depoimentos/31b91e49-62b6-4693-a827-d04bec387805",
                "darah/depoimentos/4d7d8293-ace9-4087-a244-d11e9922cae1",
                "darah/depoimentos/6f7523d7-9d48-4051-9a7b-8f6d4fcbce85",
                "darah/depoimentos/7d796d79-3abf-4219-9eda-442a26206058",
                "darah/depoimentos/ef36aab4-5d94-4b9f-81fa-1202771747a0",
                "darah/depoimentos/f3089693-800d-4c1b-aa06-665f4328090c",
                "darah/depoimentos/img-3151-png",
                "darah/depoimentos/img-3814-png",
                "darah/depoimentos/img-5760-png",
                "darah/depoimentos/img-5997-png",
              ].map((id, i) => (
                <div key={i} className="relative aspect-[9/16] overflow-hidden rounded-sm">
                  <Image
                    src={`https://res.cloudinary.com/djjacet57/image/upload/f_auto,q_auto,w_400/${id}`}
                    alt={`Depoimento de cliente – Darah Coelho Fotografia`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="https://res.cloudinary.com/djjacet57/image/upload/c_fill,g_auto,ar_16:9,w_1920,f_auto,q_auto/darah/casamento/img_0829"
          alt="Fotógrafa Goiânia, agende sua sessão"
          fill
          className="object-cover object-center"
        />
        {/* película: escurece sem apagar a foto */}
        <div className="absolute inset-0 bg-dark/55" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.55) 50%, rgba(10,10,10,0.3) 100%)" }} />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <p className="text-gold text-xs tracking-widest uppercase mb-4">Goiânia e São Paulo</p>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6 leading-tight">
            Sua história merece ser registrada com estilo
          </h2>
          <p className="text-neutral-400 mb-10 text-lg leading-relaxed">
            Entre em contato e vamos criar juntos uma experiência fotográfica única, com direção, propósito e muita arte.
          </p>
          <WhatsAppButton label="Falar com a Darah" message="Olá, Darah! Gostaria de agendar uma sessão fotográfica." />
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-gold text-xs tracking-widest uppercase mb-4">Dúvidas frequentes</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white">Perguntas sobre fotografia em Goiânia</h2>
        </div>
        <div className="divide-y divide-dark-300">
          {[
            {
              q: "Quanto custa um ensaio fotográfico em Goiânia?",
              a: "O investimento varia conforme o tipo de ensaio, número de looks e duração da sessão. Book de moda, ensaio pessoal e ensaio de gestante têm pacotes diferentes. Entre em contato pelo WhatsApp para receber um orçamento personalizado.",
            },
            {
              q: "A fotógrafa Darah Coelho atende fora de Goiânia?",
              a: "Sim. Além de Goiânia, atendo regularmente em São Paulo e posso me deslocar para qualquer cidade do Brasil mediante consulta. Casamentos e eventos corporativos em outras cidades têm orçamento com deslocamento incluso.",
            },
            {
              q: "Em quanto tempo recebo as fotos depois do ensaio?",
              a: "Ensaio de moda: até 2 dias úteis. Ensaio pessoal: até 7 dias úteis. Gestante e família: até 15 dias úteis. Casamentos: até 30 dias. Eventos corporativos: até 20 dias. A entrega é feita via link do Drive, disponível por 1 mês — salve seu material dentro desse prazo.",
            },
            {
              q: "Preciso ter experiência com fotos para fazer um ensaio?",
              a: "Não. Todas as sessões têm direção de poses do início ao fim. Você não precisa saber posar — é exatamente para isso que a Darah está lá. A maioria dos clientes nunca tinha feito um ensaio antes e o resultado surpreende.",
            },
            {
              q: "Qual a melhor época para fazer fotos externas em Goiânia?",
              a: "A estação seca (abril a setembro) é a mais recomendada para ensaios externos em Goiânia, com céu azul, luz bonita e sem risco de chuva. Junho e julho são os meses ideais. Na estação chuvosa, agendamos sessões pela manhã e trabalhamos com plano B.",
            },
            {
              q: "Como funciona o agendamento de uma sessão fotográfica?",
              a: "O primeiro passo é entrar em contato pelo WhatsApp para verificar disponibilidade e alinhar o tipo de sessão desejada. Após a confirmação, realizamos um briefing criativo para planejar locação, looks e conceito antes do dia da sessão.",
            },
          ].map((faq, i) => (
            <details key={i} className="group py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-4 text-white font-medium text-base md:text-lg group-open:text-gold transition-colors">
                {faq.q}
                <span className="shrink-0 text-gold text-xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-neutral-400 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
