import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Serviços de Fotografia em Goiânia | Darah Coelho",
  description:
    "Todos os serviços de fotografia da Darah Coelho em Goiânia: moda, ensaio pessoal, casamento, gestante, newborn, família, batismo, eventos e videomaker.",
  alternates: { canonical: "https://darahcoelhofotografia.com.br/servicos" },
};

export default function ServicosPage() {
  return (
    <>
      <section className="pt-32 pb-16 max-w-7xl mx-auto px-6">
        <p className="text-gold text-xs tracking-widest uppercase mb-4">Goiânia, GO</p>
        <h1 className="font-serif text-5xl text-white mb-6">Serviços</h1>
        <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
          Cada serviço com atendimento personalizado, direção artística e resultado com a
          identidade única de cada cliente.
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
                src={service.heroImage}
                alt={`${service.title} — fotógrafa Goiânia`}
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
                <p className="text-gold text-xs mt-3 group-hover:gap-2 transition-all">
                  Saiba mais →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
