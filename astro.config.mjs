import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Domaine final visé après migration : https://azomedia.site
// En attendant, le site est servi sur digital.azomedia.site
export default defineConfig({
  site: "https://azomedia.site",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
