import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import WhatsAppButton from "@/components/WhatsAppButton";

interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  heroImg: string;
  heroAlt: string;
  sections: { heading?: string; body: string }[];
  internalLink: { href: string; label: string; context: string };
  externalLink: { href: string; label: string; context: string };
  cta: { heading: string; message: string };
}

const posts: BlogPost[] = [
  {
    slug: "fotografa-goias-atendimento-interior",
    title: "Fotógrafa em Goiás: como funciona o atendimento em todo o estado",
    metaTitle: "Fotógrafa em Goiás | Darah Coelho – Atendimento em Todo o Estado",
    metaDescription:
      "Fotógrafa baseada em Goiânia com atendimento em todo o estado de Goiás. Anápolis, Caldas Novas, Pirenópolis, Rio Verde e mais. Ensaios, casamentos e books. Consulte.",
    excerpt:
      "Baseada em Goiânia, a Darah Coelho atende ensaios, casamentos e eventos em todo o estado de Goiás. Entenda como funciona o deslocamento e como agendar.",
    date: "2026-05-22",
    category: "Dicas",
    readTime: "6 min",
    heroImg: "https://res.cloudinary.com/djjacet57/image/upload/c_fill,g_auto,ar_16:7,w_1200,f_auto,q_auto/darah/casamento/img_0829",
    heroAlt: "Fotógrafa em Goiás – Darah Coelho atende em todo o estado",
    sections: [
      {
        body: "A Darah Coelho é fotógrafa profissional baseada em Goiânia, mas o atendimento vai muito além da capital. Seja para um casamento em Pirenópolis, um book de moda em Anápolis ou um ensaio de gestante em Caldas Novas, a Darah leva para cada cidade o mesmo olhar artístico, a mesma direção de poses e o mesmo cuidado com o resultado. Este post explica como funciona o atendimento em todo o estado de Goiás e como agendar.",
      },
      {
        heading: "Grande Goiânia: Aparecida, Trindade, Senador Canedo e região",
        body: "As cidades da região metropolitana de Goiânia — Aparecida de Goiânia, Trindade, Senador Canedo, Goianira, Inhumas e cidades próximas — são atendidas com a mesma frequência que a capital. Não há acréscimo de deslocamento para sessões nessas localidades. Se você mora em qualquer cidade da Grande Goiânia e quer fazer um ensaio pessoal, book de moda, ensaio de gestante ou família, entre em contato normalmente: a logística é simples e o agendamento segue o mesmo processo.",
      },
      {
        heading: "Anápolis: a segunda maior cidade de Goiás",
        body: "Anápolis fica a apenas 50 quilômetros de Goiânia e é a segunda maior cidade do estado, com quase 400 mil habitantes e um mercado crescente para fotografia profissional. A Darah atende clientes em Anápolis regularmente, tanto para ensaios individuais e books de moda quanto para eventos corporativos e cobertura de casamentos. Anápolis tem locações interessantes para editoriais urbanos e também acesso fácil a parques e áreas naturais para ensaios externos.",
      },
      {
        heading: "Caldas Novas e Rio Quente: o destino dos casamentos em Goiás",
        body: "Caldas Novas e Rio Quente são destinos turísticos consolidados do cerrado goiano, conhecidos pelas águas quentes e pelos grandes resorts. Esses espaços concentram uma quantidade expressiva de casamentos, festas de 15 anos e celebrações especiais ao longo de todo o ano. A Darah Coelho já fotografou eventos nessa região e conhece bem os espaços, a luz e as particularidades de trabalhar em ambientes que vão do resort luxuoso ao jardim ao ar livre. Para casamentos e eventos em Caldas Novas, entre em contato com pelo menos 3 meses de antecedência.",
      },
      {
        heading: "Pirenópolis: o cenário histórico mais bonito de Goiás",
        body: "Pirenópolis é uma das cidades históricas mais preservadas do Brasil Central. Suas ruas de pedra, igrejas coloniais, chapadões do cerrado e fazendas históricas criam cenários únicos para casamentos ao ar livre e ensaios editoriais com personalidade. Cada vez mais casais escolhem Pirenópolis para realizar cerimônias menores e mais íntimas, e a demanda por fotógrafas que atendam a cidade com qualidade cresce na mesma proporção. A Darah atende casamentos e ensaios em Pirenópolis com orçamento personalizado que inclui deslocamento.",
      },
      {
        heading: "Rio Verde, Jataí e o sudoeste goiano",
        body: "O sudoeste de Goiás — com Rio Verde, Jataí, Mineiros e Quirinópolis — é uma das regiões de maior crescimento econômico do Brasil, impulsionado pelo agronegócio. Com o crescimento da região, cresce também a demanda por fotografia profissional: eventos corporativos de grandes empresas do setor, casamentos de famílias com alto poder aquisitivo e books para profissionais que precisam de uma presença visual forte. A Darah atende essa região mediante consulta prévia de disponibilidade e com orçamento que inclui deslocamento.",
      },
      {
        heading: "Como funciona o deslocamento para outras cidades de Goiás",
        body: "Para cidades dentro da Grande Goiânia, não há taxa de deslocamento. Para Anápolis e cidades num raio de até 80 quilômetros, o deslocamento é calculado conforme a data e a logística do projeto. Para cidades mais distantes — como Caldas Novas, Pirenópolis, Rio Verde ou Jataí — o orçamento inclui o valor de deslocamento, que varia conforme a distância e a duração do evento. Em todos os casos, a forma mais rápida de receber um orçamento completo é entrar em contato pelo WhatsApp com a data e o tipo de serviço desejado.",
      },
    ],
    internalLink: {
      href: "/servicos",
      label: "Ver todos os serviços disponíveis em Goiás",
      context: "Quer saber quais serviços a Darah oferece em todo o estado de Goiás?",
    },
    externalLink: {
      href: "https://www.seetur.go.gov.br",
      label: "SEETUR-GO (Secretaria de Turismo de Goiás)",
      context: "Para descobrir os principais destinos e espaços para eventos no estado, o",
    },
    cta: {
      heading: "Atendemos em todo o estado de Goiás",
      message: "Olá, Darah! Vi que você atende em todo o Goiás. Gostaria de saber sobre disponibilidade e orçamento para minha cidade.",
    },
  },
  {
    slug: "quanto-custa-ensaio-moda-goiania",
    title: "Quanto custa um ensaio de moda em Goiânia?",
    metaTitle: "Quanto custa um ensaio de moda em Goiânia? | Darah Coelho",
    metaDescription:
      "Entenda o que determina o investimento em um book de moda em Goiânia: locação, número de looks, edição e a experiência do fotógrafo. Valores reais e o que esperar.",
    excerpt:
      "Entenda o que influencia o investimento em um book de moda e o que esperar de uma sessão editorial profissional em Goiânia.",
    date: "2026-05-01",
    category: "Moda",
    readTime: "6 min",
    heroImg: "https://res.cloudinary.com/djjacet57/image/upload/c_fill,g_face,ar_16:7,w_1200,f_auto,q_auto/darah/moda%20feminina/sem-ti-tulo-01",
    heroAlt: "book de moda Goiânia, sessão editorial fotógrafa Darah Coelho",
    sections: [
      {
        body: "Uma das perguntas mais frequentes que recebo é: quanto custa um ensaio de moda em Goiânia? A resposta honesta é: depende. Mas não de forma evasiva. Depende de fatores muito concretos que vou detalhar aqui para que você chegue ao orçamento de qualquer fotógrafa já sabendo o que está comprando.",
      },
      {
        heading: "O que compõe o valor de um book de moda",
        body: "Um ensaio de moda profissional em Goiânia envolve muito mais do que o tempo na frente da câmera. O investimento cobre: o trabalho de briefing e planejamento criativo antes da sessão, o tempo de fotografia em si (geralmente de 2 a 4 horas), a seleção e edição das melhores fotos, a entrega em alta resolução e, dependendo do pacote, também o moodboard, a direção de figurino e a locação. Cada um desses itens tem um custo real, de tempo e de expertise.",
      },
      {
        heading: "Faixas de investimento em Goiânia",
        body: "No mercado de Goiânia, você vai encontrar ensaios de moda a partir de R$ 400 até R$ 3.000 ou mais. Fotógrafas iniciantes ou em formação costumam cobrar entre R$ 400 e R$ 800, com entrega de 15 a 30 fotos. Profissionais com portfólio consolidado, direção criativa e edição refinada ficam entre R$ 900 e R$ 3.000, com entrega de 30 a 80 fotos editadas. Valores abaixo de R$ 400 costumam indicar ausência de edição profissional ou portfólio ainda muito limitado.",
      },
      {
        heading: "Por que o preço varia tanto?",
        body: "A principal variável é o nível de direção artística envolvido. Uma sessão técnica de registrar fotos é diferente de uma sessão onde a fotógrafa coordena o cenário, orienta postura, expressão e movimento, escolhe ângulos com intenção estética e entrega um resultado com identidade visual consistente. Outro fator é a edição: retoques superficiais são muito diferentes de um tratamento de cor cinematográfico que dá unidade ao conjunto. Locações externas exclusivas, estúdio próprio e acessórios de cena também entram no custo.",
      },
      {
        heading: "Número de looks e duração da sessão",
        body: "A maioria dos pacotes de book de moda em Goiânia inclui de 2 a 4 looks. Cada troca de roupa consome tempo de produção e gera um conjunto diferente de fotos. Sessões mais longas permitem explorar mais locações, mais poses e mais estilos dentro de um único ensaio. Se você tem um objetivo específico, como montar um portfólio para agência ou criar conteúdo para redes sociais, comunique antes: isso define quantos looks e quanto tempo você realmente precisa.",
      },
      {
        heading: "O que perguntar antes de fechar o orçamento",
        body: "Antes de contratar qualquer fotógrafa de moda em Goiânia, pergunte: quantas fotos editadas estão incluídas? A edição é básica (correção de cor) ou completa (retoque, tratamento cinematográfico)? A locação está incluída ou é cobrada à parte? Existe uma reunião de briefing antes da sessão? Como é feita a entrega das fotos? As respostas revelam muito sobre o que você está comprando além das horas de fotografia.",
      },
      {
        heading: "Vale a pena investir em um book de moda?",
        body: "Para modelos em início de carreira, um book de moda bem produzido é a porta de entrada para agências em Goiânia, São Paulo e em todo o Brasil. Para marcas locais, o material fotográfico de qualidade impacta diretamente as vendas e a percepção do produto. Para quem quer fotos para redes sociais com identidade visual própria, o book de moda substitui anos de conteúdo amador por um conjunto coeso e profissional. O retorno do investimento vai além das fotos: é a imagem que você projeta a partir dali.",
      },
    ],
    internalLink: {
      href: "/servicos/book-de-moda-goiania",
      label: "Ver o serviço de Book de Moda em Goiânia",
      context: "Quer conhecer os pacotes disponíveis para ensaio de moda em Goiânia?",
    },
    externalLink: {
      href: "https://www.abradi.com.br",
      label: "ABRADI",
      context: "Para entender melhor o mercado criativo e de imagem no Brasil, a",
    },
    cta: {
      heading: "Quer um orçamento real para o seu ensaio?",
      message: "Olá, Darah! Gostaria de saber o valor para um ensaio de moda em Goiânia. Pode me passar mais informações?",
    },
  },
  {
    slug: "melhor-epoca-fotos-externas-goiania",
    title: "Melhor época do ano para fotos externas em Goiânia",
    metaTitle: "Melhor época para fotos externas em Goiânia | Darah Coelho",
    metaDescription:
      "Goiânia tem clima de cerrado com estação seca e chuvosa bem definidas. Saiba quando a luz é melhor para ensaios ao ar livre e como planejar sua sessão fotográfica.",
    excerpt:
      "Goiânia tem clima específico que afeta diretamente a qualidade das fotos ao ar livre. Veja quando e como planejar seu ensaio.",
    date: "2026-04-15",
    category: "Dicas",
    readTime: "5 min",
    heroImg: "https://res.cloudinary.com/djjacet57/image/upload/c_fill,g_face,ar_16:7,w_1200,f_auto,q_auto/darah/ensaio%20pessoal/img-0717",
    heroAlt: "ensaio fotográfico externo Goiânia, fotógrafa Darah Coelho em locação ao ar livre",
    sections: [
      {
        body: "Goiânia tem um clima de cerrado com duas estações bem definidas: a chuvosa (outubro a março) e a seca (abril a setembro). Para quem quer fazer um ensaio fotográfico externo em Goiânia, entender essa divisão é fundamental para garantir fotos com a luz certa, o cenário ideal e sem imprevistos.",
      },
      {
        heading: "A estação seca: abril a setembro",
        body: "Esse é o período mais indicado para fotos externas em Goiânia. O céu costuma ficar azul intenso com poucas nuvens, a vegetação do cerrado adquire tons mais secos e dourados, e a ausência de chuva torna o planejamento muito mais seguro. A luz da manhã e do fim de tarde nesses meses é especialmente bonita: dourada, lateral e com sombras suaves que modelam o rosto com elegância. O mês de junho é considerado o melhor de todos: dias claros, temperatura agradável e quase zero chance de chuva.",
      },
      {
        heading: "A estação chuvosa: outubro a março",
        body: "A chuva não elimina a possibilidade de fotos externas, mas exige mais planejamento. As manhãs costumam ser abertas e a chuva tende a cair no fim da tarde. Algumas locações ficam mais verdes e exuberantes nesse período, o que cria cenários bonitos que não existem na seca. A estratégia é sempre agendar sessões para o período da manhã e ter um plano B em caso de mudança de tempo. Já realizei ensaios lindos em dias de estação chuvosa com sol aberto às 8h da manhã.",
      },
      {
        heading: "Horários de luz em Goiânia",
        body: "Independente da época do ano, os melhores horários para fotos externas em Goiânia são a hora dourada da manhã (30 minutos após o nascer do sol) e a hora dourada do entardecer (1 hora antes do pôr do sol). No meio do dia, especialmente entre 10h e 15h, a luz é dura, vertical e cria sombras desagradáveis no rosto. Locações com sombra natural (árvores, galerias cobertas) permitem trabalhar fora desses horários com bom resultado.",
      },
      {
        heading: "Locações externas em Goiânia",
        body: "Goiânia oferece uma variedade grande de cenários externos: o Parque Flamboyant e o Parque Areião têm vegetação exuberante e infraestrutura. A região do Jardim Goiás e Setor Bueno tem arquitetura interessante para editoriais urbanos. Fazendas e chácaras nos arredores da cidade oferecem campos e paisagens naturais do cerrado. Espaços industriais e grafitados no centro histórico criam contrastes interessantes para moda. Cada locação tem seu melhor horário e sua melhor época, e isso faz parte do planejamento de cada ensaio.",
      },
      {
        heading: "Como planejar seu ensaio externo",
        body: "Antes de agendar, pense no tipo de foto que você quer: urbano, natural, íntimo ou editorial? Isso define a locação e, por consequência, o melhor período do ano. Se você tem flexibilidade, priorize maio, junho e julho, que combinam tempo seco, temperatura amena e luz bonita em Goiânia. Se a data for na estação chuvosa, fique tranquila: trabalhamos com plano de contingência e acompanho a previsão do tempo nos dias anteriores para ajustar o horário se necessário.",
      },
    ],
    internalLink: {
      href: "/servicos/ensaio-pessoal-goiania",
      label: "Ver ensaios pessoais externos em Goiânia",
      context: "Quer agendar o seu ensaio ao ar livre em Goiânia?",
    },
    externalLink: {
      href: "https://portal.inmet.gov.br",
      label: "INMET (Instituto Nacional de Meteorologia)",
      context: "Para acompanhar a previsão do tempo e planejar com antecedência, o",
    },
    cta: {
      heading: "Vamos planejar o seu ensaio externo?",
      message: "Olá, Darah! Quero agendar um ensaio externo em Goiânia. Pode me ajudar com as datas e locações?",
    },
  },
  {
    slug: "ensaio-gestante-quando-fazer",
    title: "Ensaio gestante: quando fazer e como se preparar",
    metaTitle: "Ensaio Gestante em Goiânia: quando fazer e como se preparar | Darah Coelho",
    metaDescription:
      "A janela ideal para o ensaio de gestante em Goiânia é entre 32 e 36 semanas. Saiba como se preparar, o que vestir e o que esperar da sua sessão com a fotógrafa Darah Coelho.",
    excerpt:
      "A janela ideal para o ensaio de gestante, como escolher o look, o que esperar da sessão e como aproveitar ao máximo.",
    date: "2026-04-01",
    category: "Gestante",
    readTime: "7 min",
    heroImg: "https://res.cloudinary.com/djjacet57/image/upload/c_fill,g_face,ar_16:7,w_1200,f_auto,q_auto/darah/Gestante/cecfd24b-94e9-4c9c-a9ea-a0f98a0a1c61",
    heroAlt: "ensaio gestante Goiânia, fotógrafa especializada em ensaio de gestante Darah Coelho",
    sections: [
      {
        body: "O ensaio de gestante em Goiânia é um dos registros mais especiais que uma mulher pode ter. É o momento de celebrar a transformação do corpo, a chegada de uma vida nova e toda a emoção que vem junto. Como fotógrafa especializada em ensaios de gestante em Goiânia, vejo de perto o quanto essas fotos se tornam um tesouro que vai muito além da gravidez.",
      },
      {
        heading: "Qual a melhor semana para o ensaio de gestante em Goiânia?",
        body: "A janela ideal para o ensaio gestante é entre 32 e 36 semanas de gestação. Nesse período, a barriga já está bem evidente e arredondada, o que cria fotos lindas e expressivas, e a gestante ainda tem disposição e mobilidade para diferentes poses e movimentos. Antes das 30 semanas, a barriga pode ainda não ter o volume ideal para as fotos. Após as 37 semanas, o cansaço aumenta e o desconforto para certas posições é maior. Se você está planejando o ensaio, marque ainda no segundo trimestre para garantir a data dentro dessa janela.",
      },
      {
        heading: "O que vestir no ensaio gestante",
        body: "O look do ensaio de gestante deve valorizar a barriga sem escondê-la. As opções mais utilizadas são: vestidos longos fluidos que abraçam o corpo (tons neutros como bege, branco e terracota funcionam muito bem); tule e rendas que criam leveza e romantismo; roupas de malha que marcam o contorno do corpo; e para um estilo mais íntimo, conjuntos de lingerie confortável. Evite roupas com estampas muito carregadas ou cores muito saturadas, que tiram o foco da barriga e dificultam a harmonia das fotos.",
      },
      {
        heading: "Estúdio ou externo?",
        body: "Ambos têm sua beleza. O ensaio gestante em estúdio oferece controle total da luz, privacidade e conforto, com possibilidade de trabalhar com fundos lisos e iluminação cinematográfica. O ensaio gestante em locação externa traz o ar livre, a vegetação do cerrado goiano e uma atmosfera mais orgânica e natural. Muitas clientes optam por combinar os dois em um único ensaio, começando em ambiente externo no início da sessão e finalizando em estúdio com looks mais intimistas.",
      },
      {
        heading: "Como se preparar para a sessão",
        body: "Nos dias anteriores, hidrate bem a pele e descanse o máximo possível. No dia do ensaio, faça uma refeição leve antes da sessão e leve um lanche. Traga todas as roupas que separou, mesmo que ache que não vai usar. Se for fazer maquiagem, opte por algo que realce sua beleza natural sem parecer pesado. Marque o horário do ensaio levando em conta o período do dia em que você se sente com mais energia.",
      },
      {
        heading: "O parceiro ou parceira pode participar?",
        body: "Sim, e é muito especial quando isso acontece. A participação do companheiro ou companheira, ou de outros filhos, traz um significado extra às fotos e registra a família que está sendo formada. Separo sempre um momento dentro da sessão para os registros em dupla ou em família, além das fotos individuais da gestante. Se houver filhos mais velhos, traga brinquedos ou algo que os ajude a ficarem à vontade durante a sessão.",
      },
      {
        heading: "Quanto tempo dura o ensaio gestante?",
        body: "Uma sessão completa de ensaio gestante em Goiânia dura entre 1h30 e 2h30, dependendo do número de looks e se é em estúdio, externo ou os dois. Nesse tempo, conseguimos cobrir uma média de 2 a 3 looks com boa variedade de poses e ângulos. A entrega das fotos editadas acontece em até 15 dias após a sessão, por galeria online privada.",
      },
    ],
    internalLink: {
      href: "/servicos/ensaio-gestante-goiania",
      label: "Ver todos os detalhes do ensaio de gestante em Goiânia",
      context: "Quer saber mais sobre como funciona o ensaio de gestante com a Darah?",
    },
    externalLink: {
      href: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/g/gestante",
      label: "Ministério da Saúde",
      context: "Para informações completas sobre saúde na gestação, consulte o",
    },
    cta: {
      heading: "Agende seu ensaio gestante em Goiânia",
      message: "Olá, Darah! Estou grávida e quero agendar meu ensaio gestante em Goiânia. Pode me passar as informações?",
    },
  },
  {
    slug: "o-que-e-fotografia-editorial",
    title: "O que é fotografia editorial e para quem é?",
    metaTitle: "O que é fotografia editorial e para quem é? | Darah Coelho Goiânia",
    metaDescription:
      "Entenda a diferença entre book pessoal e fotografia editorial em Goiânia, como funciona o processo criativo e quem pode se beneficiar de um editorial fotográfico.",
    excerpt:
      "Diferença entre book pessoal e fotografia editorial, como funciona o processo criativo e quem pode se beneficiar de um editorial.",
    date: "2026-03-20",
    category: "Moda",
    readTime: "6 min",
    heroImg: "https://res.cloudinary.com/djjacet57/image/upload/c_fill,g_auto,ar_16:7,w_1200,f_auto,q_auto/darah/moda%20feminina/img-40",
    heroAlt: "fotografia editorial Goiânia, ensaio de moda editorial fotógrafa Darah Coelho",
    sections: [
      {
        body: "A fotografia editorial em Goiânia é um dos formatos mais criativos e completos da fotografia de moda. Ela vai além do simples registro: é a criação de uma narrativa visual com intenção artística e comunicativa, onde cada elemento da imagem, da roupa ao cenário, da pose à iluminação, é escolhido a dedo para transmitir uma ideia específica.",
      },
      {
        heading: "A diferença entre book pessoal e editorial",
        body: "O book pessoal tem como objetivo principal mostrar a pessoa: seu rosto, seu corpo, sua expressão e sua versatilidade. É muito usado por modelos que precisam apresentar seu potencial para agências e clientes. Já o editorial fotográfico conta uma história. Pode ser a história de uma coleção de moda, de um conceito artístico, de uma ideia ou de uma emoção. A pessoa na foto é parte de uma narrativa maior, não apenas o sujeito da imagem. Muitos editoriais são criados para publicações, campanhas de marca ou portfólios autorais da fotógrafa.",
      },
      {
        heading: "Como funciona o processo criativo de um editorial",
        body: "Um editorial bem produzido começa muito antes da câmera. O processo inclui: conceituação (qual é a ideia, a história, o universo a ser retratado?); moodboard (referências visuais de fotografia, cinema, moda, arte); casting (quem são as pessoas certas para essa narrativa?); styling (a roupa que conta a história); locação (o cenário que amplifica o conceito); e só então a produção fotográfica em si. Depois, a edição finaliza a linguagem visual do editorial com tratamento de cor e retoque específicos para o conceito.",
      },
      {
        heading: "Para quem a fotografia editorial faz sentido",
        body: "A fotografia editorial em Goiânia é indicada para: modelos que querem construir um portfólio criativo além do book técnico; marcas de moda, acessórios e cosméticos que precisam de imagens conceituais para campanhas; fotógrafas que querem desenvolver um portfólio autoral com identidade visual própria; artistas e criadores que querem imagens que expressem sua estética; e empresas que precisam de conteúdo visual de alto padrão para suas comunicações digitais.",
      },
      {
        heading: "Editorial de moda x campanha publicitária",
        body: "Um editorial de moda tem liberdade criativa maior, pode ser mais conceitual, abstrato ou artístico, com imagens que provocam interpretação. Uma campanha publicitária tem um objetivo comercial muito claro: comunicar o produto, despertar desejo e gerar venda. Na prática, há muita sobreposição entre os dois. Marcas inteligentes criam campanhas com qualidade e profundidade editorial, porque essa abordagem gera mais engajamento e se destaca em meio ao conteúdo genérico.",
      },
      {
        heading: "Como avaliar um bom editorial fotográfico",
        body: "Um editorial bem executado tem identidade visual consistente (todas as fotos pertencem ao mesmo universo), narrativa reconhecível (você sente que está olhando para uma história), intenção em cada detalhe (nada parece acidental), e execução técnica impecável (luz, foco, composição e edição alinhados). Se ao olhar um conjunto de fotos você sente que poderia estar numa revista de moda, é provável que seja um editorial bem feito.",
      },
    ],
    internalLink: {
      href: "/servicos/book-de-moda-goiania",
      label: "Conhecer o serviço de Book de Moda Editorial em Goiânia",
      context: "Pronto para criar seu editorial fotográfico em Goiânia?",
    },
    externalLink: {
      href: "https://www.vogue.com.br",
      label: "Vogue Brasil",
      context: "Para se inspirar com editoriais de moda referência, a",
    },
    cta: {
      heading: "Quer criar um editorial com a sua marca ou portfólio?",
      message: "Olá, Darah! Tenho interesse em fazer um editorial fotográfico em Goiânia. Pode me passar mais informações?",
    },
  },
  {
    slug: "como-escolher-fotografa-casamento-goiania",
    title: "Como escolher a fotógrafa de casamento certa em Goiânia",
    metaTitle: "Como escolher fotógrafa de casamento em Goiânia | Darah Coelho",
    metaDescription:
      "5 critérios fundamentais para escolher a fotógrafa de casamento em Goiânia além do portfólio. Guia prático da fotógrafa Darah Coelho.",
    excerpt:
      "5 critérios fundamentais para escolher a fotógrafa do seu casamento em Goiânia, além do portfólio.",
    date: "2026-03-05",
    category: "Casamento",
    readTime: "7 min",
    heroImg: "https://res.cloudinary.com/djjacet57/image/upload/c_fill,g_auto,ar_16:7,w_1200,f_auto,q_auto/darah/casamento/img-0836",
    heroAlt: "fotógrafa casamento Goiânia, fotografia de casamento Darah Coelho",
    sections: [
      {
        body: "Escolher a fotógrafa de casamento em Goiânia é uma das decisões mais importantes do planejamento. O DJ pode falhar, o buffet pode atrasar, e você se esquece disso com o tempo. Mas as fotos ficam para sempre. São elas que vão contar a história do seu dia para filhos, netos e para você mesma daqui a 30 anos. Por isso, essa escolha merece muito mais do que olhar um portfólio bonito.",
      },
      {
        heading: "1. Identifique a linguagem visual que você ama",
        body: "Existem fotógrafas de casamento com estilos muito diferentes: o documentário puro (fotos espontâneas sem posação), o editorial (estética de revista, posação cuidadosa e luz controlada), o fotojornalístico (mistura dos dois com narrativa cronológica do dia) e o clássico (registros formais e posados). Antes de pesquisar, olhe fotos de casamentos que você ama e identifique o que elas têm em comum. Isso te guia para o estilo certo antes mesmo de ver portfólios.",
      },
      {
        heading: "2. Peça para ver um casamento inteiro, não só os destaques",
        body: "Todo portfólio mostra as melhores 20 fotos de dezenas de casamentos. Isso não te diz nada sobre a consistência do trabalho. Peça para ver a galeria completa de um ou dois casamentos: como são as fotos da cerimônia quando a luz é ruim? Como ficam os registros da festa à noite? As fotos de família posada têm qualidade? Uma galeria completa revela o nível real do trabalho.",
      },
      {
        heading: "3. Avalie a comunicação antes de avaliar o preço",
        body: "A fotógrafa de casamento em Goiânia vai estar com você nos momentos mais emocionais do seu dia. A forma como ela se comunica antes do casamento é um indicador claro de como vai ser a experiência. Responde rápido? Faz perguntas sobre o que você quer? Demonstra interesse genuíno pela sua história? Ou simplesmente envia um contrato e some? A comunicação antes do contrato é um espelho fiel da comunicação no dia do casamento.",
      },
      {
        heading: "4. Entenda o que está incluído no pacote",
        body: "Os preços de fotografia de casamento em Goiânia variam muito. Antes de comparar valores, certifique-se de que está comparando pacotes equivalentes. Pergunte: quantas horas de cobertura estão incluídas? Haverá segundo fotógrafo? Quantas fotos editadas serão entregues? O álbum impresso está incluso ou é cobrado à parte? Qual o prazo de entrega? Essas variáveis fazem a diferença entre pacotes com valores muito diferentes fazerem sentido ou não.",
      },
      {
        heading: "5. Confie na sensação da reunião presencial",
        body: "Antes de fechar contrato, marque uma reunião, mesmo que online. Converse sobre o casamento, sobre como você se sente, sobre o que é importante para você. Observe se a fotógrafa escuta com atenção, se faz perguntas pertinentes, se demonstra entusiasmo. A fotografia de casamento é um trabalho íntimo: a fotógrafa vai estar mais próxima de você do que a maioria dos fornecedores no seu dia. Essa conexão humana importa tanto quanto o portfólio.",
      },
      {
        heading: "O critério definitivo",
        body: "Depois de avaliar portfólio, comunicação, preço e pacote, pergunte a si mesma: quando imagino essa fotógrafa no meu casamento, me sinto tranquila? Se a resposta for sim, feche. Se houver qualquer hesitação, continue procurando. O seu casamento merece alguém que te deixe completamente confiante.",
      },
    ],
    internalLink: {
      href: "/servicos/fotografia-casamento-goiania",
      label: "Ver fotografia de casamento em Goiânia com a Darah Coelho",
      context: "Quer conhecer o trabalho da Darah em casamentos?",
    },
    externalLink: {
      href: "https://www.abrazo.com.br",
      label: "Abrazo Cerimonial",
      context: "Para um planejamento completo do casamento em Goiânia, profissionais como os da",
    },
    cta: {
      heading: "Vamos conversar sobre o seu casamento?",
      message: "Olá, Darah! Estou planejando meu casamento em Goiânia e gostaria de saber mais sobre a fotografia. Pode me ajudar?",
    },
  },
  {
    slug: "looks-ensaio-fotografico",
    title: "Looks para ensaio fotográfico: o que vestir",
    metaTitle: "Looks para ensaio fotográfico em Goiânia: o que vestir | Darah Coelho",
    metaDescription:
      "Guia completo de roupas para ensaio fotográfico em estúdio e ao ar livre em Goiânia. Cores, estilos e erros a evitar para fotos lindas.",
    excerpt:
      "Guia completo de combinações de roupas que funcionam para ensaios em estúdio e ao ar livre, com dicas de cores e estilos.",
    date: "2026-02-20",
    category: "Dicas",
    readTime: "8 min",
    heroImg: "https://res.cloudinary.com/djjacet57/image/upload/c_fill,g_face,ar_16:7,w_1200,f_auto,q_auto/darah/moda%20feminina/sem-titulo-43",
    heroAlt: "looks para ensaio fotográfico em Goiânia, roupas para sessão de fotos Darah Coelho",
    sections: [
      {
        body: "A escolha das roupas é um dos fatores que mais influencia o resultado de um ensaio fotográfico em Goiânia, e também um dos que mais gera dúvidas. O que vestir? Quantas trocas trazer? O que evitar? Preparei este guia com base nos ensaios que realizo em Goiânia para te ajudar a chegar na sessão confiante e preparada.",
      },
      {
        heading: "Quantos looks levar para o ensaio fotográfico",
        body: "Para uma sessão de 2 horas, o ideal é ter de 3 a 4 looks preparados. Isso não significa que todos vão para as fotos, mas ter opções garante variedade de clima, estilo e cenário dentro do mesmo ensaio. Leve mais do que acha que vai usar: na hora, a escolha do look certo para cada locação ou para a luz daquele momento pode mudar completamente.",
      },
      {
        heading: "Cores que funcionam bem em fotos",
        body: "Tons neutros e terrosos são os mais seguros e versáteis: bege, off-white, caramelo, terracota, verde-musgo e bordô fotografam muito bem em qualquer locação. Pastéis suaves também funcionam excelentemente. Para quem quer algo mais marcante, azul royal, vinho e verde-escuro criam contraste elegante. O branco puro é um clássico em locações externas com luz natural. O preto funciona bem em fotos com tratamento mais cinematográfico ou em ambientes controlados.",
      },
      {
        heading: "O que evitar no ensaio fotográfico",
        body: "Estampas muito miúdas (xadrez pequeno, listras finas) criam um efeito de moiré nas fotos e distraem o olhar. Logos e escritas grandes chamam mais atenção do que o rosto. Roupas com muito brilho ou sequins em fotos externas podem criar reflexos indesejados. Roupas que não são do seu estilo real: se você nunca usa aquilo no dia a dia, provavelmente vai se sentir desconfortável na foto. Conforto é fundamental para naturalidade.",
      },
      {
        heading: "Looks para ensaio externo em Goiânia",
        body: "Para locações ao ar livre como parques e fazendas nos arredores de Goiânia, peças fluidas funcionam muito: vestidos longos, saias midi, linho e algodão. Para cenários urbanos e de rua, combinações mais estruturadas e contemporâneas funcionam melhor: alfaiataria, jeans de corte moderno, blazer oversized. Para a hora dourada (entardecer), tons quentes como terracota, dourado e laranja criam uma harmonia linda com a luz natural.",
      },
      {
        heading: "Looks para ensaio em estúdio",
        body: "No estúdio, há mais liberdade de experimentar porque a luz é controlada. Lingerie bem escolhida e roupas mais intimistas ficam lindas nesse ambiente. Peças com texturas interessantes, como veludo, seda ou crochê, ganham profundidade com a luz artificial. Looks monocromáticos têm resultado elegante e atemporal. Se quiser um look mais editorial, o estúdio é o lugar certo para experimentar elementos mais ousados.",
      },
      {
        heading: "Combinações que sempre funcionam",
        body: "Não sabe o que levar? Essas combinações raramente erram: calça de alfaiataria com blusa básica de uma só cor e sandália ou scarpin; vestido midi fluido em tom neutro; conjunto de blusa e saia em tecido nobre; jeans escuro com blusa branca de boa qualidade; vestido longo com decote elegante. São clássicos porque a atenção fica no rosto e na expressão, não na roupa.",
      },
      {
        heading: "A preparação faz a diferença",
        body: "Separe todas as roupas na semana anterior. Experimente cada look completo com os sapatos e acessórios. Tire uma foto no espelho para ter uma referência. Isso te dá segurança e economiza tempo durante o ensaio fotográfico em Goiânia. Se tiver dúvidas sobre alguma combinação específica, pode me mandar uma foto antes da sessão: estou sempre disponível para ajudar na curadoria dos looks.",
      },
    ],
    internalLink: {
      href: "/servicos/ensaio-pessoal-goiania",
      label: "Agendar ensaio pessoal em Goiânia",
      context: "Pronta para colocar as dicas em prática?",
    },
    externalLink: {
      href: "https://www.instagram.com/darahcoelho/",
      label: "Instagram @darahcoelho",
      context: "Para ver exemplos reais de looks que funcionam em sessões fotográficas, acompanhe o",
    },
    cta: {
      heading: "Pronta para planejar seu ensaio?",
      message: "Olá, Darah! Quero agendar um ensaio fotográfico em Goiânia. Pode me passar mais informações?",
    },
  },
];

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://darahcoelhofotografia.com.br/blog/${slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      images: [{ url: post.heroImg, alt: post.heroAlt }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.metaDescription,
        image: post.heroImg,
        author: { "@type": "Person", name: "Darah Coelho", url: "https://darahcoelhofotografia.com.br/sobre" },
        publisher: {
          "@type": "Organization",
          name: "Darah Coelho Fotografia",
          url: "https://darahcoelhofotografia.com.br",
          logo: { "@type": "ImageObject", url: "https://darahcoelhofotografia.com.br/og-image.jpg" },
        },
        datePublished: post.date,
        dateModified: post.date,
        url: `https://darahcoelhofotografia.com.br/blog/${slug}`,
        inLanguage: "pt-BR",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: "https://darahcoelhofotografia.com.br" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://darahcoelhofotografia.com.br/blog" },
          { "@type": "ListItem", position: 3, name: post.title, item: `https://darahcoelhofotografia.com.br/blog/${slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO DO POST */}
      <section className="pt-24 pb-0">
        <div className="max-w-3xl mx-auto px-6 pt-8 pb-6">
          <nav className="flex gap-2 text-xs text-neutral-500 tracking-widest uppercase mb-8">
            <Link href="/" className="hover:text-gold transition-colors">Início</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gold truncate max-w-[200px]">{post.category}</span>
          </nav>

          <span className="text-gold text-xs tracking-widest uppercase">{post.category}</span>
          <h1 className="font-serif text-4xl md:text-5xl text-white mt-3 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-neutral-500 text-sm border-b border-dark-300 pb-8">
            <span>
              {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
            </span>
            <span>·</span>
            <span>{post.readTime} de leitura</span>
            <span>·</span>
            <span>por <Link href="/sobre" className="hover:text-gold transition-colors">Darah Coelho</Link></span>
          </div>
        </div>

        {/* Imagem hero do post */}
        <div className="max-w-4xl mx-auto px-6 pb-12">
          <div className="relative w-full aspect-[16/7] overflow-hidden">
            <Image
              src={post.heroImg}
              alt={post.heroAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </div>
      </section>

      {/* CORPO DO POST */}
      <article className="max-w-3xl mx-auto px-6 pb-8">
        <div className="space-y-8">
          {post.sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="font-serif text-2xl text-white mb-4">{section.heading}</h2>
              )}
              <p className="text-neutral-300 leading-relaxed text-lg">{section.body}</p>
            </div>
          ))}
        </div>

        {/* Link interno */}
        <div className="mt-12 p-6 border border-dark-300 bg-dark-100">
          <p className="text-neutral-400 text-sm mb-3">{post.internalLink.context}</p>
          <Link
            href={post.internalLink.href}
            className="text-gold text-sm tracking-widest uppercase underline underline-offset-4 hover:text-gold-light transition-colors"
          >
            {post.internalLink.label} →
          </Link>
        </div>

        {/* Link externo DoFollow */}
        <p className="mt-10 text-neutral-500 text-sm leading-relaxed">
          {post.externalLink.context}{" "}
          <a
            href={post.externalLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline"
          >
            {post.externalLink.label}
          </a>{" "}
          é um bom ponto de partida para aprofundar o tema.
        </p>
      </article>

      {/* CTA */}
      <section className="bg-dark-200 border-y border-dark-300 py-16 mt-8">
        <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-2xl text-white mb-2">{post.cta.heading}</h2>
            <p className="text-neutral-400">Atendimento personalizado em Goiânia e São Paulo.</p>
          </div>
          <WhatsAppButton label="Falar com a Darah" message={post.cta.message} />
        </div>
      </section>

      {/* OUTROS POSTS */}
      {otherPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <h2 className="font-serif text-2xl text-white mb-10">Outros artigos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {otherPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group border border-dark-300 hover:border-gold transition-colors"
              >
                <div className="relative aspect-[16/7] overflow-hidden">
                  <Image
                    src={p.heroImg}
                    alt={p.heroAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span className="text-gold text-xs tracking-widest uppercase">{p.category}</span>
                  <h3 className="font-serif text-lg text-white mt-3 mb-3 group-hover:text-gold transition-colors leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
