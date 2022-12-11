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
    <ClientOnly>
      <TransitionRoot appear :show="sidebarOpen" as="template">
        <Dialog
          as="aside"
          :initialFocus="completeButtonRef"
          @close="closeModal"
          class="relative z-20 md:hidden border-4 border-green-900"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 -translate-x-full"
            enter-to="opacity-100 translate-x-0"
            leave="duration-200 ease-in"
            leave-from="opacity-100 translate-x-0"
            leave-to="opacity-0 -translate-x-full"
          >
            <DialogPanel class="fixed inset-y-0 w-60 bg-slate-800 text-white transition-all">
              <div class="sticky top-0 h-16 px-4 flex items-center justify-between bg-slate-700">
                <Branding />
                <button ref="completeButtonRef" @click="sidebarOpen = false">
                  <XIcon class="w-5 h-5" />
                </button>
              </div>
              <AdminNav class="" />
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </TransitionRoot>
      <aside
        class="z-30 w-60 fixed inset-y-0 bg-slate-800 text-white transition-all hidden md:block border-4 border-green-900"
      >
        <div class="w-full h-16 px-4 flex items-center justify-between bg-slate-700">
          <Branding />
        </div>
        <AdminNav class="" />
      </aside>
    </ClientOnly>
    <main class="flex-1 flex flex-col ml-0 md:ml-60">
      <header class="sticky top-0 z-20 h-16 flex items-center bg-slate-400 px-4">
        <div class="flex-1 flex items-center justify-around md:justify-end">
          <button @click="sidebarOpen = true" class="md:hidden"><MenuIcon class="w-6 h-6" /></button>
          <div class="">
            <LoginDropdown v-if="!isAuthenticated" />
            <ProfileDropdown v-else />
          </div>
        </div>
      </header>
      <div class="flex-1 text-slate-800">
        <slot />
      </div>
      <footer class="h-12 flex items-center justify-center text-slate-600 bg-slate-200"><AdminFooter /></footer>
    </main>
  </div>
</template>

<style lang="" scoped></style>
