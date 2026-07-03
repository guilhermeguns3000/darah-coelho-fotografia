// Bairros de Goiânia para páginas locais "Serviço + Bairro".
// Cada bairro carrega conteúdo ÚNICO (caráter, locações reais, pontos de referência)
// para evitar páginas duplicadas — o Google penaliza conteúdo fino/repetido.
//
// Publicação é controlada pela allowlist `localPages` no final do arquivo:
// só os combos listados ali viram páginas (generateStaticParams + sitemap).

export interface Bairro {
  slug: string;
  nome: string; // "Setor Marista"
  artigo: string; // "o" | "a" — para concordância ("no Setor Marista")
  tagline: string;
  // Parágrafos sobre o bairro como cenário fotográfico (únicos por bairro)
  sobre: string[];
  // Locações/pontos de referência reais usados nos ensaios
  locacoes: string[];
}

export const bairros: Record<string, Bairro> = {
  "setor-marista": {
    slug: "setor-marista",
    nome: "Setor Marista",
    artigo: "o",
    tagline: "Ruas arborizadas, sofisticação e luz suave no coração de Goiânia",
    sobre: [
      "O Setor Marista é um dos endereços mais sofisticados de Goiânia e um dos cenários preferidos para ensaios com clima elegante e atemporal. Suas ruas largas e densamente arborizadas filtram a luz do sol e criam aquela iluminação difusa e suave que valoriza a pele e dá profundidade às imagens — especialmente no fim da tarde.",
      "A região concentra cafés, fachadas de arquitetura contemporânea e praças bem cuidadas, oferecendo uma variedade de fundos em poucos metros de caminhada. É um bairro que combina o urbano com o verde, o que permite construir um ensaio com repertório visual rico sem precisar deslocar a produção para longe do centro.",
    ],
    locacoes: [
      "Praça do Sol — gramado amplo e pôr do sol aberto",
      "Ruas arborizadas próximas à Rua 9 e Rua 15",
      "Cafés e fachadas contemporâneas do setor",
      "Áreas verdes próximas ao Bosque dos Buritis",
    ],
  },
  "setor-bueno": {
    slug: "setor-bueno",
    nome: "Setor Bueno",
    artigo: "o",
    tagline: "O lago do Parque Vaca Brava e o pulso urbano de Goiânia",
    sobre: [
      "O Setor Bueno é um dos bairros mais vibrantes de Goiânia, e seu grande trunfo para a fotografia é o Parque Vaca Brava: um lago cercado de vegetação em plena região urbana, com passarelas, gramados e o reflexo da água ao entardecer. É uma locação versátil, que serve tanto para ensaios delicados quanto para composições mais editoriais.",
      "Fora do parque, o Bueno oferece o contraste do concreto e do vidro dos edifícios modernos, ótimo para quem busca um clima cosmopolita. Essa dualidade — natureza e cidade lado a lado — permite variar completamente o mood do ensaio sem sair do bairro.",
    ],
    locacoes: [
      "Parque Vaca Brava — lago, passarelas e gramados",
      "Alameda arborizada ao redor do parque",
      "Fachadas modernas e vidros dos edifícios do setor",
      "Entorno do Bosque dos Buritis",
    ],
  },
  "jardim-goias": {
    slug: "jardim-goias",
    nome: "Jardim Goiás",
    artigo: "o",
    tagline: "Parque Flamboyant, skyline moderno e amplos espaços verdes",
    sobre: [
      "O Jardim Goiás é o cartão-postal moderno de Goiânia, e o Parque Flamboyant é a joia da região: um dos maiores parques urbanos da cidade, com lago, ciclovia, jacarandás e o skyline dos arranha-céus ao fundo. É provavelmente a melhor locação pública da cidade para ensaios externos com sensação de amplitude.",
      "O bairro reúne arquitetura contemporânea, largos passeios e áreas verdes bem planejadas, o que dá liberdade para trabalhar tanto a luz natural aberta quanto enquadramentos com a cidade ao fundo. É a escolha certa para quem quer um ensaio arejado, atual e com identidade goiana.",
    ],
    locacoes: [
      "Parque Flamboyant — lago, jacarandás e skyline",
      "Passeios largos e áreas verdes do entorno",
      "Fachadas e arquitetura contemporânea do setor",
      "Pontes e mirantes do parque ao entardecer",
    ],
  },
};

export interface LocalPageCombo {
  service: string; // slug em services.ts
  bairro: string; // slug em bairros
}

// ALLOWLIST — apenas estes combos são publicados.
// PILOTO: 1 página. Para escalar, adicione linhas aqui.
export const localPages: LocalPageCombo[] = [
  { service: "ensaio-gestante-goiania", bairro: "setor-marista" },
  { service: "fotografia-casamento-goiania", bairro: "jardim-goias" },
];

export function getBairro(slug: string): Bairro | undefined {
  return bairros[slug];
}

export function isPublished(service: string, bairro: string): boolean {
  return localPages.some((c) => c.service === service && c.bairro === bairro);
}

export function bairrosForService(service: string): Bairro[] {
  return localPages
    .filter((c) => c.service === service)
    .map((c) => bairros[c.bairro])
    .filter((b): b is Bairro => Boolean(b));
}
