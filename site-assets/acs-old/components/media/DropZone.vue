<script setup>
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

import { XIcon } from '@heroicons/vue/outline'

const props = defineProps({
  fileTypes: {
    type: Array,
    default: ['image/*'],
  },
  showDropZone: {
    type: Boolean,
  },
})

const emit = defineEmits(['toggleDropZone', 'uploadItemsSelected', 'cancelFileUpload'])

const dragged = ref(false)
const fileRef = ref(null)
const itemsToUpload = ref([])

function closeModal() {
  emit('toggleDropZone', false)
}

const handleItemsDropped = (event) => {
  dragged.value = false
  itemsToUpload.value = Array.from(event.dataTransfer.files).map((item) => item)
  emit('uploadItemsSelected', itemsToUpload.value)
}

const handleItemsSelected = (event) => {
  itemsToUpload.value = Array.from(event.target.files).map((item) => item)
  emit('uploadItemsSelected', itemsToUpload.value)
}
// function openModal() {
//   showDropZone.value = true
// }

const closeDropZone = () => {
  emit('toggleDropZone', false)
}
</script>

<template>
  <div>
    <ClientOnly>
      <!-- <div class="fixed inset-0 flex items-center justify-center border-4 border-red-500">
        <button
          type="button"
          @click="openModal"
          class="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div> -->
      <TransitionRoot :show="showDropZone" as="template">
        <Dialog as="div" @close="$emit('toggleDropZone', false)" class="relative z-30 0">
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
                  class="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                >
                  <div class="flex justify-between">
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900"> Add Files </DialogTitle>
                    <button
                      class="bg-slate-300 p-2 rounded-full hover:bg-slate-400 hover:text-slate-200"
                      @click="$emit('cancelFileUpload')"
                    >
                      <XIcon class="w-5 h-5" />
                    </button>
                  </div>
                  <div
                    class="mt-6 flex flex-col items-center justify-center gap-4 min-h-20 bg-stone-200 p-4"
                    v-if="showDropZone"
                    :class="{ 'dragged-over': dragged }"
                    @dragover.prevent="dragged = true"
                    @dragleave.prevent="dragged = false"
                    @drop.prevent="handleItemsDropped"
                  >
                    Drop files to upload here
                    <IconsUploadCloud class="w-10 h-10 fill-gray-500" />
                    <a class="text-yellow-700 text-lg font-bold" href="#" @click="fileRef.click()"
                      >Or click here to choose your files</a
                    >
                    <form enctype="multipart/form-data">
                      <input
                        class="hidden"
                        id="upload"
                        type="file"
                        :accept="fileTypes.join(',')"
                        :multiple="true"
                        ref="fileRef"
                        @change="handleItemsSelected"
                      />
                    </form>
                  </div>

                  <div class="mt-6 text-right">
                    <button
                      type="button"
                      class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      @click="closeModal"
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    </ClientOnly>
  </div>
</template>

<style lang=""></style>
