// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

/*   experimental: {
    payloadExtraction: false,
  }, */

  routeRules: {
    '/**': { prerender: true },
    '/ssg/*': { ssr: true }
  },

  nitro: {
  prerender: {
    crawlLinks: true,
    routes: ['/'],
    ignore: ['/api', '/ssg']
  }
}

})
