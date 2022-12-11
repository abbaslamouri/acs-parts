<script setup>
import { PhotographIcon } from '@heroicons/vue/outline'

defineProps({
  product: {
    type: Object,
    required: true,
  },
  selectedProducts: {
    type: Array,
  },
})
const config = useRuntimeConfig()
</script>

<template>
  <div
    class="flex w-40 transform cursor-pointer flex-col items-center justify-between border transform transition hover:scale-105"
    @mouseenter="$event.target.classList.add('hovered')"
    @mouseleave="$event.target.classList.remove('hovered')"
  >
    <NuxtLink class="" :to="{ name: 'admin-products-slug', params: { slug: product.slug } }">
      <div
        class="w-40 overflow-hidden rounded border border-slate-300"
        :class="{ ' bg-slate-400 p-4': selectedProducts.find((p) => p._id == product._id) }"
        v-if="product.media && product.media.length"
      >
        <img
          class="h-full w-full scale-105 border object-cover"
          :src="`${config.doSpaceEndpoint}/uploads/${product.media[0].originalFilename}`"
        />
      </div>
      <div
        v-else
        class="grid w-40 place-items-center rounded border border-slate-300"
        :class="{ ' bg-slate-400 p-4': selectedProducts.find((p) => p._id == product._id) }"
      >
        <PhotographIcon class="h-20 w-20 text-gray-500" />
      </div>
    </NuxtLink>
    <div class="flex w-full items-center justify-between gap-1 self-start px-2">
      <NuxtLink class="text-xs font-bold" :to="{ name: 'admin-products-slug', params: { slug: product.slug } }">
        {{ product.name }}
      </NuxtLink>
      <div class="text-primary-light p-1 text-xs">${{ product.price }}</div>
    </div>
    <div class="flex w-full items-center justify-between gap-1 self-start p-2">
      <div class="text-xs">{{ product.status }}</div>
      <div class="p-1 text-xs" v-if="product.tbq">{{ product.tbq }}</div>
    </div>
  </div>
</template>

<style lang="" scoped></style>
