<script setup lang="ts">
useHead({
  title: useRoute().meta.title ? `ACS | ${useRoute().meta.title}` : '',
  meta: [
    {
      name: 'description',
      content: useRoute().meta.description
        ? `${useRoute().meta.description}`
        : '',
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
    <header>
      <!-- <Logo /> -->
      <div>
        <input type="text" />
        <button>Account</button>
        <button>Basket</button>
      </div>
    </header>

    <slot />
  </div>
</template>

<style lang="scss" scoped>
header {
  border: 1px solid red;
}
</style>
