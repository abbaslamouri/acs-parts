<script setup>
// import { Dialog, DialogPanel, DialogTitle, DialogDescription } from '@headlessui/vue'
const props = defineProps({
  // fileTypes: {
  //   type: Array,
  //   default: ['image/*'],
  // },
  // showDropZone: {
  //   type: Boolean,
  // },
})
const emit = defineEmits(['toggleDropZone', 'uploadItemsSelected', 'cancelFileUpload'])

// const fileRef = ref(null)
// const dragged = ref(false)
const itemsToUpload = ref([])

// const isOpen = ref(true)

const closeDropZone = () => {
  emit('toggleDropZone', false)
}

const handleItemsDropped = (event) => {
  // dragged.value = false
  // itemsToUpload.value = Array.from(event.dataTransfer.files).map((item) => item)
  // emit('uploadItemsSelected', itemsToUpload.value)
}

const handleItemsSelected = (event) => {
  // itemsToUpload.value = Array.from(event.target.files).map((item) => item)
  // emit('uploadItemsSelected', itemsToUpload.value)
}
</script>
<template>
  <div class="border-4">
    <!-- {{ showDropZone }} -->
    <!-- <ClientOnly> -->
    <!-- <Dialog as="div" :open="showDropZone" @close="closeDropZone">
      <DialogPanel>
        <DialogTitle>Deactivate account</DialogTitle>
        <DialogDescription> This will permanently deactivate your account </DialogDescription>
        <p>
          Are you sure you want to deactivate your account? All of your data will be permanently removed. This action
          cannot be undone.
        </p>
        <button @click="setIsOpen(false)">Deactivate</button>
        <button @click="setIsOpen(false)">Cancel</button>
      </DialogPanel>
    </Dialog> -->
    <!-- </ClientOnly> -->

    <!-- <div
      class="flex flex-col items-center justify-center gap-4 min-h-20 bg-stone-200 p-4"
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
      <button class="btn btn-secondary py-1 px-4 text-xs" @click="$emit('cancelFileUpload')">
        <span>Cancel</span>
      </button>
    </div> -->
  </div>
</template>

<style lang=""></style>
