<script setup>
import { MenuIcon } from '@heroicons/vue/outline'

defineProps({
  toggleAdminNav: Boolean,
})
defineEmits(['toggleAdminNav'])
const route = useRoute()
// console.log(route)
</script>

<template>
  <div class="">
    <div class="" v-if="route.name.includes('admin')">
      <NuxtLink class="" :to="{ name: `index` }">
        <div class="">ACS</div>
      </NuxtLink>
    </div>
    <div v-else>
      <NuxtLink class="" :to="{ name: `index` }">
        <img class="" src="/acs-logo.jpeg" />
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="" scoped></style>
