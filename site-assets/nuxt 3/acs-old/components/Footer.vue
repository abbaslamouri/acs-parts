<script setup>
import { SearchIcon, HeartIcon, ShoppingCartIcon, UserIcon, CreditCardIcon, MenuIcon } from '@heroicons/vue/outline'
</script>

<template>
  <div class="border-t border-gray-300 bg-white bg-slate-100 text-xs">
    <div class="container grid grid-cols-12">
      <div class="col-span-full flex flex-col gap-3 p-4 lg:col-span-3">
        <img class="w-20" src="/acs-logo.jpeg" alt="Logo" />
        <p class="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div class="flex gap-3">
          <NuxtLink class="" :to="{ name: 'index' }">
            <UserIcon class="h-5 w-5 text-gray-400" />
          </NuxtLink>
          <NuxtLink class="" :to="{ name: 'index' }">
            <UserIcon class="h-5 w-5 text-gray-400" />
          </NuxtLink>
          <NuxtLink class="" :to="{ name: 'index' }">
            <UserIcon class="h-5 w-5 text-gray-400" />
          </NuxtLink>
          <NuxtLink class="" :to="{ name: 'index' }">
            <UserIcon class="h-5 w-5 text-gray-400" />
          </NuxtLink>
        </div>
      </div>
      <div class="col-span-full grid grid-cols-2 p-4 md:grid-cols-4 lg:col-span-9">
        <div class="mb-6">
          <h3 class="font-semibold uppercase tracking-wide text-gray-400">solutions</h3>
          <div class="mt-3 space-y-1">
            <NuxtLink class="block text-gray-500 transition hover:text-gray-700" :to="{ name: 'index' }">
              Marketing</NuxtLink
            >
            <NuxtLink class="block text-gray-500 transition hover:text-gray-700" :to="{ name: 'index' }">
              Analytics</NuxtLink
            >
            <NuxtLink class="block text-gray-500 transition hover:text-gray-700" :to="{ name: 'index' }">
              Ecommerce</NuxtLink
            >
            <NuxtLink class="block text-gray-500 transition hover:text-gray-700" :to="{ name: 'index' }">
              Insights</NuxtLink
            >
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-sm font-semibold uppercase tracking-wide text-gray-400">Support</h3>
          <div class="mt-3 space-y-1">
            <NuxtLink class="block text-gray-500 transition hover:text-gray-700" :to="{ name: 'index' }">
              Pricing</NuxtLink
            >
            <NuxtLink class="block text-gray-500 transition hover:text-gray-700" :to="{ name: 'index' }">
              Documentation</NuxtLink
            >
            <NuxtLink class="block text-gray-500 transition hover:text-gray-700" :to="{ name: 'index' }">
              Guides</NuxtLink
            >
            <NuxtLink class="block text-gray-500 transition hover:text-gray-700" :to="{ name: 'index' }">
              API Status</NuxtLink
            >
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-sm font-semibold uppercase tracking-wide text-gray-400">Support</h3>
          <div class="mt-3 space-y-1">
            <NuxtLink class="block text-gray-500 transition hover:text-gray-700" :to="{ name: 'index' }">
              Pricing</NuxtLink
            >
            <NuxtLink class="block text-gray-500 transition hover:text-gray-700" :to="{ name: 'index' }">
              Documentation</NuxtLink
            >
            <NuxtLink class="block text-gray-500 transition hover:text-gray-700" :to="{ name: 'index' }">
              Guides</NuxtLink
            >
            <NuxtLink class="block text-gray-500 transition hover:text-gray-700" :to="{ name: 'index' }">
              API Status</NuxtLink
            >
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-sm font-semibold uppercase tracking-wide text-gray-400">Support</h3>
          <div class="mt-3 space-y-1">
            <NuxtLink class="block text-gray-500 transition hover:text-gray-700" :to="{ name: 'index' }">
              Pricing</NuxtLink
            >
            <NuxtLink class="block text-gray-500 transition hover:text-gray-700" :to="{ name: 'index' }">
              Documentation</NuxtLink
            >
            <NuxtLink class="block text-gray-500 transition hover:text-gray-700" :to="{ name: 'index' }">
              Guides</NuxtLink
            >
            <NuxtLink class="block text-gray-500 transition hover:text-gray-700" :to="{ name: 'index' }">
              API Status</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
    <div class="flex h-12 flex-row items-center justify-around bg-slate-800 text-sm text-white">
      <div>&copy; YRL Consulting, LLC. All rights reserved.</div>
      <div class="flex items-center gap-4">
        <CreditCardIcon class="h-6 w-6" />
        <CreditCardIcon class="h-6 w-6" />
        <CreditCardIcon class="h-6 w-6" />
        <CreditCardIcon class="h-6 w-6" />
        <CreditCardIcon class="h-6 w-6" />
      </div>
    </div>
  </div>
</template>

<style lang="" scoped></style>
