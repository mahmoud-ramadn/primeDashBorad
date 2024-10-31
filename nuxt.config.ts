import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@element-plus/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@primevue/nuxt-module",
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false || "none",
        },
      },
    },
  },
  plugins: ["~/plugins/primevue.js"],
});
