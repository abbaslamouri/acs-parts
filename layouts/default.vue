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
</script>

<template>
  <div class="layout h-screen flow" id="main-container">
    <header class="header" id="top" role="banner">
      <a href="#main" class="skip-link not:focus:visually-hidden">Skip to content</a>
      <div class="yyy flex space-between items-center">
        <!-- <div class="flex items-center"> -->
        <!-- <div class="yyyb-blue"> -->

        <!-- </div> -->
        <a href="/" aria-label="Aviation Component Solutions" class="branding">
          <LogoTransparent />
        </a>
        <!-- </div> -->

        <div class="flex">
          <div class="search">
            <input type="text" placeholder="Search" />
            <IconsSearch />
          </div>
          <button>Sign in / Create Account</button>
          <button>Your Bag</button>
        </div>
      </div>
      <div>
        <div class="xxx">
          <button class="btn burger-toggle" type="button" hiddens ref="burgerMenuRef">
            <span class="burger-bars"></span>
            <!-- <span>Open sub menu</span> -->
          </button>
        </div>
        <nav class="primary-navigation" aria-label="primary" ref="navigationRef">
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
header {
  position: relative;
  background-color: var(--color-on-primary-container);
  color: var(--color-primary-container);
  height: 12rem;
  padding: 2rem;
}

.burger-toggle {
  // position: absolute;
}

.yyy {
  margin-inline-start: 3rem;
}

.xxx {
  position: absolute;
  top: 2rem;
  left: 2rem;
}
.primary-navigation {
  position: absolute;
  left: 0;
  right: 0;
  // width: 100%;
  bottom: 0;
}

.burger-toggle {
  position: relative;
  border: none;
  background: none;
  // display: none;
  cursor: pointer;

  .burger-bars::before,
  .burger-bars::after {
    content: '';
    position: absolute;
  }

  .burger-bars,
  .burger-bars::before,
  .burger-bars::after {
    display: block;
    width: 30px;
    height: 3px;
    background: white;
    transition: transform 250ms ease-in-out;
  }

  .burger-bars::before {
    top: 8px;
  }

  .burger-bars::after {
    bottom: 8px;
    /* position: absolute; */
  }

  span {
    color: red;
    top: 0;
    left: 0;
  }
  /* border: 1px solid var(--color-light); */
  /* position: absolute; */
  /* border-radius: 3px; */
  /* left: 50%; */
  /* margin-left: -12px; */
  /* transition: transform 350ms ease-in-out; */

  /* transform: translateY(-50%); */
}

nav {
  background-color: var(--color-on-background);

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: var(--space-3xs) var(--space-s);

    max-width: 75%;
    margin: 0 auto;

    li {
      flex: 1;
      min-width: 5rem;
      &:not(:last-of-type) {
        border-right: 1px solid var(--color-secondary);
      }

      // border: 1px solid red;
    }

    a {
      font-weight: var(--font-bold);
      text-transform: uppercase;
      text-decoration: none;
      display: inline-block;
      padding-block: var(--space-s);
      // border: 1px solid red;
      width: 100%;
      display: flex;
      justify-content: center;
      font-size: var(--size-step--1);

      &:hover {
        background-color: var(--color-primary-container);
        color: var(--color-on-primary-container);
      }
    }
  }
}

.skip-link {
  display: inline-block;
  padding: 0.7rem 1rem 0.5rem 1rem;
  background: var(--color-primary-container);
  color: var(--color-on-primary-container);
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  position: absolute;
  top: 1rem;
  left: 1rem;

  &:hover {
    background: var(--color-on-primary-container);
    color: var(--color-primary-container);
  }
}

.search {
  display: flex;
  align-items: center;
  border: 1px solid white;

  input {
    background-color: transparent;
  }
}
</style>
