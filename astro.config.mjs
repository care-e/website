// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Production URL and path prefix. Defaults to the GitHub Pages project URL; once a custom
  // domain points at GitHub Pages, set SITE_URL=https://care-e.ai and BASE_PATH=/ (see
  // .github/workflows/deploy.yml) — no code changes needed.
  site: process.env.SITE_URL || 'https://care-e.github.io',
  base: process.env.BASE_PATH || '/website',
  trailingSlash: 'ignore',
  prefetch: true,
  integrations: [sitemap()],
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Montserrat',
      cssVariable: '--font-montserrat',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
    },
    {
      provider: fontProviders.google(),
      name: 'Mulish',
      cssVariable: '--font-mulish-family',
      weights: [600],
      styles: ['normal'],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
