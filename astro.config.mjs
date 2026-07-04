// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// `site` must match the real deployment origin so canonical URLs,
// hreflang links and the generated sitemap point to the correct domain.
// Replace this placeholder with your own domain before deploying.
export default defineConfig({
  site: 'https://example.com',
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          zh: 'zh-CN',
        },
      },
    }),
  ],
});
