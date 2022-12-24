<script setup lang="ts">
const navigationRef = ref()
const burgerMenuRef = ref()
// const headerBarRef = ref()
const headerRef = ref()

onMounted(() => {
  // window.addEventListener('resize', () => {
  //   console.log(navigationRef.value.getBoundingClientRect().height)
  // })
  // if (process.client) {
  toggleMobileNav(
    document.documentElement.clientWidth,
    window.getComputedStyle(document.body).getPropertyValue('--nav-breakpoint')
  )
  //   console.log('XXXXX', document.documentElement.clientWidth)
  // }
  window.addEventListener('resize', () => {
    console.log('here')
    // const windowWidth =
    // const breakPoint =
    toggleMobileNav(
      document.documentElement.clientWidth,
      window
        .getComputedStyle(document.body)
        .getPropertyValue('--nav-breakpoint')
    )
    // console.log(Number(breakPoint) * 16)
    // console.log(windowWidth)
    // if (windowWidth < Number(breakPoint) * 16) {
    //   //   console.log('Less')
    //   navMenuRef.value.setAttribute('data-navmenu', 'true')
    // } else {
    //   navMenuRef.value.setAttribute('data-navmenu', 'false')
    //   //   console.log('More')
    //   //   navigationRef.value.setAttribute('data-labe', 'desktop')
    // }
  })
  //   const observer = new ResizeObserver((entries) => {
  //     console.log(entries[0])
  //   })
  //   observer.observe(navigationRef.value)
})

const toggleMobileNav = (windowWidth: any, navBreakPoint: any) => {
  if (windowWidth < Number(navBreakPoint) * 16) {
    burgerMenuRef.value.setAttribute('data-enabled', 'true')
  } else {
    burgerMenuRef.value.setAttribute('data-enabled', 'false')
    //   console.log('More')
    //   navigationRef.value.setAttribute('data-labe', 'desktop')
  }
}

const showNavigation = () => {
  const headerHeight = headerRef.value.getBoundingClientRect().height
  console.log('KKKK', headerHeight)

  document.documentElement.style.setProperty('--menu-bar-top', headerHeight)
  if (
    burgerMenuRef.value.getAttribute('aria-expanded') == 'false' ||
    burgerMenuRef.value.getAttribute('aria-expanded') == null
  ) {
    burgerMenuRef.value.setAttribute('aria-expanded', 'true')
    burgerMenuRef.value.setAttribute('aria-label', 'Close menu')
    // navigationRef.value.setAttribute('data-mobile', 'false')
  } else {
    burgerMenuRef.value.setAttribute('aria-expanded', 'false')
    burgerMenuRef.value.setAttribute('aria-label', 'Open menu')
    // navigationRef.value.setAttribute('data-mobile', 'true')
  }
  // trigger.value.getAttribute('aria-expanded') == false
  //   ) {
  //     panel.value.style.setProperty(
  //       '--panel-max-height',
  //       `${panelInner.value.getBoundingClientRect().height}px`
  //     )
  //     trigger.value.setAttribute('aria-expanded', 'true')
  //     panel.value.removeAttribute('inert')
  //   } else {
  //     panel.value.style.setProperty('--panel-max-height', 0)
  //     trigger.value.setAttribute('aria-expanded', 'false')
  //     panel.value.setAttribute('inert', '')
  //   }
}

const hideNavigation = () => {
  // const headerHeight = headerRef.value.getBoundingClientRect().height
  // console.log('KKKK', headerHeight)

  // document.documentElement.style.setProperty('--menu-bar-top', headerHeight)
  // if (
  //   burgerMenuRef.value.getAttribute('aria-expanded') == 'false' ||
  //   burgerMenuRef.value.getAttribute('aria-expanded') == null
  // ) {
  //   burgerMenuRef.value.setAttribute('aria-expanded', 'true')
  //   burgerMenuRef.value.setAttribute('aria-label', 'Close menu')
  //   // navigationRef.value.setAttribute('data-mobile', 'false')
  // } else {
  burgerMenuRef.value.setAttribute('aria-expanded', 'false')
  burgerMenuRef.value.setAttribute('aria-label', 'Open menu')
  // navigationRef.value.setAttribute('data-mobile', 'true')
  // }
  // trigger.value.getAttribute('aria-expanded') == false
}
</script>

<template>
  <div>
    <header class="header" role="banner" ref="headerRef">
      <a href="#main-content" class="skip-link">Skip to content</a>
      <div class="wrapper">
        <div class="header-bar">
          <a href="/" aria-label="ACME home" class="branding">
            <img src="/images/logo.svg" alt="ACME logo" />
          </a>
          <!-- <div class="nav-menu" max-width="600" ref="navMenuRef"> -->
          <button
            class="burger-menu"
            type="button"
            hidden
            ref="burgerMenuRef"
            @click="showNavigation"
          >
            <span class="burger-menu-bar"></span>
          </button>
          <nav
            class="navigation"
            aria-label="primary"
            role="navigation"
            ref="navigationRef"
          >
            <ul role="list">
              <li>
                <a href="#" @click="hideNavigation">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Our Work</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Your account</a>
              </li>
            </ul>
          </nav>

          <!-- </div> -->
        </div>
      </div>
    </header>
    <main id="main-content" tabindex="-1" class="wrapper">
      <article class="[ post ] [ flow ]">
        <h1>A responsive, progressively enhanced burger menu</h1>
        <p>
          Burger menus are a relic of responsive design that no matter what your
          opinion of them is, they continue to be a dominant design pattern.
          They’re very good at preserving often-limited horizontal space, but
          they also, more often than not, are built in a user-hostile,
          non-accessible fashion.
        </p>
        <p>
          <a
            href="https://piccalil.li/premium/build-a-fully-responsive-progressively-enhanced-burger-menu"
            >In this premium tutorial</a
          >, we’re going to build a burger menu from the ground up, using
          progressive enhancement, `ResizeObserver`, `Proxy` state and of
          course, super-solid HTML and CSS that pull from the CUBE CSS
          principles.
        </p>
        <p>
          This whole page is what you’re building in the tutorial 👆.
          <a
            href="https://piccalil.li/premium/build-a-fully-responsive-progressively-enhanced-burger-menu"
            >Let’s dive in</a
          >
        </p>
      </article>
    </main>
  </div>
</template>

<style scoped></style>
