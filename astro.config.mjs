import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.PUBLIC_SITE_URL || 'https://ministry-transformation.github.io';

export default defineConfig({
  site,
  base: process.env.PUBLIC_BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'never',
  vite: { plugins: [tailwindcss()] },
});

