"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/lib/services";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-sm border-b border-dark-300">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-serif text-lg tracking-widest text-white hover:text-gold transition-colors">
          DARAH COELHO
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase">
          <Link href="/" className="text-neutral-400 hover:text-white transition-colors">
            Início
          </Link>

          {/* Serviços dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1">
              Serviços
              <span className="text-xs">▾</span>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-dark-200 border border-dark-300 rounded shadow-2xl py-2">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/servicos/${s.slug}`}
                    className="block px-4 py-2 text-sm text-neutral-400 hover:text-gold hover:bg-dark-300 transition-colors tracking-wide"
                    onClick={() => setServicesOpen(false)}
                  >
                    {s.shortTitle}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/galeria" className="text-neutral-400 hover:text-white transition-colors">
            Galeria
          </Link>
          <Link href="/blog" className="text-neutral-400 hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/sobre" className="text-neutral-400 hover:text-white transition-colors">
            Sobre
          </Link>
          <Link
            href="/contato"
            className="px-4 py-2 border border-gold text-gold hover:bg-gold hover:text-dark transition-all text-xs"
          >
            Agendar
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <div className={`w-5 h-px bg-white transition-all ${open ? "rotate-45 translate-y-1" : ""}`} />
          <div className={`w-5 h-px bg-white my-1 transition-all ${open ? "opacity-0" : ""}`} />
          <div className={`w-5 h-px bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-dark-100 border-t border-dark-300 px-6 py-6 flex flex-col gap-4 text-sm tracking-widest uppercase">
          <Link href="/" onClick={() => setOpen(false)} className="text-neutral-400 hover:text-white">Início</Link>
          <div className="text-neutral-600 text-xs">Serviços</div>
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/servicos/${s.slug}`}
              onClick={() => setOpen(false)}
              className="text-neutral-400 hover:text-gold pl-3 border-l border-dark-300 text-xs"
            >
              {s.shortTitle}
            </Link>
          ))}
          <Link href="/galeria" onClick={() => setOpen(false)} className="text-neutral-400 hover:text-white">Galeria</Link>
          <Link href="/blog" onClick={() => setOpen(false)} className="text-neutral-400 hover:text-white">Blog</Link>
          <Link href="/sobre" onClick={() => setOpen(false)} className="text-neutral-400 hover:text-white">Sobre</Link>
          <Link
            href="/contato"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-3 bg-gold text-dark text-center font-medium"
          >
            Agendar sessão
          </Link>
        </div>
      )}
    </header>
  );
}
