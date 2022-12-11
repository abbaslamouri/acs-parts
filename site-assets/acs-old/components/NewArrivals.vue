<script setup>
import { TruckIcon, HeartIcon, SearchIcon } from '@heroicons/vue/outline'
import { StarIcon } from '@heroicons/vue/solid'
</script>

<template>
  <div class="container pb-16 p-4">
    <h2 class="uppercase text-2xl lg:text-3xl font-medium text-gray-700">New Arrivals</h2>
    <div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div class="group rounded bg-white shadow-md overflow-hidden">
        <div class="relative">
          <img class="w-full" src="/products/product1.jpg" alt="Product1" />
          <div
            class="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center gap-6 text-white text-xl font-medium tracking-wide transition duration-300 group-hover:bg-opacity-50"
          >
            <NuxtLink class="bg-slate-200 p-2 rounded-full hidden group-hover:block" :to="{ name: 'index' }">
              <SearchIcon class="w-4 h-4 text-primary" />
            </NuxtLink>
            <NuxtLink class="bg-slate-200 p-2 rounded-full hidden group-hover:block" :to="{ name: 'index' }">
              <HeartIcon class="w-4 h-4 text-primary" />
            </NuxtLink>
          </div>
        </div>
        <div class="mt-2">
          <div class="px-2">
            <NuxtLink class="" :to="{ name: 'index' }">
              <h4 class="uppercase text-gray-600 text-sm font-medium transition hover:text-primary">Guyer Char</h4>
            </NuxtLink>
            <div class="flex items-center gap-2 mt-1">
              <span class="text-primary-light font-bold text-sm">$45.00</span
              ><span class="text-gray-400 font-bold text-xs line-through">$55.00</span>
            </div>
            <div class="flex items-center mt-1">
              <StarIcon class="w-4 h-4 text-yellow-500" />
              <StarIcon class="w-4 h-4 text-yellow-500" />
              <StarIcon class="w-4 h-4 text-yellow-500" />
              <StarIcon class="w-4 h-4 text-yellow-500" />
              <StarIcon class="w-4 h-4 text-yellow-500" />
              <div class="text-xs text-gray-400 ml-2">(of 150 reviews)</div>
            </div>
          </div>
          <button
            class="bg-primary-light text-white px-6 py-2 w-full rounded uppercase text-sm border border-primary-light mt-2 font-medium transition duration-300 hover:bg-transparent hover:text-primary-light"
          >
            Add to cart
          </button>
        </div>
      </div>

      <div class="group rounded bg-white shadow-md overflow-hidden">
        <div class="relative">
          <img class="w-full" src="/products/product2.jpg" alt="Product1" />
          <div
            class="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center gap-6 text-white text-xl font-medium tracking-wide transition duration-300 group-hover:bg-opacity-50"
          >
            <NuxtLink class="bg-slate-200 p-2 rounded-full hidden group-hover:block" :to="{ name: 'index' }">
              <SearchIcon class="w-4 h-4 text-primary" />
            </NuxtLink>
            <NuxtLink class="bg-slate-200 p-2 rounded-full hidden group-hover:block" :to="{ name: 'index' }">
              <HeartIcon class="w-4 h-4 text-primary" />
            </NuxtLink>
          </div>
        </div>
        <div class="mt-2">
          <div class="px-2">
            <NuxtLink class="" :to="{ name: 'index' }">
              <h4 class="uppercase text-gray-600 text-sm font-medium transition hover:text-primary">Guyer Char</h4>
            </NuxtLink>
            <div class="flex items-center gap-2 mt-1">
              <span class="text-primary-light font-bold text-sm">$45.00</span
              ><span class="text-gray-400 font-bold text-xs line-through">$55.00</span>
            </div>
            <div class="flex items-center mt-1">
              <StarIcon class="w-4 h-4 text-yellow-500" />
              <StarIcon class="w-4 h-4 text-yellow-500" />
              <StarIcon class="w-4 h-4 text-yellow-500" />
              <StarIcon class="w-4 h-4 text-yellow-500" />
              <StarIcon class="w-4 h-4 text-yellow-500" />
              <div class="text-xs text-gray-400 ml-2">(of 150 reviews)</div>
            </div>
          </div>
          <button
            class="bg-primary-light text-white px-6 py-2 w-full rounded uppercase text-sm border border-primary-light mt-2 font-medium transition duration-300 hover:bg-transparent hover:text-primary-light"
          >
            Add to cart
          </button>
        </div>
      </div>

      <div class="group rounded bg-white shadow-md overflow-hidden">
        <div class="relative">
          <img class="w-full" src="/products/product3.jpg" alt="Product1" />
          <div
            class="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center gap-6 text-white text-xl font-medium tracking-wide transition duration-300 group-hover:bg-opacity-50"
          >
            <NuxtLink class="bg-slate-200 p-2 rounded-full hidden group-hover:block" :to="{ name: 'index' }">
              <SearchIcon class="w-4 h-4 text-primary" />
            </NuxtLink>
            <NuxtLink class="bg-slate-200 p-2 rounded-full hidden group-hover:block" :to="{ name: 'index' }">
              <HeartIcon class="w-4 h-4 text-primary" />
            </NuxtLink>
          </div>
        </div>
        <div class="mt-2">
          <div class="px-2">
            <NuxtLink class="" :to="{ name: 'index' }">
              <h4 class="uppercase text-gray-600 text-sm font-medium transition hover:text-primary">Guyer Char</h4>
            </NuxtLink>
            <div class="flex items-center gap-2 mt-1">
              <span class="text-primary-light font-bold text-sm">$45.00</span
              ><span class="text-gray-400 font-bold text-xs line-through">$55.00</span>
            </div>
            <div class="flex items-center mt-1">
              <StarIcon class="w-4 h-4 text-yellow-500" />
              <StarIcon class="w-4 h-4 text-yellow-500" />
              <StarIcon class="w-4 h-4 text-yellow-500" />
              <StarIcon class="w-4 h-4 text-yellow-500" />
              <StarIcon class="w-4 h-4 text-yellow-500" />
              <div class="text-xs text-gray-400 ml-2">(of 150 reviews)</div>
            </div>
          </div>
          <button
            class="bg-primary-light text-white px-6 py-2 w-full rounded uppercase text-sm border border-primary-light mt-2 font-medium transition duration-300 hover:bg-transparent hover:text-primary-light"
          >
            Add to cart
          </button>
        </div>
      </div>

      <div class="group rounded bg-white shadow-md overflow-hidden">
        <div class="relative">
          <img class="w-full" src="/products/product4.jpg" alt="Product1" />
          <div
            class="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center gap-6 text-white text-xl font-medium tracking-wide transition duration-300 group-hover:bg-opacity-50"
          >
            <NuxtLink class="bg-slate-200 p-2 rounded-full hidden group-hover:block" :to="{ name: 'index' }">
              <SearchIcon class="w-4 h-4 text-primary" />
            </NuxtLink>
            <NuxtLink class="bg-slate-200 p-2 rounded-full hidden group-hover:block" :to="{ name: 'index' }">
              <HeartIcon class="w-4 h-4 text-primary" />
            </NuxtLink>
          </div>
        </div>
        <div class="mt-2">
          <div class="px-2">
            <NuxtLink class="" :to="{ name: 'index' }">
              <h4 class="uppercase text-gray-600 text-sm font-medium transition hover:text-primary">Guyer Char</h4>
            </NuxtLink>
            <div class="flex items-center gap-2 mt-1">
              <span class="text-primary-light font-bold text-sm">$45.00</span
              ><span class="text-gray-400 font-bold text-xs line-through">$55.00</span>
            </div>
            <div class="flex items-center mt-1">
              <StarIcon class="w-4 h-4 text-yellow-500" />
              <StarIcon class="w-4 h-4 text-yellow-500" />
              <StarIcon class="w-4 h-4 text-yellow-500" />
              <StarIcon class="w-4 h-4 text-yellow-500" />
              <StarIcon class="w-4 h-4 text-yellow-500" />
              <div class="text-xs text-gray-400 ml-2">(of 150 reviews)</div>
            </div>
          </div>
          <button
            class="bg-primary-light text-white px-6 py-2 w-full rounded uppercase text-sm border border-primary-light mt-2 font-medium transition duration-300 hover:bg-transparent hover:text-primary-light"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="" scoped></style>
