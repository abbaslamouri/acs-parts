<script setup>
import { SearchIcon } from '@heroicons/vue/outline'
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const keyword = ref(null)
const inputRef = ref('')

// const setKeyword = (event) => {
//   if (event) {
//     keyword.value = event.target.value
//     inputRef.value.value = ''
//   } else {
//     keyword.value = ''
//   }
//   console.log(keyword.value)
//   return
//   emit('searchKeywordSelected', keyword.value)
// }
</script>

<template>
  <div class="p-1 b border border-gray-300 rounded-full text-sm ">
    <form class="flex items-center" @keydown.enter.prevent="emitSearchField">
      <SearchIcon class="w-5 h-5 text-slate-400" />
      <input
        class="px-2 outline-none py-1 border-none focus:border-none focus:ring-0"
        ref="inputRef"
        type="text"
        placeholder="Search"
        aria-label="Search"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </form>
    <!-- <div class="text-xs p-1 flex flex-row gap-2 items-center" v-if="keyword">
      <div class="uppercase text-slate-400 font-bold">Filter</div>
      <div class="bg-slate-50 pl-2py-1 rounded bg-slate-200 shadow-md flex flex-row items-center gap-1">
        Text Search: {{ keyword }}
        <IconsClose class="w-5 h-5 bg-slate-600 fill-slate-50 cursor-pointer" @click="setKeyword('')" />
      </div>
    </div> -->
  </div>
</template>

<style lang="" scoped></style>
