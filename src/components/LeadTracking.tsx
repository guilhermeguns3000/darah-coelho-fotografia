"use client";

import { useEffect } from "react";

/**
 * Rastreamento de leads. Captura, no site inteiro, cliques em qualquer link de
 * WhatsApp (o principal canal de agendamento da Darah) e de e-mail, e registra
 * o lead em DOIS lugares:
 *  - Flora (first-party, fonte de verdade própria): custom_event com name
 *    `lead_whatsapp`/`lead_email` — independe do GA e alimenta o painel.
 *  - GA4: evento recomendado `generate_lead` (marque como evento-chave).
 */
export default function LeadTracking() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const a = target?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";

      let method: "whatsapp" | "email" | null = null;
      if (/wa\.me|api\.whatsapp\.com|whatsapp/i.test(href)) method = "whatsapp";
      else if (href.startsWith("mailto:")) method = "email";
      if (!method) return;

      const page = window.location.pathname;
      const name = method === "whatsapp" ? "lead_whatsapp" : "lead_email";

      // Flora (first-party): fonte de verdade própria, independe do GA.
      const flora = (window as unknown as {
        flora?: (type: string, props?: Record<string, unknown>) => void;
      }).flora;
      if (flora) flora("custom_event", { name, method, link_url: href, page });

      // GA4 (evento recomendado), se o gtag estiver presente.
      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
      if (gtag)
        gtag("event", "generate_lead", {
          method,
          link_url: href,
          page_location: page,
        });
    }
    // Fase de captura para disparar antes da navegação/abertura em nova aba.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
