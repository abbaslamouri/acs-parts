<script setup>
import { TruckIcon, CashIcon, ClockIcon } from '@heroicons/vue/outline'
</script>

<template>
  <div class="container pb-16  px-4">
    <h2 class="uppercase text-2xl lg:text-3xl font-medium text-gray-700">Shop by Category</h2>
    <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div class="relative group rounded-sm overflow-hidden ">
        <img class="w-full" src="/categories/category-1.jpg" alt="Category-1" />
        <NuxtLink
          class="absolute inset-0 bg-black bg-opacity-40 grid place-items-center text-white text-xl font-medium tracking-wide transition duration-300 group-hover:bg-opacity-60"
          :to="{ name: 'index' }"
        >
          Bedrooms
        </NuxtLink>
      </div>
      <div class="relative group rounded-sm overflow-hidden ">
        <img class="w-full" src="/categories/category-2.jpg" alt="Category-2" />
        <NuxtLink
          class="absolute inset-0 bg-black bg-opacity-40 grid place-items-center text-white text-xl font-medium tracking-wide transition duration-300 group-hover:bg-opacity-60"
          :to="{ name: 'index' }"
        >
          Sofas
        </NuxtLink>
      </div>
      <div class="relative group rounded-sm overflow-hidden ">
        <img class="w-full" src="/categories/category-3.jpg" alt="Category-3" />
        <NuxtLink
          class="absolute inset-0 bg-black bg-opacity-40 grid place-items-center text-white text-xl font-medium tracking-wide transition duration-300 group-hover:bg-opacity-60"
          :to="{ name: 'index' }"
        >
          Offices
        </NuxtLink>
      </div>
      <div class="relative group rounded-sm overflow-hidden ">
        <img class="w-full" src="/categories/category-4.jpg" alt="Category-4" />
        <NuxtLink
          class="absolute inset-0 bg-black bg-opacity-40 grid place-items-center text-white text-xl font-medium tracking-wide transition duration-300 group-hover:bg-opacity-60"
          :to="{ name: 'index' }"
        >
          Outdoors
        </NuxtLink>
      </div>
      <div class="relative group rounded-sm overflow-hidden ">
        <img class="w-full" src="/categories/category-5.jpg" alt="Category-5" />
        <NuxtLink
          class="absolute inset-0 bg-black bg-opacity-40 grid place-items-center text-white text-xl font-medium tracking-wide transition duration-300 group-hover:bg-opacity-60"
          :to="{ name: 'index' }"
        >
          Mattresses
        </NuxtLink>
      </div>
      <div class="relative group rounded-sm overflow-hidden ">
        <img class="w-full" src="/categories/category-6.jpg" alt="Category-6" />
        <NuxtLink
          class="absolute inset-0 bg-black bg-opacity-40 grid place-items-center text-white text-xl font-medium tracking-wide transition duration-300 group-hover:bg-opacity-60"
          :to="{ name: 'index' }"
        >
          Dining Rooms
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="" scoped></style>
