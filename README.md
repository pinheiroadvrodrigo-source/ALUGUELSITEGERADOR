# ParaPrime — Aluguel de Geradores (site)

```
paraprime/
├── site/        ← o site (Astro). Logo e favicon já aplicados.
├── wireframe/   ← padrão de páginas da skill SEO Local BR (abra padrao-de-paginas.dc.html no navegador)
└── docs/        ← blueprint, metas/URLs, mapa de imagens, tracking e operação
```

## Rodar e testar (da pasta do projeto)

Precisa do Node.js 20 ou mais novo (https://nodejs.org).

```bash
npm install        # instala as dependências do site
npm run dev        # abre em http://localhost:4321
npm run build      # gera o site final em site/dist
npm run check      # auditoria SEO do build (H1, metas, links, tel:, imagens)
npm run preview    # serve o build final
```

## Onde trocar as coisas
- **WhatsApp, domínio, e-mail, CNPJ, endereço, GTM:** `site/src/data/site.ts`
- **Textos dos serviços:** `site/src/data/servicos.ts`
- **Textos das cidades:** `site/src/data/localidades.ts`
- **Cores e fontes:** `site/src/styles/tokens.css`
- **Fotos:** `site/public/img/fotos/` (mesmo nome de arquivo — ver `docs/mapa-de-imagens.md`)
