// Auditoria automática do build (rode depois de `npm run build`): `npm run check`
// Confere as regras invioláveis da skill SEO Local BR em todas as páginas de dist/.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const PUBLIC = new URL('../public/', import.meta.url).pathname;
const paginas = readdirSync(DIST).filter((f) => f.endsWith('.html'));
const vistos = { title: new Map(), desc: new Map(), h1: new Map() };
let erros = 0, avisos = 0;
const erro = (p, m) => { erros++; console.log(`  ✗ ${p}: ${m}`); };
const aviso = (p, m) => { avisos++; console.log(`  ! ${p}: ${m}`); };
const txt = (s) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

for (const f of paginas) {
  const html = readFileSync(join(DIST, f), 'utf8');
  const noindex = html.includes('noindex');
  const title = txt(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? '');
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));

  if (title.length > 65) aviso(f, `title com ${title.length} caracteres (alvo ≤ 60–65)`);
  if (!noindex && (desc.length < 120 || desc.length > 165)) aviso(f, `meta description com ${desc.length} caracteres (alvo 140–160)`);
  if (h1s.length !== 1) erro(f, `${h1s.length} H1 na página (deve ser exatamente 1)`);
  if (/href="tel:/i.test(html)) erro(f, 'link tel: encontrado (só WhatsApp é permitido)');
  if (/>\s*(Ligar|Ligue agora)\s*</i.test(html)) erro(f, 'botão com rótulo de ligação');

  for (const [k, v] of [['title', title], ['desc', desc], ['h1', h1s[0] ?? '']]) {
    if (!v || noindex) continue;
    if (vistos[k].has(v)) erro(f, `${k} duplicado com ${vistos[k].get(v)}`);
    vistos[k].set(v, f);
  }

  // Links no corpo: <main> sem formulários (o link da política no consentimento é exigência da LGPD)
  const main = (html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? '').replace(/<form[\s\S]*?<\/form>/g, '');
  const links = [...main.matchAll(/<a\s[^>]*href="([^"]+)"/g)].map((m) => m[1])
    .filter((h) => !h.startsWith('#') && !h.startsWith('https://wa.me') && !h.startsWith('mailto:'));
  if (f === 'index.html' && links.length) erro(f, `corpo da Home tem ${links.length} link(s): ${links.join(', ')}`);
  if (f === 'areas-atendidas.html') {
    const fora = links.filter((h) => h !== '/' && !/-pa$/.test(h));
    if (fora.length) erro(f, `links fora da malha de localidades: ${fora.join(', ')}`);
  } else if (f !== 'index.html' && !noindex) {
    const outros = links.filter((h) => h !== '/');
    if (outros.length) erro(f, `corpo com links além da marca→Home: ${outros.join(', ')}`);
    if (!links.includes('/') ) aviso(f, 'sem o link da marca para a Home no 1º parágrafo');
  }

  // Imagens: alt presente e arquivo existente
  for (const m of html.matchAll(/<img\s[^>]*>/g)) {
    const tag = m[0];
    const src = tag.match(/src="([^"]+)"/)?.[1] ?? '';
    if (!/alt="/.test(tag)) erro(f, `imagem sem alt: ${src}`);
    if (src.startsWith('/') && !src.startsWith('/_astro') && !existsSync(join(PUBLIC, src))) erro(f, `imagem inexistente: ${src}`);
  }
  // Todo link de WhatsApp precisa de data-track
  for (const m of html.matchAll(/<a\s[^>]*href="https:\/\/wa\.me[^"]*"[^>]*>/g)) {
    if (!/data-track="whatsapp_click"/.test(m[0]) || !/data-cta-position=/.test(m[0])) erro(f, 'link de WhatsApp sem data-track/data-cta-position');
  }
}
console.log(`\n${paginas.length} páginas auditadas — ${erros} erro(s), ${avisos} aviso(s).`);
process.exit(erros ? 1 : 0);
