import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Domaine de production : https://azomedia.site (hébergé sur Netlify)
export default defineConfig({
  site: "https://azomedia.site",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
