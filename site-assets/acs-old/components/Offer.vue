<script setup>
import { TruckIcon, HeartIcon, SearchIcon } from '@heroicons/vue/outline'
import { StarIcon } from '@heroicons/vue/solid'
</script>

<template>
  <div class="pd-1 container relative overflow-hidden border">
    <img class="w-full" src="/offer.jpg" alt="Offer" />
    <div class="absolute -top-16 -left-16 h-[420px] w-[420px] rounded-full bg-white"></div>
    <div class="absolute left-12 top-1/2 -translate-y-1/2">
      <div class="uppercase">Online exclusive</div>
      <div class="text-primary-light mt-2 text-5xl font-extrabold uppercase">15% Off</div>
      <div class="mt-2 uppercase">Table & floor lamps</div>
      <NuxtLink
        class="bg-primary-light hover:text-primary-light mt-4 inline-block rounded px-6 py-2 text-xs font-bold uppercase tracking-wide text-white transition duration-300 hover:bg-transparent"
        :to="{ name: 'index' }"
      >
        Shop now
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="" scoped></style>
