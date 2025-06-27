// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@prisma/nuxt', '@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'black', // default theme
    fallback: 'light', // fallback theme
    classSuffix: ''
  },
  ui: {
    fonts: false
  }
  // prisma: {
  //   schema: './prisma/schema.prisma',
  // },
})