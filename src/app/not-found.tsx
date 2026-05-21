import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-gold text-xs tracking-widest uppercase mb-4">404</p>
      <h1 className="font-serif text-5xl text-white mb-4">Página não encontrada</h1>
      <p className="text-neutral-400 mb-10 max-w-md">
        A página que você procura não existe ou foi movida. Explore os serviços ou entre em contato.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="px-6 py-3 border border-dark-400 text-neutral-400 text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all">
          Voltar ao início
        </Link>
        <WhatsAppButton label="Falar com a Darah" />
      </div>
    </div>
  );
}
