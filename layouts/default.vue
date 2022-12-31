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
  <div class="h-screen">
    <header class="full-bleed bg-primary-200">
      <Logo />
      <div>
        <input type="text" placeholder="Search" />
        <IconsSearch />
      </div>
      <button>Sign in / Create Account</button>
      <button>Your Bag</button>
    </header>
    <slot />
    <Footer />
  </div>
</template>

<style lang="scss" scoped></style>
