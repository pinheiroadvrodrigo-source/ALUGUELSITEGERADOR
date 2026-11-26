import type { Localidade } from './types';
import { GALERIAS } from './galerias';

const foto = (slug: string, nome: string, alt: string, w = 1200, h = 800) => ({
  src: `/img/fotos/${slug}/${nome}.webp`,
  alt,
  w,
  h,
});

const NOTA =
  'Faixas de referência de mercado (2025–2026), sem combustível, frete e operador. Não é orçamento: o valor final depende da carga, do prazo e do ponto de instalação.';

// Ordem = prioridade (ticket do serviço-âncora × potencial da cidade).
// Cada cidade tem UM serviço-âncora exclusivo — nenhuma repete outra.
const BASE: Omit<Localidade, 'galeria'>[] = [
  // ───────────────────────────────────────────────────────────── BARCARENA
  {
    slug: 'gerador-industrial-barcarena-pa',
    cidade: 'Barcarena',
    uf: 'PA',
    regiao: 'Polo industrial e portuário',
    servicoAncora: 'Locação de gerador industrial',
    servicoSlug: 'locacao-de-gerador-industrial',
    title: 'Gerador Industrial em Barcarena - PA | Locação ParaPrime',
    description:
      'Locação de gerador industrial em Barcarena - PA para o polo de Vila do Conde: contingência, paralelismo e manutenção de subestação. WhatsApp (91) 99119-8584.',
    h1: 'Locação de Gerador Industrial em Barcarena - PA | Polo Portuário de Vila do Conde',
    lead:
      'A {MARCA} organiza a locação de gerador industrial em Barcarena para fornecedores, prestadores de serviço e operações do Complexo Portuário e Industrial de Vila do Conde, além de comércio e serviços da sede e da Vila dos Cabanos. São grupos geradores diesel de 100 a 500 kVA por unidade, com associação em paralelo, quadro de transferência e plano de abastecimento para paradas de manutenção, contingência e canteiros industriais.',
    fatos: [
      { valor: '126.650', rotulo: 'habitantes no Censo 2022', fonte: 'IBGE' },
      { valor: 'Vila do Conde', rotulo: 'maior porto do Pará', fonte: 'Hydro' },
      { valor: 'Alumina e alumínio', rotulo: 'Alunorte e Albras no município', fonte: 'Hydro' },
    ],
    bairrosParagrafo:
      'Atendemos a sede de Barcarena, a Vila dos Cabanos, a área de Vila do Conde e Murucupi, o entorno da rodovia PA-483 — principal acesso rodoviário ao porto — e o bairro Beira Rio, além de áreas industriais e canteiros ao longo do eixo de acesso ao complexo portuário.',
    bairros: ['Vila dos Cabanos', 'Vila do Conde', 'Murucupi', 'Centro', 'Beira Rio'],
    escopo: {
      h2: 'Opções de Locação de Gerador Industrial para Empresas de Barcarena',
      itens: [
        { titulo: 'Paradas de manutenção', texto: 'Energia temporária para fornecedores durante desligamentos programados de subestação e painéis.', spec: '100–500 KVA · JANELA PROGRAMADA' },
        { titulo: 'Canteiros industriais', texto: 'Montagem eletromecânica, caldeiraria e obras de ampliação no polo, com contrato que segue o cronograma.', spec: 'CONTRATO 30–180 DIAS' },
        { titulo: 'Contingência com QTA', texto: 'Gerador de prontidão para cargas críticas de armazéns, oficinas e escritórios de apoio.', spec: 'STANDBY · TRANSFERÊNCIA AUTOMÁTICA' },
        { titulo: 'Paralelismo de grupos', texto: 'Dois ou mais geradores sincronizados quando a demanda passa de 500 kVA ou quando é preciso redundância.', spec: '2× 500 KVA' },
      ],
    },
    escolher: {
      h2: 'Como Escolher a Locadora de Gerador Industrial em Barcarena',
      itens: [
        { titulo: 'Documentação para acesso ao polo', texto: 'Empresas do complexo costumam exigir integração de segurança, NR-10 e NR-20 da equipe e laudos do equipamento antes da entrada.' },
        { titulo: 'Capacidade de paralelismo', texto: 'Verifique se a locadora tem painel de sincronismo e grupos iguais para somar potência com segurança.' },
        { titulo: 'Logística até o polo', texto: 'Caminhão munck, rota pela Alça Viária e PA-483 e plano de abastecimento definidos antes da mobilização.' },
      ],
    },
    cronograma: {
      h2: 'Cronograma de Locação de Gerador Industrial em Barcarena',
      passos: [
        { titulo: 'Levantamento de carga', texto: 'Demanda, unifilar e lista de cargas críticas enviadas pelo WhatsApp.', prazo: 'MESMO DIA' },
        { titulo: 'Visita e documentação', texto: 'Vistoria do ponto de instalação e envio da documentação exigida pelo contratante.', prazo: '24–72 H' },
        { titulo: 'Mobilização', texto: 'Transporte, posicionamento, cabos, QTA ou painel de paralelismo.', prazo: '48–96 H APÓS APROVAÇÃO' },
        { titulo: 'Teste e operação', texto: 'Teste de transferência e acompanhamento até a desmobilização.', prazo: 'CONFORME CONTRATO' },
      ],
    },
    blocoVariavel: {
      h2: 'Gerador Industrial em Ambiente Portuário: Umidade e Corrosão em Barcarena',
      paragrafos: [
        'O Porto de Vila do Conde fica na margem direita do rio Pará, em frente à Baía do Marajó, segundo o estudo de arrendamento da ANTAQ. É um ambiente de umidade alta o ano inteiro, com névoa salina leve e poeira de minério e de granéis nas áreas operacionais.',
        'Para o gerador, isso significa três cuidados: cabine com pintura e vedação em bom estado, filtro de ar inspecionado com mais frequência em áreas com particulado e resistência de aquecimento no alternador ligada nos períodos parados, para evitar condensação nos enrolamentos. Conexões e terminais recebem inspeção visual a cada visita de abastecimento.',
      ],
      h3: [
        { titulo: 'Armazenamento de diesel conforme NR-20', texto: 'Tanques externos com bacia de contenção e sinalização, como exigem as áreas industriais do polo.' },
        { titulo: 'Integração com o sistema de aterramento', texto: 'O neutro e a carcaça do gerador seguem o esquema de aterramento da instalação existente, conforme NBR 5410.' },
      ],
    },
    preco: {
      h2: 'Quanto Custa a Locação de Gerador Industrial em Barcarena?',
      linhas: [
        { item: '150 kVA em contrato de 28 dias', valor: '≈ R$ 230 / dia', obs: 'referência de catálogo' },
        { item: '500 kVA em contrato de 28 dias', valor: '≈ R$ 590 a R$ 610 / dia', obs: 'referência de catálogo' },
        { item: 'Diária avulsa acima de 250 kVA', valor: 'a partir de R$ 2.000 / dia', obs: 'parada curta' },
        { item: 'Frete Belém–Barcarena', valor: 'orçado à parte', obs: 'por viagem de munck' },
      ],
      nota: NOTA,
    },
    vizinhas: {
      h2: 'Cidades Vizinhas a Barcarena Atendidas',
      texto:
        'Pela Alça Viária, o atendimento industrial se estende a Abaetetuba e Moju e, no sentido da capital, a Belém e Ananindeua.',
      cidades: ['Abaetetuba', 'Moju', 'Belém', 'Ananindeua'],
    },
    faq: {
      h2: 'Perguntas Frequentes sobre Gerador Industrial em Barcarena',
      itens: [
        { pergunta: 'Vocês atendem empresas dentro do complexo de Vila do Conde?', resposta: 'Sim, com a documentação de segurança exigida pelo contratante. Envie pelo WhatsApp a lista de documentos pedida na integração e a data da parada para planejarmos a mobilização em Barcarena.' },
        { pergunta: 'Qual o maior gerador disponível para Barcarena?', resposta: 'Grupos de até 500 kVA por unidade. Acima disso, dois ou mais grupos são associados em paralelo com painel de sincronismo.' },
        { pergunta: 'Quanto tempo leva para o gerador chegar em Barcarena?', resposta: 'Depois da aprovação da proposta e da documentação, a mobilização costuma levar de 48 a 96 horas, considerando o transporte pela Alça Viária e o agendamento de entrada no polo.' },
        { pergunta: 'Quem faz o abastecimento do gerador no polo industrial?', resposta: 'Pode ser o locador, com abastecimento programado e cobrança por consumo, ou o próprio contratante, conforme as regras de entrada de combustível da área.' },
        { pergunta: 'A umidade de Barcarena prejudica o gerador?', resposta: 'Não, se houver manutenção adequada: resistência de aquecimento no alternador, vedação da cabine e inspeção de terminais evitam condensação e corrosão.' },
      ],
    },
    ctaTitulo: 'Planeje a próxima parada em Barcarena com energia garantida',
    mapaQuery: 'Barcarena, PA, Brasil',
    fontes: [
      'IBGE — Censo 2022, população de Barcarena (126.650)',
      'Hydro — Barcarena: maior porto do Pará (Vila do Conde), Alunorte e Albras',
      'ANTAQ — Estudo VDC04: localização do Porto de Vila do Conde e acesso pela PA-483',
    ],
    hero: foto('barcarena-pa', 'gerador-industrial-barcarena-hero', 'Gerador industrial em cabine silenciada próximo a área portuária em Barcarena - PA'),
    foto: foto('barcarena-pa', 'gerador-industrial-barcarena-paralelismo', 'Painel de paralelismo de geradores alugados em Barcarena - PA', 800, 600),
    mapa: foto('barcarena-pa', 'mapa-barcarena-pa', 'Mapa da área de atendimento de locação de gerador em Barcarena - PA', 1200, 450),
    resumoArea: 'Polo de Vila do Conde, Vila dos Cabanos e sede — locação industrial e paralelismo.',
  },

  // ───────────────────────────────────────────────────────────── ANANINDEUA
  {
    slug: 'aluguel-de-gerador-para-obras-ananindeua-pa',
    cidade: 'Ananindeua',
    uf: 'PA',
    regiao: 'Eixo BR-316',
    servicoAncora: 'Aluguel de gerador para obras',
    servicoSlug: 'aluguel-de-gerador-para-obras',
    title: 'Gerador para Obras em Ananindeua - PA | ParaPrime',
    description:
      'Aluguel de gerador para obras em Ananindeua - PA: canteiros, grua e betoneira no Centro, Coqueiro e Icuí-Guajará, de 20 a 250 kVA. WhatsApp (91) 99119-8584.',
    h1: 'Aluguel de Gerador para Obras em Ananindeua - PA | Canteiros Verticais e Obras Viárias',
    lead:
      'A {MARCA} organiza o aluguel de gerador para obras em Ananindeua, a segunda cidade mais populosa do Pará: canteiros de empreendimentos residenciais no Centro, no Icuí-Guajará e em Águas Lindas, reformas comerciais ao longo da BR-316 e obras de infraestrutura que precisam de energia antes da ligação provisória sair. Os grupos vão de 20 kVA, para mobilização de canteiro, a 250 kVA, para a fase de estrutura com grua.',
    fatos: [
      { valor: '478.778', rotulo: 'habitantes no Censo 2022 — 2ª maior do Pará', fonte: 'IBGE' },
      { valor: '1976–1986', rotulo: 'construção da Cidade Nova I a IX pela Cohab', fonte: 'Diário do Pará' },
      { valor: 'BR-316', rotulo: 'eixo que corta a cidade e concentra comércio', fonte: 'UFPA' },
    ],
    bairrosParagrafo:
      'Levamos gerador a canteiros no Centro, no Coqueiro — onde fica o conjunto Cidade Nova —, no Icuí-Guajará, em Águas Lindas, Levilândia, Maguari e 40 Horas, além de obras em galpões e lojas às margens da BR-316 e nas avenidas Independência e Mário Covas.',
    bairros: ['Centro', 'Coqueiro', 'Cidade Nova', 'Icuí-Guajará', 'Águas Lindas', 'Levilândia', 'Maguari', '40 Horas'],
    escopo: {
      h2: 'Opções de Gerador para Obras em Ananindeua',
      itens: [
        { titulo: 'Edifícios residenciais', texto: 'Grua, elevador de obra e betoneira nos canteiros verticais do Centro e do Icuí-Guajará.', spec: '80–250 KVA · FASE DE ESTRUTURA' },
        { titulo: 'Condomínios horizontais', texto: 'Mobilização de canteiro e casas-modelo em Águas Lindas e no entorno da BR-316.', spec: '20–55 KVA' },
        { titulo: 'Reforma de lojas e galpões', texto: 'Obra elétrica no comércio da BR-316 sem parar o atendimento.', spec: '30–80 KVA · SILENCIADO' },
        { titulo: 'Obras viárias e drenagem', texto: 'Bombas de esgotamento, iluminação de frente de obra e solda.', spec: '40–115 KVA' },
      ],
    },
    escolher: {
      h2: 'Como Escolher o Gerador de Obra em Ananindeua',
      itens: [
        { titulo: 'Dimensionamento por fase', texto: 'Peça a potência calculada pela fase mais pesada e o plano de troca de porte no acabamento.' },
        { titulo: 'Quadro de obra conforme NR-18', texto: 'Quadro fechado, aterrado e com DR por circuito, ligado por profissional habilitado.' },
        { titulo: 'Acesso ao canteiro', texto: 'Ruas estreitas da Cidade Nova e do Coqueiro exigem planejar o caminhão munck e o ponto do gerador.' },
      ],
    },
    cronograma: {
      h2: 'Cronograma de Aluguel de Gerador para Obras em Ananindeua',
      passos: [
        { titulo: 'Lista de máquinas', texto: 'Equipamentos de cada fase e cronograma da obra.', prazo: 'MESMO DIA' },
        { titulo: 'Proposta por fase', texto: 'kVA, contrato mensal e plano de troca de porte.', prazo: 'ATÉ 24 H' },
        { titulo: 'Entrega no canteiro', texto: 'Posicionamento em base firme, longe do raio da grua e de escavações.', prazo: '24–48 H' },
        { titulo: 'Ligação e manutenção', texto: 'Ligação do quadro de obra e preventiva por horímetro.', prazo: 'A CADA 250 H' },
      ],
    },
    blocoVariavel: {
      h2: 'Obras Verticais em Ananindeua: Quando o Canteiro Precisa de Gerador',
      paragrafos: [
        'Ananindeua passou por uma mudança de perfil: o conjunto Cidade Nova, construído pela Cohab entre 1976 e 1986, virou um dos principais polos de comércio e moradia da cidade, e hoje há edifícios residenciais em construção no Centro, no Icuí-Guajará e em Águas Lindas.',
        'Em obra vertical, a demanda de energia salta quando a grua e o elevador de obra chegam. É comum o canteiro começar com a ligação provisória dimensionada para a mobilização e descobrir, na fase de estrutura, que ela não segura a grua. O gerador entra como reforço dedicado aos equipamentos de maior partida enquanto o aumento de carga não é liberado.',
      ],
      h3: [
        { titulo: 'Reforço para grua e elevador de obra', texto: 'Gerador dedicado às cargas de partida pesada, separado da iluminação e do escritório do canteiro.' },
        { titulo: 'Chuva e drenagem no canteiro', texto: 'Em período chuvoso, bombas de esgotamento de fundação entram na conta de carga do gerador.' },
      ],
    },
    preco: {
      h2: 'Quanto Custa Alugar Gerador para Obra em Ananindeua?',
      linhas: [
        { item: '25 kVA em contrato de 28 dias', valor: '≈ R$ 110 / dia', obs: 'canteiro e mobilização' },
        { item: '50 kVA em contrato de 28 dias', valor: '≈ R$ 165 / dia', obs: 'solda e betoneira' },
        { item: '125–150 kVA em contrato de 28 dias', valor: '≈ R$ 205 a R$ 235 / dia', obs: 'grua e elevador' },
        { item: 'Diária avulsa até 50 kVA', valor: 'R$ 300 a R$ 800 / dia', obs: 'serviço pontual' },
      ],
      nota: NOTA,
    },
    vizinhas: {
      h2: 'Cidades Vizinhas a Ananindeua Atendidas',
      texto:
        'Pela BR-316, o atendimento de obras continua para Marituba e Benevides e, no sentido oposto, para os bairros de Belém próximos à divisa, como Marambaia e o eixo da Augusto Montenegro.',
      cidades: ['Belém', 'Marituba', 'Benevides', 'Santa Bárbara do Pará'],
    },
    faq: {
      h2: 'Perguntas Frequentes sobre Gerador para Obras em Ananindeua',
      itens: [
        { pergunta: 'Vocês entregam gerador em canteiros na Cidade Nova?', resposta: 'Sim. Como algumas ruas da Cidade Nova são estreitas, a visita prévia define o ponto do gerador e o acesso do caminhão munck antes da entrega em Ananindeua.' },
        { pergunta: 'Qual gerador usar para grua em obra em Ananindeua?', resposta: 'Gruas de obra costumam pedir entre 80 e 150 kVA, conforme o modelo e as máquinas que funcionam junto. A plaqueta da grua e a lista do canteiro definem a potência final.' },
        { pergunta: 'Quanto custa alugar gerador para obra por mês em Ananindeua?', resposta: 'Na referência de catálogo, um gerador de 50 kVA em contrato de 28 dias sai por volta de R$ 165 por dia, sem combustível e frete. A proposta considera o porte e o prazo da sua obra.' },
        { pergunta: 'O gerador pode ficar no canteiro durante a noite?', resposta: 'Pode, com o canteiro cercado e o tanque trancado. Também é possível programar o desligamento fora do horário de trabalho para economizar diesel.' },
        { pergunta: 'Atendem obras na BR-316 sem parar o comércio?', resposta: 'Sim. Para reformas em lojas e galpões da BR-316, o gerador silenciado alimenta a obra separadamente, sem sobrecarregar o quadro da loja.' },
      ],
    },
    ctaTitulo: 'Garanta energia para o canteiro em Ananindeua esta semana',
    mapaQuery: 'Ananindeua, PA, Brasil',
    fontes: [
      'IBGE — Censo 2022, população de Ananindeua (478.778)',
      'Diário do Pará — história da Cidade Nova (Cohab, 1976–1986), conjunto no bairro Coqueiro',
      'UFPA / periódicos — eixo da BR-316 e centralidade urbana em Ananindeua',
    ],
    hero: foto('ananindeua-pa', 'aluguel-de-gerador-para-obras-ananindeua-hero', 'Gerador diesel alugado em canteiro de obra vertical em Ananindeua - PA'),
    foto: foto('ananindeua-pa', 'aluguel-de-gerador-para-obras-ananindeua-quadro', 'Quadro de obra ligado a gerador em canteiro no Centro de Ananindeua - PA', 800, 600),
    mapa: foto('ananindeua-pa', 'mapa-ananindeua-pa', 'Mapa da área de atendimento de gerador para obras em Ananindeua - PA', 1200, 450),
    resumoArea: 'Centro, Coqueiro, Cidade Nova e Icuí-Guajará — gerador para canteiros e obras.',
  },

  // ───────────────────────────────────────────────────────────── CASTANHAL
  {
    slug: 'gerador-para-empresas-castanhal-pa',
    cidade: 'Castanhal',
    uf: 'PA',
    regiao: 'Entroncamento BR-316 / BR-010',
    servicoAncora: 'Gerador para comércio e indústria de alimentos',
    servicoSlug: 'locacao-de-gerador-industrial',
    title: 'Gerador para Empresas em Castanhal - PA | ParaPrime',
    description:
      'Aluguel de gerador para empresas em Castanhal - PA: atacados, câmaras frias e indústria de alimentos no eixo BR-316, de 30 a 250 kVA. WhatsApp (91) 99119-8584.',
    h1: 'Gerador para Comércio e Indústria de Alimentos em Castanhal - PA | Atacados e Câmaras Frias',
    lead:
      'A {MARCA} organiza o aluguel de gerador para empresas em Castanhal, a “Cidade Modelo” do nordeste paraense: atacados e distribuidoras que abastecem o interior, supermercados com câmaras frias, indústrias de alimentos e galpões ao longo da BR-316. O foco é manter refrigeração, frente de caixa e processo produtivo funcionando durante falta de energia ou manutenção elétrica, com geradores de 30 a 250 kVA.',
    fatos: [
      { valor: '192.256', rotulo: 'habitantes no Censo 2022', fonte: 'IBGE' },
      { valor: 'BR-316 + BR-010', rotulo: 'duas rodovias federais cruzam o município', fonte: 'UFPA' },
      { valor: '143 ha', rotulo: 'condomínio industrial na PA-136, 119 lotes na 1ª fase', fonte: 'Agência Pará' },
    ],
    bairrosParagrafo:
      'Atendemos empresas no Centro e ao longo da BR-316, nos bairros Jaderlândia, Nova Olinda, Estrela, Ianetama, Pirapora, Saudade e Cristo Redentor, no distrito do Apeú e na área do condomínio industrial da PA-136, no eixo Castanhal–Inhangapi.',
    bairros: ['Centro', 'Jaderlândia', 'Nova Olinda', 'Estrela', 'Ianetama', 'Pirapora', 'Saudade', 'Apeú'],
    escopo: {
      h2: 'Opções de Gerador para Empresas de Castanhal',
      itens: [
        { titulo: 'Câmaras frias e refrigeração', texto: 'Compressores de frigoríficos, distribuidoras e supermercados mantidos durante a falta de energia.', spec: '55–150 KVA · PARTIDA DE COMPRESSOR' },
        { titulo: 'Atacados e centros de distribuição', texto: 'Iluminação, empilhadeiras elétricas em carga, TI e frente de caixa.', spec: '50–150 KVA' },
        { titulo: 'Indústria de alimentos', texto: 'Linhas de processamento e embalagem em manutenção de subestação.', spec: '100–250 KVA · QTA' },
        { titulo: 'Lojas e galpões novos', texto: 'Energia para operação inicial enquanto a ligação definitiva não sai.', spec: 'CONTRATO MENSAL' },
      ],
    },
    escolher: {
      h2: 'Como Escolher o Gerador para sua Empresa em Castanhal',
      itens: [
        { titulo: 'Partida dos compressores', texto: 'Câmaras frias têm vários compressores com partida pesada — exija o cálculo com folga para eles.' },
        { titulo: 'Transferência automática', texto: 'Para refrigeração, QTA evita que a falta de energia passe despercebida à noite e no fim de semana.' },
        { titulo: 'Atendimento na BR-316', texto: 'A cerca de 70 km de Belém, Castanhal pede logística planejada de entrega e abastecimento.' },
      ],
    },
    cronograma: {
      h2: 'Cronograma de Instalação de Gerador em Castanhal',
      passos: [
        { titulo: 'Lista de cargas', texto: 'Compressores, iluminação, TI e máquinas de produção.', prazo: 'MESMO DIA' },
        { titulo: 'Visita técnica', texto: 'Quadro geral, ponto do gerador e acesso de carreta.', prazo: '24–48 H' },
        { titulo: 'Entrega pela BR-316', texto: 'Transporte, posicionamento e ligação com chave de transferência.', prazo: '24–72 H' },
        { titulo: 'Teste com a refrigeração', texto: 'Partida simultânea dos compressores para validar o dimensionamento.', prazo: '2–4 H' },
      ],
    },
    blocoVariavel: {
      h2: 'Refrigeração em Castanhal: Por que o Gerador da Câmara Fria É Maior',
      paragrafos: [
        'Castanhal é um dos principais centros atacadistas do Pará e tem indústria de alimentos como uma de suas vocações econômicas. Nesse tipo de operação, a carga que mais pesa no gerador não é a potência somada dos equipamentos, e sim a partida dos compressores de refrigeração.',
        'Um compressor pode puxar na partida várias vezes a corrente de regime. Quando a energia volta depois de uma queda, todos tentam partir juntos. O gerador para câmara fria é dimensionado com essa folga ou com partida escalonada configurada no quadro — o que permite alugar um porte menor sem risco de a refrigeração desarmar.',
      ],
      h3: [
        { titulo: 'Partida escalonada dos compressores', texto: 'Temporizadores no quadro fazem os compressores entrarem um de cada vez depois da transferência.' },
        { titulo: 'Condomínio industrial da PA-136', texto: 'Galpões novos no eixo Castanhal–Inhangapi podem operar com gerador até a ligação definitiva.' },
      ],
    },
    preco: {
      h2: 'Quanto Custa Alugar Gerador para Empresa em Castanhal?',
      linhas: [
        { item: '50–80 kVA (loja, pequeno atacado)', valor: 'R$ 500 a R$ 1.200 / dia', obs: 'diária avulsa' },
        { item: '100–150 kVA (câmara fria, supermercado)', valor: 'R$ 800 a R$ 1.800 / dia', obs: 'diária avulsa' },
        { item: '150 kVA em contrato de 28 dias', valor: '≈ R$ 230 / dia', obs: 'referência de catálogo' },
        { item: 'Frete até Castanhal', valor: 'orçado à parte', obs: 'cerca de 70 km de Belém' },
      ],
      nota: NOTA,
    },
    vizinhas: {
      h2: 'Cidades Próximas a Castanhal Atendidas',
      texto:
        'Do entroncamento da BR-316 com a BR-010, o atendimento chega a Santa Izabel do Pará, Inhangapi e São Francisco do Pará, e no sentido de Belém a Benevides e Marituba.',
      cidades: ['Santa Izabel do Pará', 'Inhangapi', 'São Francisco do Pará', 'Benevides'],
    },
    faq: {
      h2: 'Perguntas Frequentes sobre Gerador para Empresas em Castanhal',
      itens: [
        { pergunta: 'Qual gerador manter uma câmara fria em Castanhal durante a falta de energia?', resposta: 'Depende do número e da potência dos compressores. Supermercados e distribuidoras de Castanhal costumam ficar entre 55 e 150 kVA, com partida escalonada no quadro para não sobrecarregar o gerador.' },
        { pergunta: 'Vocês atendem o condomínio industrial da PA-136?', resposta: 'Sim. Galpões no eixo Castanhal–Inhangapi podem receber gerador em contrato mensal até a ligação definitiva de energia.' },
        { pergunta: 'Quanto tempo leva para o gerador chegar em Castanhal?', resposta: 'Com o equipamento disponível, a entrega pela BR-316 costuma levar de 24 a 72 horas após a aprovação da proposta.' },
        { pergunta: 'O gerador liga sozinho quando a energia cai na madrugada?', resposta: 'Com quadro de transferência automática (QTA), sim. É a configuração recomendada para refrigeração que fica sem funcionário à noite em Castanhal.' },
        { pergunta: 'Atendem o distrito do Apeú?', resposta: 'Sim. O Apeú está dentro da área de atendimento de Castanhal; a visita técnica confirma o acesso para o caminhão.' },
      ],
    },
    ctaTitulo: 'Proteja a refrigeração da sua empresa em Castanhal',
    mapaQuery: 'Castanhal, PA, Brasil',
    fontes: [
      'IBGE — Censo 2022, população de Castanhal (192.256)',
      'UFPA — BR-316 e BR-010 cruzam Castanhal; dinâmica econômica ligada à rodovia',
      'Agência Pará — condomínio industrial na PA-136: 143 ha, 119 lotes na 1ª fase',
      'Correio Braziliense — Castanhal como centro atacadista e indústria de alimentos',
    ],
    hero: foto('castanhal-pa', 'gerador-para-empresas-castanhal-hero', 'Gerador alugado ao lado de galpão atacadista na BR-316 em Castanhal - PA'),
    foto: foto('castanhal-pa', 'gerador-para-empresas-castanhal-camara-fria', 'Gerador alimentando câmara fria de distribuidora em Castanhal - PA', 800, 600),
    mapa: foto('castanhal-pa', 'mapa-castanhal-pa', 'Mapa da área de atendimento de gerador para empresas em Castanhal - PA', 1200, 450),
    resumoArea: 'Centro, Jaderlândia, Nova Olinda e eixo BR-316 — atacados e câmaras frias.',
  },

  // ───────────────────────────────────────────────────────────── MARITUBA
  {
    slug: 'gerador-para-condominio-marituba-pa',
    cidade: 'Marituba',
    uf: 'PA',
    regiao: 'Eixo BR-316',
    servicoAncora: 'Gerador para condomínio',
    servicoSlug: 'gerador-para-condominio',
    title: 'Gerador para Condomínio em Marituba - PA | ParaPrime',
    description:
      'Gerador para condomínio em Marituba - PA: portões, bombas, iluminação e áreas de lazer de condomínios horizontais na BR-316. WhatsApp (91) 99119-8584.',
    h1: 'Gerador para Condomínio em Marituba - PA | Condomínios Horizontais da BR-316',
    lead:
      'A {MARCA} organiza o aluguel de gerador para condomínios em Marituba, município que concentra condomínios horizontais e bairros planejados ao longo da BR-316. Atendemos portaria e portões automáticos, bombas de abastecimento, iluminação de vias internas, CFTV e áreas de lazer durante falta de energia, manutenção de transformador ou obras no sistema elétrico do condomínio.',
    fatos: [
      { valor: '111.785', rotulo: 'habitantes no Censo 2022', fonte: 'IBGE' },
      { valor: '1.083 hab/km²', rotulo: 'densidade em 103,2 km² de território', fonte: 'IBGE' },
      { valor: '526 mil m²', rotulo: 'bairro planejado Reserva Jardins, km 18 da BR-316', fonte: 'FGR Urbanismo' },
    ],
    bairrosParagrafo:
      'Atendemos condomínios e loteamentos no Centro e no Decouville, em Uriboca (Pedreirinha), Bela Vista, São João e Almir Gabriel, além dos empreendimentos ao longo da BR-316 entre o km 11 e o km 18 e do entorno da Alça Viária.',
    bairros: ['Centro', 'Decouville', 'Uriboca', 'Bela Vista', 'São João', 'Almir Gabriel'],
    escopo: {
      h2: 'Opções de Gerador para Condomínios em Marituba',
      itens: [
        { titulo: 'Portaria e portões', texto: 'Controle de acesso, cancelas, interfonia e CFTV funcionando sem rede.', spec: '15–30 KVA · PRIORIDADE 1' },
        { titulo: 'Bombas e reservatórios', texto: 'Recalque e pressurização para não faltar água nas casas.', spec: '20–55 KVA · PARTIDA DE BOMBA' },
        { titulo: 'Iluminação de vias internas', texto: 'Postes e áreas comuns acesos durante a contingência.', spec: 'CARGA CONTÍNUA' },
        { titulo: 'Manutenção de transformador', texto: 'Energia durante a troca ou manutenção do transformador do condomínio.', spec: '55–150 KVA · JANELA PROGRAMADA' },
      ],
    },
    escolher: {
      h2: 'Como Escolher o Gerador para o seu Condomínio em Marituba',
      itens: [
        { titulo: 'Lista de cargas essenciais', texto: 'Portaria, bombas e iluminação primeiro; áreas de lazer só se sobrar potência.' },
        { titulo: 'Ponto de instalação', texto: 'Perto do quadro de serviço, ventilado e longe das casas mais próximas.' },
        { titulo: 'Aviso aos moradores', texto: 'Comunicado com horário de início e fim do serviço, combinado com o síndico.' },
      ],
    },
    cronograma: {
      h2: 'Cronograma de Instalação de Gerador em Condomínio de Marituba',
      passos: [
        { titulo: 'Contato do síndico', texto: 'Motivo, data e cargas que não podem parar.', prazo: 'MESMO DIA' },
        { titulo: 'Visita ao condomínio', texto: 'Quadro de serviço, ponto do gerador e acesso pela portaria.', prazo: '24–48 H' },
        { titulo: 'Instalação e teste', texto: 'Ligação com chave de transferência e teste de portões e bombas.', prazo: '2–4 H ANTES DO DESLIGAMENTO' },
        { titulo: 'Retorno à rede e retirada', texto: 'Transferência de volta e recolhimento do gerador.', prazo: 'APÓS RELIGAÇÃO' },
      ],
    },
    blocoVariavel: {
      h2: 'Condomínios Horizontais de Marituba: Portaria, Água e Iluminação em Primeiro Lugar',
      paragrafos: [
        'Estudo da UFPA de 2025 sobre condomínios horizontais registra a expansão desse modelo em Belém, Ananindeua e Marituba. Em Marituba, o exemplo mais visível é o Reserva Jardins, bairro planejado no km 18 da BR-316 com 526 mil m² de área total.',
        'Condomínio horizontal tem um perfil de carga diferente do prédio: não há elevador, mas há vias internas longas, portaria que precisa funcionar 24 horas, bombas de abastecimento e, muitas vezes, clube com piscina. Na contingência, o que segura o condomínio é portaria, água e iluminação — o resto pode esperar a energia voltar.',
      ],
      h3: [
        { titulo: 'Distância entre o gerador e o quadro', texto: 'Em condomínios extensos, a queda de tensão no cabo define a bitola e o ponto ideal do gerador.' },
        { titulo: 'Ruído perto das casas', texto: 'Cabine silenciada e escape virado para área livre, seguindo a NBR 10151 como referência.' },
      ],
    },
    preco: {
      h2: 'Quanto Custa Gerador para Condomínio em Marituba?',
      linhas: [
        { item: 'Até 50 kVA (portaria + bombas)', valor: 'R$ 300 a R$ 800 / dia', obs: 'diária avulsa' },
        { item: '50–150 kVA (manutenção de transformador)', valor: 'R$ 800 a R$ 1.800 / dia', obs: 'diária avulsa' },
        { item: '125–150 kVA em contrato de 28 dias', valor: '≈ R$ 205 a R$ 235 / dia', obs: 'referência de catálogo' },
        { item: 'Frete e ligação na BR-316', valor: 'orçado à parte', obs: 'conforme km' },
      ],
      nota: NOTA,
    },
    vizinhas: {
      h2: 'Cidades Vizinhas a Marituba Atendidas',
      texto:
        'Marituba faz divisa com Ananindeua e Benevides pela BR-316; o mesmo atendimento a condomínios vale para os residenciais desses municípios e para a Augusto Montenegro, em Belém.',
      cidades: ['Ananindeua', 'Benevides', 'Belém', 'Santa Bárbara do Pará'],
    },
    faq: {
      h2: 'Perguntas Frequentes sobre Gerador para Condomínio em Marituba',
      itens: [
        { pergunta: 'Qual gerador o condomínio horizontal precisa em Marituba?', resposta: 'Para portaria, portões, bombas e iluminação de vias, a maioria dos condomínios de Marituba fica entre 30 e 80 kVA. Clube com piscina e salão de festas aumentam a carga.' },
        { pergunta: 'Vocês atendem condomínios na BR-316 em Marituba?', resposta: 'Sim, entre o km 11 e o km 18 e nas vias de acesso dos bairros. A visita técnica confirma o acesso do caminhão pela portaria.' },
        { pergunta: 'O gerador consegue ligar o portão e a portaria quando falta energia?', resposta: 'Sim. Portaria, portões e CFTV são as primeiras cargas ligadas ao gerador, com chave de transferência no quadro de serviço do condomínio.' },
        { pergunta: 'Quanto tempo o gerador funciona sem reabastecer?', resposta: 'Depende do tanque e da carga. A proposta informa a autonomia em horas para a carga do seu condomínio em Marituba e prevê reabastecimento se o desligamento for longo.' },
        { pergunta: 'O síndico pode contratar o gerador sozinho?', resposta: 'Para manutenção programada e emergência, normalmente sim, conforme a convenção do condomínio. Contratos longos costumam ir para assembleia.' },
      ],
    },
    ctaTitulo: 'Agende o gerador para o condomínio em Marituba antes do desligamento',
    mapaQuery: 'Marituba, PA, Brasil',
    fontes: [
      'IBGE — Censo 2022: Marituba com 111.785 habitantes, 103,214 km² e 1.083,04 hab/km²',
      'Folha Vitória / FGR Urbanismo — Reserva Jardins, km 18 da BR-316, 526 mil m²',
      'UFPA (2025) — expansão de condomínios horizontais em Belém, Ananindeua e Marituba',
    ],
    hero: foto('marituba-pa', 'gerador-para-condominio-marituba-hero', 'Gerador silenciado na portaria de condomínio horizontal em Marituba - PA'),
    foto: foto('marituba-pa', 'gerador-para-condominio-marituba-quadro', 'Ligação de gerador ao quadro de serviço de condomínio em Marituba - PA', 800, 600),
    mapa: foto('marituba-pa', 'mapa-marituba-pa', 'Mapa da área de atendimento de gerador para condomínio em Marituba - PA', 1200, 450),
    resumoArea: 'Decouville, Uriboca e condomínios da BR-316 — portaria, bombas e iluminação.',
  },

  // ───────────────────────────────────────────────────────────── BENEVIDES
  {
    slug: 'gerador-para-festas-benevides-pa',
    cidade: 'Benevides',
    uf: 'PA',
    regiao: 'Sítios, balneários e igarapés',
    servicoAncora: 'Gerador para festas em sítios e balneários',
    servicoSlug: 'aluguel-de-gerador-para-eventos',
    title: 'Gerador para Festas em Benevides - PA | Sítios e Balneários',
    description:
      'Aluguel de gerador para festas em Benevides - PA: casamentos e eventos em sítios, chácaras e balneários de Benfica e Murinin. WhatsApp (91) 99119-8584.',
    h1: 'Gerador para Festas em Sítios e Balneários de Benevides - PA | Casamentos e Eventos ao Ar Livre',
    lead:
      'A {MARCA} organiza o aluguel de gerador para festas em Benevides: casamentos em sítios e chácaras, aniversários em balneários, eventos de ecoturismo às margens de igarapés e confraternizações em locais onde a rede elétrica é fraca ou simplesmente não chega. Os geradores vão de 15 a 100 kVA, em cabine silenciada, com cabos e quadros até o salão, a cozinha e o palco.',
    fatos: [
      { valor: '63.567', rotulo: 'habitantes no Censo 2022', fonte: 'IBGE' },
      { valor: '+23,07%', rotulo: 'crescimento da população de 2010 a 2022', fonte: 'IBGE via Diário do Pará' },
      { valor: '187,8 km²', rotulo: 'território com sítios, igarapés e distritos', fonte: 'IBGE' },
    ],
    bairrosParagrafo:
      'Atendemos o Centro de Benevides e os bairros Duque de Caxias, Begolândia e Maguari, os distritos de Benfica, Murinin e Santa Maria, além de sítios, chácaras e balneários próximos aos igarapés Taissuí, Benfica e Murinin.',
    bairros: ['Centro', 'Duque de Caxias', 'Begolândia', 'Maguari', 'Benfica', 'Murinin', 'Santa Maria'],
    escopo: {
      h2: 'Opções de Gerador para Festas em Benevides',
      itens: [
        { titulo: 'Casamentos em sítio', texto: 'Iluminação cênica, som, buffet e climatização de tenda.', spec: '30–80 KVA · CABINE SILENCIADA' },
        { titulo: 'Festas em balneário', texto: 'Som, bar e iluminação em áreas abertas perto de igarapés.', spec: '15–55 KVA' },
        { titulo: 'Eventos de ecoturismo', texto: 'Estrutura temporária em trilhas e áreas de visitação sem rede.', spec: 'PORTÁTIL A 30 KVA' },
        { titulo: 'Gerador reserva para a festa', texto: 'De prontidão quando o sítio tem rede, mas ela costuma cair.', spec: 'STANDBY' },
      ],
    },
    escolher: {
      h2: 'Como Escolher o Gerador para a sua Festa em Benevides',
      itens: [
        { titulo: 'Lista do buffet e do DJ', texto: 'Peça aos fornecedores a potência dos equipamentos — é ela que define o gerador.' },
        { titulo: 'Acesso ao sítio', texto: 'Estradas de terra e pontes estreitas mudam o tipo de caminhão usado na entrega.' },
        { titulo: 'Plano para chuva', texto: 'Quadros elevados, cabos protegidos e gerador em ponto que não alaga.' },
      ],
    },
    cronograma: {
      h2: 'Cronograma de Gerador para Festa em Benevides',
      passos: [
        { titulo: 'Lista de equipamentos', texto: 'Buffet, som, iluminação e climatização, com a potência de cada um.', prazo: 'MESMO DIA' },
        { titulo: 'Visita ao sítio', texto: 'Acesso, ponto do gerador e trajeto dos cabos.', prazo: 'ATÉ 1 SEMANA ANTES' },
        { titulo: 'Montagem', texto: 'Gerador, aterramento, quadros e cabos até cada área.', prazo: 'VÉSPERA OU MANHÃ DA FESTA' },
        { titulo: 'Desmontagem', texto: 'Retirada depois do encerramento.', prazo: 'ATÉ 24 H DEPOIS' },
      ],
    },
    blocoVariavel: {
      h2: 'Festas ao Ar Livre em Benevides: Igarapés, Chuva e Rede Elétrica Rural',
      paragrafos: [
        'Benevides cresceu 23,07% entre os Censos de 2010 e 2022 e, impulsionada pelo legado da COP30, vem se firmando como destino de ecoturismo, com trilhas e passeios por rios e igarapés como Taissuí, Benfica e Murinin. Muitos desses lugares recebem festas e casamentos — e boa parte deles fica no fim da rede de distribuição, onde a energia é mais instável.',
        'Em festa ao ar livre na região, o gerador resolve dois problemas: potência que a rede do sítio não entrega e quedas de energia no meio do evento. A montagem considera a chuva frequente da região metropolitana: cabos fora do chão onde há circulação, quadros protegidos e o gerador longe de áreas que acumulam água.',
      ],
      h3: [
        { titulo: 'Acesso por estrada de terra', texto: 'Em sítios mais afastados, a entrega pode exigir caminhão menor ou gerador rebocável.' },
        { titulo: 'Ruído perto de áreas naturais', texto: 'Cabine silenciada e escape virado para longe dos convidados e da mata.' },
      ],
    },
    preco: {
      h2: 'Quanto Custa Alugar Gerador para Festa em Benevides?',
      linhas: [
        { item: 'Até 25 kVA (aniversário, balneário)', valor: 'R$ 250 a R$ 400 / dia', obs: 'diária avulsa' },
        { item: '30–80 kVA (casamento em sítio)', valor: 'R$ 500 a R$ 1.200 / dia', obs: 'diária avulsa' },
        { item: 'Quadros e cabos de distribuição', valor: 'orçados à parte', obs: 'conforme o layout' },
        { item: 'Técnico durante a festa', valor: 'por turno', obs: 'opcional' },
      ],
      nota: NOTA,
    },
    vizinhas: {
      h2: 'Cidades Vizinhas a Benevides Atendidas',
      texto:
        'Benevides faz divisa com Marituba, Ananindeua, Santa Bárbara do Pará, Santa Izabel do Pará e Bujaru; sítios e balneários desses municípios recebem o mesmo atendimento.',
      cidades: ['Santa Bárbara do Pará', 'Santa Izabel do Pará', 'Marituba', 'Bujaru'],
    },
    faq: {
      h2: 'Perguntas Frequentes sobre Gerador para Festas em Benevides',
      itens: [
        { pergunta: 'Qual gerador alugar para um casamento em sítio em Benevides?', resposta: 'Casamentos com buffet, som e iluminação cênica costumam ficar entre 30 e 80 kVA. Se a tenda tiver climatização, a potência sobe. A lista do buffet e do DJ define o tamanho certo.' },
        { pergunta: 'Vocês entregam gerador em sítios de Benfica e Murinin?', resposta: 'Sim. A visita ao local confirma o acesso — em estradas de terra, pode ser usado caminhão menor ou gerador rebocável.' },
        { pergunta: 'O gerador funciona se chover durante a festa em Benevides?', resposta: 'Sim. O gerador opera na chuva; quadros e conexões ficam elevados e protegidos, e o ponto de instalação é escolhido fora de áreas que alagam.' },
        { pergunta: 'O barulho do gerador atrapalha a cerimônia?', resposta: 'Com cabine silenciada, distância dos convidados e escape virado para o lado oposto, o ruído fica abaixo do som do evento.' },
        { pergunta: 'Com quanta antecedência reservar o gerador para festa em Benevides?', resposta: 'O ideal é reservar assim que a data estiver fechada, principalmente em fins de semana do segundo semestre, quando a procura por eventos ao ar livre aumenta.' },
      ],
    },
    ctaTitulo: 'Reserve o gerador da sua festa em Benevides',
    mapaQuery: 'Benevides, PA, Brasil',
    fontes: [
      'IBGE — Censo 2022: Benevides com 63.567 habitantes e 187,826 km²',
      'Diário do Pará (com dados do IBGE) — crescimento de 23,07% de Benevides entre 2010 e 2022',
      'Diário do Pará — ecoturismo em Benevides: igarapés Taissuí, Benfica e Murinin',
      'Correio da Manhã / Agência Pará — localidades de Murinin, Santa Maria e Benfica',
    ],
    hero: foto('benevides-pa', 'gerador-para-festas-benevides-hero', 'Gerador silenciado iluminando festa de casamento em sítio em Benevides - PA'),
    foto: foto('benevides-pa', 'gerador-para-festas-benevides-quadro', 'Quadro de distribuição de energia para festa em balneário de Benevides - PA', 800, 600),
    mapa: foto('benevides-pa', 'mapa-benevides-pa', 'Mapa da área de atendimento de gerador para festas em Benevides - PA', 1200, 450),
    resumoArea: 'Benfica, Murinin, Santa Maria e sítios — gerador para festas e casamentos.',
  },
];

export const LOCALIDADES: Localidade[] = BASE.map((x) => ({ ...x, galeria: GALERIAS[x.slug] }));

export const localidadePorSlug = (slug: string) => LOCALIDADES.find((l) => l.slug === slug);
