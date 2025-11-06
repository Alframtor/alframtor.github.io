// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  base: '/Alframtor.github.io',
	site: 'https://Alframtor.github.io',
	integrations: [mdx(), sitemap(), icon()],
  redirects: {
    '/': '/blog'
  }
});
