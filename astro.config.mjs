import { defineConfig } from "astro/config";
import Unocss from "unocss/astro";

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [Unocss({}), vue()]
});