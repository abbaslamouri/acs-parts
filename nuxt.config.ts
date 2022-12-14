// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      // charset: 'utf-16',
      // viewport: 'width=device-width, initial-scale=1',
      title: 'Aviation Component Solutions (ACS) - A Leading Supplier of PMA Parts',
      meta: [
        {
          name: 'description',
          content:
            'ACS seeks not only to provide the best pricing in the industry, but to create value by stocking 100% of our inventory for next day delivery, offering eCommerce solutions for online customers, utilizing the latest data management technology, and offering the latest manufacturing / design solutions <a href="https://acs-parts.com">Browse ACS Catalog</a>.',
        },
        // {
        //   name: 'robots',
        //   content: 'index, follow',
        // },
      ],

      // {
      //   name: 'canonical',
      //   content:'href="http://example.com/"'
      // },
    },
  },

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
    // '@sidebase/nuxt-auth',
    // '@nuxtjs/tailwindcss',
    // '@nuxtjs/color-mode',
    // '@nuxtjs/algolia',

    // Using package name (recommended usage)
    // '@nuxtjs/example',

    // Load a local module
    // './modules/example',

    // Add module with inline-options
    '@nuxt/content',
    ['./modules/mongodb', { dbUrl: process.env.NUXT_DB_URL }],

    // Inline module definition
    // async (inlineOptions, nuxt) => { }
  ],
  // auth: {
  //   // The module is enabled. Change this to disable the module
  //   isEnabled: true,
  //   // The origin is set to the development origin. Change this when deploying to production
  //   origin: 'http://localhost:3000',
  //   // The base path to the authentication endpoints. Change this if you want to add your auth-endpoints at a non-default location
  //   basePath: '/api/v1/auth',
  //   // Whether to periodically refresh the session. Change this to `true` for a refresh every seconds or set this to a number like `5000` for a refresh every 5000 milliseconds (aka: 5 seconds)
  //   enableSessionRefreshPeriodically: false,
  //   // Whether to refresh the session whenever a window focus event happens, i.e, when your user refocuses the window. Set this to `false` to turn this off
  //   enableSessionRefreshOnWindowFocus: true,
  //   // Whether to add a global authentication middleware that will protect all pages without exclusion
  //   enableGlobalAppMiddleware: false,
  // },

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
