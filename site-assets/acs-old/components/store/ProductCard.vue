<script setup>
import { TruckIcon, HeartIcon, SearchIcon } from '@heroicons/vue/outline'
import { StarIcon } from '@heroicons/vue/solid'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const { cart, addItem } = useCart()

const config = useRuntimeConfig()
// const showQuantitySelector = ref < boolean > true

const getcartItemCount = () => {
  if (!cart.value.items || !cart.value.items.length) return 0
  const found = cart.value.items.find((i) => i.product._id == props.product._id)
  console.log('FOUND', found)
  if (found) return found.quantity
  return 0
}

const addItemtoCart = (payload) => {
  const { item, quantity } = payload
  console.log(payload)
  addItem(item, quantity)
}
</script>

<template>
  <div class="group rounded bg-white shadow-md transition duration-300">
    <div class="relative grid aspect-square place-items-center">
      <img
        class="object-cover"
        :src="`${config.doSpaceEndpoint}/uploads/${product.media[0].originalFilename}`"
        :alt="`Product ${config.doSpaceEndpoint}/uploads/${product.name} Photo`"
        v-if="product.media && product.media.length"
      />
      <img
        class="w-full"
        src="/placeholder.png"
        :alt="`Product ${config.doSpaceEndpoint}/uploads/${product.name} Photo`"
        v-else
      />
      <div
        class="absolute inset-0 flex items-center justify-center gap-2 bg-black bg-opacity-10 text-xl font-medium tracking-wide text-white transition duration-300 group-hover:bg-opacity-50"
      >
        <NuxtLink class="hidden rounded-full bg-slate-200 p-2 group-hover:block" :to="{ name: 'index' }">
          <SearchIcon class="text-primary h-4 w-4" />
        </NuxtLink>
        <NuxtLink class="hidden rounded-full bg-slate-200 p-2 group-hover:block" :to="{ name: 'index' }">
          <HeartIcon class="text-primary h-4 w-4" />
        </NuxtLink>
      </div>
    </div>
    <div class="mt-2">
      <div class="px-2">
        <NuxtLink class="" :to="{ name: 'index' }">
          <h4 class="hover:text-primary text-sm font-bold uppercase text-gray-600 transition">{{ product.name }}</h4>
        </NuxtLink>
        <div class="mt-1 flex items-center gap-2">
          <span class="text-primary-light text-sm font-bold">${{ product.price }}</span
          ><span class="text-xs font-bold text-gray-400 line-through" v-if="!product.salePrice"
            >${{ product.salePrice }}</span
          >
        </div>
        <!-- <div class="mt-1 flex items-center">
          <StarIcon class="h-4 w-4 text-yellow-500" />
          <StarIcon class="h-4 w-4 text-yellow-500" />
          <StarIcon class="h-4 w-4 text-yellow-500" />
          <StarIcon class="h-4 w-4 text-yellow-500" />
          <StarIcon class="h-4 w-4 text-yellow-500" />
          <div class="ml-2 text-xs text-gray-400">(of 150 reviews)</div>
        </div> -->
      </div>
      <div class="p-2 text-center">
        <!-- <div class="text-primary-light text-sm font-bold">${{ product.price }}</div> -->
        <StoreQuantitySelector
          :product="product"
          :minVal="0"
          :maxVal="4"
          :stepVal="1"
          :btnText="getcartItemCount()"
          @quantitySelected="addItemtoCart"
        />
      </div>

      <!-- <button
        class="bg-primary-light border-primary-light hover:text-primary-light mt-2 w-full rounded border px-6 py-2 text-sm font-medium uppercase text-white transition duration-300 hover:bg-transparent"
      >
        Add to cart
      </button> -->
    </div>
  </div>
</template>

<style lang="" scoped></style>
