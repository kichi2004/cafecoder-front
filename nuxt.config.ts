import { NuxtConfig } from '@nuxt/types'
// @ts-ignore
import colors from 'vuetify/es5/util/colors'

require('dotenv').config({
  path:
    process.env.NODE_ENV === 'production'
      ? 'config/.env.prod'
      : 'config/.env.dev'
})

const nuxtConfig: NuxtConfig = {
  ssr: false,
  srcDir: 'app/',
  /*
   ** Headers of the page
   */
  head: {
    title: 'CafeCoder',
    titleTemplate: '%s | CafeCoder',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'プログラミングコンテストサイト CafeCoder'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/styles/style.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/api.ts', '~/plugins/language.ts'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build',
    [
      '@nuxtjs/google-analytics',
      {
        id: process.env.GA_TRACKING_ID
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
    [
      '@nuxtjs/google-adsense',
      {
        id: process.env.ADSENSE_ID,
        pageLevelAds: true
      }
    ]
  ],
  env: {
    API_BASE: process.env.API_BASE!
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    extend(config, ctx) {}
  },
  router: {
    middleware: 'getUser'
  }
}
nuxtConfig.vuetify = {
  customVariables: ['~/assets/variables.scss'],
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      }
    }
  }
}
nuxtConfig.markdownit = {
  injected: true,
  breaks: true,
  html: true,
  linkify: true,
  typography: true
}

export default nuxtConfig
