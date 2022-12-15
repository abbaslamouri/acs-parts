<template>
  <div class="wrapper">
    <BaseHeader />
    <slot />
  </div>
</template>

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

<style scoped>
.wrapper {
  outline: solid pink;
  min-height: 100%;
}
</style>
