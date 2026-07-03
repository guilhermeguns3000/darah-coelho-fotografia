import Link from "next/link";
import { services } from "@/lib/services";

export default function Footer() {
  const whatsapp = "https://wa.me/5562982933266";

  return (
    <footer className="bg-dark-100 border-t border-dark-300 mt-16 md:mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="font-serif text-xl tracking-widest text-white block mb-4">
              DARAH COELHO
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed mb-2">
              Fotógrafa em Goiânia especializada em moda, ensaios e casamento.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/darahcoelho/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-gold transition-colors text-sm tracking-widest uppercase"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@darahcoelho0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-gold transition-colors text-sm tracking-widest uppercase"
              >
                TikTok
              </a>
            </div>
            <a
              href="https://share.google/5cI6g9NK2SGGg8fkO"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm text-neutral-300 hover:text-gold transition-colors"
              aria-label="Ver avaliações no Google"
            >
              <span className="text-gold" aria-hidden>★★★★★</span>
              <span>5,0 no Google · 17 avaliações</span>
            </a>
          </div>

          {/* Serviços col 1 */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-neutral-600 mb-4">Serviços</h3>
            <ul className="space-y-2">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicos/${s.slug}`}
                    className="text-sm text-neutral-500 hover:text-gold transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços col 2 */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-neutral-600 mb-4">&nbsp;</h3>
            <ul className="space-y-2">
              {services.slice(5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicos/${s.slug}`}
                    className="text-sm text-neutral-500 hover:text-gold transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-neutral-600 mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-500 hover:text-gold transition-colors"
                >
                  (62) 98293-3266
                </a>
              </li>
              <li>
                <a
                  href="mailto:darahtrabalho@icloud.com"
                  className="text-sm text-neutral-500 hover:text-gold transition-colors break-all"
                >
                  darahtrabalho@icloud.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/darahcoelho/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-500 hover:text-gold transition-colors"
                >
                  @darahcoelho
                </a>
              </li>
              <li className="text-sm text-neutral-600">Goiânia, GO · São Paulo, SP</li>
            </ul>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-5 py-3 bg-gold text-dark text-xs font-medium tracking-widest uppercase hover:bg-gold-light transition-colors"
            >
              Agendar sessão
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-dark-300 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
          <p>© {new Date().getFullYear()} Darah Coelho Fotografia e Vídeo, Goiânia, GO. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="/sobre" className="hover:text-neutral-400 transition-colors">Sobre</Link>
            <Link href="/galeria" className="hover:text-neutral-400 transition-colors">Galeria</Link>
            <Link href="/blog" className="hover:text-neutral-400 transition-colors">Blog</Link>
            <Link href="/contato" className="hover:text-neutral-400 transition-colors">Contato</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
