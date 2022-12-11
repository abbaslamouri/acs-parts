<script setup>
import { TrashIcon, ArrowsExpandIcon } from '@heroicons/vue/outline'

const props = defineProps({
  media: {
    type: Array,
    default: [],
  },
  mediaIntro: {
    type: String,
  },
})

const emit = defineEmits(['placeMedia', 'removeMedia'])

const config = useRuntimeConfig()
const draggableElements = ref([])
const pickIndex = ref(null)

const handleDragstart = (event, index) => {
  pickIndex.value = index
  event.target.closest('.thumb').classList.remove('hovered')
}

const handleDragend = (event, index) => {
  for (const prop in draggableElements.value) {
    if (draggableElements.value[prop]) draggableElements.value[prop].closest('.thumb').classList.remove('hovered')
  }
}

const handleDrop = async (event, index) => {
  const pickedElement = props.media[pickIndex.value]
  const droppedElement = props.media[index]
  emit('placeMedia', { index: pickIndex.value, value: droppedElement })
  emit('placeMedia', { index: index, value: pickedElement })
  event.target.closest('.thumb').classList.remove('over')
}
</script>

<template>
  <section class="flex flex-col gap2 border">
    <div class="flex flex-row gap-3 flex-wrap justify-center" v-if="media.length">
      <div
        class="thumb relative w-32 flex justify-center shadow-md rounded cursor-pointer border border-gray-400"
        v-for="(image, index) in media"
        :key="image._id"
        @dragover="$event.target.closest('.thumb').classList.add('over')"
        @drop="handleDrop($event, index)"
        @dragleave="$event.target.closest('.thumb').classList.remove('over')"
        @dragover.prevent
        @mouseenter="$event.target.classList.add('hovered')"
        @mouseleave="$event.target.classList.remove('hovered')"
      >
        <div
          class="image relative p-2"
          :ref="(el) => (draggableElements[index] = el)"
          draggable="true"
          @dragstart="handleDragstart($event, index)"
          @dragend="handleDragend($event, index)"
        >
          <img
            class="w-28 h-28 object-cover"
            :src="`${config.doSpaceEndpoint}/uploads/${image.originalFilename}`"
            :alt="`${image.originalName} Photo`"
            draggable="false"
          />

          <div class="text-xs text-center mt-1 w-28 truncate">{{ image.originalFilename }}</div>
          <ArrowsExpandIcon
            class="move z-10 absolute w-7 h-7 text-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
          />
          <TrashIcon
            class="delete z-10 absolute w-6 h-6 text-white top-3 right-3"
            @click.prevent="$emit('removeMedia', index)"
          />
        </div>
        <div class="overlay absolute inset-0 opacity-80 z-0"></div>
        <div
          class="absolute -top-2 -left-2 bg-slate-600 text-white w-4 h-4 rounded-1/2 text-xs flex flex-row items-center justify-center rounded-full"
        >
          {{ index + 1 }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.move,
.delete {
  opacity: 0;
}

.hovered .move,
.hovered .delete {
  opacity: 1;
}

.hovered .overlay {
  background-color: #000;
  opacity: 0.5;
}
</style>
