import type { Galeria, Foto } from './types';

// Galeria de 3 fotos por página (além do hero). Nome do arquivo e alt com a palavra-chave.
// Trocar a foto = substituir o arquivo com o MESMO nome (ver /imagens-originais e docs/mapa-de-imagens.md).
const f = (pasta: string, nome: string, alt: string, legenda: string): Foto => ({
  src: `/img/fotos/${pasta}/${nome}.webp`, alt, legenda, w: 800, h: 600,
});

export const GALERIAS: Record<string, Galeria> = {
  // ─── Serviços
  'locacao-de-gerador-industrial': {
    h2: 'Locação de Gerador Industrial em Operação na Grande Belém',
    itens: [
      f('locacao-de-gerador-industrial', 'locacao-de-gerador-industrial-belem-entrega-caminhao-munck', 'Caminhão munck descarregando gerador industrial alugado em pátio de fábrica em Belém - PA', 'Entrega com caminhão munck e posicionamento em base firme'),
      f('locacao-de-gerador-industrial', 'locacao-de-gerador-industrial-belem-tanque-diesel-contencao', 'Tanque de diesel com bacia de contenção ao lado de gerador industrial alugado em Belém - PA', 'Tanque de diesel com bacia de contenção (NR-20)'),
      f('locacao-de-gerador-industrial', 'locacao-de-gerador-industrial-belem-eletricista-qta', 'Eletricista ligando gerador industrial ao quadro de transferência automática em Belém - PA', 'Ligação no QTA por profissional habilitado (NR-10)'),
    ],
  },
  'aluguel-de-gerador-para-eventos': {
    h2: 'Aluguel de Gerador para Eventos: Shows, Feiras e Festas em Belém',
    itens: [
      f('aluguel-de-gerador-para-eventos', 'aluguel-de-gerador-para-eventos-belem-show-palco', 'Gerador alugado alimentando palco de show ao ar livre à noite em Belém - PA', 'Palco de show com gerador dedicado a som e luz'),
      f('aluguel-de-gerador-para-eventos', 'aluguel-de-gerador-para-eventos-belem-passa-cabos', 'Passa-cabos protegendo cabos de gerador em evento ao ar livre em Belém - PA', 'Passa-cabos na rota do público'),
      f('aluguel-de-gerador-para-eventos', 'aluguel-de-gerador-para-eventos-belem-feira-estandes', 'Feira de estandes iluminada com energia de gerador alugado em Belém - PA', 'Feira com distribuição por estande'),
    ],
  },
  'aluguel-de-gerador-para-obras': {
    h2: 'Aluguel de Gerador para Obras: Canteiros na Grande Belém',
    itens: [
      f('aluguel-de-gerador-para-obras', 'aluguel-de-gerador-para-obras-belem-betoneira', 'Betoneira de obra alimentada por gerador alugado em canteiro em Belém - PA', 'Betoneira e ferramentas no canteiro'),
      f('aluguel-de-gerador-para-obras', 'aluguel-de-gerador-para-obras-belem-entrega-munck', 'Entrega de gerador para obra com caminhão munck em Belém - PA', 'Entrega no canteiro com munck'),
      f('aluguel-de-gerador-para-obras', 'aluguel-de-gerador-para-obras-belem-ligacao-quadro', 'Eletricista ligando gerador de obra ao quadro elétrico em Belém - PA', 'Ligação do quadro de obra conforme NR-18 e NR-10'),
    ],
  },
  'gerador-para-condominio': {
    h2: 'Gerador para Condomínio: Elevadores, Bombas e Portaria em Belém',
    itens: [
      f('gerador-para-condominio', 'gerador-para-condominio-belem-area-externa-predio', 'Gerador silenciado na área externa de prédio residencial em Belém - PA', 'Gerador silenciado em área externa ventilada'),
      f('gerador-para-condominio', 'gerador-para-condominio-belem-casa-de-bombas', 'Casa de bombas de condomínio alimentada por gerador alugado em Belém - PA', 'Bombas de recalque funcionando na contingência'),
      f('gerador-para-condominio', 'gerador-para-condominio-belem-portaria-portao', 'Portaria e portão automático de condomínio com energia de gerador em Belém - PA', 'Portaria e portões sem interrupção'),
    ],
  },
  'aluguel-de-gerador-residencial': {
    h2: 'Aluguel de Gerador Residencial para Casas e Sítios em Belém',
    itens: [
      f('aluguel-de-gerador-residencial', 'aluguel-de-gerador-residencial-belem-gerador-portatil', 'Gerador portátil a gasolina na área externa de casa em Belém - PA', 'Gerador portátil para geladeira e iluminação'),
      f('aluguel-de-gerador-residencial', 'aluguel-de-gerador-residencial-belem-sitio-chacara', 'Gerador silenciado alimentando sítio e chácara na Região Metropolitana de Belém - PA', 'Sítio e chácara sem rede elétrica'),
      f('aluguel-de-gerador-residencial', 'aluguel-de-gerador-residencial-belem-casa-iluminada', 'Casa iluminada à noite durante falta de energia com gerador alugado em Belém - PA', 'Casa funcionando durante a falta de luz'),
    ],
  },

  // ─── Cidades
  'gerador-industrial-barcarena-pa': {
    h2: 'Gerador Industrial em Barcarena: Polo de Vila do Conde',
    itens: [
      f('barcarena-pa', 'gerador-industrial-barcarena-porto-vila-do-conde', 'Gerador industrial alugado em área portuária de Vila do Conde, Barcarena - PA', 'Área portuária de Vila do Conde'),
      f('barcarena-pa', 'gerador-industrial-barcarena-parada-manutencao', 'Gerador industrial durante parada de manutenção em indústria de Barcarena - PA', 'Parada de manutenção programada'),
      f('barcarena-pa', 'gerador-industrial-barcarena-canteiro-industrial', 'Gerador alugado em canteiro de montagem industrial em Barcarena - PA', 'Canteiro de montagem industrial'),
    ],
  },
  'aluguel-de-gerador-para-obras-ananindeua-pa': {
    h2: 'Aluguel de Gerador para Obras em Ananindeua: Canteiros da Cidade',
    itens: [
      f('ananindeua-pa', 'aluguel-de-gerador-para-obras-ananindeua-predio-em-construcao', 'Gerador alugado em obra de prédio residencial em construção em Ananindeua - PA', 'Edifício residencial em construção'),
      f('ananindeua-pa', 'aluguel-de-gerador-para-obras-ananindeua-reforma-loja-br-316', 'Gerador silenciado em reforma de loja na BR-316 em Ananindeua - PA', 'Reforma de loja às margens da BR-316'),
      f('ananindeua-pa', 'aluguel-de-gerador-para-obras-ananindeua-bomba-drenagem', 'Bomba de drenagem de fundação ligada a gerador em obra em Ananindeua - PA', 'Drenagem de fundação no período chuvoso'),
    ],
  },
  'gerador-para-empresas-castanhal-pa': {
    h2: 'Gerador para Empresas em Castanhal: Atacados e Câmaras Frias',
    itens: [
      f('castanhal-pa', 'gerador-para-empresas-castanhal-camara-fria', 'Câmara fria de distribuidora mantida por gerador alugado em Castanhal - PA', 'Câmara fria mantida na falta de energia'),
      f('castanhal-pa', 'gerador-para-empresas-castanhal-atacado-br-316', 'Gerador alugado ao lado de atacado na BR-316 em Castanhal - PA', 'Atacado às margens da BR-316'),
      f('castanhal-pa', 'gerador-para-empresas-castanhal-industria-alimentos', 'Gerador alugado em indústria de alimentos em Castanhal - PA', 'Linha de indústria de alimentos'),
    ],
  },
  'gerador-para-condominio-marituba-pa': {
    h2: 'Gerador para Condomínio em Marituba: Condomínios Horizontais',
    itens: [
      f('marituba-pa', 'gerador-para-condominio-marituba-portaria', 'Portaria de condomínio horizontal com gerador alugado em Marituba - PA', 'Portaria funcionando sem rede'),
      f('marituba-pa', 'gerador-para-condominio-marituba-vias-internas', 'Iluminação de vias internas de condomínio com gerador em Marituba - PA', 'Iluminação das vias internas'),
      f('marituba-pa', 'gerador-para-condominio-marituba-bombas-reservatorio', 'Bombas e reservatório de condomínio ligados a gerador em Marituba - PA', 'Bombas e reservatório de água'),
    ],
  },
  'gerador-para-festas-benevides-pa': {
    h2: 'Gerador para Festas em Benevides: Sítios e Balneários',
    itens: [
      f('benevides-pa', 'gerador-para-festas-benevides-casamento-sitio', 'Casamento em sítio com energia de gerador alugado em Benevides - PA', 'Casamento em sítio'),
      f('benevides-pa', 'gerador-para-festas-benevides-balneario-igarape', 'Festa em balneário à beira de igarapé com gerador alugado em Benevides - PA', 'Festa em balneário de igarapé'),
      f('benevides-pa', 'gerador-para-festas-benevides-chacara-noite', 'Chácara iluminada à noite com gerador silenciado em Benevides - PA', 'Chácara iluminada à noite'),
    ],
  },
};

