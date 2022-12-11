<script setup>
import { HomeIcon, ChevronRightIcon } from '@heroicons/vue/outline'
const route = useRoute()
console.log(route)
const crumbs = route.path.split('/')
console.log(crumbs)
</script>

<template>
  <!-- <div class="border-4 p-6"> -->
  <div class="container flex items-center gap-1 py-4">
    <!-- <div class=""> -->
    <NuxtLink class="hover:text-primary-light text-gray-400" :to="{ name: 'index' }">
      <HomeIcon class="h-5 w-5" />
    </NuxtLink>
    <div v-for="(crumb, index) in crumbs">
      <div v-if="index != 0">
        <div
          class="hover:text-primary-light text-primary-light flex cursor-default items-center gap-1 capitalize"
          v-if="index != crumbs[crumbs.length - 1]"
        >
          <ChevronRightIcon class="h-4 w-4 text-gray-500" />
          <span>{{ crumb }}</span>
        </div>
        <NuxtLink class="hover:text-primary-light text-gray-400" :to="{ name: 'index' }" v-else>
          <div class="capitalize">/&nbsp;{{ crumb }}</div>
        </NuxtLink>
      </div>
    </div>
  </div>
  <!-- </div> -->
  <!-- </div> -->
</template>

<style lang="" scoped></style>
