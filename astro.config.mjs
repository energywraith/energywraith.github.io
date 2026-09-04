import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import preact from "@astrojs/preact";
import { SITE_URL } from "./src/data/config";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tailwind(), sitemap(), robotsTxt(), icon()],
  site: SITE_URL,
  // Warm every internal link as it scrolls into view. The page transition
  // holds the water still until the new page has loaded, so an uncached fetch
  // turns into a visible pause mid-sweep.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "nord",
      wrap: false,
    },
  },
});
