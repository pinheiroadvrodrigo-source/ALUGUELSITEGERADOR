export interface Faq { pergunta: string; resposta: string }
export interface Card { titulo: string; texto: string; spec?: string }
export interface Passo { titulo: string; texto: string; prazo: string }
export interface Stat { valor: string; rotulo: string; fonte?: string }
export interface LinhaPreco { item: string; valor: string; obs?: string }
export interface Imagem { src: string; alt: string; w: number; h: number }
export interface Foto extends Imagem { legenda: string }
export interface Galeria { h2: string; itens: Foto[] }

export interface Servico {
  slug: string;
  nome: string; // nome curto usado em menu e formulário
  ordemTicket: number; // 1 = maior ticket
  categoria: 'empresas' | 'pessoas';
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  lead: string; // 1º parágrafo — contém {MARCA} que vira o único link do corpo
  stats: Stat[];
  specCard: string; // linha de spec mostrada no card da home
  resumoCard: string;
  oQueE: { h2: string; paragrafos: string[] };
  variacoes: { h2: string; itens: Card[] };
  especificacoes: { h2: string; itens: string[]; normas: string[] };
  equipamentos: { h2: string; itens: Card[] };
  processo: { h2: string; passos: Passo[] };
  preco: { h2: string; linhas: LinhaPreco[]; nota: string };
  faq: { h2: string; itens: Faq[] };
  relacionados: string; // menção em texto, sem link
  hero: Imagem;
  detalhe: Imagem;
  galeria: Galeria;
}

export interface Localidade {
  slug: string;
  cidade: string;
  uf: string;
  servicoAncora: string;
  servicoSlug: string; // serviço "pai" usado no formulário
  title: string;
  description: string;
  h1: string;
  lead: string;
  fatos: Stat[]; // 3 fatos verificáveis
  bairrosParagrafo: string;
  bairros: string[];
  escopo: { h2: string; itens: Card[] };
  escolher: { h2: string; itens: Card[] };
  cronograma: { h2: string; passos: Passo[] };
  blocoVariavel: { h2: string; paragrafos: string[]; h3?: Card[] };
  preco: { h2: string; linhas: LinhaPreco[]; nota: string };
  vizinhas: { h2: string; texto: string; cidades: string[] };
  faq: { h2: string; itens: Faq[] };
  ctaTitulo: string;
  mapaQuery: string;
  fontes: string[];
  hero: Imagem;
  foto: Imagem;
  mapa: Imagem;
  galeria: Galeria;
  resumoArea: string; // linha de contexto para o card da página de áreas
  regiao: string;
}
