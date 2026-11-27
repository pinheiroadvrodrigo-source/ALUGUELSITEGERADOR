// ============================================================================
// DADOS GLOBAIS DA MARCA — NAP (nome, endereço, telefone)
// Tudo que precisa ser IGUAL em 100% das páginas sai daqui. Troque só aqui.
// Campos marcados com [TROCAR] dependem do empresário parceiro / do domínio.
// ============================================================================

export const SITE = {
  marca: 'ParaPrime',
  marcaCompleta: 'ParaPrime Aluguel de Geradores',
  slogan: 'Aluguel de geradores em Belém e Região Metropolitana',

  // [TROCAR] domínio definitivo. Usado em canonical, sitemap, schema e OG.
  url: 'https://paraprimegeradores.com.br',

  // Telefone = WhatsApp (mesmo número). E.164 sem "+" para o wa.me.
  whatsapp: '5591991198584',
  telefoneExibe: '(91) 99119-8584',
  telefoneE164: '+55-91-99119-8584',

  // [TROCAR] e-mail institucional. Vazio = não aparece no site nem no schema.
  email: '',

  // [TROCAR] quando houver parceiro com CNPJ/endereço. Vazio = não aparece.
  cnpj: '',
  endereco: '', // ex.: 'Av. Exemplo, 100 - Marco - Belém/PA - CEP 66000-000'
  responsavelTecnico: '', // ex.: 'Eng. Fulano de Tal - CREA-PA 000000'

  cidadeSede: 'Belém',
  uf: 'PA',
  regiao: 'Região Metropolitana de Belém',
  geo: { lat: -1.4558, lng: -48.4902 },
  horario: 'Segunda a sábado, 7h às 19h — plantão pelo WhatsApp',

  // [TROCAR] ID do Google Tag Manager (GTM-XXXXXXX). Vazio = GTM não carrega.
  gtmId: '',

  redes: [] as string[], // ex.: ['https://www.instagram.com/paraprime']
};

export const waLink = (texto?: string) =>
  `https://wa.me/${SITE.whatsapp}${texto ? `?text=${encodeURIComponent(texto)}` : ''}`;

export const googleBusca = `https://www.google.com/search?q=${encodeURIComponent(
  `${SITE.marcaCompleta} ${SITE.cidadeSede} ${SITE.uf}`,
)}`;

// Menu global (cabeçalho + rodapé) — replicado em 100% das páginas.
export const MENU = [
  { href: '/servicos', label: 'Serviços' },
  { href: '/areas-atendidas', label: 'Áreas atendidas' },
  { href: '/sobre', label: 'Como funciona' },
  { href: '/contato', label: 'Contato' },
];
