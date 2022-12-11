<script setup>
import { PhotographIcon } from '@heroicons/vue/outline'

defineProps({
  file: {
    type: Object,
    required: true,
  },
  selectedMedia: {
    type: Array,
  },
})
const config = useRuntimeConfig()
</script>

<template>
  <div
    class="flex h-56 w-40 cursor-pointer flex-col items-center justify-between border"
    @mouseenter="$event.target.classList.add('hovered')"
    @mouseleave="$event.target.classList.remove('hovered')"
  >
    <!-- <img class="" :src="`https://acs-space.nyc3.digitaloceanspaces.com/uploads/ACS00040.jpg`" /> -->
    <div
      class="h-40 w-40 overflow-hidden rounded border border-slate-300"
      :class="{ ' bg-slate-400 p-4': selectedMedia.find((m) => m._id == file._id) }"
      v-if="file && file.mimetype && file.mimetype.includes('image')"
    >
      <!-- <img
        v-if="file.name === 'spinner.gif'"
        class="w-full h-full object-cover scale-105"
        :src="`${config.doSpaceEndpoint}/assets/spinner.gif`"
      /> -->
      <div class="grid h-full w-full place-items-center border-4" v-if="file.name == 'spinner'">
        <Spinner class="h-10 w-10" />
      </div>

      <img
        v-else-if="file.originalFilename"
        class="h-full w-full scale-105 border object-cover"
        :src="`${config.doSpaceEndpoint}/uploads/${file.originalFilename}`"
      />
      <div class="grid h-full w-full place-items-center border-4" v-else>
        <PhotographIcon class="h-20 w-20 text-gray-500" />
      </div>

      <!-- <img
        v-else
        class="w-full h-full object-cover scale-105"
        :src="`${config.doSpaceEndpoint}/assets/placeholder.png`"
      /> -->
    </div>

    <div
      class="h-40 w-40 rounded border border-slate-300"
      :class="{ ' bg-slate-400 p-4': selectedMedia.find((m) => m._id == file._id) }"
      v-else-if="file && file.mimetype && file.mimetype.includes('pdf')"
    >
      <IconsPdf class="h-full w-full" />
    </div>
    <div
      class="w-full rounded border border-slate-300"
      :class="{ ' bg-slate-400 p-4': selectedMedia.find((m) => m._id == file._id) }"
      v-else-if="file && file.mimetype && file.mimetype.includes('csv')"
    >
      <IconsSpreadsheet class="h-full w-full" />
    </div>
    <div class="flex w-full flex-col gap-1 self-start px-2">
      <div class="w-full truncate text-xs">{{ file.originalFilename }}</div>
      <p class="text-md text-primary-light">
        {{ file.mimetype.split('/')[1] }} - {{ ((file.fileSize * 1) / 1000).toFixed(1) }} kB
      </p>
    </div>
  </div>
</template>

<style lang="" scoped></style>
