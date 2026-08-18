import type { FAQ } from "./services";

/**
 * INTERRUPTOR DOS VALORES DO SITE
 * ------------------------------------------------------------------
 * Hoje a Darah prefere não expor os valores. Os preços continuam
 * guardados em `services.ts` — nada foi apagado. O que muda é só o
 * que o visitante vê: no lugar do valor aparece "Sob consulta" e o
 * botão de WhatsApp.
 *
 * PARA VOLTAR A MOSTRAR OS PREÇOS:
 * na Vercel → Settings → Environment Variables, criar
 *     NEXT_PUBLIC_MOSTRAR_PRECOS = true
 * e refazer o deploy. Não precisa mexer em código.
 * Para esconder de novo, basta apagar a variável (ou pôr false).
 */
export const MOSTRAR_PRECOS = process.env.NEXT_PUBLIC_MOSTRAR_PRECOS === "true";

/** Texto que substitui o valor enquanto os preços estão ocultos. */
export const PRECO_OCULTO = "Sob consulta";

/** Devolve o valor do pacote ou "Sob consulta", conforme o interruptor. */
export function precoVisivel(preco: string): string {
  return MOSTRAR_PRECOS ? preco : PRECO_OCULTO;
}

/**
 * Resposta de FAQ adequada ao momento: quando os preços estão ocultos
 * e existe uma versão sem valores, usa a versão sem valores.
 */
export function respostaFaq(faq: FAQ): string {
  if (!MOSTRAR_PRECOS && faq.answerSemPreco) return faq.answerSemPreco;
  return faq.answer;
}
