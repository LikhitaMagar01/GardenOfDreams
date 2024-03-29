
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'
      ],
      tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config',
        exposeConfig: false,
        injectPosition: 0,
        viewer: true,
      },
      colorMode: {
        classSuffix: ''
      },
      meta: {
        title: "Garden of Dreams"
      }
})
