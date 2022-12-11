<script setup>
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
const { isAuthenticated } = useAuth()
const toggleAdminNav = ref(true)

const sidebarOpen = ref(true)
const completeButtonRef = ref(null)

const setsidebarOpen = (value) => {
  sidebarOpen.value = value
}

function closeModal() {
  sidebarOpen.value = false
}
function openModal() {
  sidebarOpen.value = true
}

// const checkScreen = () => {
// if (process.client) {
//   if (window.innerWidth < 1400) toggleAdminNav.value = false
//   if (window.innerWidth >= 1400) toggleAdminNav.value = true
// }
// }

// if (process.client) {
//   window.addEventListener('resize', checkScreen)
//   checkScreen()
// }
</script>

<template>
  <div class="flex min-h-screen">
    <!-- <div class="sticky top-0 flex h-16 items-center justify-between bg-slate-700 px-4">
      <Branding />
      <button ref="completeButtonRef" @click="sidebarOpen = false">
        <XIcon class="h-5 w-5" />
      </button>
    </div>
    <AdminNav class="border-4" /> -->
    <aside
      class="fixed inset-y-0 z-30 hidden w-60 border-4 border-green-900 bg-slate-800 text-white transition-all md:block"
    >
      <div class="flex h-16 w-full items-center justify-between bg-slate-700 px-4">
        <Branding />
      </div>
      <AdminNav class="" />
    </aside>
    <main class="ml-0 flex flex-1 flex-col md:ml-60">
      <header class="sticky top-0 z-20 flex h-16 items-center bg-slate-400 px-4">
        <div class="flex flex-1 items-center justify-around md:justify-end">
          <button @click="sidebarOpen = true" class="md:hidden"><MenuIcon class="h-6 w-6" /></button>
          <div class="">
            <LoginDropdown v-if="!isAuthenticated" />
            <ProfileDropdown v-else />
          </div>
        </div>
      </header>
      <div class="flex-1 text-slate-800">
        <slot />
      </div>
      <footer class="flex h-12 items-center justify-center bg-slate-200 text-slate-600"><AdminFooter /></footer>
    </main>
  </div>
</template>

<style lang="" scoped></style>
