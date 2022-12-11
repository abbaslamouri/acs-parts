<script setup>
definePageMeta({
  layout: 'admin',
})
const pageTitle = ref('Media | YRL')
</script>

<template>
  <div class="overflow-auto w-full h-full">
    <Title>{{ pageTitle }}</Title>

    <MediaUploader />
  </div>
</template>

<style lang="" scoped></style>
