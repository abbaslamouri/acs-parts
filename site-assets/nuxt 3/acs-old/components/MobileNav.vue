<script setup>
import { XIcon, SearchIcon, ViewListIcon, ShoppingCartIcon, MenuIcon, HomeIcon } from '@heroicons/vue/outline'

const navLinkItems = ref([
  {
    name: 'Home',
    show: false,
    link: 'index',
  },
  {
    name: 'Our parts',
    show: false,
    // link: 'products',
  },
  {
    name: 'Capabilities',
    show: false,
  },
  {
    name: 'News',
    show: false,
  },
  {
    name: 'About ACS',
    show: false,
  },
  {
    name: 'Account',
    show: false,
  },
  {
    name: 'Contact',
    show: false,
  },
])

const showMobileMenu = ref(false)
</script>

<template>
  <div
    class="fixed inset-x-0 bottom-0 z-10 flex justify-around border border-gray-400 bg-slate-200 px-6 py-4 shadow-sm lg:hidden"
  >
    <button
      class="hover:text-primary-light grid place-items-center text-xs text-gray-600 transition"
      @click="showMobileMenu = !showMobileMenu"
    >
      <MenuIcon class="h-6 w-6" />
      <div>Menu</div>
    </button>
    <button class="hover:text-primary-light grid place-items-center text-xs text-gray-600 transition">
      <ViewListIcon class="h-6 w-6" />
      <div>Categories</div>
    </button>
    <button class="hover:text-primary-light grid place-items-center text-xs text-gray-600 transition">
      <SearchIcon class="h-6 w-6" />
      <div>Search</div>
    </button>
    <button class="hover:text-primary-light relative grid place-items-center text-xs text-gray-600 transition">
      <ShoppingCartIcon class="h-6 w-6" />
      <div class="bg-primary-light absolute -top-2 -right-2 grid h-5 w-5 place-items-center rounded-full text-white">
        3
      </div>
      <div>Cart</div>
    </button>
    <transition name="slideIn">
      <div class="fixed inset-0 h-screen w-screen bg-black bg-opacity-30" v-if="showMobileMenu">
        <div class="fixed inset-y-0 left-0 w-60 bg-white">
          <div class="">
            <div class="bg-primary-light grid grid-cols-2 px-4 py-2 text-white">
              <div class="justify-self-center">Menu</div>
              <XIcon class="h-5 w-5 cursor-pointer justify-self-end" @click="showMobileMenu = !showMobileMenu" />
            </div>
            <ul>
              <li>
                <NuxtLink
                  class="text-secondary-light hover:text-primary flex items-center gap-2 px-6 py-3 text-sm transition hover:bg-gray-200"
                  :to="{ name: 'index' }"
                >
                  <HomeIcon class="h-5 w-5" />
                  <span>Home</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="text-secondary-light hover:text-primary flex items-center gap-2 px-6 py-3 text-sm transition hover:bg-gray-200"
                  :to="{ name: 'index' }"
                >
                  <HomeIcon class="h-5 w-5" />
                  <span>Shop</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="text-secondary-light hover:text-primary flex items-center gap-2 px-6 py-3 text-sm transition hover:bg-gray-200"
                  :to="{ name: 'index' }"
                >
                  <HomeIcon class="h-5 w-5" />
                  <span>About Us</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="text-secondary-light hover:text-primary flex items-center gap-2 px-6 py-3 text-sm transition hover:bg-gray-200"
                  :to="{ name: 'index' }"
                >
                  <HomeIcon class="h-5 w-5" />
                  <span>Contact Us</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>

    <!-- <div class="container"> -->
    <!-- <div class="flex items-center space-x-6"> -->
    <!-- Categories -->
    <!-- <div class="relative py-4 bg-primary-light flex gap-4 px-8 items-center cursor-pointer group">
          <MenuIcon class="w-5 h-5 text-gray-200" />
          <span
            class="capitalize text-gray-200 font-semibold tracking-wide group-hover:text-white transition duration-200"
            >Categories</span
          >
          <div
            class="absolute left-0 top-full w-full bg-white shadow-md invisible opacity-0 transition duration-300 divide-y divide-dashed group-hover:opacity-100 group-hover:visible"
          >
            <NuxtLink
              class="px-6 py-3 flex items-center gap-2 text-sm text-secondary-light transition hover:bg-gray-200 hover:text-primary"
              :to="{ name: 'index' }"
            >
              <HeartIcon class="w-5 h-5" />
              <span>Home</span>
            </NuxtLink>
            <NuxtLink
              class="px-6 py-3 flex items-center gap-2 text-sm text-secondary-light transition hover:bg-gray-200 hover:text-primary"
              :to="{ name: 'index' }"
            >
              <ShoppingCartIcon class="w-5 h-5" />
              <span>Contact Us</span>
            </NuxtLink>
          </div>
        </div> -->

    <!-- Menu -->
    <!-- <nav class="flex items-center text-white flex-1">
          <ul class="flex items-center space-x-6 captitalize">
            <li class="whitespace-nowrap" v-for="item in navLinkItems" :key="item.title">
              <NuxtLink
                class="text-gray-300 font-semibold tracking-wide hover:text-white transition duration-200"
                :to="{ name: item.link }"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav> -->

    <!-- Login/Register -->
    <!-- <NuxtLink
          class="text-gray-300 font-semibold tracking-wide hover:text-white transition duration-200"
          :to="{ name: 'index' }"
        >
          Login/Register
        </NuxtLink> -->
    <!-- </div> -->
    <!-- </div> -->
  </div>
</template>

<style scoped>
.slideIn-enter-active,
.slideIn-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slideIn-enter-from,
.slideIn-leave-to {
  transform: translateX(-100%);
  /* opacity: 0; */
}

.slideIn-enter-to .slideIn-leave-from {
  transform: translateX(0%);
  /* opacity: 1; */
}
</style>
