<script setup lang="ts">
useHead({
  title: `ACS | ${useRoute().meta.title}`,
  meta: [
    { name: 'description', content: `${useRoute().meta.description}` },
    { name: 'robots', content: `${useRoute().meta.robots}` },
  ],
  bodyAttrs: {
    class: 'test',
  },
})
</script>

<template>
  <div class="">
    <!-- <BaseHeader /> -->
    <slot />
  </div>
</template>

<style scoped>
/* .wrapper {
  outline: solid pink;
  min-height: 100%;
} */
</style>
