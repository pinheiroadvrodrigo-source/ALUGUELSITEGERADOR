import type { Servico } from './types';

const img = (nome: string, alt: string, w = 1200, h = 800) => ({
  src: `/img/fotos/${nome}.webp`,
  alt,
  w,
  h,
});

const NOTA_PRECO =
  'Faixas de referência de mercado (2025–2026) para diária de gerador diesel, sem combustível, frete e operador. Não é orçamento: o valor final depende da carga, do prazo e do local de instalação.';

export const SERVICOS: Servico[] = [
  // ─────────────────────────────────────────────────────────────── 1
  {
    slug: 'locacao-de-gerador-industrial',
    nome: 'Gerador industrial',
    ordemTicket: 1,
    categoria: 'empresas',
    title: 'Locação de Gerador Industrial em Belém | 100 a 1.000+ kVA',
    description:
      'Locação de gerador industrial em Belém e Região Metropolitana: 100 a 1.000+ kVA, paralelismo, contingência e QTA. Orçamento pelo WhatsApp (91) 99119-8584.',
    h1: 'Locação de Gerador Industrial em Belém | Contingência e Paralelismo de 100 a 1.000+ kVA',
    eyebrow: 'Indústria, hospitais e grandes consumidores',
    lead:
      'A {MARCA} organiza a locação de gerador industrial para fábricas, hospitais, supermercados, galpões logísticos e data centers de Belém e da Região Metropolitana. Atendemos manutenção programada de subestação, contingência contra queda da rede da concessionária e reforço de carga em picos de produção, com grupos geradores diesel de 100 a 500 kVA por unidade e associação em paralelo quando a demanda passa disso.',
    stats: [
      { valor: '100–1.000+ kVA', rotulo: 'faixa atendida, em unidade ou paralelo' },
      { valor: '380/220 V · 60 Hz', rotulo: 'tensão padrão da rede de baixa tensão' },
      { valor: 'QTA', rotulo: 'transferência automática para contingência' },
    ],
    specCard: '100–1.000+ kVA · paralelismo · QTA',
    resumoCard: 'Contingência, manutenção de subestação e reforço de carga para operações que não podem parar.',
    oQueE: {
      h2: 'Como Funciona a Locação de Gerador Industrial para Contingência',
      paragrafos: [
        'Na locação industrial, o gerador não é um equipamento de emergência improvisado: ele entra no lugar da rede durante um período planejado, ou fica de prontidão para assumir a carga quando a rede cai. A diferença entre os dois regimes define o equipamento. Em regime prime (uso contínuo), o grupo gerador opera muitas horas por dia com carga variável; em regime standby, ele fica parado e só assume quando falta energia.',
        'O primeiro passo é medir a demanda real. Com a conta de energia (demanda contratada e registrada), a lista de motores e o regime de partida, calculamos a potência em kW e convertemos para kVA pelo fator de potência — na maior parte das instalações, 0,8. Motores grandes com partida direta exigem folga extra, porque a corrente de partida pode chegar a várias vezes a corrente nominal.',
        'A ligação é feita no quadro geral de baixa tensão por meio de chave de transferência, manual ou automática (QTA). Ela impede que o gerador energize a rede da concessionária e que a rede volte sobre o gerador — requisito de segurança da NBR 5410 e da NR-10 para qualquer fonte alternativa ligada a uma instalação existente.',
      ],
    },
    variacoes: {
      h2: 'Tipos de Locação de Gerador Industrial Disponíveis',
      itens: [
        { titulo: 'Contingência em standby', texto: 'Gerador de prontidão com QTA: se a rede cai, a carga é transferida em segundos, sem operador no local.', spec: 'STANDBY · QTA · PARTIDA AUTOMÁTICA' },
        { titulo: 'Manutenção de subestação', texto: 'Energia pelo tempo exato do desligamento programado da cabine primária ou do transformador.', spec: 'JANELA DE 4 A 72 H' },
        { titulo: 'Paralelismo de grupos', texto: 'Dois ou mais geradores sincronizados para somar potência e manter redundância se um sair de operação.', spec: '2× 500 KVA = 1.000 KVA' },
        { titulo: 'Contrato mensal de base', texto: 'Gerador em regime prime para operação contínua enquanto a ligação definitiva não sai.', spec: 'REGIME PRIME · 30 A 180 DIAS' },
      ],
    },
    especificacoes: {
      h2: 'Especificações Técnicas e Normas da Instalação Industrial',
      itens: [
        'Potência por unidade: 100, 150, 250, 360 e 500 kVA (diesel, cabine silenciada)',
        'Tensões: 380/220 V e 440/254 V; média tensão com transformador elevador sob projeto',
        'Frequência 60 Hz, regulação eletrônica de tensão e velocidade',
        'Proteções do grupo: sobrecorrente, subtensão/sobretensão, sobrevelocidade, baixa pressão de óleo e alta temperatura',
        'Cabos flexíveis 1 kV dimensionados por queda de tensão e distância até o QGBT',
        'Aterramento do neutro e da carcaça conforme o esquema da instalação existente',
      ],
      normas: ['NBR 5410', 'NBR 14039', 'NR-10', 'ABNT NBR ISO 8528', 'NR-20'],
    },
    equipamentos: {
      h2: 'Equipamentos de Engenharia que Acompanham o Gerador Industrial',
      itens: [
        { titulo: 'Quadro de transferência automática (QTA)', texto: 'Monitora a rede e comanda a partida e a transferência da carga.', spec: 'TEMPO DE TRANSFERÊNCIA ~10 S' },
        { titulo: 'Painel de paralelismo', texto: 'Sincroniza tensão, frequência e fase entre grupos antes de fechar o disjuntor.', spec: 'SINCRONISMO · DIVISÃO DE CARGA' },
        { titulo: 'Tanque de diesel com bacia', texto: 'Armazenamento externo para autonomia estendida, com contenção de vazamento.', spec: 'NR-20 · CONTENÇÃO 110%' },
        { titulo: 'Banco de carga resistivo', texto: 'Teste do gerador em carga real antes de assumir a operação crítica.', spec: 'COMISSIONAMENTO' },
      ],
    },
    processo: {
      h2: 'Processo de Locação de Gerador Industrial em 6 Etapas',
      passos: [
        { titulo: 'Levantamento da carga', texto: 'Conta de energia, diagrama unifilar e lista de cargas críticas enviados pelo WhatsApp.', prazo: 'MESMO DIA' },
        { titulo: 'Visita técnica', texto: 'Conferência do QGBT, do ponto de instalação e do acesso para caminhão munck.', prazo: '24–48 H' },
        { titulo: 'Proposta e dimensionamento', texto: 'kVA, número de grupos, cabos, QTA e autonomia de combustível descritos por escrito.', prazo: 'ATÉ 24 H APÓS A VISITA' },
        { titulo: 'Mobilização', texto: 'Transporte, posicionamento e nivelamento do grupo gerador sobre base firme.', prazo: '24–72 H' },
        { titulo: 'Ligação e teste em carga', texto: 'Conexão por eletricista habilitado (NR-10), teste de transferência e de proteções.', prazo: '4–8 H' },
        { titulo: 'Operação e retirada', texto: 'Acompanhamento de horímetro, abastecimento e manutenção preventiva até a desmobilização.', prazo: 'CONFORME CONTRATO' },
      ],
    },
    preco: {
      h2: 'Quanto Custa a Locação de Gerador Industrial?',
      linhas: [
        { item: '100–150 kVA', valor: 'R$ 800 a R$ 1.800 / dia', obs: 'diária avulsa' },
        { item: '250–500 kVA', valor: 'a partir de R$ 2.000 / dia', obs: 'diária avulsa' },
        { item: '150 kVA em contrato de 28 dias', valor: '≈ R$ 230 / dia', obs: 'referência de catálogo' },
        { item: '500 kVA em contrato de 28 dias', valor: '≈ R$ 590 a R$ 610 / dia', obs: 'referência de catálogo' },
      ],
      nota: NOTA_PRECO,
    },
    faq: {
      h2: 'Perguntas Frequentes sobre Locação de Gerador Industrial',
      itens: [
        { pergunta: 'Qual gerador industrial eu preciso para minha fábrica?', resposta: 'Depende da demanda em kW e do tipo de partida dos motores. A regra inicial é dividir a demanda em kW por 0,8 para chegar ao kVA e somar folga para a partida do maior motor. Com a conta de energia e a lista de cargas, a proposta sai com o número exato.' },
        { pergunta: 'O gerador industrial pode funcionar ligado à rede da Equatorial?', resposta: 'Não sem projeto específico. Para contingência e manutenção, a ligação é feita com chave de transferência que separa o gerador da rede. Paralelismo com a rede da distribuidora exige projeto e aprovação da concessionária.' },
        { pergunta: 'Quanto tempo o gerador demora para assumir a carga quando a energia cai?', resposta: 'Com QTA, a partida e a transferência costumam levar em torno de dez segundos. Cargas que não toleram esse intervalo, como servidores, precisam de nobreak à frente do gerador.' },
        { pergunta: 'Quem fornece o diesel na locação industrial?', resposta: 'Pode ser o cliente ou o locador, conforme o contrato. Em contratos longos é comum o locador fazer o abastecimento programado e cobrar o combustível à parte, pelo consumo medido.' },
        { pergunta: 'Dá para alugar gerador industrial por poucas horas para manutenção de subestação?', resposta: 'Sim. A cobrança costuma ser por diária mínima, somada a frete e ligação. Vale agendar com antecedência, porque grupos acima de 250 kVA têm disponibilidade mais restrita na região.' },
      ],
    },
    relacionados:
      'Para canteiros, o atendimento é o de gerador para obras; para shows e feiras, o de gerador para eventos; para prédios residenciais, o de gerador para condomínio.',
    hero: img('locacao-de-gerador-industrial-belem-hero', 'Grupo gerador diesel industrial em cabine silenciada instalado ao lado de galpão em Belém - PA'),
    detalhe: img('locacao-de-gerador-industrial-belem-qta', 'Quadro de transferência automática ligado a gerador industrial alugado em Belém - PA', 800, 600),
  },

  // ─────────────────────────────────────────────────────────────── 2
  {
    slug: 'aluguel-de-gerador-para-eventos',
    nome: 'Gerador para eventos',
    ordemTicket: 2,
    categoria: 'pessoas',
    title: 'Aluguel de Gerador para Eventos em Belém | Shows e Feiras',
    description:
      'Aluguel de gerador para eventos em Belém: shows, feiras, casamentos e palcos ao ar livre, com cabine silenciada e técnico. WhatsApp (91) 99119-8584.',
    h1: 'Aluguel de Gerador para Eventos em Belém | Shows, Feiras e Casamentos com Cabine Silenciada',
    eyebrow: 'Shows, feiras, casamentos e festas',
    lead:
      'A {MARCA} organiza o aluguel de gerador para eventos em Belém e na Região Metropolitana: palcos de show, feiras, congressos, casamentos, festas em sítios e estruturas temporárias montadas em praças e áreas abertas. Cada evento recebe o grupo gerador dimensionado pela soma de som, luz, refrigeração e cozinha, com cabine silenciada e distribuição por quadros e cabos até cada ponto de carga.',
    stats: [
      { valor: '30–500 kVA', rotulo: 'do casamento ao palco de show' },
      { valor: 'Cabine silenciada', rotulo: 'para reduzir ruído perto do público' },
      { valor: 'Reserva', rotulo: 'grupo backup para palco e cozinha' },
    ],
    specCard: '30–500 kVA · cabine silenciada · backup',
    resumoCard: 'Energia para palco, iluminação, cozinha e climatização, com gerador reserva para o que não pode apagar.',
    oQueE: {
      h2: 'Como Funciona o Aluguel de Gerador para Eventos',
      paragrafos: [
        'Gerador de evento é dimensionado por circuito, não por estimativa. Som e iluminação de palco são cargas sensíveis a variação de tensão; câmaras frias, fritadeiras e aparelhos de ar-condicionado têm corrente de partida alta. Por isso o projeto separa, sempre que possível, o grupo do palco do grupo de serviços, evitando que a partida de um compressor derrube o som no meio da apresentação.',
        'Em Belém, a chuva é parte do planejamento. A cidade tem média anual em torno de 3.000 mm, com março entre os meses mais chuvosos, segundo a série da Embrapa Amazônia Oriental. Cabos passam por canaletas ou suspensos, quadros ficam elevados e protegidos, e o gerador é posicionado em ponto firme, fora de áreas que alagam.',
        'O ruído também conta. A Resolução CONAMA 001/1990 adota a NBR 10151 como referência para níveis de ruído em áreas habitadas, e a cabine silenciada, a distância do público e a orientação do escape reduzem a pressão sonora percebida em casamentos, cerimônias e eventos corporativos.',
      ],
    },
    variacoes: {
      h2: 'Tipos de Gerador para Eventos que Atendemos',
      itens: [
        { titulo: 'Palco de show', texto: 'Grupo dedicado a som e luz, separado de bares e cozinha, com reserva pronta.', spec: '150–500 KVA · GRUPO DEDICADO' },
        { titulo: 'Feiras e congressos', texto: 'Distribuição por estande com quadros parciais e proteção diferencial-residual.', spec: 'QUADROS COM DR · 30 MA' },
        { titulo: 'Casamentos e festas', texto: 'Gerador silenciado para buffet, iluminação cênica e climatização de tenda.', spec: '30–100 KVA · CABINE SILENCIADA' },
        { titulo: 'Gerador reserva (backup)', texto: 'Em eventos com rede local, o gerador fica de prontidão caso a energia caia.', spec: 'STANDBY · TRANSFERÊNCIA' },
      ],
    },
    especificacoes: {
      h2: 'Especificações e Normas para Energia Temporária em Eventos',
      itens: [
        'Potências de 30, 55, 80, 115, 150, 260 e 500 kVA em cabine silenciada',
        'Quadros de distribuição com disjuntores e dispositivo DR em circuitos de tomada',
        'Cabos flexíveis 1 kV com proteção mecânica em áreas de circulação',
        'Aterramento local com haste para cada grupo e cada quadro',
        'Extintor de incêndio junto ao gerador e ao ponto de abastecimento',
        'Responsável técnico e ART quando o evento exige vistoria',
      ],
      normas: ['NBR 5410', 'NR-10', 'NBR 10151', 'CONAMA 001/1990'],
    },
    equipamentos: {
      h2: 'Equipamentos de Distribuição de Energia para Eventos',
      itens: [
        { titulo: 'Cabine silenciada', texto: 'Carenagem acústica que reduz o ruído percebido pelo público.', spec: 'POSICIONAR LONGE DO PÚBLICO' },
        { titulo: 'Quadros de distribuição', texto: 'Um quadro por área: palco, bares, cozinha, iluminação externa.', spec: 'DR 30 MA · DISJUNTORES' },
        { titulo: 'Passa-cabos', texto: 'Protege cabos nas rotas de pedestres e evita tropeços.', spec: 'ROTA DE PÚBLICO' },
        { titulo: 'Tanque e abastecimento', texto: 'Autonomia calculada para a duração do evento, com folga.', spec: 'AUTONOMIA + 20%' },
      ],
    },
    processo: {
      h2: 'Processo de Aluguel de Gerador para Eventos em 5 Etapas',
      passos: [
        { titulo: 'Rider técnico', texto: 'Lista de equipamentos de som, luz, cozinha e climatização, com potência de cada um.', prazo: 'MESMO DIA' },
        { titulo: 'Visita ao local', texto: 'Ponto do gerador, rota dos cabos, acesso do caminhão e áreas sujeitas a alagamento.', prazo: '24–48 H' },
        { titulo: 'Montagem', texto: 'Posicionamento, aterramento, quadros e cabeamento até cada área.', prazo: 'VÉSPERA OU MANHÃ DO EVENTO' },
        { titulo: 'Operação', texto: 'Técnico acompanha carga, temperatura e combustível durante o evento.', prazo: 'DURAÇÃO DO EVENTO' },
        { titulo: 'Desmontagem', texto: 'Retirada de cabos, quadros e gerador após o encerramento.', prazo: 'ATÉ 24 H DEPOIS' },
      ],
    },
    preco: {
      h2: 'Quanto Custa Alugar Gerador para Evento?',
      linhas: [
        { item: 'Até 50 kVA (casamento, festa)', valor: 'R$ 300 a R$ 800 / dia', obs: 'diária avulsa' },
        { item: '50–150 kVA (feira, palco pequeno)', valor: 'R$ 800 a R$ 1.800 / dia', obs: 'diária avulsa' },
        { item: 'Acima de 250 kVA (show)', valor: 'a partir de R$ 2.000 / dia', obs: 'diária avulsa' },
        { item: 'Técnico operador', valor: 'cobrado por turno', obs: 'recomendado em show' },
      ],
      nota: NOTA_PRECO,
    },
    faq: {
      h2: 'Perguntas Frequentes sobre Gerador para Eventos em Belém',
      itens: [
        { pergunta: 'Qual o tamanho do gerador para um casamento?', resposta: 'Casamentos com buffet, iluminação cênica e som costumam ficar entre 30 e 80 kVA. Se houver climatização de tenda, a potência sobe bastante. A lista de equipamentos do buffet e do DJ define o número exato.' },
        { pergunta: 'O gerador faz muito barulho no evento?', resposta: 'Com cabine silenciada e posicionado longe do público, o ruído fica bem abaixo do som do evento. O escape é virado para o lado oposto às mesas e à área de cerimônia.' },
        { pergunta: 'E se chover durante o evento?', resposta: 'O gerador opera na chuva, mas os quadros e as conexões ficam protegidos e elevados. Em Belém, a montagem já considera chuva forte, principalmente no primeiro semestre.' },
        { pergunta: 'Precisa de técnico durante o evento?', resposta: 'Em shows e eventos com mais de um grupo gerador, sim. Em festas pequenas, o gerador pode ficar sem operador fixo, com plantão pelo WhatsApp.' },
        { pergunta: 'Com quanta antecedência devo reservar o gerador?', resposta: 'Para eventos grandes, o ideal é reservar com semanas de antecedência, principalmente em datas de grande procura na capital, como o período do Círio de Nazaré, em outubro.' },
      ],
    },
    relacionados:
      'Quando o evento acontece em condomínio ou clube com rede própria, o atendimento combina com o de gerador para condomínio; obras de montagem de estrutura usam o gerador para obras.',
    hero: img('aluguel-de-gerador-para-eventos-belem-hero', 'Gerador silenciado alimentando palco de show ao ar livre em Belém - PA'),
    detalhe: img('aluguel-de-gerador-para-eventos-belem-quadro', 'Quadro de distribuição de energia temporária para feira em Belém - PA', 800, 600),
  },

  // ─────────────────────────────────────────────────────────────── 3
  {
    slug: 'aluguel-de-gerador-para-obras',
    nome: 'Gerador para obras',
    ordemTicket: 3,
    categoria: 'empresas',
    title: 'Aluguel de Gerador para Obras em Belém | 20 a 250 kVA',
    description:
      'Aluguel de gerador para obras em Belém e Grande Belém: 20 a 250 kVA para grua, betoneira, solda e canteiro sem ligação definitiva. WhatsApp (91) 99119-8584.',
    h1: 'Aluguel de Gerador para Obras em Belém | Canteiro, Grua e Betoneira de 20 a 250 kVA',
    eyebrow: 'Construtoras, empreiteiros e reformas',
    lead:
      'A {MARCA} organiza o aluguel de gerador para obras em Belém e na Região Metropolitana: canteiros que ainda não têm ligação provisória, obras em áreas sem rede, fases com grua, elevador de obra, betoneira, policorte e solda, e reformas que precisam de energia independente da instalação do prédio. O contrato acompanha o cronograma da obra — da fundação ao acabamento — e o gerador muda de porte conforme a fase.',
    stats: [
      { valor: '20–250 kVA', rotulo: 'do canteiro pequeno à grua' },
      { valor: '30 a 180 dias', rotulo: 'contratos que seguem o cronograma' },
      { valor: 'Diesel', rotulo: 'autonomia para turno completo' },
    ],
    specCard: '20–250 kVA · contrato mensal · troca de porte',
    resumoCard: 'Energia para canteiro, grua, betoneira e solda enquanto a ligação definitiva não chega.',
    oQueE: {
      h2: 'Como Funciona o Aluguel de Gerador para Obras',
      paragrafos: [
        'Obra é carga que muda. Na mobilização entram iluminação, escritório de canteiro e ferramentas; na estrutura chegam grua, betoneira e vibradores; no acabamento a demanda cai e muda de perfil. Alugar um gerador grande para a obra inteira encarece o contrato; alugar pequeno demais faz a grua desarmar. O correto é dimensionar pela fase mais pesada e prever a troca de porte quando a fase acabar.',
        'O cálculo parte da soma das potências que funcionam ao mesmo tempo, convertida em kVA pelo fator de potência. Motores de grua, guincho e betoneira têm partida com corrente elevada, e máquinas de solda geram picos — por isso o gerador de obra trabalha com folga e com regulação de tensão eletrônica.',
        'No canteiro, a segurança elétrica segue a NR-18 (condições de trabalho na indústria da construção) e a NR-10. Quadros de obra ficam em caixa com fechamento, aterrados, com disjuntor e DR por circuito, e os cabos passam longe de áreas de tráfego de máquinas ou protegidos mecanicamente.',
      ],
    },
    variacoes: {
      h2: 'Opções de Gerador para Obras e Canteiros',
      itens: [
        { titulo: 'Canteiro e mobilização', texto: 'Iluminação, escritório, refeitório e ferramentas portáteis.', spec: '20–40 KVA' },
        { titulo: 'Fase de estrutura', texto: 'Grua, betoneira, vibradores e bombas de drenagem.', spec: '80–250 KVA' },
        { titulo: 'Solda e serralheria', texto: 'Gerador com folga para picos de máquinas de solda.', spec: '40–115 KVA' },
        { titulo: 'Reforma em prédio ocupado', texto: 'Energia separada da instalação do edifício para não sobrecarregar o quadro.', spec: '20–55 KVA · SILENCIADO' },
      ],
    },
    especificacoes: {
      h2: 'Especificações e Normas do Gerador de Obra',
      itens: [
        'Grupos diesel de 20 a 250 kVA, 380/220 V, 60 Hz',
        'Quadro de obra com disjuntor geral, DR por circuito e tomadas industriais',
        'Aterramento com haste no ponto do gerador e no quadro',
        'Cabos flexíveis 1 kV com proteção mecânica em travessias',
        'Tanque com autonomia para pelo menos um turno de 8 a 10 horas',
        'Base nivelada e drenada, longe de escavações e do raio da grua',
      ],
      normas: ['NR-18', 'NR-10', 'NBR 5410'],
    },
    equipamentos: {
      h2: 'Equipamentos de Canteiro que Acompanham o Gerador',
      itens: [
        { titulo: 'Quadro de obra', texto: 'Distribuição por circuito com proteção diferencial.', spec: 'DR · TOMADAS INDUSTRIAIS' },
        { titulo: 'Cabos e extensões', texto: 'Comprimento definido pelo layout do canteiro.', spec: 'CABO 1 KV' },
        { titulo: 'Torre de iluminação', texto: 'Para turnos noturnos e segurança do canteiro.', spec: 'OPCIONAL' },
        { titulo: 'Abastecimento programado', texto: 'Reposição de diesel na obra em contratos longos.', spec: 'POR CONSUMO' },
      ],
    },
    processo: {
      h2: 'Processo de Aluguel de Gerador para Obras em 5 Etapas',
      passos: [
        { titulo: 'Lista de máquinas', texto: 'Equipamentos que funcionam juntos em cada fase e o cronograma previsto.', prazo: 'MESMO DIA' },
        { titulo: 'Dimensionamento', texto: 'kVA pela fase mais pesada e plano de troca de porte nas outras.', prazo: 'ATÉ 24 H' },
        { titulo: 'Entrega no canteiro', texto: 'Posicionamento com caminhão munck em base firme e acessível.', prazo: '24–72 H' },
        { titulo: 'Ligação do quadro de obra', texto: 'Conexão e teste por eletricista habilitado.', prazo: '2–4 H' },
        { titulo: 'Manutenção e troca', texto: 'Preventiva por horímetro e substituição do grupo quando a fase muda.', prazo: 'A CADA 250 H DE USO' },
      ],
    },
    preco: {
      h2: 'Quanto Custa Alugar Gerador para Obra?',
      linhas: [
        { item: '25 kVA em contrato de 28 dias', valor: '≈ R$ 110 / dia', obs: 'referência de catálogo' },
        { item: '50 kVA em contrato de 28 dias', valor: '≈ R$ 165 / dia', obs: 'referência de catálogo' },
        { item: '125–150 kVA em contrato de 28 dias', valor: '≈ R$ 205 a R$ 235 / dia', obs: 'referência de catálogo' },
        { item: 'Diária avulsa até 50 kVA', valor: 'R$ 300 a R$ 800 / dia', obs: 'sem contrato mensal' },
      ],
      nota: NOTA_PRECO,
    },
    faq: {
      h2: 'Perguntas Frequentes sobre Gerador para Obras',
      itens: [
        { pergunta: 'Qual gerador alugar para uma obra com grua?', resposta: 'Gruas de obra costumam exigir entre 80 e 150 kVA, conforme o modelo e o que mais funciona ao mesmo tempo. A plaqueta da grua e a lista de máquinas do canteiro definem a potência.' },
        { pergunta: 'É mais barato alugar por mês do que por dia?', resposta: 'Sim. Em contrato de 28 dias ou mais, a diária equivalente cai bastante em relação à diária avulsa, como mostra a tabela de referência acima.' },
        { pergunta: 'O gerador pode ficar na obra à noite?', resposta: 'Pode, desde que o canteiro tenha cercamento e o tanque fique trancado. O gerador também pode ser programado para desligar fora do horário de trabalho.' },
        { pergunta: 'Preciso de ART para ligar o gerador na obra?', resposta: 'A instalação elétrica do canteiro deve ter responsável técnico. A ligação do gerador ao quadro de obra é feita por profissional habilitado, conforme NR-10 e NR-18.' },
      ],
    },
    relacionados:
      'Obras industriais de grande porte usam a locação de gerador industrial; reformas em prédios residenciais podem combinar com o gerador para condomínio.',
    hero: img('aluguel-de-gerador-para-obras-belem-hero', 'Gerador diesel alugado alimentando canteiro de obra com grua em Belém - PA'),
    detalhe: img('aluguel-de-gerador-para-obras-belem-quadro-de-obra', 'Quadro de obra ligado a gerador em canteiro na Grande Belém - PA', 800, 600),
  },

  // ─────────────────────────────────────────────────────────────── 4
  {
    slug: 'gerador-para-condominio',
    nome: 'Gerador para condomínio',
    ordemTicket: 4,
    categoria: 'pessoas',
    title: 'Gerador para Condomínio em Belém | Elevadores e Bombas',
    description:
      'Gerador para condomínio em Belém: elevadores, bombas d’água, portões e iluminação durante falta de energia ou obra na cabine. WhatsApp (91) 99119-8584.',
    h1: 'Gerador para Condomínio em Belém | Elevadores, Bombas e Áreas Comuns sem Interrupção',
    eyebrow: 'Condomínios verticais e horizontais',
    lead:
      'A {MARCA} organiza o aluguel de gerador para condomínios de Belém e da Região Metropolitana: prédios com elevador, bombas de recalque e pressurização, portões automáticos, CFTV e iluminação de áreas comuns. Atendemos a manutenção programada da subestação do prédio, a troca de quadro geral, a falta prolongada de energia e o condomínio que quer avaliar o porte certo antes de comprar um gerador fixo.',
    stats: [
      { valor: '50–150 kVA', rotulo: 'faixa típica de áreas comuns' },
      { valor: 'Elevador + bombas', rotulo: 'cargas priorizadas na contingência' },
      { valor: 'Silenciado', rotulo: 'para não incomodar moradores' },
    ],
    specCard: '50–150 kVA · elevador e bombas · silenciado',
    resumoCard: 'Elevadores, bombas d’água, portões e segurança funcionando durante falta de energia ou obra elétrica.',
    oQueE: {
      h2: 'Como Funciona o Gerador para Condomínio',
      paragrafos: [
        'Em condomínio, o gerador alugado normalmente atende as áreas comuns, não os apartamentos. Elevadores, bombas de água, portões, interfones, CFTV e iluminação de escadas e garagem são as cargas que param o prédio quando falta energia. Por isso o primeiro passo é separar o que é essencial e o que pode esperar.',
        'A ligação é feita no quadro de serviço do condomínio por meio de chave de transferência. Elevador tem motor com partida pesada e, em prédios com mais de um elevador, a recomendação é limitar o número que funciona ao mesmo tempo durante a contingência — o que reduz o porte do gerador e o custo da locação.',
        'O posicionamento considera ruído e gases de escape. O grupo fica em área externa ventilada, com o escape direcionado para longe de janelas e da guarita, e a cabine silenciada reduz o incômodo para os moradores, principalmente à noite.',
      ],
    },
    variacoes: {
      h2: 'Situações em que o Condomínio Aluga Gerador',
      itens: [
        { titulo: 'Manutenção da subestação', texto: 'Energia durante o desligamento programado do transformador do prédio.', spec: 'JANELA DE 4 A 12 H' },
        { titulo: 'Troca do quadro geral', texto: 'Obra elétrica nas áreas comuns sem deixar o prédio parado.', spec: 'DIÁRIAS' },
        { titulo: 'Falta prolongada de energia', texto: 'Gerador mobilizado para manter elevador e água em funcionamento.', spec: 'EMERGÊNCIA' },
        { titulo: 'Teste antes de comprar', texto: 'Locação mensal para medir a carga real antes de investir em gerador fixo.', spec: '30 DIAS' },
      ],
    },
    especificacoes: {
      h2: 'Especificações e Normas do Gerador em Condomínio',
      itens: [
        'Grupos diesel de 55 a 150 kVA em cabine silenciada',
        'Chave de transferência no quadro de serviço das áreas comuns',
        'Priorização de cargas: elevador, bombas, portões, CFTV e iluminação de emergência',
        'Escape direcionado para longe de janelas e da guarita',
        'Aterramento interligado ao sistema do prédio',
        'Comunicado aos moradores com horário de início e fim do serviço',
      ],
      normas: ['NBR 5410', 'NR-10', 'NBR 10151'],
    },
    equipamentos: {
      h2: 'Equipamentos Usados no Gerador para Condomínio',
      itens: [
        { titulo: 'Chave de transferência', texto: 'Isola o gerador da rede da concessionária.', spec: 'MANUAL OU QTA' },
        { titulo: 'Cabine silenciada', texto: 'Reduz o ruído para os moradores.', spec: 'ÁREA EXTERNA VENTILADA' },
        { titulo: 'Cabos até o quadro', texto: 'Rota protegida entre o ponto do gerador e o quadro de serviço.', spec: 'CABO 1 KV' },
        { titulo: 'Abastecimento', texto: 'Diesel calculado para a duração do desligamento.', spec: 'AUTONOMIA + FOLGA' },
      ],
    },
    processo: {
      h2: 'Processo de Locação de Gerador para Condomínio em 5 Etapas',
      passos: [
        { titulo: 'Contato do síndico', texto: 'Motivo, data do desligamento e lista de cargas das áreas comuns.', prazo: 'MESMO DIA' },
        { titulo: 'Visita ao prédio', texto: 'Quadro de serviço, ponto do gerador e acesso do caminhão.', prazo: '24–48 H' },
        { titulo: 'Proposta', texto: 'kVA, cabos, chave de transferência e autonomia por escrito.', prazo: 'ATÉ 24 H' },
        { titulo: 'Instalação', texto: 'Posicionamento, ligação e teste de elevador e bombas.', prazo: '2–4 H ANTES DO DESLIGAMENTO' },
        { titulo: 'Retorno à rede', texto: 'Transferência de volta e retirada do gerador.', prazo: 'APÓS RELIGAÇÃO' },
      ],
    },
    preco: {
      h2: 'Quanto Custa Alugar Gerador para Condomínio?',
      linhas: [
        { item: '50–80 kVA (prédio com 1 elevador)', valor: 'R$ 500 a R$ 1.200 / dia', obs: 'diária avulsa' },
        { item: '100–150 kVA (2 a 3 elevadores)', valor: 'R$ 800 a R$ 1.800 / dia', obs: 'diária avulsa' },
        { item: 'Contrato de 28 dias (125–150 kVA)', valor: '≈ R$ 205 a R$ 235 / dia', obs: 'referência de catálogo' },
        { item: 'Frete e ligação', valor: 'cobrado à parte', obs: 'conforme distância' },
      ],
      nota: NOTA_PRECO,
    },
    faq: {
      h2: 'Perguntas Frequentes sobre Gerador para Condomínio',
      itens: [
        { pergunta: 'Qual gerador o condomínio precisa para manter os elevadores?', resposta: 'Um prédio com um elevador e bombas costuma ficar entre 50 e 80 kVA. Com dois ou três elevadores funcionando juntos, a faixa sobe para 100 a 150 kVA. Limitar elevadores simultâneos reduz o porte.' },
        { pergunta: 'O gerador alugado atende os apartamentos?', resposta: 'Normalmente não. A locação atende as áreas comuns. Atender os apartamentos exige um gerador muito maior e ligação no quadro geral do prédio, o que se avalia caso a caso.' },
        { pergunta: 'O síndico pode contratar sem assembleia?', resposta: 'Para manutenção e emergência, o síndico costuma ter autonomia pela convenção. Para contrato longo ou compra de gerador fixo, vale consultar a convenção e levar à assembleia.' },
        { pergunta: 'O barulho do gerador incomoda os moradores?', resposta: 'Com cabine silenciada, posicionamento em área externa e escape longe das janelas, o ruído fica controlado. O horário do serviço é comunicado com antecedência.' },
      ],
    },
    relacionados:
      'Casas e sobrados usam o gerador residencial; obras no prédio usam o gerador para obras; condomínios empresariais podem precisar da locação industrial.',
    hero: img('gerador-para-condominio-belem-hero', 'Gerador silenciado instalado na área externa de condomínio residencial em Belém - PA'),
    detalhe: img('gerador-para-condominio-belem-quadro-servico', 'Ligação de gerador ao quadro de serviço de condomínio em Belém - PA', 800, 600),
  },

  // ─────────────────────────────────────────────────────────────── 5
  {
    slug: 'aluguel-de-gerador-residencial',
    nome: 'Gerador residencial',
    ordemTicket: 5,
    categoria: 'pessoas',
    title: 'Aluguel de Gerador Residencial em Belém | 5 a 30 kVA',
    description:
      'Aluguel de gerador residencial em Belém: 5 a 30 kVA para casa, sobrado, sítio ou pequeno comércio durante falta de energia ou reforma. WhatsApp (91) 99119-8584.',
    h1: 'Aluguel de Gerador Residencial em Belém | Casas, Sobrados e Sítios de 5 a 30 kVA',
    eyebrow: 'Casas, sobrados, sítios e pequeno comércio',
    lead:
      'A {MARCA} organiza o aluguel de gerador residencial em Belém e na Região Metropolitana: casas, sobrados, sítios, clínicas pequenas e lojas que precisam de energia durante uma falta prolongada, uma reforma no padrão de entrada ou um fim de semana em local sem rede. Os equipamentos vão de modelos portáteis a gasolina, para poucas cargas, a geradores diesel silenciados de até 30 kVA.',
    stats: [
      { valor: '5–30 kVA', rotulo: 'do portátil ao silenciado diesel' },
      { valor: 'Diária ou semana', rotulo: 'locação curta, sem contrato longo' },
      { valor: 'Chave reversora', rotulo: 'ligação segura no quadro da casa' },
    ],
    specCard: '5–30 kVA · gasolina ou diesel · chave reversora',
    resumoCard: 'Energia para geladeira, iluminação, bomba e ar-condicionado durante falta de luz ou reforma.',
    oQueE: {
      h2: 'Como Funciona o Aluguel de Gerador Residencial',
      paragrafos: [
        'Para casa, o gerador certo depende do que precisa funcionar. Geladeira, iluminação, internet e bomba d’água cabem em geradores pequenos; um aparelho de ar-condicionado e o chuveiro elétrico mudam completamente a conta, porque são as maiores cargas de uma residência.',
        'A forma mais segura de ligar o gerador é por chave reversora instalada no quadro, que separa a casa da rede da concessionária. Ligar o gerador diretamente em uma tomada é perigoso: a energia pode voltar pela rede e colocar em risco quem trabalha nela, além de danificar o gerador quando a energia retorna.',
        'O gerador fica sempre do lado de fora, em local ventilado. Motores a combustão produzem monóxido de carbono, gás sem cheiro que se acumula em garagens e áreas fechadas — por isso nunca se usa gerador dentro de casa, nem com o portão da garagem fechado.',
      ],
    },
    variacoes: {
      h2: 'Opções de Gerador para Casa e Sítio',
      itens: [
        { titulo: 'Portátil a gasolina', texto: 'Geladeira, iluminação, internet e carregadores.', spec: '5–9 KVA' },
        { titulo: 'Casa completa sem ar', texto: 'Inclui bomba d’água, micro-ondas e eletrônicos.', spec: '10–15 KVA' },
        { titulo: 'Casa com ar-condicionado', texto: 'Diesel silenciado para dois ou três aparelhos de ar.', spec: '20–30 KVA · DIESEL' },
        { titulo: 'Sítio e chácara', texto: 'Bomba de poço, iluminação externa e fim de semana sem rede.', spec: '10–30 KVA' },
      ],
    },
    especificacoes: {
      h2: 'Especificações e Normas do Gerador Residencial',
      itens: [
        'Monofásico 127/220 V ou trifásico 220/380 V, conforme o padrão da casa',
        'Chave reversora no quadro de distribuição',
        'Aterramento no ponto do gerador',
        'Uso exclusivamente em área externa ventilada',
        'Cabo com bitola compatível com a distância até o quadro',
      ],
      normas: ['NBR 5410', 'NR-10'],
    },
    equipamentos: {
      h2: 'O que Acompanha o Gerador Residencial',
      itens: [
        { titulo: 'Chave reversora', texto: 'Impede que a energia do gerador volte para a rede.', spec: 'OBRIGATÓRIA NO QUADRO' },
        { titulo: 'Cabo de ligação', texto: 'Do gerador ao quadro, com bitola adequada.', spec: 'ATÉ 30 M' },
        { titulo: 'Combustível', texto: 'Gasolina ou diesel conforme o modelo.', spec: 'CONSUMO VARIA COM A CARGA' },
        { titulo: 'Orientação de uso', texto: 'Partida, desligamento e abastecimento seguros.', spec: 'NA ENTREGA' },
      ],
    },
    processo: {
      h2: 'Processo de Aluguel de Gerador para Casa em 4 Etapas',
      passos: [
        { titulo: 'O que precisa ligar', texto: 'Lista de aparelhos e foto do quadro de energia pelo WhatsApp.', prazo: 'MESMO DIA' },
        { titulo: 'Escolha do modelo', texto: 'Potência e combustível indicados com base na lista.', prazo: 'ATÉ 2 H' },
        { titulo: 'Entrega e ligação', texto: 'Instalação da chave reversora por eletricista e teste.', prazo: '24–48 H' },
        { titulo: 'Retirada', texto: 'Recolhimento no fim do período contratado.', prazo: 'CONFORME LOCAÇÃO' },
      ],
    },
    preco: {
      h2: 'Quanto Custa Alugar Gerador para Casa?',
      linhas: [
        { item: 'Portátil a gasolina 5–9 kVA', valor: '≈ R$ 30 a R$ 45 / dia', obs: 'catálogo, contrato longo' },
        { item: 'Gasolina 13 kVA', valor: '≈ R$ 90 / dia', obs: 'catálogo, contrato longo' },
        { item: 'Diesel até 25 kVA (diária avulsa)', valor: 'R$ 250 a R$ 400 / dia', obs: 'com cabine' },
        { item: 'Chave reversora + instalação', valor: 'orçada à parte', obs: 'eletricista habilitado' },
      ],
      nota: NOTA_PRECO,
    },
    faq: {
      h2: 'Perguntas Frequentes sobre Gerador para Casa',
      itens: [
        { pergunta: 'Qual gerador alugar para uma casa com ar-condicionado?', resposta: 'Uma casa com dois ou três aparelhos de ar costuma precisar de 20 a 30 kVA a diesel. Sem ar-condicionado e sem chuveiro elétrico, de 10 a 15 kVA resolvem a maioria das casas.' },
        { pergunta: 'Posso ligar o gerador direto na tomada?', resposta: 'Não. Sem chave reversora, a energia pode voltar para a rede da concessionária e causar acidente, além de queimar o gerador quando a luz voltar.' },
        { pergunta: 'Pode deixar o gerador na garagem?', resposta: 'Só com a garagem totalmente aberta e ventilada — o ideal é área externa. O escape libera monóxido de carbono, que é inodoro e perigoso em ambiente fechado.' },
        { pergunta: 'Dá para alugar por um fim de semana?', resposta: 'Sim. A locação residencial costuma ser por diária ou por semana, com entrega e retirada combinadas pelo WhatsApp.' },
      ],
    },
    relacionados:
      'Festas em casa ou em sítio com som e buffet usam o gerador para eventos; prédios inteiros, o gerador para condomínio.',
    hero: img('aluguel-de-gerador-residencial-belem-hero', 'Gerador residencial silenciado na área externa de casa em Belém - PA'),
    detalhe: img('aluguel-de-gerador-residencial-belem-chave-reversora', 'Chave reversora instalada no quadro de casa para gerador alugado em Belém - PA', 800, 600),
  },
];

export const servicoPorSlug = (slug: string) => SERVICOS.find((s) => s.slug === slug);
