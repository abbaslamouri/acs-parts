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
  <div class="layout h-screen flow">
    <header class="">
      <div>
        <div>
          <Logo />
        </div>
        <div>
          <div>
            <input type="text" placeholder="Search" />
            <IconsSearch />
          </div>
          <button>Sign in / Create Account</button>
          <button>Your Bag</button>
        </div>
      </div>
      <div>
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
      </div>
    </header>
    <slot />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  --flow-space: 1rem;
}
</style>
