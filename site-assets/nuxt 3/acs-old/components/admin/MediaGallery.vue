<script setup>
defineProps({
  media: {
    type: Array,
    required: true,
  },
  mediaIntro: String,
})
const emit = defineEmits(['setMedia', 'mediaSelectCancel', 'placeMedia', 'removeMedia'])

const showMediaSelector = ref(false)
</script>

<template>
  <AdminSection class="" sectionId="eligibilities">
    <template #title>Product Media</template>
    <template #default>
      <div class="flex items-center flex-wrap gap-2">
        <div class="flex flex-col items-center gap-4 w-full">
          <div class="intro flex flex-row items-center gap-2 bg-slate-200 p-2 rounded text-sm" v-if="mediaIntro">
            <IconsInfo class="w-5 h-5 fill-sky-600" />
            <p>{{ mediaIntro }}</p>
          </div>
          <AdminMediaGalleryDisplay
            :media="media"
            :mediaIntro="mediaIntro"
            mediaType="product"
            @removeMedia="$emit('removeMedia', $event)"
            @placeMedia="$emit('placeMedia', $event)"
          />
          <button class="btn bg-gray-300 text-xs" @click.prevent="showMediaSelector = !showMediaSelector">
            <IconsImage />
            <span> Add Images </span>
          </button>
          <p class="text-xs">PNG, JPG, and GIF Accepted</p>
        </div>
        <div
          class="fixed inset-2 z-30 flex flex-col gap-4 bg-white flex flex-col justify-between"
          v-if="showMediaSelector"
        >
          <div class="overflow-auto">
            <LazyMediaUploader @setMedia="$emit('setMedia', $event)" @mediaSelectCancel="showMediaSelector = false" />
          </div>
          <div class="bg-slate-300 py-2 px-4 flex flex-row gap-2 justify-end">
            <button class="btn btn-secondary text-xs px-4 py-1" @click="showMediaSelector = false">Cancel</button>
            <button class="btn btn-primary text-xs px-4 py-1" @click="showMediaSelector = false">Select</button>
          </div>
        </div>
      </div>
    </template>
  </AdminSection>
</template>

<style lang="" scoped></style>
