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

const burgerToggleRef = ref()
const headerRef = ref()

const toggleMobileNav = (windowWidth: any, navBreakPoint: any) => {
  if (windowWidth < Number(navBreakPoint) * 16) {
    burgerToggleRef.value.setAttribute('data-enabled', 'true')
    headerRef.value.setAttribute('data-mobilenav', 'true')
  } else {
    burgerToggleRef.value.setAttribute('data-enabled', 'false')
    headerRef.value.removeAttribute('data-mobilenav')
  }
}

onMounted(() => {
  console.log(window.getComputedStyle(document.body).getPropertyValue('--nav-breakpoint'))
  console.log(document.documentElement.clientWidth)
  console.log(burgerToggleRef.value)
  console.log(headerRef.value)
  toggleMobileNav(
    document.documentElement.clientWidth,
    window.getComputedStyle(document.body).getPropertyValue('--nav-breakpoint')
  )
  window.addEventListener('resize', () => {
    console.log('here')

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
  <div class="layout h-screen" id="main-container">
    <header class="header full-bleed" id="header" role="banner" ref="headerRef">
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
              <button class="btn">
                <IconsSearch />
                <span>Search Products</span>
              </button>
              <!-- <div class="search"> -->
              <input type="text" placeholder="Search products" aria-label="Search Products" />
              <!-- </div> -->
            </div>
            <button>Sign in / Create Account</button>
            <button>Your Bag</button>
          </div>
        </div>
        <div class="bottom full-bleed">
          <!-- <div class=""> -->
          <button class="btn burger-toggle" type="button" ref="burgerToggleRef" @click="toggleNavigation">
            <span class="burger-bar"></span>
            <!-- <span>Open sub menu</span> -->
          </button>
          <!-- </div> -->
          <nav class="primary-navigation" aria-label="primary">
            <ul role="list">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Our Parts</a>
              </li>
              <li>
                <a href="#">Capabilities</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <main id="main" tabindex="-1">
      <slot />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background-color: var(--color-on-primary-container);
  color: var(--color-primary-container);
  padding: 1rem 1rem 0 1rem;

  .nav-wrapper {
    position: relative;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .branding {
      img {
        width: auto;
        height: 0.8em;
        font-size: var(--size-step-2);
        transition: all var(--transition-fade);
      }
    }

    .search-customer-bag {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .search {
      display: flex;
      justify-content: space-between;
      align-items: center;

      input {
        display: none;
      }

      button {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }

  .bottom {
    margin-top: var(--space-s);
    background-color: var(--color-on-background);

    .burger-toggle {
      position: relative;
      border: none;
      background: none;
      display: none;
      cursor: pointer;
      .burger-bar::before,
      .burger-bar::after {
        content: '';
        position: absolute;
      }

      .burger-bar,
      .burger-bar::before,
      .burger-bar::after {
        display: block;
        width: 30px;
        height: 3px;
        background: white;
        transition: transform 250ms ease-in-out;
      }

      .burger-bar::before {
        top: 8px;
      }

      .burger-bar::after {
        bottom: 8px;
      }
    }

    nav {
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;

        li {
          flex: 1;
          min-width: 6rem;

          &:not(:last-of-type) {
            border-right: 1px solid var(--color-secondary);
          }
        }

        a {
          font-weight: var(--font-bold);
          text-transform: uppercase;
          text-decoration: none;
          padding-block: var(--space-s);
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: var(--size-step--1);

          &:hover {
            background-color: var(--color-primary-container);
            color: var(--color-on-primary-container);
          }
        }
      }
    }
  }

  &[data-mobilenav] {
    padding: 1rem;
    .top {
      .branding {
        img {
          height: 0.7em;
          margin-inline-start: var(--space-xl);
        }
      }
    }

    .bottom {
      margin-top: 0;
      .burger-toggle {
        &[data-enabled] {
          position: absolute;
          top: 0;
          left: 0.1rem;
          display: block;
          z-index: 1;
          height: 2.25rem;
        }

        &[data-enabled='false'] {
          visibility: hidden;
          opacity: 0;
          position: absolute;
        }

        &[data-enabled='true'] {
          visibility: visible;
          opacity: 1;
        }

        &[data-enabled='true'][aria-expanded='true'] {
          left: 95%;
          & .burger-bar {
            background: transparent;
            border-color: transparent;
            transform: rotate(180deg);
          }

          & .burger-bar:before {
            transform: translateY(-8px) rotate(135deg);
          }

          & .burger-bar:after {
            transform: translateY(8px) rotate(45deg);
          }
        }
        &[data-enabled='true'] + nav {
          position: fixed;
          visibility: hidden;
          opacity: 0;
        }

        &[data-enabled='true'][aria-expanded='true'] + nav {
          visibility: visible;
          opacity: 1;
          top: 0;
          left: 0;
          width: 100%;
          background: inherit;

          ul {
            background-color: inherit;
            flex-direction: column;
            padding: var(--space-3xl) var(--space-l);
            align-items: stretch;
            // align-items: stretch;

            li {
              border-inline: none;
              &:not(:last-of-type) {
                border-block-end: 1px solid var(--color-secondary);
              }

              a {
                padding-block: var(--space-2xs);
                justify-content: flex-start;
                padding-inline-start: var(--space-s);
              }
            }
          }
        }
      }
    }
  }
}
</style>
