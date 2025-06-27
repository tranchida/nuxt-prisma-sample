// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@prisma/nuxt', '@nuxtjs/tailwindcss', '@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'black', // default theme
    fallback: 'light', // fallback theme
    classSuffix: ''
  },
  // prisma: {
  //   schema: './prisma/schema.prisma',
  // },
})