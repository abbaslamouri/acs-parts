<script setup>
  import { TruckIcon, CashIcon, ClockIcon } from '@heroicons/vue/outline'
</script>

<template>
  <div class="bg-cover bg-no-repeat bg-center py-36" :style="{ backgroundImage: `url('/acshomepage-hero.jpg')` }">
    <div class="container text-center">
      <h1 class="text-3xl text-slate-50 font-semibold mb-4 sm:text-4xl lg:text-6xl">Aviation Component Solutions</h1>
      <h2 class="text-slate-50 font-semibold sm:text-xl lg:text-2xl">
        Delivering the Difference Through Innovation and Integrity
      </h2>
      <NuxtLink
        class="px-6 py-3 gap-2 inline-block mt-6 uppercase bg-primary-light border border-primary-light text-white rounded transition hover:bg-white hover:text-primary"
        :to="{ name: 'index' }"
      >
        <span>Shop now</span>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="" scoped></style>
