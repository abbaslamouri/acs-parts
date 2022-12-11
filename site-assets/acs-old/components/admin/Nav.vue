<script setup>
import {
  TemplateIcon,
  ShoppingCartIcon,
  PhotographIcon,
  ViewGridIcon,
  UserIcon,
  DatabaseIcon,
} from '@heroicons/vue/outline'

defineProps({
  toggleAdminNav: Boolean,
})

const navLinks = [
  { name: 'admin', label: 'Dashboard', icon: TemplateIcon, subMenu: [], open: false },
  { name: 'admin-products', label: 'Products', icon: ShoppingCartIcon, subMenu: [], open: false },
  { name: 'admin-media', label: 'Media', icon: PhotographIcon, subMenu: [], open: false },
  { name: 'admin-galleries', label: 'gallery', icon: ViewGridIcon, subMenu: [], open: false },
  { name: 'admin-users', label: 'Users', icon: UserIcon, subMenu: [], open: false },
  { name: 'admin-seeder', label: 'Seeder', icon: DatabaseIcon, subMenu: [], open: false },
]
</script>

<template>
  <div class="divide-y divide-gray-400 text-sm tracking-wide">
    <div v-for="(link, index) in navLinks" :key="link.name">
      <NuxtLink
        class="flex items-center gap-4 px-4 py-2 transition-all duration-200 hover:bg-gray-200 hover:text-gray-800"
        :to="{ name: `${link.name}` }"
      >
        <component class="w-5 h-5" :is="link.icon" />
        <div class="">{{ link.label }}</div>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="" scoped></style>
