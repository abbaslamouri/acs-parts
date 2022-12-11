<script lang="ts" setup>
import { SearchIcon, HeartIcon, ShoppingCartIcon, UserIcon, MenuIcon } from '@heroicons/vue/outline'
import { MoonIcon, SunIcon } from '@heroicons/vue/solid'
defineEmits(['setColorMode'])

const { cart, numberOfItems } = useCart()
</script>

<template>
  <header class="py-4 px-4 shadow-sm md:bg-white">
    <div class="container flex items-center justify-between space-x-10">
      <NuxtLink class="w-24" :to="{ name: `index` }">
        <img class="w-full" src="/acs-logo.jpeg" alt="logo" />
      </NuxtLink>
      <AlgoliaSearch />
      <div class="flex items-center space-x-4">
        <a href="#" class="text-secondary-light hover:text-primary block flex flex-col items-center transition">
          <div class="relative">
            <span
              class="bg-primary absolute -top-2 -right-2 grid h-5 w-5 place-items-center rounded-full text-xs text-white"
              >5</span
            >
            <HeartIcon class="h-6 w-6" />
          </div>
          <div class="whitespace-nowrap text-xs">Wish List</div>
        </a>
        <a
          href="#"
          class="text-secondary-light hover:text-primary relative block flex flex-col items-center transition"
        >
          <div class="relative">
            <span
              class="bg-primary absolute -top-2 -right-2 grid h-5 w-5 place-items-center rounded-full text-xs text-white"
              >{{ numberOfItems() }}</span
            >
            <ShoppingCartIcon class="h-6 w-6" />
          </div>
          <div class="whitespace-nowrap text-xs">Cart</div>
        </a>
        <a
          href="#"
          class="text-secondary-light hover:text-primary relative block flex flex-col items-center transition"
        >
          <div class="relative">
            <span
              class="bg-primary absolute -top-2 -right-2 grid h-5 w-5 place-items-center rounded-full text-xs text-white"
              >5</span
            >
            <UserIcon class="h-6 w-6" />
          </div>
          <div class="whitespace-nowrap text-xs">Account</div>
        </a>
      </div>
      <button @click="$emit('setColorMode', 'dark')"><MoonIcon class="h-5 w-5" /></button>
      <button @click="$emit('setColorMode', 'light')"><SunIcon class="h-5 w-5" /></button>
      <button @click="$emit('setColorMode', 'sepia')">sepia</button>
    </div>
  </header>
</template>

<style lang="" scoped></style>
