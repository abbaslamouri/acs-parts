<script setup lang="ts">
import { isTSUndefinedKeyword } from '@babel/types'

useHead({
  title: useRoute().meta.title ? `ACS | ${useRoute().meta.title}` : '',
  meta: [
    {
      name: 'description',
      content: useRoute().meta.description ? `${useRoute().meta.description}` : '',
    },
    {
      name: 'robots',
      content: useRoute().meta.robots ? `${useRoute().meta.robots}` : '',
    },
    { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
  ],
  bodyAttrs: {
    class: 'test',
  },
})

const burgerToggleRef = ref()
const headerRef = ref()

const toggleMobileNav = (windowWidth: any, navBreakPoint: any) => {
  const headerButtonSpans = headerRef.value.querySelectorAll('.header-button-span')
  burgerToggleRef.value.setAttribute('aria-expanded', 'false')

  if (windowWidth < Number(navBreakPoint) * 16) {
    headerRef.value.setAttribute('data-mobilenav', 'true')
    burgerToggleRef.value.setAttribute('data-enabled', 'true')
    for (let i = 0; i < headerButtonSpans.length; i++) {
      headerButtonSpans[i].classList.add('visually-hidden')
    }
  } else {
    headerRef.value.removeAttribute('data-mobilenav')
    burgerToggleRef.value.setAttribute('data-enabled', 'false')
    for (let i = 0; i < headerButtonSpans.length; i++) {
      headerButtonSpans[i].classList.remove('visually-hidden')
    }
  }
}

onMounted(() => {
  // console.log(window.getComputedStyle(document.body).getPropertyValue('--nav-breakpoint'))
  // console.log(document.documentElement.clientWidth)
  // console.log(burgerToggleRef.value)
  // console.log(headerRef.value)
  toggleMobileNav(
    document.documentElement.clientWidth,
    window.getComputedStyle(document.body).getPropertyValue('--nav-breakpoint')
  )
  window.addEventListener('resize', () => {
    toggleMobileNav(
      document.documentElement.clientWidth,
      window.getComputedStyle(document.body).getPropertyValue('--nav-breakpoint')
    )
  })
  // viewportWidth.value = document.documentElement.clientWidth
  // console.log(viewportWidth.value)
  // toggleMobileNav(
  //   document.documentElement.clientWidth,
  //   window.getComputedStyle(document.body).getPropertyValue('--nav-breakpoint')
  // )

  // window.addEventListener('scroll', () => {
  //   console.log(window.scrollY)
  //   if (window.scrollY > 0) {
  //     headerRef.value.setAttribute('data-sticky', true)
  //   } else {
  //     headerRef.value.removeAttribute('data-sticky')
  //   }
  // })
})

const toggleNavigation = () => {
  // const headerHeight = headerRef.value.getBoundingClientRect().height
  // console.log('KKKK', headerHeight)

  // document.documentElement.style.setProperty('--menu-bar-top', headerHeight)
  if (
    burgerToggleRef.value.getAttribute('aria-expanded') == 'false' ||
    burgerToggleRef.value.getAttribute('aria-expanded') == null
  ) {
    burgerToggleRef.value.setAttribute('aria-expanded', 'true')
    burgerToggleRef.value.setAttribute('aria-label', 'Close menu')
  } else {
    burgerToggleRef.value.setAttribute('aria-expanded', 'false')
    burgerToggleRef.value.setAttribute('aria-label', 'Open menu')
  }
}

// watch(
//   () => viewportWidth,
//   (currentVal, oldValue) => {
//     console.log(currentVal)
//     console.log(oldValue)
//   },
//   { deep: true }
// )

// const featuresRef = ref()

// const setFeaturesRef = () => {
//   console.log('JJJJJJ')
//   if (featuresRef.value.getBoundingClientRect().width > 46 * 16) featuresRef.value.setAttribute('data-layout', '3')
//   else featuresRef.value.removeAttribute('data-layout')
// }

// onMounted(() => {
//   setFeaturesRef()
//   window.addEventListener('resize', () => {
//     setFeaturesRef()
//   })
// })

// const navigationRef = ref()
// const burgerMenuRef = ref()
// // const headerBarRef = ref()
// const headerRef = ref()

// onMounted(() => {

//   window.addEventListener('resize', () => {
//     console.log('here')

//     toggleMobileNav(
//       document.documentElement.clientWidth,
//       window.getComputedStyle(document.body).getPropertyValue('--nav-breakpoint')
//     )

//   })

// })

// const showNavigation = () => {
//   const headerHeight = headerRef.value.getBoundingClientRect().height
//   console.log('KKKK', headerHeight)

//   document.documentElement.style.setProperty('--menu-bar-top', headerHeight)
//   if (
//     burgerMenuRef.value.getAttribute('aria-expanded') == 'false' ||
//     burgerMenuRef.value.getAttribute('aria-expanded') == null
//   ) {
//     burgerMenuRef.value.setAttribute('aria-expanded', 'true')
//     burgerMenuRef.value.setAttribute('aria-label', 'Close menu')
//   } else {
//     burgerMenuRef.value.setAttribute('aria-expanded', 'false')
//     burgerMenuRef.value.setAttribute('aria-label', 'Open menu')
//   }

// }

// const hideNavigation = () => {

//   burgerMenuRef.value.setAttribute('aria-expanded', 'false')
//   burgerMenuRef.value.setAttribute('aria-label', 'Open menu')

// }
</script>

<template>
  <div class="header full-bleed" id="header" role="banner" ref="headerRef">
    <SkipLink />
    <div class="nav-wrapper">
      <div class="top">
        <div class="branding">
          <Nuxt-link :to="{ name: 'index' }" aria-label="Aviation Component Solutions">
            <img src="/images/logo-transparent.svg" alt="ACS Logo Home Page" />
          </Nuxt-link>
        </div>
        <div class="search-customer-bag">
          <div class="search">
            <button class="btn btn-header search">
              <IconsSearch aria-hidden="true" />
              <span class="header-button-span">Search Products</span>
            </button>
            <input type="text" placeholder="Search products" aria-label="Search Products" />
          </div>
          <button class="customer btn btn-header">
            <IconsPerson aria-hidden="true" />
            <span class="header-button-span">Sign in / Create Account</span>
          </button>
          <button class="bag btn btn-header">
            <IconsBag aria-hidden="true" />
            <span class="header-button-span">Your Bag</span>
          </button>
        </div>
      </div>
      <div class="bottom full-bleed">
        <button class="btn burger-toggle" type="button" hidden ref="burgerToggleRef" @click="toggleNavigation">
          <span class="burger-bar"></span>
        </button>
        <nav class="primary-navigation" aria-label="primary">
          <ul role="list">
            <li>
              <Nuxt-link :to="{ name: 'index' }">Home</Nuxt-link>
            </li>
            <li>
              <Nuxt-link :to="{ name: 'index' }">Our Parts</Nuxt-link>
            </li>
            <li>
              <Nuxt-link :to="{ name: 'index' }">Capabilities</Nuxt-link>
            </li>
            <li>
              <Nuxt-link :to="{ name: 'index' }">News</Nuxt-link>
            </li>
            <li>
              <Nuxt-link :to="{ name: 'about' }">About Us</Nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
