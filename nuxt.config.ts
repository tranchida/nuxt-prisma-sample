// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@prisma/nuxt', '@nuxtjs/tailwindcss'],

  // prisma: {
  //   schema: './prisma/schema.prisma',
  // },
})