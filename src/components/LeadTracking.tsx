"use client";

import { useEffect } from "react";

/**
 * Rastreamento de leads para o GA4. Captura, no site inteiro, cliques em
 * qualquer link de WhatsApp (o principal canal de agendamento da Darah) e de
 * e-mail, disparando o evento recomendado `generate_lead`. Depois é só marcar
 * `generate_lead` como evento-chave/conversão no GA4.
 */
export default function LeadTracking() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const a = target?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
      if (!gtag) return;

      if (/wa\.me|api\.whatsapp\.com|whatsapp/i.test(href)) {
        gtag("event", "generate_lead", {
          method: "whatsapp",
          link_url: href,
          page_location: window.location.pathname,
        });
      } else if (href.startsWith("mailto:")) {
        gtag("event", "generate_lead", {
          method: "email",
          link_url: href,
          page_location: window.location.pathname,
        });
      }
    }
    // Fase de captura para disparar antes da navegação/abertura em nova aba.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
