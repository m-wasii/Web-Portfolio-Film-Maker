// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://moin-bin-umair-rebuild.pages.dev',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
