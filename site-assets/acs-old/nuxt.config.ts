import { defineNuxtConfig } from 'nuxt'
import tailwindConfig from './tailwind.config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // build: {
  //   postcss: {
  //     postcssOptions: {
  //       plugins: {
  //         tailwindcss: {},
  //         autoprefixer: {},
  //       },
  //     },
  //   },
  // },
  build: {
    transpile: ['@heroicons/vue'],
  },

  // css: ['@/assets/css/main.css'],

  // buildModules: ['nuxt-windicss'],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/algolia',

    // Using package name (recommended usage)
    // '@nuxtjs/example',

    // Load a local module
    // './modules/example',

    // Add module with inline-options
    [
      './modules/mongo',
      {
        dbUrl: process.env.NUXT_DB_URL,
      },
    ],

    // Inline module definition
    // async (inlineOptions, nuxt) => { }
  ],

  colorMode: {
    classSuffix: '',
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    // config: {},
    injectPosition: 0,
    viewer: true,
  },

  algolia: {
    apiKey: '37c1b3c2232888ee61415ccec4e7b876',
    applicationId: 'BONIWCDS4R',
    instantSearch: {
      theme: 'algolia',
    },
    lite: true,
  },

  runtimeConfig: {
    dbUrl: '',
    jwtSecret: '',
    jwtMaxAge: '',
    jwtSignupTokenMaxAge: '',
    pwResetTokenExpiresIn: '',
    sendgridApiKey: '',
    sendgridSignupTemplateId: '',
    sendgridPasswordResetTemplateId: '',
    sendgridOrderReceivedTemplateId: '',
    algoliaAdminApiKey: '',
    stripeSK: '',
    stripeWSK: '',

    public: {
      apiUrl: '',
      siteUrl: '',
      doSpaceEndpoint: '',
      maxFileUploads: '',
      fromEmail: '',
      fromName: '',
      algoliaApplicationId: '',
      stripePK: '',
    },
  },
})
