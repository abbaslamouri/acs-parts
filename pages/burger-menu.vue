<script setup lang="ts">
const navigationRef = ref()
const menuTriggerRef = ref()
const navMenuRef = ref()

onMounted(() => {
  // if (process.client) {
  toggleMobileNav(
    document.documentElement.clientWidth,
    window.getComputedStyle(document.body).getPropertyValue('--breakpoint')
  )
  //   console.log('XXXXX', document.documentElement.clientWidth)
  // }

  window.addEventListener('resize', () => {
    const windowWidth = document.documentElement.clientWidth
    const breakPoint = window
      .getComputedStyle(document.body)
      .getPropertyValue('--breakpoint')

    toggleMobileNav(windowWidth, breakPoint)
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

const toggleMobileNav = (windowWidth: any, breakPoint: any) => {
  if (windowWidth < Number(breakPoint) * 16) {
    //   console.log('Less')
    navMenuRef.value.setAttribute('data-navmenu', 'true')
  } else {
    navMenuRef.value.setAttribute('data-navmenu', 'false')
    //   console.log('More')
    //   navigationRef.value.setAttribute('data-labe', 'desktop')
  }
}

const showMobileNav = () => {
  if (menuTriggerRef.value.getAttribute('aria-expanded') == 'true') {
    menuTriggerRef.value.setAttribute('aria-expanded', 'false')
    menuTriggerRef.value.setAttribute('aria-label', 'Open menu')
    navigationRef.value.setAttribute('data-mobile', 'false')
  } else {
    menuTriggerRef.value.setAttribute('aria-expanded', 'true')
    menuTriggerRef.value.setAttribute('aria-label', 'Close menu')
    navigationRef.value.setAttribute('data-mobile', 'true')
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
</script>

<template>
  <div>
    <header class="site-head" role="banner">
      <a href="#main-content" class="skip-link">Skip to content</a>
      <div class="wrapper">
        <div class="site-head__inner">
          <a href="/" aria-label="ACME home" class="site-head__brand">
            <img src="images/logo.svg" alt="ACME logo" />
          </a>
          <div class="nav-menu" max-width="600" ref="navMenuRef">
            <nav
              class="navigation"
              aria-label="primary"
              role="navigation"
              ref="navigationRef"
            >
              <ul role="list">
                <li>
                  <a href="#">Home</a>
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
            <button
              class="burger-menu"
              type="button"
              aria-label="Open menu"
              aria-expanded="false"
              ref="menuTriggerRef"
              @click="showMobileNav"
            >
              <span class="burger-menu-bar"></span>
            </button>
          </div>
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
