// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    baseURL: '/RestaurantNuxt/',
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['./assets/css/main.css', './assets/css/font.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
