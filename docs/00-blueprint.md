# Blueprint — ParaPrime Aluguel de Geradores

## Briefing confirmado

- **Marca:** ParaPrime Aluguel de Geradores (logo e favicon fornecidos)
- **Domínio:** provisório `paraprimegeradores.netlify.app` — **[TROCAR]** em `site/src/data/site.ts` e `site/astro.config.mjs`
- **Serviço principal:** aluguel de gerador de energia — indústria, eventos, obras, condomínios e residências
- **Cidade-sede:** Belém/PA — 1.303.403 hab. (IBGE, Censo 2022)
- **Satélites:** Barcarena, Ananindeua, Castanhal, Marituba, Benevides
- **Modelo:** geração de leads para locadoras parceiras (sem CNPJ/endereço no site por enquanto)
- **WhatsApp único:** (91) 99119-8584 — `5591991198584`
- **Plataforma:** Astro 7, site estático, rotas flat

### Premissas assumidas (confirmar)
1. **Padrão de URL das localidades:** `/{servico}-{cidade}-{uf}` (padrão do wireframe, §11.9). Escala para várias combinações por cidade sem colidir.
2. **Sem depoimentos:** não existem depoimentos reais, então nenhum foi criado. O bloco 09 da Home virou "Belém em números"; nas cidades, o bloco de prova mostra bairros + mapa. **O gate do wireframe ("1 depoimento local") não está cumprido** — adicionar depoimentos reais assim que o primeiro parceiro atender.
3. **Sem "anos de experiência", frota ou equipe**: a página Sobre ("Como funciona") explica o modelo real — central que dimensiona e encaminha para locadora parceira. O formulário pede consentimento LGPD para compartilhar os dados com o parceiro.
4. **Preços:** faixas de referência de mercado nacional (Loxam/Degraus, Granloc, Estado de Minas, 2025–2026), sempre com a ressalva de que não são orçamento.

## Matriz serviço × localidade (serviço-âncora exclusivo)

| # | Localidade | Dado-chave | Serviço-âncora | URL |
|---|---|---|---|---|
| — | Belém (Home) | 1.303.403 hab., capital | Aluguel de gerador (todos) | `/` |
| 1 | Barcarena | Porto de Vila do Conde, Alunorte/Albras | Locação de gerador industrial | `/gerador-industrial-barcarena-pa` |
| 2 | Ananindeua | 478.778 hab., obras verticais | Gerador para obras | `/aluguel-de-gerador-para-obras-ananindeua-pa` |
| 3 | Castanhal | polo atacadista, BR-316/BR-010 | Gerador para comércio e câmaras frias | `/gerador-para-empresas-castanhal-pa` |
| 4 | Marituba | condomínios horizontais BR-316 | Gerador para condomínio | `/gerador-para-condominio-marituba-pa` |
| 5 | Benevides | sítios, balneários, igarapés | Gerador para festas em sítios | `/gerador-para-festas-benevides-pa` |

## Serviços (ordem por ticket — maior no topo)

1. `/locacao-de-gerador-industrial` — 100–1.000+ kVA
2. `/aluguel-de-gerador-para-eventos` — 30–500 kVA
3. `/aluguel-de-gerador-para-obras` — 20–250 kVA
4. `/gerador-para-condominio` — 50–150 kVA
5. `/aluguel-de-gerador-residencial` — 5–30 kVA

Institucional: `/servicos`, `/areas-atendidas`, `/sobre`, `/contato`, `/obrigado` (noindex), `/politica-de-privacidade`.

**Total fase 1: 18 páginas** (16 indexáveis). Metas e H1 de todas em `metas-e-urls.csv`.

## Linkagem (topologia estrela)
- Corpo da Home: zero links de saída.
- Corpo das internas: só o nome da marca → Home, no 1º parágrafo.
- Exceção: `/areas-atendidas` linka para as páginas de cidade.
- Menu global (cabeçalho e rodapé) em 100% das páginas.
- `npm run check` audita tudo isso no build.

## Fase 2 (30–60 dias) — sugestões
- Bairros de Belém com conteúdo próprio: Umarizal (prédios comerciais), Marco/Augusto Montenegro (condomínios), Icoaraci/Mosqueiro (eventos de verão).
- Santa Izabel do Pará e Santa Bárbara do Pará, quando houver dados e parceiro.
- Segunda combinação por cidade (ex.: eventos em Castanhal) só depois que as atuais passarem no teste do find-and-replace.

## Fontes da Fase 1
IBGE Cidades e Censo 2022 (populações e áreas) · FAPESPA Nota 02/2024 · Embrapa Amazônia Oriental (clima de Belém) · Hydro (Barcarena, Vila do Conde) · ANTAQ estudo VDC04 · Diário do Pará (Cidade Nova, Benevides, bairros valorizados, Círio) · Agência Pará (condomínio industrial PA-136) · Folha Vitória/FGR (Reserva Jardins) · UFPA (condomínios horizontais, BR-316) · Agência Gov/Agência Brasil (Círio 2025, COP30) · Loxam/Degraus, Granloc, Estado de Minas (preços).
