import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Sobre a Darah Coelho | Fotógrafa em Goiânia",
  description:
    "Conheça a Darah Coelho, fotógrafa profissional em Goiânia especializada em moda, casamento, ensaios e fotografia para e-commerce. Atendimento personalizado com direção artística.",
  alternates: { canonical: "https://darahcoelhofotografia.com.br/sobre" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Darah Coelho",
  jobTitle: "Fotógrafa Profissional",
  url: "https://darahcoelhofotografia.com.br/sobre",
  worksFor: {
    "@type": "LocalBusiness",
    name: "Darah Coelho Fotografia",
    "@id": "https://darahcoelhofotografia.com.br/#business",
  },
  knowsAbout: ["Fotografia de Moda", "Fotografia de Casamento", "Ensaio Gestante", "Ensaio Newborn", "Fotografia para E-commerce"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Goiânia",
    addressRegion: "GO",
    addressCountry: "BR",
  },
};

export default function SobrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <section className="pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-0 items-stretch min-h-[60vh]">
          <div className="flex flex-col justify-center py-16 pr-0 md:pr-16">
            <p className="text-gold text-xs tracking-widest uppercase mb-4">Fotógrafa em Goiânia</p>
            <h1 className="font-serif text-5xl text-white mb-6 leading-tight">
              Me chamo<br />Darah Coelho
            </h1>
            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
              Sou fotógrafa profissional baseada em Goiânia, GO, especializada em fotografia de moda,
              ensaios pessoais, casamentos, gestante, newborn e fotografia para e-commerce.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-8">
              Meu trabalho começa muito antes do clique — está no briefing, no moodboard, na escolha
              da locação, na direção de poses e no olhar que transforma um momento em arte.
              Cada foto é pensada para transmitir <span className="text-gold">verdade, leveza e elegância</span>.
            </p>
            <WhatsAppButton label="Falar com a Darah" />
          </div>
          <div className="relative min-h-[400px]">
            <Image
              src="https://res.cloudinary.com/djjacet57/image/upload/f_auto,q_auto,w_900/darah/Darah%20coelho/img-3778"
              alt="Darah Coelho — fotógrafa profissional em Goiânia"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="bg-dark-100 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gold text-xs tracking-widest uppercase mb-4">Por que a Darah</p>
          <h2 className="font-serif text-3xl text-white mb-12">Diferenciais</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Direção artística completa", text: "Não basta ter câmera. Cada sessão tem um briefing criativo, moodboard e direção de poses do início ao fim. Você não precisa saber posar — é para isso que estou aqui." },
              { title: "Atendimento personalizado", text: "Nenhuma sessão é igual à outra. Entendo o que cada cliente quer transmitir e construo a experiência em torno disso — do estilo ao ambiente, da luz à edição." },
              { title: "Especialista em moda e editorial", text: "Domínio técnico e estético de fotografia fashion e editorial, com olhar treinado para composição, styling e narrativa visual." },
              { title: "Goiânia e São Paulo", text: "Baseada em Goiânia com atendimento regular também em São Paulo. Para projetos especiais, me desloco para qualquer lugar do Brasil." },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-gold pl-6 py-2">
                <h3 className="text-white font-medium mb-2">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <p className="text-gold text-xs tracking-widest uppercase mb-4">Especialidades</p>
        <h2 className="font-serif text-3xl text-white mb-10">O que fotografo</h2>
        <div className="flex flex-wrap gap-3">
          {["Book de Moda", "Ensaio Pessoal", "Casamento", "Gestante", "Newborn", "Família", "Batismo", "Eventos Corporativos", "Fotografia de Produto", "Videomaker"].map((esp) => (
            <span key={esp} className="px-4 py-2 border border-dark-400 text-neutral-400 text-sm hover:border-gold hover:text-gold transition-all">
              {esp}
            </span>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section className="bg-dark-100 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl text-white mb-4">Vamos trabalhar juntos?</h2>
          <p className="text-neutral-400 mb-8 text-lg">
            Entre em contato e cuente como posso ajudar com o seu projeto.
          </p>
          <WhatsAppButton label="Agendar sessão" message="Olá, Darah! Vi o seu trabalho e gostaria de agendar uma sessão." />
        </div>
      </section>
    </>
  );
}
