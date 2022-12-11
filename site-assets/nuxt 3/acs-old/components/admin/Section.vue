<script setup>
const props = defineProps({
  sectionId: {
    type: String,
  },
})
</script>

<template>
  <section class="w-full shadow-lg border bg-white p-4 rounded" id="`${sectionId}`">
    <header
      class="text-sm uppercase inline-block font-bold tracking-wide underline decoration-1 decoration-slate-400 underline-offset-4"
    >
      <slot name="title"></slot>
    </header>
    <main class="mt-4 flex flex-col space-y-4">
      <slot />
    </main>
  </section>
</template>

<style lang="" scoped></style>
