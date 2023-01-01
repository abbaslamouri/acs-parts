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
    <header class="header | b-green" id="top" role="banner">
      <a href="#main" class="skip-link">Skip to content</a>
      <div class="flex space-between items-center b-pink">
        <div>
          <a href="/" aria-label="Aviation Component Solutions" class="branding">
            <Logo />
          </a>
        </div>

        <div class="flex">
          <div>
            <input type="text" placeholder="Search" />
            <IconsSearch />
          </div>
          <button>Sign in / Create Account</button>
          <button>Your Bag</button>
        </div>
      </div>
      <div class="b-blue">
        <button class="btn burger-toggle" type="button" hiddens ref="burgerMenuRef">
          <span class="burger-bars"></span>
          <span>Open sub menu</span>
        </button>
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

  &:not(:focus) {
    border: 0;
    clip: rect(0 0 0 0);
    height: auto;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
  }
}
.layout {
  // --flow-space: 1rem;
}
</style>
