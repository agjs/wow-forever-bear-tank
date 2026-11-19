import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://agjs.github.io",
  base: "/wow-forever-bear-tank",
  trailingSlash: "always",
  integrations: [react(), sitemap()],
  vite: { plugins: [tailwindcss()] },
});
