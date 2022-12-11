<script setup>
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
defineProps({
  outerBoxWidth: {
    type: Number,
    default: 50,
  },
  outerBoxHeight: {
    type: Number,
    default: 40,
  },
  alertOpen: {
    Boolean,
  },
})
defineEmits(['closeAlert', 'ok'])

// const alertOpen = ref(true)

// function closeAlert() {
//   props.alertOpen = false
// }
// function openModal() {
//   props.alertOpen = true
// }

// console.log(top)
</script>

<template>
  <div>
    <!-- <div class="fixed inset-0 flex items-center justify-center">
      <button
        type="button"
        @click="openModal"
        class="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        Open dialog
      </button>
    </div> -->
    <ClientOnly>
      <TransitionRoot :show="alertOpen" as="template">
        <Dialog as="div" @close="$emit('closeAlert')" class="relative z-10">
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

          <div class="fixed inset-0 overflow-y-auto">
            <div class="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
              >
                <DialogPanel
                  class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                >
                  <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                    <slot name="header"></slot>
                  </DialogTitle>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500"><slot name="description"></slot></p>
                  </div>
                  <div class="mt-4 flex justify-end gap-4">
                    <button type="button" class="btn btn-secondary" @click="$emit('closeAlert')">Cancel</button>
                    <button type="button" class="btn btn-primary" @click="$emit('ok')">OK</button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    </ClientOnly>
  </div>
  <!-- <div class="fixed inset-0 w-screen h-screen">
    <div class="w-screen h-screen bg-slate-700 opacity-75" @click.self="$emit('closeAlert')"></div>
    <div
      class="h-full fixed bg-white rounded border-5 border-red-900 flex flex-col"
      :style="{
        width: `${outerBoxWidth}%`,
        height: `${outerBoxHeight}%`,
        top: `${(100 - outerBoxHeight) / 2}%`,
        left: `${(100 - outerBoxWidth) / 2}%`,
      }"
    >
      <header class="flex justify-between items-center p-2 bg-slate-200">
        <slot name="header"></slot>
        <button class="btn btn-close p-1" @click="$emit('closeModal')">
          <IconsClose />
        </button>
      </header>
      <main class="flex-1 p-2 overflow-auto"><slot></slot></main>
      <footer class="bg-slate-200 p-1"><slot name="footer"></slot></footer>
    </div>
  </div> -->
</template>

<style lang="" scoped></style>
