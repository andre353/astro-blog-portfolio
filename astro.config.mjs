import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-blog-portfolio.netlify.app',
  // rss needs this field
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), sitemap(), react(), partytown()]
});