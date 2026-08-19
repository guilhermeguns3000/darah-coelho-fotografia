export interface FAQ {
  question: string;
  answer: string;
  /**
   * Versão da resposta sem citar valores. Usada automaticamente
   * enquanto os preços estão ocultos (ver src/lib/pricing.ts).
   */
  answerSemPreco?: string;
}

export interface Package {
  name: string;
  price: string;
  duration?: string;
  includes: string[];
  highlight?: boolean;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  headline: string;
  description: string;
  bodyText: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroImage: string;
  deliverables: string[];
  process: { step: string; description: string }[];
  faqs: FAQ[];
  schemaType: string;
  color: string;
  packages?: Package[];
  noPortfolio?: boolean;
}

export const services: Service[] = [
  {
    slug: "book-de-moda-goiania",
    title: "Book de Moda em Goiânia",
    shortTitle: "Book de Moda",
    headline: "Fotografia de Moda em Goiânia com direção de arte e editorial",
    description:
      "Ensaios de moda e editoriais fotográficos em Goiânia com olhar artístico e atendimento personalizado. Para modelos, agências, marcas e quem quer um book que conta uma história.",
    bodyText: [
      "Um book de moda em Goiânia é muito mais do que um conjunto de fotos bonitas: é a construção da sua identidade visual. A Darah Coelho traz para cada ensaio editorial uma abordagem de direção de arte completa: do briefing criativo ao moodboard, da escolha da locação à edição final. Cada detalhe é pensado para que as imagens comuniquem quem você é, o que você representa e para onde você vai.",
      "A fotografia de moda em Goiânia tem um mercado crescente, com marcas locais, agências emergentes e modelos que precisam de um portfólio que se destaque. Se você está iniciando carreira ou já atua profissionalmente, um book de moda bem produzido abre portas, para agências em Goiânia, São Paulo e em todo o Brasil. O ensaio editorial correto faz você ser lembrado nas seleções certas.",
      "A Darah fotografa nos principais estúdios de Goiânia e conhece cada um por dentro: qual tem a luz que combina com a sua proposta, qual cenário funciona para cada estilo, qual espaço comporta o número de looks que você quer. Em vez de você sair pesquisando e comparando preço de estúdio, ela indica o certo para o seu projeto e resolve a reserva. Some a isso uma curadoria de locações externas, de cenários urbanos no Setor Bueno e Jardim Goiás a ambientes naturais ao redor da cidade. Para projetos maiores, também atendemos em São Paulo. Seja um look minimalista, um editorial de alto impacto ou um book de moda para redes sociais, o resultado entregue pela Darah Coelho é sempre imagens com força visual e identidade própria.",
    ],
    metaTitle: "Book de Moda Goiânia | Fotógrafa Editorial – Darah Coelho",
    metaDescription:
      "Book de moda e ensaio editorial em Goiânia com direção de arte. Fotógrafa Darah Coelho, atendimento personalizado para modelos, marcas e agências. Agende.",
    keywords: [
      "book de moda Goiânia",
      "fotógrafa moda Goiânia",
      "ensaio editorial Goiânia",
      "fotografia fashion Goiânia",
      "book fotográfico Goiânia",
    ],
    heroImage: "https://res.cloudinary.com/djjacet57/image/upload/c_fill,g_face,ar_16:7,w_1920,f_auto,q_auto/darah/moda%20feminina/sem-ti-tulo-01",
    deliverables: [
      "Briefing criativo e moodboard personalizado",
      "Direção de poses e expressão durante a sessão",
      "Seleção e edição profissional das fotos",
      "Entrega em alta resolução para impressão e digital",
      "Versões otimizadas para redes sociais e portfólio",
      "Opção de direção de arte completa (styling, make, locação)",
    ],
    packages: [
      {
        name: "Por Look",
        price: "R$ 60",
        duration: "mínimo 10 looks",
        includes: [
          "4 fotos finalizadas por look",
          "Estúdio/locação à parte — ajudamos a contratar",
          "Direção de poses",
          "Entrega em até 2 dias úteis",
        ],
      },
      {
        name: "Por Look + Vídeo Mobile",
        price: "R$ 75",
        duration: "mínimo 10 looks",
        includes: [
          "4 fotos finalizadas por look",
          "Vídeo mobile (celular) por look",
          "Estúdio/locação à parte — ajudamos a contratar",
          "Direção de poses",
          "Entrega em até 2 dias úteis",
        ],
      },
      {
        name: "Por Look + Vídeo Profissional",
        price: "R$ 90",
        duration: "mínimo 10 looks",
        highlight: true,
        includes: [
          "4 a 6 fotos finalizadas por look",
          "Vídeo câmera profissional por look",
          "Estúdio/locação à parte — ajudamos a contratar",
          "Direção de poses",
          "Entrega em até 2 dias úteis",
        ],
      },
      {
        name: "Meia Diária",
        price: "R$ 1.750",
        duration: "até 20 looks · 4 horas",
        includes: [
          "Até 20 looks fotografados",
          "4 horas de sessão",
          "Estúdio/locação à parte — ajudamos a contratar",
          "Direção de arte completa",
          "Entrega em até 2 dias úteis",
        ],
      },
      {
        name: "Diária",
        price: "R$ 2.750",
        duration: "até 50 looks · 8 horas",
        includes: [
          "Até 50 looks fotografados",
          "8 horas de sessão",
          "Estúdio/locação à parte — ajudamos a contratar",
          "Direção de arte completa",
          "Entrega em até 2 dias úteis",
        ],
      },
    ],
    process: [
      { step: "Briefing", description: "Conversa sobre seu objetivo, referências visuais e o que você quer transmitir com o book." },
      { step: "Planejamento", description: "Definimos locação, styling, luz e moodboard juntos para garantir coerência visual." },
      { step: "Sessão", description: "Dia da produção com direção de poses e direção artística durante todo o processo." },
      { step: "Entrega", description: "Fotos editadas em alta resolução em até 2 dias úteis, prontas para portfólio, agências e redes sociais." },
    ],
    faqs: [
      { question: "Quanto custa um book de moda em Goiânia?", answer: "O investimento varia conforme o escopo do projeto. Por look: R$ 60 (4 fotos) ou R$ 75–90 com vídeo incluso, mínimo de 10 looks. Também trabalhamos com meia diária (R$ 1.750, até 20 looks, 4h) e diária completa (R$ 2.750, até 50 looks, 8h). Entre em contato para montar o pacote ideal.", answerSemPreco: "O investimento varia conforme o escopo do projeto. Trabalhamos por look (mínimo de 10 looks, com ou sem vídeo), meia diária (até 20 looks, 4h) e diária completa (até 50 looks, 8h). Envie uma mensagem no WhatsApp com a sua ideia e a Darah monta o orçamento do pacote ideal para você." },
      { question: "O book de moda serve para quem não é modelo profissional?", answer: "Sim. Atendo tanto modelos profissionais quanto pessoas que querem um book pessoal, book artístico ou material para redes sociais com estética editorial." },
      { question: "A fotógrafa atende em outros estados além de Goiânia?", answer: "Sim, atendo em São Paulo e posso me deslocar para outros estados mediante consulta. Entre em contato para verificar disponibilidade." },
      { question: "Preciso contratar maquiador e stylist separado?", answer: "Não necessariamente. Posso indicar profissionais parceiros em Goiânia ou organizar a equipe completa conforme o pacote escolhido." },
      { question: "Em quanto tempo recebo as fotos?", answer: "O prazo padrão é de 2 dias úteis após a sessão. O material fica disponível por 1 mês no link do Drive — salve seu material dentro desse prazo." },
    ],
    schemaType: "Photographer",
    color: "from-stone-900 to-stone-800",
  },
  {
    slug: "ensaio-pessoal-goiania",
    title: "Ensaio Pessoal em Goiânia",
    shortTitle: "Ensaio Pessoal",
    headline: "Ensaio fotográfico pessoal em Goiânia com autenticidade e leveza",
    description:
      "Ensaios fotográficos pessoais em Goiânia que revelam quem você é de verdade. Sessões em estúdio ou externos com atendimento acolhedor e resultado com personalidade.",
    bodyText: [
      "O ensaio pessoal em Goiânia é para quem quer se ver, de verdade, sem filtro forçado e sem pose engessada. É um espaço para explorar sua identidade, celebrar um momento importante ou simplesmente ter fotos que realmente representam quem você é hoje. A Darah Coelho conduz cada sessão com direção de poses do início ao fim, para que você se sinta confortável e o resultado seja autêntico.",
      "Seja para atualizar o perfil profissional, presentear alguém especial, marcar uma conquista ou simplesmente por você mesma, o ensaio fotográfico pessoal em Goiânia tem inúmeras razões para existir. Cada sessão é única porque cada pessoa é única. O planejamento começa com uma conversa sobre o que você quer transmitir, e o ensaio é construído ao redor disso.",
      "As sessões podem ser realizadas em estúdio, com iluminação controlada e cenários cuidadosamente montados, ou em locações externas em Goiânia, como parques, jardins, centros históricos e cafés. Você não precisa ter experiência alguma com fotos para fazer um ensaio pessoal com a Darah. A direção é sempre presente, gentil e voltada para fazer você brilhar naturalmente.",
    ],
    metaTitle: "Ensaio Pessoal Goiânia | Fotógrafa Darah Coelho",
    metaDescription:
      "Ensaio fotográfico pessoal em Goiânia com leveza, autenticidade e direção de poses. Fotógrafa Darah Coelho. Sessões em estúdio ou ao ar livre. Agende agora.",
    keywords: [
      "ensaio pessoal Goiânia",
      "ensaio fotográfico Goiânia",
      "book pessoal Goiânia",
      "fotógrafa ensaio Goiânia",
      "sessão fotográfica Goiânia",
    ],
    heroImage: "https://res.cloudinary.com/djjacet57/image/upload/c_fill,g_face,ar_16:7,w_1920,f_auto,q_auto/darah/ensaio%20pessoal/img-0725",
    deliverables: [
      "Sessão com direção de poses do início ao fim",
      "Escolha de locação (estúdio ou externo)",
      "Auxílio com cabelo incluso",
      "Seleção e edição das melhores fotos",
      "Entrega em alta resolução",
      "Versões para redes sociais incluídas",
    ],
    packages: [
      {
        name: "Essencial",
        price: "R$ 1.750",
        duration: "2 horas",
        includes: [
          "2 looks",
          "Estúdio incluso",
          "25 fotos finalizadas",
          "Ajuda na escolha de acessórios (joias, brincos, sapatos)",
          "Auxílio com cabelo",
          "Entrega em até 7 dias úteis",
        ],
      },
      {
        name: "Completo",
        price: "R$ 2.500",
        duration: "4 horas",
        highlight: true,
        includes: [
          "3 a 4 looks",
          "Estúdio incluso",
          "60 fotos finalizadas",
          "Ajuda na escolha de acessórios (joias, brincos, sapatos)",
          "Auxílio com cabelo",
          "Vídeo de bastidores",
          "Entrega em até 7 dias úteis",
        ],
      },
    ],
    process: [
      { step: "Conversa", description: "Entendemos o que você quer expressar e qual clima combina com você." },
      { step: "Locação", description: "Escolhemos juntos o ambiente ideal: estúdio, parque, centro histórico, café." },
      { step: "Sessão", description: "Sessão descontraída com direção de poses para que você se sinta à vontade." },
      { step: "Entrega", description: "Fotos selecionadas e editadas com cuidado, entregues em até 7 dias úteis pelo link do Drive." },
    ],
    faqs: [
      { question: "Preciso ter experiência com fotos para fazer ensaio pessoal?", answer: "Não. A direção de poses é feita durante toda a sessão. Você não precisa saber posar: é exatamente para isso que estamos juntos." },
      { question: "Onde são feitos os ensaios em Goiânia?", answer: "Atendemos em estúdio ou locações externas em Goiânia (parques, centros comerciais, ambientes naturais). O estúdio já está incluso nos pacotes." },
      { question: "A Darah fornece acessórios como joias, brincos e sapatos?", answer: "Não trabalhamos com acervo de acessórios: joias, brincos, sapatos e afins ficam por conta do cliente. A Darah te ajuda na escolha do que combina com o ensaio, mas os itens são trazidos por você." },
      { question: "Quanto tempo dura a sessão?", answer: "O Essencial tem 2 horas de duração. O Completo tem 4 horas, com mais tempo para troca de looks e explorar cenários diferentes." },
      { question: "Em quanto tempo recebo as fotos?", answer: "As fotos editadas são entregues em até 7 dias úteis após a sessão, via link do Drive. O material fica disponível por 1 mês — salve dentro desse prazo." },
      { question: "Como funciona o pagamento?", answer: "É feito um pagamento parcial até 24 horas antes do ensaio para confirmar o agendamento. O restante é combinado com a Darah no momento da sessão." },
    ],
    schemaType: "Photographer",
    color: "from-neutral-900 to-zinc-800",
  },
  {
    slug: "fotografia-casamento-goiania",
    title: "Fotografia de Casamento em Goiânia",
    shortTitle: "Casamento",
    headline: "Fotógrafa de casamento em Goiânia que captura o que nenhuma palavra descreve",
    description:
      "Fotografia e filmagem de casamento em Goiânia com olhar documental e estética editorial. Cada detalhe, cada emoção, cada momento único do seu dia registrado com verdade e arte, na foto e no vídeo.",
    bodyText: [
      "A fotografia de casamento em Goiânia feita pela Darah Coelho vai além do registro: é a construção de uma narrativa visual do dia mais importante da sua vida. Com um olhar ao mesmo tempo documental e editorial, cada imagem captura as emoções reais: o frio na barriga antes da cerimônia, o sorriso involuntário na troca de alianças, o abraço que não cabia de alegria. Esses momentos existem por segundos. A foto os guarda para sempre.",
      "Cada casamento em Goiânia tem sua própria energia, seu espaço, sua luz e sua história. Por isso o trabalho começa antes do grande dia, com uma reunião para entender o que o casal valoriza, mapear o espaço e alinhar a timeline com o cerimonialista. Esse planejamento é o que garante que nenhum momento importante passe despercebido pela câmera.",
      "O resultado é uma galeria online completa, com fotos editadas que equilibram o momento espontâneo e o retrato com beleza. Goiânia tem espaços belíssimos para casamentos, de salões sofisticados nos setores Bueno e Marista a fazendas no entorno da cidade, e a Darah conhece como trabalhar a luz de cada um desses ambientes para entregar imagens que emocionam toda vez que você abre o álbum.",
      "A Darah Coelho também fotografa casamentos em todo o estado de Goiás. Pirenópolis, com sua arquitetura colonial e cenário histórico único, é um destino especial para casamentos ao ar livre. Caldas Novas e Rio Quente reúnem resorts e celebrações em meio às águas quentes do cerrado. Anápolis, Aparecida de Goiânia e cidades do interior goiano também são atendidas regularmente. Para casamentos fora da Grande Goiânia, entre em contato para orçamento com deslocamento incluso.",
      "Além da fotografia, também ofereço filmagem de casamento em Goiânia. O vídeo guarda o que a foto não alcança: a voz embargada nos votos, a música da entrada, a risada na festa, o discurso que arranca lágrimas. Foto e filmagem seguem a mesma direção estética e trabalham juntas para que você reviva o dia inteiro, e não apenas os instantes. Se você procura fotógrafo e videomaker de casamento em Goiânia com um só olhar autoral, dá para contratar cobertura fotográfica e audiovisual em um pacote combinado.",
    ],
    metaTitle: "Fotografia e Filmagem de Casamento em Goiânia | Darah",
    metaDescription:
      "Fotógrafo e fotógrafa de casamento em Goiânia com estética editorial: fotografia e filmagem do seu dia com olhar documental. Darah Coelho. Consulte foto e vídeo.",
    keywords: [
      "fotógrafa casamento Goiânia",
      "fotógrafo casamento Goiânia",
      "fotografia casamento Goiânia",
      "fotógrafo de casamento Goiânia",
      "filmagem de casamento Goiânia",
      "filmagem casamento Goiânia",
      "vídeo de casamento Goiânia",
      "fotografia e filmagem de casamento Goiânia",
      "melhor fotógrafa casamento Goiânia",
    ],
    heroImage: "https://res.cloudinary.com/djjacet57/image/upload/c_fill,g_auto,ar_16:7,w_1920,f_auto,q_auto/darah/casamento/img-0836",
    deliverables: [
      "Cobertura completa do dia (cerimônia e recepção)",
      "Fotografia documental + momentos posados",
      "Edição completa de todas as fotos entregues",
      "Galeria online privada para compartilhar com a família",
      "Entrega em alta resolução para impressão de álbuns",
      "Opção de álbum físico premium",
      "Opção de filmagem (vídeo do casamento) em pacote combinado",
    ],
    process: [
      { step: "Reunião", description: "Conhecemos a história de vocês, o espaço do evento e planejamos cada detalhe da cobertura." },
      { step: "Preparação", description: "Visita ao local se necessário, timeline do dia definida, alinhamento com cerimonialista." },
      { step: "Dia do casamento", description: "Cobertura completa, do making of ao fim da recepção, com foco nas emoções reais." },
      { step: "Entrega", description: "Galeria online entregue em até 30 dias com todas as fotos editadas em alta resolução." },
    ],
    faqs: [
      { question: "Qual a antecedência para contratar fotógrafa de casamento em Goiânia?", answer: "Recomendo contratar com pelo menos 6 a 12 meses de antecedência, especialmente para casamentos na alta temporada (outubro a dezembro). Verifique disponibilidade o quanto antes." },
      { question: "Vocês cobrem pré-wedding?", answer: "Sim, ofereço sessões de pré-wedding separadamente ou em pacotes combinados com a cobertura do casamento. O pré-wedding é ótimo para o casal se familiarizar com a câmera antes do grande dia." },
      { question: "Quantas fotos são entregues?", answer: "A quantidade varia conforme a duração da cobertura, mas em geral são entregues entre 400 e 800 fotos editadas para uma cobertura completa." },
      { question: "A fotógrafa viaja para casamentos fora de Goiânia?", answer: "Sim, atendo casamentos em todo o Brasil. Entre em contato para solicitar orçamento com deslocamento incluso." },
      { question: "Vocês fazem a filmagem do casamento também?", answer: "Sim. Além da fotografia, ofereço filmagem de casamento em Goiânia com a mesma direção estética das fotos. Você pode contratar foto e vídeo juntos em um pacote combinado ou cada serviço separadamente." },
      { question: "Qual a diferença entre a foto e o vídeo do casamento?", answer: "A foto eterniza o instante para pendurar na parede e folhear no álbum; o vídeo guarda o movimento, a voz e o som do dia: os votos, a música, os discursos e as risadas. Juntos, foto e filmagem contam a história completa do casamento." },
    ],
    schemaType: "Photographer",
    color: "from-stone-800 to-neutral-900",
  },
  {
    slug: "ensaio-gestante-goiania",
    title: "Ensaio de Gestante em Goiânia",
    shortTitle: "Gestante",
    headline: "Ensaio gestante em Goiânia que celebra cada detalhe da sua gravidez",
    description:
      "Ensaio fotográfico de gestante em Goiânia com leveza, elegância e todo o amor que esse momento merece. Sessões em estúdio ou externas, com direção de poses especializada.",
    bodyText: [
      "O ensaio de gestante em Goiânia é uma das experiências mais especiais que uma mulher pode viver. A gravidez transforma o corpo, a identidade e a vida, e merece ser registrada com a mesma delicadeza que esse momento carrega. A Darah Coelho conduz cada sessão de gestante com um olhar sensível, direção de poses pensada para o conforto e a beleza de cada fase, e um resultado que emociona toda vez que você olha de volta.",
      "As sessões de ensaio de gestante podem ser realizadas em estúdio, com cenários montados especialmente para criar imagens atemporais, ou em locações externas em Goiânia, como parques, campos e jardins que trazem leveza e naturalidade às fotos. A escolha do estilo é sua: clássico e elegante, boho e natural, minimalista ou cheio de cor. Planejamos tudo juntos para que o resultado reflita sua personalidade.",
      "O período ideal para o ensaio de gestante é entre a 32ª e 36ª semana, quando a barriga já está bem evidenciada e a mamãe ainda se movimenta com conforto. Além das fotos individuais, a sessão pode incluir o parceiro, filhos e até pets. O ensaio de gestante em Goiânia com a Darah é também um presente que você vai guardar para mostrar ao seu filho quando ele crescer.",
      "Para quem prefere o ensaio de gestante externo em Goiânia, a cidade oferece cenários lindos de luz natural: o Parque Vaca Brava e o Parque Flamboyant, no Jardim Goiás, o Bosque dos Buritis e o Jardim Botânico trazem verde, água e o fim de tarde dourado que combinam com a delicadeza da gravidez. O investimento varia conforme a duração e o pacote escolhido, e o orçamento é feito sob medida para o seu momento.",
    ],
    metaTitle: "Ensaio de Gestante em Goiânia | Estúdio e Externo - Darah",
    metaDescription:
      "Ensaio de gestante em Goiânia com leveza e elegância, em estúdio ou externo (Parque Flamboyant, Vaca Brava). Fotógrafa Darah Coelho. Registre esse momento. Agende.",
    keywords: [
      "ensaio gestante Goiânia",
      "ensaio de gestante Goiânia",
      "ensaio gestante externo Goiânia",
      "fotógrafa gestante Goiânia",
      "book gestante Goiânia",
      "fotos de grávida Goiânia",
      "ensaio gravidez Goiânia",
      "fotografia gestante Goiânia",
      "ensaio maternidade Goiânia",
    ],
    heroImage: "https://res.cloudinary.com/djjacet57/image/upload/c_fill,g_auto,ar_16:7,w_1920,f_auto,q_auto/darah/Gestante/cecfd24b-94e9-4c9c-a9ea-a0f98a0a1c61",
    deliverables: [
      "Sessão com direção de poses especializada para gestantes",
      "Opção de incluir parceiro e filhos na sessão",
      "Seleção e edição completa das fotos",
      "Entrega em alta resolução para álbum e redes sociais",
    ],
    process: [
      { step: "Conversa", description: "Entendemos o seu momento e definimos o estilo do ensaio: mais clássico, boho, minimalista ou colorido." },
      { step: "Melhor época", description: "O período ideal é entre a 32ª e 36ª semana de gestação, quando a barriga está evidente e a mamãe ainda se sente bem." },
      { step: "Sessão", description: "Sessão acolhedora com ritmo no seu tempo, direção de poses e toda atenção para você se sentir linda." },
      { step: "Entrega", description: "Fotos editadas e entregues em galeria online privada. O link fica disponível por 1 mês — salve seu material." },
    ],
    faqs: [
      { question: "Qual a melhor semana para fazer o ensaio de gestante?", answer: "O ideal é entre a 32ª e 36ª semana de gestação. Nesse período a barriga já está bem desenvolvida e você ainda está confortável para se movimentar e posar." },
      { question: "Posso incluir meu parceiro e outros filhos no ensaio?", answer: "Sim, com prazer! O ensaio pode incluir toda a família. Recomendamos reservar um tempo específico para as fotos em família dentro da sessão." },
      { question: "O ensaio de gestante pode ser feito em ambiente externo?", answer: "Sim. Oferecemos sessões em estúdio ou em locações externas em Goiânia, como parques e áreas naturais, dependendo do estilo que você deseja." },
      { question: "Preciso levar roupa específica?", answer: "Orientamos sobre looks antes do ensaio. Em geral, vestidos longos, bodies e roupas que valorizem a barriga funcionam muito bem." },
      { question: "Quanto custa um ensaio de gestante em Goiânia?", answer: "O valor depende da duração da sessão, da quantidade de fotos e se é em estúdio ou em locação externa. Entre em contato para receber um orçamento personalizado e conhecer os pacotes disponíveis." },
    ],
    schemaType: "Photographer",
    color: "from-rose-950 to-stone-900",
  },
  {
    slug: "moda-masculina-goiania",
    title: "Book de Moda Masculina em Goiânia",
    shortTitle: "Moda Masculina",
    headline: "Book de moda masculina em Goiânia, identidade visual para homens",
    description:
      "Book fotográfico masculino em Goiânia com direção de arte, iluminação profissional e resultado editorial. Para modelos, atores, influenciadores e quem quer construir uma presença visual forte.",
    bodyText: [
      "O book de moda masculina em Goiânia é para o homem que quer uma presença visual que comunica quem ele é, seja para agências de modelos, redes sociais, marcas ou projetos pessoais. A Darah Coelho traz para cada sessão masculina o mesmo olhar editorial da fotografia de moda: composição cuidadosa, iluminação precisa e direção de poses que valoriza a postura, expressão e personalidade de cada cliente.",
      "O ensaio masculino pode ser realizado em estúdio, com fundo infinito e controle total de iluminação, ou em locações externas em Goiânia que combinem com o estilo do cliente. Do look clássico ao streetwear, do corporativo ao fashion editorial, a sessão é construída em torno da identidade de quem está na frente da câmera. Para cada look trazido, direcionamos as melhores poses e expressões.",
      "O resultado é um portfólio masculino com força visual e versatilidade, fotos que funcionam para LinkedIn, Instagram, casting ou campanha de marca. Se você está começando na modelagem ou quer renovar seu book masculino em Goiânia, a Darah entrega imagens com qualidade de editorial de revista, com atendimento personalizado do briefing à entrega final.",
    ],
    metaTitle: "Book Masculino Goiânia | Fotógrafa de Moda – Darah Coelho",
    metaDescription:
      "Book de moda masculina em Goiânia com direção de arte e resultado editorial. Fotógrafa Darah Coelho, para modelos, atores e influenciadores. Agende.",
    keywords: [
      "book masculino Goiânia",
      "fotografia moda masculina Goiânia",
      "book de moda Goiânia masculino",
      "fotógrafa moda masculina Goiânia",
      "ensaio masculino Goiânia",
    ],
    heroImage: "https://res.cloudinary.com/djjacet57/image/upload/c_fill,g_face,ar_16:7,w_1920,f_auto,q_auto/darah/moda%20masculina/sem-titulo-130",
    deliverables: [
      "Briefing criativo e escolha de locação",
      "Direção de poses e expressão durante toda a sessão",
      "Mínimo de 2 looks diferentes",
      "Edição profissional com tratamento de pele",
      "Entrega em galeria online privada",
      "Fotos em alta resolução para uso digital e impresso",
    ],
    process: [
      { step: "Briefing", description: "Conversa sobre estilo, objetivo do book e referências visuais para alinhar o conceito da sessão." },
      { step: "Preparação", description: "Orientamos sobre looks, cores e acessórios para cada cena. Você chega pronto para fotografar." },
      { step: "Sessão", description: "Direção completa: postura, expressão e composição. Você não precisa saber posar: é para isso que estou aqui." },
      { step: "Entrega", description: "Fotos editadas e entregues em galeria online em até 7 dias úteis após a sessão." },
    ],
    faqs: [
      { question: "Preciso ter experiência com fotografia para fazer um book masculino?", answer: "Não. A sessão tem direção completa, oriento cada pose, expressão e movimento. A maioria dos clientes nunca fez um book antes e o resultado é sempre surpreendente." },
      { question: "Quantos looks posso trazer para o ensaio?", answer: "Recomendamos de 2 a 4 looks por sessão, dependendo da duração contratada. Assim garantimos variedade no portfólio sem comprometer a qualidade de cada cena." },
      { question: "O ensaio é feito em estúdio ou em locação externa?", answer: "Oferecemos os dois. O estúdio oferece controle total de iluminação e fundo limpo. Locações externas em Goiânia trazem textura e contexto ao book. A escolha depende do objetivo e estilo de cada cliente." },
      { question: "O book masculino serve para agências de modelos?", answer: "Sim. Produzimos books com as especificações que agências exigem: fundo claro, expressão neutra, corpo inteiro, meio corpo e rosto. Informe no briefing que o objetivo é castings e adaptamos o pacote." },
    ],
    schemaType: "Photographer",
    color: "from-slate-950 to-stone-900",
  },
  {
    slug: "ensaio-familia-goiania",
    title: "Ensaio de Família em Goiânia",
    shortTitle: "Família",
    headline: "Ensaio de família em Goiânia, momentos reais, memórias para sempre",
    description:
      "Ensaio fotográfico de família em Goiânia que captura a essência do que vocês são juntos. Natural, divertido e emocionante. Para famílias de todos os tamanhos e formatos.",
    bodyText: [
      "O ensaio de família em Goiânia é para quem quer guardar como vocês são agora, nessa fase, com essas idades, com esse amor. As crianças crescem rápido demais. Os momentos passam. Um ensaio de família bem feito para o tempo e cria memórias visuais que as próximas gerações vão olhar com carinho. A Darah Coelho conduz cada sessão com leveza, criando um ambiente descontraído onde as fotos mais lindas acontecem naturalmente.",
      "O ensaio fotográfico de família em Goiânia pode ser realizado em estúdio, com cenários neutros e atemporais, ou em locações externas, parques, jardins, fazendas ao redor da cidade ou até na casa da própria família. Cada locação traz uma atmosfera diferente, e a escolha é feita juntos com base no estilo e na personalidade de cada família. O horário dourado (última hora antes do pôr do sol) é sempre uma boa aposta para fotos externas em Goiânia.",
      "Famílias de todos os formatos são bem-vindas, casais com filhos, famílias extensas com avós e netos, famílias com pets. Não há regra de como uma família precisa ser para ter um ensaio lindo. O que importa é o que vocês são juntos, e é exatamente isso que a Darah captura: a essência real da sua família, em fotos que vão durar para sempre.",
    ],
    metaTitle: "Ensaio Família Goiânia | Fotógrafa Darah Coelho",
    metaDescription:
      "Ensaio de família em Goiânia com leveza e autenticidade. Fotógrafa Darah Coelho captura os momentos reais da sua família. Sessões em estúdio ou ao ar livre. Agende.",
    keywords: [
      "ensaio família Goiânia",
      "fotógrafa família Goiânia",
      "ensaio fotográfico família Goiânia",
      "fotos família Goiânia",
      "fotografia família Goiânia",
    ],
    heroImage: "https://res.cloudinary.com/djjacet57/image/upload/c_fill,g_auto,ar_16:7,w_1920,f_auto,q_auto/darah/batizado/img_6612",
    deliverables: [
      "Sessão para famílias de todos os tamanhos",
      "Locações em estúdio ou externas em Goiânia",
      "Direção natural, poses sem rigidez",
      "Fotos individuais e em grupo",
      "Edição e entrega em alta resolução",
    ],
    noPortfolio: true,
    process: [
      { step: "Planejamento", description: "Definimos a locação e o melhor horário para todos, inclusive crianças pequenas." },
      { step: "Locação", description: "Estúdio, parque, jardim ou um lugar com significado para a família." },
      { step: "Sessão", description: "Clima leve e divertido. As crianças brincam, os adultos se soltam, e as fotos acontecem naturalmente." },
      { step: "Entrega", description: "Fotos editadas entregues em galeria online em até 15 dias úteis." },
    ],
    faqs: [
      { question: "Como lidar com crianças pequeninhas no ensaio?", answer: "Tenho experiência com crianças de todas as idades. A sessão é estruturada no ritmo delas, com brincadeiras e momentos espontâneos que resultam nas fotos mais lindas." },
      { question: "Qual o melhor horário para ensaio de família em locação externa?", answer: "O final da tarde (cerca de 1h antes do pôr do sol) oferece a luz mais bonita e suave para ensaios externos. Consulte disponibilidade de horários." },
      { question: "O ensaio de família pode ser feito em casa?", answer: "Sim. Ensaios em casa têm um charme especial, o ambiente real da família aparece nas fotos. Entre em contato para verificar viabilidade." },
      { question: "Como devemos nos vestir para o ensaio?", answer: "Orientamos sobre as cores e estilos antes do ensaio. Em geral, roupas em tons harmoniosos (não necessariamente iguais) e evitar estampas muito chamativas funcionam melhor." },
    ],
    schemaType: "Photographer",
    color: "from-emerald-950 to-stone-900",
  },
  {
    slug: "fotografia-batismo-goiania",
    title: "Fotografia de Batismo em Goiânia",
    shortTitle: "Batismo",
    headline: "Fotógrafa de batismo em Goiânia, a bênção do seu filho registrada com arte",
    description:
      "Cobertura fotográfica de batismo e sacramentos em Goiânia. Do ensaio pré-batismo à festa, cada momento desse dia especial registrado com sensibilidade e qualidade profissional.",
    bodyText: [
      "A fotografia de batismo em Goiânia feita pela Darah Coelho captura toda a espiritualidade e a alegria de um dos momentos mais significativos na vida de uma família. Desde a cerimônia religiosa, com toda a sua sacralidade, até a festa de celebração, cada detalhe é registrado com respeito, sensibilidade e um olhar artístico que transforma o cotidiano em imagem especial.",
      "O batismo é um dia curto, mas cheio de momentos que passam rápido: a entrada do bebê, a unção, o sorriso do padrinho, os abraços da família reunida, os detalhes da mesa decorada. A cobertura fotográfica de batismo em Goiânia garante que nenhum desses momentos se perca. Trabalhamos com uma lista de momentos prioritários alinhada com a família antes do evento, para cobrir tudo que importa.",
      "Além da cobertura do dia, oferecemos também ensaio pré-batismo com a roupa da cerimônia, uma sessão mais tranquila, sem a correria do evento, que garante fotos ainda mais especiais. A fotografia de batismo em Goiânia com a Darah é um presente que a família vai guardar por gerações, e um dos registros mais bonitos dos primeiros anos de vida do seu filho.",
    ],
    metaTitle: "Fotógrafa Batismo Goiânia | Darah Coelho Fotografia",
    metaDescription:
      "Fotografia de batismo em Goiânia com cobertura completa, cerimônia e festa. Fotógrafa Darah Coelho registra cada momento desse dia especial. Consulte disponibilidade.",
    keywords: [
      "fotógrafa batismo Goiânia",
      "fotografia batismo Goiânia",
      "fotógrafa sacramento Goiânia",
      "fotos batismo Goiânia",
      "fotógrafa batizado Goiânia",
    ],
    heroImage: "https://res.cloudinary.com/djjacet57/image/upload/c_fill,g_auto,ar_16:7,w_1920,f_auto,q_auto/darah/batizado/img-6589",
    deliverables: [
      "Cobertura da cerimônia religiosa",
      "Registro da festa e confraternização",
      "Fotos em família com o homenageado",
      "Detalhes da decoração e mesa",
      "Edição completa e entrega em alta resolução",
    ],
    process: [
      { step: "Alinhamento", description: "Definimos os momentos prioritários: entrada, sacramento, fotos em família, detalhes." },
      { step: "Cerimônia", description: "Cobertura discreta e respeitosa durante o momento sagrado." },
      { step: "Festa", description: "Registro dos momentos em família, com amigos e os detalhes que fizeram o dia especial." },
      { step: "Entrega", description: "Fotos editadas entregues em galeria online em até 20 dias úteis." },
    ],
    faqs: [
      { question: "A fotógrafa pode fotografar dentro da igreja?", answer: "Sim, com autorização da paróquia. Verificamos previamente as regras de cada espaço para garantir a cobertura completa sem interferir na cerimônia." },
      { question: "É possível fazer um ensaio pré-batismo?", answer: "Sim. Um ensaio com a roupa do batismo antes do evento garante fotos lindas e mais tranquilas, sem a correria do dia." },
      { question: "A cobertura inclui a festa também?", answer: "Sim. Cobrimos cerimônia e festa em um único pacote, com a duração definida conforme o evento." },
      { question: "Com quanto tempo de antecedência devo contratar?", answer: "Recomendo com 1 a 3 meses de antecedência para garantir disponibilidade na data desejada." },
    ],
    schemaType: "Photographer",
    color: "from-violet-950 to-stone-900",
  },
  {
    slug: "fotografia-produto-ecommerce-goiania",
    title: "Fotografia de Produto para E-commerce em Goiânia",
    shortTitle: "Produto / E-commerce",
    headline: "Fotografia de produto para e-commerce e catálogos em Goiânia",
    description:
      "Fotografia profissional de produto em Goiânia para e-commerce, catálogos, redes sociais e marketplace. Imagens que vendem, com fundo infinito branco ou contextualizadas.",
    bodyText: [
      "A fotografia de produto para e-commerce em Goiânia é um dos serviços que mais impacta diretamente as vendas de um negócio. No ambiente digital, a imagem é o único contato que o comprador tem com o produto antes de decidir pela compra. Fotos profissionais, bem iluminadas e fiéis ao produto real aumentam a confiança, reduzem devoluções e melhoram a taxa de conversão, seja em marketplaces como Amazon, Shopee e Mercado Livre, ou em lojas próprias.",
      "A Darah Coelho oferece fotografia de produto em Goiânia com duas abordagens principais: o estúdio técnico com fundo infinito branco (o padrão exigido pelos principais marketplaces) e as fotos contextualizadas ou lifestyle, que mostram o produto em uso e criam conexão emocional com o cliente. Para marcas de moda, cosméticos e acessórios, combinamos as duas abordagens para um material completo.",
      "Atendemos lojas locais em Goiânia e e-commerces de todo o Brasil, os produtos podem ser enviados ao estúdio por transportadora. Entregamos nos formatos corretos para cada plataforma, com pós-produção completa inclusa. Se você tem uma loja com muitos SKUs, temos capacidade para grandes volumes com entrega em prazo definido e preço por produto.",
    ],
    metaTitle: "Fotografia Produto E-commerce Goiânia | Darah Coelho",
    metaDescription:
      "Fotografia de produto para e-commerce e catálogos em Goiânia. Darah Coelho, imagens profissionais para Amazon, Shopee, Instagram e seu site. Solicite orçamento.",
    keywords: [
      "fotografia produto Goiânia",
      "fotógrafa e-commerce Goiânia",
      "foto produto Goiânia",
      "fotografia catálogo Goiânia",
      "fotografia marketplace Goiânia",
    ],
    heroImage: "https://res.cloudinary.com/djjacet57/image/upload/c_fill,g_auto,ar_16:7,w_1920,f_auto,q_auto/darah/moda%20feminina/img_5554",
    deliverables: [
      "Fotos com fundo infinito branco (padrão marketplace)",
      "Fotos contextualizadas / lifestyle",
      "Múltiplos ângulos por produto",
      "Pós-produção completa (recorte, ajustes, clareamento)",
      "Formatos para Amazon, Shopee, Instagram e web",
      "Entrega em prazo acordado para grandes volumes",
    ],
    process: [
      { step: "Briefing", description: "Entendemos o produto, a plataforma de destino e o estilo visual da sua marca." },
      { step: "Envio dos produtos", description: "Você envia os produtos para o estúdio em Goiânia ou combinamos logística." },
      { step: "Produção", description: "Sessão controlada em estúdio com iluminação técnica para e-commerce ou lifestyle." },
      { step: "Entrega", description: "Fotos editadas e prontas para publicar, nos formatos corretos para cada plataforma." },
    ],
    faqs: [
      { question: "Qual o preço da fotografia de produto em Goiânia?", answer: "O valor é calculado por produto fotografado ou por sessão, dependendo do volume. Entre em contato com a quantidade de produtos para receber um orçamento." },
      { question: "Vocês atendem lojas de e-commerce fora de Goiânia?", answer: "Sim. Para volumes maiores os produtos podem ser enviados ao estúdio pelos Correios ou transportadora. Também realizamos deslocamentos para grandes volumes." },
      { question: "As fotos ficam prontas para publicar direto no marketplace?", answer: "Sim. Entregamos nos formatos e especificações técnicas de cada plataforma (Amazon, Shopee, Mercado Livre, Instagram, etc.)." },
      { question: "Vocês também fotografam lookbooks de moda?", answer: "Sim. Combinamos fotografia de produto com fotografia de moda para lookbooks completos de moda, acessórios e cosméticos." },
    ],
    schemaType: "Photographer",
    color: "from-zinc-900 to-neutral-800",
    noPortfolio: true,
  },
  {
    slug: "eventos-corporativos-goiania",
    title: "Fotografia para Eventos Corporativos em Goiânia",
    shortTitle: "Eventos Corporativos",
    headline: "Fotógrafa de eventos corporativos em Goiânia com qualidade e pontualidade",
    description:
      "Cobertura fotográfica profissional de eventos corporativos em Goiânia, conferências, feiras, lançamentos, formaturas e confraternizações. Material pronto para comunicação institucional.",
    bodyText: [
      "A fotografia de eventos corporativos em Goiânia exige um perfil específico de fotógrafa: discreta, pontual, técnica e capaz de trabalhar em ambientes com iluminação variável sem comprometer a qualidade das imagens. A Darah Coelho atende empresas, associações e produtoras de eventos em Goiânia com cobertura fotográfica profissional para conferências, feiras, lançamentos de produtos, formaturas corporativas e confraternizações.",
      "O material fotográfico de um evento corporativo tem múltiplos destinos: press releases para a imprensa, postagens nas redes sociais da empresa, relatórios anuais, apresentações internas e arquivos institucionais. Por isso, a cobertura é planejada para cobrir todos esses usos, desde os momentos de networking e palestras até os detalhes do espaço, da marca e da mesa executiva.",
      "Para eventos corporativos em Goiânia com necessidade de divulgação imediata, oferecemos também entrega parcial no mesmo dia, uma seleção de destaques editados rapidamente para postagem nas redes sociais logo após o evento. Atendemos eventos em Goiânia e também em outras cidades brasileiras mediante consulta. Entre em contato com a data e o briefing do seu evento para receber uma proposta.",
      "Empresas e associações em Anápolis, Rio Verde, Catalão, Itumbiara e demais cidades do interior de Goiás também podem contratar cobertura fotográfica corporativa com a Darah Coelho. O estado de Goiás tem um mercado corporativo em crescimento acelerado, e a Darah leva para cada evento o mesmo padrão de qualidade entregue aos grandes clientes de Goiânia.",
    ],
    metaTitle: "Fotógrafa Eventos Corporativos Goiânia | Darah Coelho",
    metaDescription:
      "Fotografia de eventos corporativos em Goiânia: conferências, feiras, lançamentos e formaturas. Darah Coelho, cobertura profissional para comunicação institucional.",
    keywords: [
      "fotógrafa eventos corporativos Goiânia",
      "fotografia evento corporativo Goiânia",
      "fotógrafa conferência Goiânia",
      "cobertura fotográfica evento Goiânia",
      "fotógrafa empresarial Goiânia",
    ],
    heroImage: "https://res.cloudinary.com/djjacet57/image/upload/c_fill,g_auto,ar_16:7,w_1920,f_auto,q_auto/darah/eventos%20corporativos/0x7a9832",
    deliverables: [
      "Cobertura completa do evento (abertura ao encerramento)",
      "Fotografias dos palestrantes e painéis",
      "Registro dos participantes e networking",
      "Fotos institucionais para press release e redes",
      "Entrega em alta resolução em prazo definido",
      "Opção de entrega parcial no mesmo dia",
    ],
    process: [
      { step: "Briefing corporativo", description: "Alinhamos os momentos prioritários, identidade visual e uso das imagens (press, redes, relatórios)." },
      { step: "Planejamento", description: "Mapeamos o espaço e a programação para garantir cobertura de todos os momentos-chave." },
      { step: "Cobertura", description: "Atuação discreta e profissional durante todo o evento, com equipamento para ambientes com iluminação variável." },
      { step: "Entrega", description: "Fotos editadas e catalogadas, entregues no prazo acordado em formato para uso institucional." },
    ],
    faqs: [
      { question: "Qual antecedência para contratar fotógrafa para evento em Goiânia?", answer: "Recomendamos com 2 a 4 semanas de antecedência para eventos menores, e 1 a 2 meses para grandes eventos corporativos." },
      { question: "É possível receber um pacote de fotos no mesmo dia do evento?", answer: "Sim, oferecemos entrega parcial (seleção de destaques) no mesmo dia para postagem imediata nas redes sociais, com a entrega completa em prazo posterior." },
      { question: "Atendem eventos fora de Goiânia?", answer: "Sim, atendemos eventos corporativos em todo o Brasil mediante consulta de disponibilidade e orçamento com deslocamento." },
      { question: "As fotos podem ser usadas para comunicação interna e externa da empresa?", answer: "Sim. O licenciamento das imagens para uso corporativo irrestrito está incluído no pacote." },
    ],
    schemaType: "Photographer",
    color: "from-slate-900 to-stone-800",
  },
  {
    slug: "videomaker-goiania",
    title: "Videomaker em Goiânia",
    shortTitle: "Videomaker",
    headline: "Videomaker em Goiânia, vídeos com estética cinematográfica e narrativa",
    description:
      "Produção de vídeo profissional em Goiânia para casamentos, ensaios, eventos e marcas. Vídeos com estética cinematográfica, trilha personalizada e edição que conta histórias.",
    bodyText: [
      "O serviço de videomaker em Goiânia da Darah Coelho traz a mesma linguagem visual cuidadosa da fotografia para o formato em movimento. Cada vídeo é pensado como uma narrativa, com início, meio e fim emocionante, não como um simples registro de imagens em sequência. O resultado são vídeos que as pessoas assistem mais de uma vez, compartilham e guardam.",
      "Para casamentos, o vídeo captura o que até as fotos não conseguem: a voz quebrada nos votos, a música que tocou naquele momento, o choro e o riso ao mesmo tempo. Para ensaios de moda e editoriais, o vídeo adiciona movimento, textura e ritmo à identidade visual da marca ou do portfólio. Para eventos e marcas, o vídeo corporativo em Goiânia é o conteúdo de maior alcance nas redes sociais, especialmente em formato Reels e Stories.",
      "Como videomaker em Goiânia, a Darah filma em 4K com equipamento profissional e entrega com color grading cinematográfico, trilha licenciada e edição narrativa. Oferecemos pacotes combinados de foto + vídeo para casamentos e eventos, que garantem a mesma linguagem visual entre os dois formatos, e representam o melhor custo-benefício para quem quer um registro completo.",
    ],
    metaTitle: "Videomaker Goiânia | Produção de Vídeo – Darah Coelho",
    metaDescription:
      "Videomaker em Goiânia com estética cinematográfica. Vídeos para casamento, ensaios, eventos e marcas. Darah Coelho Fotografia, narrativas visuais que emocionam.",
    keywords: [
      "videomaker Goiânia",
      "produção de vídeo Goiânia",
      "videógrafa Goiânia",
      "vídeo casamento Goiânia",
      "vídeo ensaio Goiânia",
    ],
    heroImage: "https://res.cloudinary.com/djjacet57/image/upload/c_fill,g_face,ar_16:7,w_1920,f_auto,q_auto/darah/moda%20feminina/sem-ti-tulo-022",
    deliverables: [
      "Vídeo principal editado com trilha personalizada",
      "Versões para Instagram Reels e Stories",
      "Captura em resolução 4K",
      "Color grading cinematográfico",
      "Entrega em múltiplos formatos",
    ],
    process: [
      { step: "Briefing", description: "Definimos o estilo do vídeo, referências visuais e o que você quer comunicar." },
      { step: "Produção", description: "Filmagem com equipamento profissional, atenção à luz e composição cinematográfica." },
      { step: "Edição", description: "Montagem narrativa com color grading, trilha e motion quando necessário." },
      { step: "Entrega", description: "Vídeo finalizado em formato para TV, web, Instagram e demais plataformas." },
    ],
    faqs: [
      { question: "Posso contratar foto e vídeo juntos?", answer: "Sim, oferecemos pacotes combinados de fotografia e videomaker para casamentos, ensaios e eventos. É a opção mais completa e com melhor custo-benefício." },
      { question: "Em quanto tempo o vídeo fica pronto?", answer: "O prazo de entrega varia conforme o tipo de produção. Vídeos de evento: 10 a 20 dias. Vídeos de casamento: 30 a 45 dias. Reels para redes sociais: 5 a 10 dias." },
      { question: "Os vídeos são feitos em 4K?", answer: "Sim, filmamos em 4K para garantir qualidade mesmo em telas grandes. A entrega é adaptada ao uso final (web, redes sociais, TV)." },
      { question: "Posso escolher a música do vídeo?", answer: "Sim. Trabalhamos com músicas licenciadas e podemos usar sugestões suas, desde que sejam licenciadas para uso comercial." },
    ],
    schemaType: "Photographer",
    color: "from-indigo-950 to-stone-900",
    noPortfolio: true,
  },
  {
    slug: "estudio-fotografico-goiania",
    title: "Ensaio Fotográfico em Estúdio em Goiânia",
    shortTitle: "Ensaio em Estúdio",
    headline: "Ensaio em estúdio em Goiânia com a escolha do estúdio certo feita por quem conhece todos",
    description:
      "Ensaio fotográfico em estúdio em Goiânia sem você precisar procurar espaço. A Darah Coelho fotografa nos principais estúdios da cidade, indica qual combina com o seu projeto e cuida da reserva.",
    bodyText: [
      "Escolher um estúdio fotográfico em Goiânia é mais difícil do que parece. Cada espaço da cidade tem uma personalidade: uns têm luz natural entrando de um lado só e brilham no fim da tarde, outros trabalham com luz totalmente controlada e entregam aquele fundo limpo de catálogo. Uns têm pé-direito alto e cabem cenários grandes, outros são pequenos e aconchegantes, perfeitos para um retrato íntimo. Quem nunca fotografou nos dois não tem como saber a diferença antes de chegar lá — e aí já é tarde.",
      "A Darah Coelho fotografa nos principais estúdios de Goiânia e conhece cada um por dentro. Quando você entra em contato, ela pergunta o que você quer transmitir com as imagens, quantos looks pretende levar e que estética te agrada, e então indica o estúdio que atende exatamente isso. Se a proposta pede luz suave e natural, ela sabe qual espaço tem a janela certa. Se pede fundo infinito para um catálogo, ela sabe onde está o melhor. E cuida da reserva junto ao estúdio escolhido, para você não ter que negociar horário e valor com ninguém.",
      "Esse é o ponto que muda a experiência: você não sai atrás de estúdio, não compara preço de locação, não descobre no dia que a luz não era o que você imaginava. Chega no lugar certo, com a produção já alinhada e o tempo de sessão planejado. É o mesmo trabalho de direção que a Darah faz na frente da câmera — briefing, referência visual, escolha de cenário e direção de poses — começando antes, na escolha do espaço.",
      "O ensaio em estúdio em Goiânia funciona para praticamente todo tipo de projeto: ensaio pessoal e de autoestima, book de moda e material para agências, retrato corporativo e de marca pessoal, gestante em ambiente controlado, fotografia de produto para loja e e-commerce. Em alguns pacotes o estúdio já entra no valor combinado; em outros, o espaço é contratado à parte e a Darah ajuda na negociação. Isso fica claro no orçamento, sem surpresa depois.",
    ],
    metaTitle: "Ensaio em Estúdio Fotográfico em Goiânia | Darah Coelho",
    metaDescription:
      "Ensaio em estúdio fotográfico em Goiânia sem procurar espaço: a Darah Coelho conhece os estúdios da cidade, indica o ideal para o seu projeto e cuida da reserva.",
    keywords: [
      "estúdio fotográfico Goiânia",
      "ensaio em estúdio Goiânia",
      "estúdio de fotografia Goiânia",
      "estúdio fotográfico em Goiânia",
      "fotógrafa estúdio Goiânia",
    ],
    heroImage: "https://res.cloudinary.com/djjacet57/image/upload/c_fill,g_face,ar_16:7,w_1920,f_auto,q_auto/darah/ensaio%20pessoal/img-0725",
    deliverables: [
      "Indicação do estúdio certo para a sua proposta",
      "Reserva do espaço resolvida pela Darah",
      "Briefing e definição da estética antes da sessão",
      "Direção de poses e expressão durante todo o ensaio",
      "Seleção e edição profissional das fotos",
      "Entrega em alta resolução e versões para redes sociais",
    ],
    process: [
      { step: "Conversa inicial", description: "Você conta o que quer transmitir, quantos looks pretende levar e que referências gosta." },
      { step: "Escolha do estúdio", description: "A Darah indica, entre os estúdios de Goiânia que conhece, o que tem a luz e o cenário certos para a sua proposta." },
      { step: "Reserva e produção", description: "Ela alinha data e horário com o estúdio escolhido e organiza o tempo de sessão para caber tudo o que foi combinado." },
      { step: "Sessão e entrega", description: "Ensaio com direção do início ao fim e fotos editadas entregues no prazo do pacote escolhido." },
    ],
    faqs: [
      { question: "A Darah tem estúdio próprio em Goiânia?", answer: "Não. Ela fotografa nos principais estúdios da cidade, e essa é justamente a vantagem: em vez de encaixar todo projeto no mesmo espaço, ela escolhe entre vários o que tem a luz, o cenário e o tamanho certos para o que você quer — e cuida da reserva." },
      { question: "O valor do estúdio está incluso no ensaio?", answer: "Depende do pacote. Em alguns o espaço já entra no valor combinado; em outros ele é contratado à parte e a Darah ajuda na escolha e na negociação. Isso é informado no orçamento, antes de fechar." },
      { question: "Como sei qual estúdio combina com o meu ensaio?", answer: "Você não precisa saber — é o trabalho dela. Na conversa inicial ela entende o objetivo do ensaio, o estilo que você gosta e a quantidade de looks, e indica o espaço que atende isso melhor." },
      { question: "Dá para fazer o ensaio em estúdio e também em locação externa?", answer: "Sim. Muitos projetos combinam os dois: parte em estúdio, com luz controlada, e parte em locação externa. A Darah tem uma curadoria de locações em Goiânia e organiza os dois no mesmo dia quando o tempo de sessão permite." },
      { question: "Que tipos de ensaio podem ser feitos em estúdio?", answer: "Ensaio pessoal, book de moda, retrato corporativo e de marca pessoal, gestante, família, moda masculina e fotografia de produto para loja e e-commerce." },
    ],
    schemaType: "Photographer",
    color: "from-neutral-900 to-zinc-800",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

export function toCardImage(heroImageUrl: string): string {
  return heroImageUrl
    .replace("c_fill,g_face,ar_16:7,w_1920,f_auto,q_auto", "c_fill,g_face,ar_4:5,w_800,f_auto,q_auto")
    .replace("c_fill,g_auto,ar_16:7,w_1920,f_auto,q_auto", "c_fill,g_auto,ar_4:5,w_800,f_auto,q_auto");
}
