<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { FolderIcon, PlusIcon, PencilIcon, TrashIcon, CheckIcon, XIcon } from '@heroicons/vue/outline'

const props = defineProps({
  selectedMedia: {
    type: Array,
  },
  sort: {
    type: Object,
  },
  sortOptions: {
    type: Array,
    required: true,
  },
  page: {
    type: Number,
    required: true,
  },
  perPage: {
    type: Number,
    required: true,
  },
  totalCount: {
    type: Number,
    required: true,
  },
  keyword: {
    type: String,
    required: true,
  },
})
const emit = defineEmits([
  'toggleDropZone',
  true,
  'toggleSort',
  'deleteMedia',
  'searchKeywordSelected',
  'toggleSelectAll',
  'selectMediaType',
  'toggleSlideout',
  'setKeyword',
  'setPerPage',
])

const mediaToDisplay = ref('all')
const mediaOptions = [
  { key: 'all', name: 'All Media' },
  { key: 'image', name: 'Images' },
  { key: 'pdf', name: 'PDF' },
  { key: 'csv', name: 'CSV' },
]
const localPerPage = ref(props.perPage)

watch(
  () => mediaToDisplay.value,
  (newVal) => {
    emit('selectMediaType', newVal)
    // emit('toggleSort', newVal)
  },
  { deep: true }
)

watch(
  () => localPerPage.value,
  (newVal) => {
    emit('setPerPage', newVal * 1)
    // emit('toggleSort', newVal)
  },
  { deep: true }
)
</script>

<template>
  <div class="">
    <div class="flex items-center justify-around py-2 px-8 sm:justify-between">
      <h2 class="text-xl font-semibold flex gap-2 items-center bg-light-50 bg-light-200tracking-wide">
        <FolderIcon class="w-6 h-6 hidden md:block" /><span>File Library</span>
      </h2>
      <div class="flex items-center gap-2">
        <div class="hidden text-slate-400 text-sm lg:block">
          {{ (page - 1) * perPage + 1 }} - {{ page * perPage }} of {{ totalCount }}
        </div>
        <Search v-model="keyword" @update:modelValue="$emit('setKeyword', keyword)" />
        <button class="cursor-pointer" v-if="selectedMedia.length === 1" @click="$emit('toggleSlideout')">
          <PencilIcon
            class="w-9 h-9 bg-gray-200 p-2 rounded-full hover:bg-green-700 hover:text-white transition-all duration-300"
          />
        </button>
        <button
          class="bg-slate-50 border border-transparent cursor-pointer"
          v-if="selectedMedia.length"
          @click="$emit('deleteMedia')"
        >
          <TrashIcon
            class="w-9 h-9 bg-gray-200 p-2 rounded-full hover:bg-red-700 hover:text-white transition-all duration-300"
          />
        </button>
        <button class="btn btn-add" @click="$emit('toggleDropZone', true)">
          <PlusIcon class=" " />
        </button>
      </div>
    </div>

    <div class="flex items-center justify-between border-t border-b border-b-gray-300 border-t-gray-300 py-3">
      <div class="flex flex-row items-center gap-2">
        <div class="w-20">
          <FormsBaseInput name="Per Page" label="Per Page" v-model="localPerPage" />
        </div>
        <Menu as="div" class="relative border w-48 z-10 text-center">
          <MenuButton class="p-1">{{ mediaOptions.find((o) => o.key === mediaToDisplay).name }}</MenuButton>
          <MenuItems
            class="absolute border w-48 px-4 py-2 shadow-lg text-sm top-8 left-1/2 transform -translate-x-1/2 bg-white text-left"
          >
            <MenuItem v-slot="{ active }" v-for="option in mediaOptions" :key="option.key">
              <a class="block" :class="{ 'bg-blue-500': active }" href="#" @click="mediaToDisplay = option.key">
                {{ option.name }}
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>

        <!-- <button class="btn btn-secondary text-xs px-4 py-2" @click="$emit('toggleSelectAll', true)"> -->
        <button class="flex items-center gap-1" v-if="!selectedMedia.length" @click="$emit('toggleSelectAll', true)">
          <CheckIcon class="w-6 h-6 border border-gray-400 rounded-full p-1" />Select All
        </button>
        <button class="flex items-center gap-1" v-if="selectedMedia.length" @click="$emit('toggleSelectAll', false)">
          <XIcon class="w-6 h-6 border border-gray-400 rounded-full p-1" />{{ selectedMedia.length }} Items Selected
        </button>
        <!-- </button> -->
        <!-- <button class="btn btn-secondary text-xs bg-slate-200 px-4 py-2" @click="$emit('toggleSelectAll', false)">
          Unselect All
        </button> -->
      </div>
      <Sort :sort="sort" :sortOptions="sortOptions" @toggleSort="$emit('toggleSort', $event)" />
      <!-- <div class="flex-1">
        <Search @searchKeywordSelected="$emit('searchKeywordSelected', $event)" />
      </div> -->
    </div>
  </div>
</template>

<style lang="" scoped></style>
