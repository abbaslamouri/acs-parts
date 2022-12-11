<script setup>
import debounce from 'lodash.debounce'

import { XIcon } from '@heroicons/vue/outline'

defineProps({
  product: {
    type: Object,
    required: true,
  },
  sectionId: {
    type: String,
  },
})

const emit = defineEmits(['addEligibility', 'removeEligibility'])
const { fetchAll, saveDoc } = useHttp()
const { fetchAttributesByName } = useProduct()
const keyword = ref('')
const eligibilities = ref([])
const eligibilityInputRef = ref('')
let response

const addEligibility = async (eligibility) => {
  // const response = await saveDoc('eligibilities', keyword.value)
  emit('addEligibility', eligibility)
  // eligibilityInputRef.value.focus()
  keyword.value = ''
  eligibilities.value = []
}

watch(
  () => keyword.value,
  debounce(async (newVal) => {
    console.log(newVal)
    const response = await fetchAttributesByName('eligibilities', newVal)
    console.log('RES', response)
    if (response) eligibilities.value = response
    // await fetchMedia()
    // emit('updateUser', newVal)
  }, 500)
  // { deep: true }
)

watch(
  () => eligibilityInputRef.value,
  debounce(async (newVal) => {
    console.log(newVal)
    // const response = await fetchAttributesByName('eligibilities', newVal)
    // console.log('RES', response)
    // if (response) eligibilities.value = response
    // await fetchMedia()
    // emit('updateUser', newVal)
  }, 500)
  // { deep: true }
)
</script>

<template>
  <AdminSection sectionId="eligibilities">
    <template #title>Eligibilities</template>
    <template #default>
      <div v-if="product._id">
        <div class="relative w-64 bg-white">
          <div class="w-64">
            <input
              class="border border-gray-300 p-1 placeholder:text-xs placeholder:text-slate-400"
              type="text"
              ref="eligibilityInputRef"
              v-model="keyword"
              placeholder="Add New eligibility"
              @focus="eligibilityInputRef.placeholder = 'Start Typing'"
            />
          </div>
          <!-- <BaseInput label="Add Eligibility" v-model="keyword" /> -->
          <ul
            class="absolute z-10 max-h-40 w-full overflow-auto border border-gray-300 bg-white text-xs shadow-md"
            v-if="eligibilities.length"
          >
            <li
              class="cursor-pointer px-3 py-2 hover:bg-slate-100"
              v-for="eligibility in eligibilities"
              :key="eligibility._id"
              @click="addEligibility(eligibility)"
            >
              {{ eligibility.name }}
            </li>
          </ul>
        </div>
        <div class="mt-4 flex flex-wrap items-center gap-2">
          <div v-for="eligibility in product.eligibilities" :key="eligibility._id">
            <div class="flex items-center text-xs text-slate-50">
              <span
                class="flex h-6 items-center whitespace-nowrap rounded-tl-full rounded-bl-full border border-slate-400 bg-slate-600 pl-3 pr-2"
              >
                {{ eligibility.name }}</span
              >
              <button
                class="border-gay-500 flex h-6 cursor-pointer items-center rounded-tr-full rounded-br-full border bg-slate-200 pl-1 pr-2"
              >
                <XIcon class="h-4 w-4 text-gray-500" @click="$emit('removeEligibility', eligibility)" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-else>You must save product before adding eligibilities</div>
    </template>
  </AdminSection>
</template>

<style lang="" scoped></style>
