<script setup>
import { CheckIcon, MinusIcon, PlusIcon } from '@heroicons/vue/outline'
defineProps({
  media: {
    type: Array,
  },
  selectedMedia: {
    type: Array,
  },
})

defineEmits(['updateSelectedMedia', 'removeFromSelectedMedia'])

const fileRefs = ref([])
</script>

<template>
  <div class="media-list flex flex-row flex-wrap items-center justify-evenly gap-6 px-1">
    <div v-for="(file, index) in media" class="item shadow-md relative" v-if="media && media.length">
      <MediaFileCard :file="file" :key="file._id" :selectedMedia="selectedMedia" />
      <div
        class="absolute top-1 left-1 border border-slate-400 rounded-full w-6 h-6 grid place-items-center cursor-pointer bg-white hover:border-2 hover:border-indigo-800 hover:bg-indigo-300"
        :class="{ 'bg-white text-indigo-700': selectedMedia.find((m) => m._id == file._id) }"
        @click="$emit('updateSelectedMedia', file)"
      >
        <CheckIcon class="w-4 h-4" v-show="selectedMedia.find((m) => m._id == file._id)" />
      </div>
    </div>
    <div v-else>There are no images to display. Add new images</div>
  </div>
</template>
<style lang="" scoped></style>
