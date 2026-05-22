import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Contato | Agendar Sessão Fotográfica em Goiânia",
  description:
    "Entre em contato com a fotógrafa Darah Coelho em Goiânia. Agende sua sessão de moda, ensaio, casamento, gestante ou newborn pelo WhatsApp.",
  alternates: { canonical: "https://darahcoelhofotografia.com.br/contato" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "Photographer"],
      "@id": "https://darahcoelhofotografia.com.br/#business",
      name: "Darah Coelho Fotografia",
      url: "https://darahcoelhofotografia.com.br",
      telephone: "+55-62-98293-3266",
      email: "darahtrabalho@icloud.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Goiânia",
        addressRegion: "GO",
        addressCountry: "BR",
      },
      areaServed: ["Goiânia", "Aparecida de Goiânia", "Anápolis", "São Paulo"],
      sameAs: [
        "https://www.instagram.com/darahcoelho/",
        "https://www.tiktok.com/@darahcoelho0",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+55-62-98293-3266",
        contactType: "customer service",
        availableLanguage: "Portuguese",
        contactOption: "TollFree",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: "https://darahcoelhofotografia.com.br" },
        { "@type": "ListItem", position: 2, name: "Contato", item: "https://darahcoelhofotografia.com.br/contato" },
      ],
    },
  ],
};

export default function ContatoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="pt-32 pb-20 max-w-4xl mx-auto px-6">
        <p className="text-gold text-xs tracking-widest uppercase mb-4">Goiânia e São Paulo</p>
        <h1 className="font-serif text-5xl text-white mb-6">Contato</h1>
        <p className="text-neutral-400 text-lg leading-relaxed max-w-xl">
          A forma mais rápida de agendar é pelo WhatsApp. Respondo em até 24 horas.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-32 grid md:grid-cols-2 gap-16">
        {/* Contatos diretos */}
        <div>
          <h2 className="font-serif text-2xl text-white mb-8">Fale diretamente</h2>
          <div className="space-y-6">
            <div>
              <p className="text-gold text-xs tracking-widest uppercase mb-2">WhatsApp</p>
              <WhatsAppButton label="Enviar mensagem" />
            </div>
            <div>
              <p className="text-gold text-xs tracking-widest uppercase mb-2">E-mail</p>
              <a
                href="mailto:darahtrabalho@icloud.com"
                className="text-neutral-300 hover:text-gold transition-colors"
              >
                darahtrabalho@icloud.com
              </a>
            </div>
            <div>
              <p className="text-gold text-xs tracking-widest uppercase mb-2">Instagram</p>
              <a
                href="https://www.instagram.com/darahcoelho"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-gold transition-colors"
              >
                @darahcoelho
              </a>
            </div>
            <div>
              <p className="text-gold text-xs tracking-widest uppercase mb-2">TikTok</p>
              <a
                href="https://www.tiktok.com/@darahcoelho0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-gold transition-colors"
              >
                @darahcoelho0
              </a>
            </div>
            <div>
              <p className="text-gold text-xs tracking-widest uppercase mb-2">Localização</p>
              <p className="text-neutral-300">Goiânia, Goiás</p>
              <p className="text-neutral-500 text-sm mt-1">Atende também em São Paulo, SP</p>
            </div>
          </div>
        </div>

        {/* Serviços como links rápidos */}
        <div>
          <h2 className="font-serif text-2xl text-white mb-8">Escolha seu serviço</h2>
          <div className="space-y-2">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`https://wa.me/5562982933266?text=${encodeURIComponent(`Olá! Vi seu trabalho no site Darah Coelho Fotografia e queria pedir um orçamento sobre ${s.title} e tirar algumas dúvidas.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-3 border-b border-dark-300 text-neutral-400 hover:text-gold group transition-colors"
              >
                <span>{s.shortTitle}</span>
                <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">WhatsApp →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
