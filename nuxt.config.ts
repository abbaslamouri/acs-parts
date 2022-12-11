// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@use "@/assets/scss/_colors.scss" as *;',
  //       },
  //     },
  //   },
  // },

  css: ['@/assets/css/main.pcss'],
  postcss: {
    plugins: {
      'postcss-import': {},
      'postcss-preset-env': { stage: 1 },
      // tailwindcss: {},
      // autoprefixer: {},
    },
  },

  modules: [
    // '@nuxtjs/tailwindcss',
    // '@nuxtjs/color-mode',
    // '@nuxtjs/algolia',

    // Using package name (recommended usage)
    // '@nuxtjs/example',

    // Load a local module
    // './modules/example',

    // Add module with inline-options
    '@nuxt/content',
    [
      './modules/mongodb',
      {
        dbUrl: process.env.NUXT_DB_URL,
      },
    ],

    // Inline module definition
    // async (inlineOptions, nuxt) => { }
  ],

  runtimeConfig: {
    // dbUrl: '',
    // jwtSecret: '',
    // jwtMaxAge: '',
    // jwtSignupTokenMaxAge: '',
    // pwResetTokenExpiresIn: '',
    // sendgridApiKey: '',
    // sendgridSignupTemplateId: '',
    // sendgridPasswordResetTemplateId: '',
    // sendgridOrderReceivedTemplateId: '',
    // algoliaAdminApiKey: '',
    // stripeSK: '',
    // stripeWSK: '',

    public: {
      // apiUrl: '',
      // siteUrl: '',
      // doSpaceEndpoint: '',
      // maxFileUploads: '',
      // fromEmail: '',
      // fromName: '',
      // algoliaApplicationId: '',
      // stripePK: '',
    },
  },
})
