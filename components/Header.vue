<script setup lang="ts">
// useHead({
//   title: useRoute().meta.title ? `ACS | ${useRoute().meta.title}` : '',
//   meta: [
//     {
//       name: 'description',
//       content: useRoute().meta.description ? `${useRoute().meta.description}` : '',
//     },
//     {
//       name: 'robots',
//       content: useRoute().meta.robots ? `${useRoute().meta.robots}` : '',
//     },
//     { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
//   ],
//   bodyAttrs: {
//     class: 'test',
//   },
// })

const navItems = ref([
  { routeName: 'index', title: 'Home' },
  { routeName: 'index', title: 'Our parts' },
  { routeName: 'index', title: 'Capabilities' },
  { routeName: 'index', title: 'News' },
  { routeName: 'about', title: 'About Us' },
])

const burgerToggleVisible = ref(false)
const burgerToggleExpanded = ref(false)

const toggleMobileNav = (windowWidth: any, navBreakPoint: any) => {
  burgerToggleExpanded.value = false
  if ((burgerToggleVisible.value = windowWidth < Number(navBreakPoint) * 16)) {
    burgerToggleVisible.value = true
    document.documentElement.style.setProperty('--hero-top-padding', '3em')
  } else {
    burgerToggleVisible.value = false
    document.documentElement.style.setProperty('--hero-top-padding', '7em')
  }

  // ********
  // burgerToggleVisible.value = windowWidth < Number(navBreakPoint) * 16 ? true : false

  // const headerButtonSpans = headerRef.value.querySelectorAll('.header-button-span')
  // burgerToggleRef.value.setAttribute('aria-expanded', 'false')
  // if (windowWidth < Number(navBreakPoint) * 16) {
  //   headerRef.value.setAttribute('data-mobilenav', 'true')
  //   burgerToggleRef.value.setAttribute('data-enabled', 'true')
  //   for (let i = 0; i < headerButtonSpans.length; i++) {
  //     headerButtonSpans[i].classList.add('visually-hidden')
  //   }
  // } else {
  //   headerRef.value.removeAttribute('data-mobilenav')
  //   burgerToggleRef.value.setAttribute('data-enabled', 'false')
  //   for (let i = 0; i < headerButtonSpans.length; i++) {
  //     headerButtonSpans[i].classList.remove('visually-hidden')
  //   }
  // }
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

  // })
})

const toggleNavigation = () => {
  burgerToggleExpanded.value = !burgerToggleExpanded.value
  // const headerHeight = headerRef.value.getBoundingClientRect().height
  // console.log('KKKK', headerHeight)
  // document.documentElement.style.setProperty('--menu-bar-top', headerHeight)
  // if (
  //   burgerToggleRef.value.getAttribute('aria-expanded') == 'false' ||
  //   burgerToggleRef.value.getAttribute('aria-expanded') == null
  // ) {
  //   burgerToggleRef.value.setAttribute('aria-expanded', 'true')
  //   burgerToggleRef.value.setAttribute('aria-label', 'Close menu')
  // } else {
  //   burgerToggleRef.value.setAttribute('aria-expanded', 'false')
  //   burgerToggleRef.value.setAttribute('aria-label', 'Open menu')
  // }
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

watch(
  () => useRoute(),
  (currentVal, oldValue) => {
    // burgerToggleExpanded.value = !burgerToggleExpanded.value
  },
  { deep: true }
)
</script>

<template>
  <div class="site-header" role="banner">
    <SkipLink />
    <div class="nav-wrapper">
      <div class="top">
        <div class="top__inner container">
          <div class="branding">
            <Nuxt-link :to="{ name: 'index' }" aria-label="Aviation Component Solutions">
              <img src="/images/logo-transparent.svg" alt="ACS Logo Home Page" />
            </Nuxt-link>
          </div>
          <div class="customer">
            <div class="search">
              <button class="btn btn-header search">
                <IconsSearch aria-hidden="true" />
                <span class="" v-if="!burgerToggleVisible">Search Products</span>
              </button>
              <input type="text" placeholder="Search products" aria-label="Search Products" />
            </div>
            <button class="customer btn btn-header">
              <IconsPerson aria-hidden="true" />
              <span class="" v-if="!burgerToggleVisible">Sign in / Create Account</span>
            </button>
            <button class="bag btn btn-header">
              <IconsBag aria-hidden="true" />
              <span class="" v-if="!burgerToggleVisible">Your Bag</span>
            </button>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="">
          <transition name="burger-toggle">
            <button
              class="btn burger-toggle"
              type="button"
              :data-enabled="burgerToggleVisible"
              :aria-expanded="burgerToggleExpanded"
              :aria-label="burgerToggleExpanded ? 'Close menu' : 'Open menu'"
              v-if="burgerToggleVisible"
              @click="toggleNavigation"
            >
              <span class="burger-bar"></span>
            </button>
          </transition>
          <transition name="site-nav">
            <nav
              class=""
              aria-label="primary"
              v-if="!burgerToggleVisible || (burgerToggleVisible && burgerToggleExpanded)"
            >
              <ul class="container" role="list">
                <li v-for="(item, index) in navItems" :index="`menu-item-${index}`">
                  <Nuxt-link :to="{ name: item.routeName }" @click="burgerToggleExpanded = !burgerToggleExpanded">
                    {{ item.title }}
                  </Nuxt-link>
                </li>
              </ul>
            </nav>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// .branding {
//   img {
//     font-size: var(--font-size-5);
//     height: 2rem;
//   }
// }
</style>
