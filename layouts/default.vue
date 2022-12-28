<script setup lang="ts">
useHead({
  title: useRoute().meta.title ? `ACS | ${useRoute().meta.title}` : '',
  meta: [
    { name: 'description', content: useRoute().meta.description ? `${useRoute().meta.description}` : '' },
    { name: 'robots', content: useRoute().meta.robots ? `${useRoute().meta.robots}` : '' },
    { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
  ],
  bodyAttrs: {
    class: 'test',
  },
})
</script>

<template>
  <div class="h-screen">
    <!-- <BaseHeader /> -->
    <slot />
  </div>
</template>

<style lang="scss" scoped></style>
