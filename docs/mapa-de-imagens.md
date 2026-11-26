# Mapa de imagens — trocar arquivo, sem mexer em código

Todas as imagens abaixo já existem como **placeholder** (fundo azul-marinho com um bloco amarelo abstrato, ou mapa estilizado). Para trocar, salve a foto real **com o mesmo nome e no mesmo lugar**, em **WebP**, no tamanho indicado. Nenhum código muda.

Pasta: `site/public/img/fotos/`

| Arquivo | Tamanho | Onde aparece |
|---|---|---|
| `gerador-aluguel-belem-hero.webp` | 1200×800 | Hero da Home, Serviços, Sobre |
| `cta-gerador-aluguel-belem-noite.webp` | 1200×500 | Faixa de CTA final (todas as páginas) |
| `equipamento-gerador-cabine-silenciada.webp` | 600×400 | Home — equipamentos |
| `equipamento-qta-transferencia-automatica.webp` | 600×400 | Home — equipamentos; Sobre |
| `equipamento-cabos-quadros-distribuicao.webp` | 600×400 | Home — equipamentos |
| `equipamento-tanque-diesel-contencao.webp` | 600×400 | Home — equipamentos |
| `mapa-belem-pa.webp` | 1200×450 | Fachada do mapa (serviços, contato, sobre, áreas) |
| `{servico}-belem-hero.webp` (5) | 1200×800 | Hero de cada serviço + card na Home |
| `{servico}-belem-{detalhe}.webp` (5) | 800×600 | Foto "Como funciona" de cada serviço |
| `{cidade}-pa/…-hero.webp` (5) | 1200×800 | Hero de cada cidade |
| `{cidade}-pa/…-{detalhe}.webp` (5) | 800×600 | "Como escolher" de cada cidade |
| `{cidade}-pa/mapa-{cidade}-pa.webp` (5) | 1200×450 | Fachada do mapa da cidade |

Lista exata de caminhos: rode `grep -rhoE '/img/fotos/[a-z0-9/_-]+\.webp' site/dist | sort -u` depois do build.

**Regras:** foto real (gerador, quadro, cabo, obra, evento) — nunca banco de imagens com pessoas apresentadas como "equipe". Hero até ~250 KB. Os textos alternativos (alt) já estão escritos com serviço + cidade.

Fachada do mapa: um print do Google Maps da cidade (sem marcadores de concorrentes) funciona bem.
