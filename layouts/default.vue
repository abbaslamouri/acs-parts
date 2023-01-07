<script setup lang="ts">
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

// const currentPage = ref('index')
const headerMobileAttr = ref()
const headerScrollAttr = ref()
const jsActive = ref(false)
const currentPage = computed(() => useRoute().name)
// currentPage.value = useRoute().name

// const burgerToggleRef = ref()
// const router = useRouter()
// const headerRef = ref()

// const currentRoute = computed(() => useRoute().name)
// const toggleMobileNav = (windowWidth: any, navBreakPoint: any) => {
//   const headerButtonSpans = headerRef.value.querySelectorAll('.header-button-span')
//   burgerToggleRef.value.setAttribute('aria-expanded', 'false')

//   if (windowWidth < Number(navBreakPoint) * 16) {
//     headerRef.value.setAttribute('data-mobilenav', 'true')
//     burgerToggleRef.value.setAttribute('data-enabled', 'true')
//     for (let i = 0; i < headerButtonSpans.length; i++) {
//       headerButtonSpans[i].classList.add('visually-hidden')
//     }
//   } else {
//     headerRef.value.removeAttribute('data-mobilenav')
//     burgerToggleRef.value.setAttribute('data-enabled', 'false')
//     for (let i = 0; i < headerButtonSpans.length; i++) {
//       headerButtonSpans[i].classList.remove('visually-hidden')
//     }
//   }
// }

const toggleHeaderMobileAttr = (windowWidth: any, navBreakPoint: any) => {
  headerMobileAttr.value = windowWidth < Number(navBreakPoint) * 16 ? true : false
  // burgerToggleExpanded.value = false
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
  jsActive.value = true
  toggleHeaderMobileAttr(
    document.documentElement.clientWidth,
    window.getComputedStyle(document.body).getPropertyValue('--nav-breakpoint')
  )
  window.addEventListener('resize', () => {
    toggleHeaderMobileAttr(
      document.documentElement.clientWidth,
      window.getComputedStyle(document.body).getPropertyValue('--nav-breakpoint')
    )
  })

  window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    if (window.scrollY > 0) {
      headerScrollAttr.value = true
    } else {
      headerScrollAttr.value = false
      // headerRef.value.removeAttribute('data-sticky')
    }
  })
  // let headerHeight = headerRef.value.getBoundingClientRect().height
  // window.addEventListener('scroll', () => {
  //   console.log(window.scrollY)
  //   // if (window.scrollY > 0) {
  //   headerHeight = headerRef.value.getBoundingClientRect().height
  //   console.log('KKKK', headerHeight)
  //   console.log(window.getComputedStyle(document.body).getPropertyValue('--header-height'))
  //   // headerRef.value.setAttribute('data-sticky', true)
  //   // } else {
  //   // headerRef.value.removeAttribute('data-sticky')
  //   // }
  // })
  // if (useRoute().name === 'index') headerRef.value.setAttribute('data-name', 'home')
  // else headerRef.value.removeAttribute('data-name')
  // console.log(useRouter().currentRoute.value.name)
  // console.log(useRoute().name)
  // console.log(window.getComputedStyle(document.body).getPropertyValue('--nav-breakpoint'))
  // console.log(document.documentElement.clientWidth)
  // console.log(burgerToggleRef.value)
  // console.log(headerRef.value)
  // toggleMobileNav(
  //   document.documentElement.clientWidth,
  //   window.getComputedStyle(document.body).getPropertyValue('--nav-breakpoint')
  // )
  // window.addEventListener('resize', () => {
  //   toggleMobileNav(
  //     document.documentElement.clientWidth,
  //     window.getComputedStyle(document.body).getPropertyValue('--nav-breakpoint')
  //   )
  // })
  // viewportWidth.value = document.documentElement.clientWidth
  // console.log(viewportWidth.value)
  // toggleMobileNav(
  //   document.documentElement.clientWidth,
  //   window.getComputedStyle(document.body).getPropertyValue('--nav-breakpoint')
  // )
})

// const toggleNavigation = () => {
//   // const headerHeight = headerRef.value.getBoundingClientRect().height
//   // console.log('KKKK', headerHeight)

//   // document.documentElement.style.setProperty('--menu-bar-top', headerHeight)
//   if (
//     burgerToggleRef.value.getAttribute('aria-expanded') == 'false' ||
//     burgerToggleRef.value.getAttribute('aria-expanded') == null
//   ) {
//     burgerToggleRef.value.setAttribute('aria-expanded', 'true')
//     burgerToggleRef.value.setAttribute('aria-label', 'Close menu')
//   } else {
//     burgerToggleRef.value.setAttribute('aria-expanded', 'false')
//     burgerToggleRef.value.setAttribute('aria-label', 'Open menu')
//   }
// }

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
  <div class="h-screen" id="main-container">
    <header
      :data-route="jsActive ? currentPage : null"
      :data-mobilenav="headerMobileAttr"
      :data-scroll="headerScrollAttr"
    >
      <Header />
    </header>
    <main id="main" tabindex="-1">
      <slot />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style lang="scss" scoped></style>
