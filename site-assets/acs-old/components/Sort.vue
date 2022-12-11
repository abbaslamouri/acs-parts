<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { SortAscendingIcon, SortDescendingIcon } from '@heroicons/vue/outline'

const props = defineProps({
  sort: {
    type: Object,
  },
  sortOptions: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['toggleSort'])

const currentSort = reactive({
  field: props.sort.field,
  order: props.sort.order,
})

watch(
  () => currentSort,
  (sortVal) => {
    emit('toggleSort', sortVal)
  },
  { deep: true }
)
</script>

<template>
  <div class="flex flex-row gap-2 items-center">
    <!-- <div class="min-w-[10rem]">
      <FormsBaseSelect :options="sortOptions" v-model="currentSort.field" label="Sort by" />
    </div> -->
    <Menu as="div" class="relative border w-48 z-10 text-center">
      <MenuButton class="p-1">{{ currentSort.field }}</MenuButton>
      <MenuItems
        class="absolute border w-48 px-4 py-2 shadow-lg text-sm top-8 left-1/2 transform -translate-x-1/2 bg-white text-left"
      >
        <MenuItem v-slot="{ active }" v-for="option in sortOptions" :key="option.key">
          <a class="block" :class="{ 'bg-blue-500': active }" href="#" @click="currentSort.field = option.key">
            {{ option.name }}
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
    <div class="flex flex-row items-center gap-2">
      <!-- <span>Sort Order</span> -->
      <button
        class="btn cursor-pointer text-slate-500"
        @click="currentSort.order == '-' ? (currentSort.order = ``) : (currentSort.order = `-`)"
      >
        <SortDescendingIcon class="w-6 h-6" v-if="currentSort.order == '-'" />
        <SortAscendingIcon class="w-6 h-6" v-else />
      </button>
    </div>
  </div>
</template>

<style lang="" scoped></style>