// Páginas institucionais
export const GALERIA_SOBRE: Galeria = {
  h2: 'Aluguel de Gerador em Belém: do Dimensionamento à Ligação',
  itens: [
    f('sobre', 'aluguel-de-gerador-belem-eletricista-quadro-transferencia', 'Eletricista ligando gerador alugado ao quadro de transferência em Belém - PA', 'Ligação segura no quadro'),
    f('sobre', 'aluguel-de-gerador-belem-entrega-caminhao-munck', 'Entrega de gerador alugado com caminhão munck em Belém - PA', 'Entrega e posicionamento'),
    f('sobre', 'aluguel-de-gerador-belem-gerador-instalado-galpao', 'Gerador alugado instalado ao lado de galpão em Belém - PA', 'Gerador instalado em operação'),
  ],
};
export const GALERIA_CONTATO: Galeria = {
  h2: 'Orçamento de Aluguel de Gerador em Belém pelo WhatsApp',
  itens: [
    f('contato', 'orcamento-aluguel-de-gerador-belem-gerador-galpao', 'Gerador alugado ao lado de galpão em Belém - PA', 'Indústria e comércio'),
    f('contato', 'orcamento-aluguel-de-gerador-belem-quadro-distribuicao', 'Quadro de distribuição de energia temporária ligado a gerador em Belém - PA', 'Eventos e energia temporária'),
    f('contato', 'orcamento-aluguel-de-gerador-belem-painel-paralelismo', 'Painel de paralelismo de geradores alugados em Belém - PA', 'Contingência e paralelismo'),
  ],
};
