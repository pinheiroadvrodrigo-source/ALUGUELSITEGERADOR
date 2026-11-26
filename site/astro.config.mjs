import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// [TROCAR] domínio definitivo — o mesmo de src/data/site.ts
export default defineConfig({
  site: 'https://www.paraprimegeradores.com.br',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'auto' },
  integrations: [
    sitemap({ filter: (page) => !/\/(obrigado|404)$/.test(page) }),
  ],
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
});
