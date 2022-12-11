<script setup>
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

const emit = defineEmits(['addNextHigherAssembly', 'removeNextHigherAssembly'])

const { saveDoc } = useHttp()
const newNextHigherAssembly = ref({ name: '' })
const nextHigherAssemblyInputRef = ref('')

const addNextHigherAssembly = async () => {
  const response = await saveDoc('nexthigherassemblies', newNextHigherAssembly.value)
  emit('addNextHigherAssembly', response)
  nextHigherAssemblyInputRef.value.focus()
  newNextHigherAssembly.value.name = ''
}
</script>

<template>
  <AdminSection :id="sectionId">
    <template #title>Next Higher Assembly</template>
    <template #default>
      <div v-if="product._id">
        <div class="w-64">
          <input
            class="p-1 placeholder:text-slate-400 placeholder:text-xs"
            type="text"
            ref="nextHigherAssemblyInputRef"
            v-model="newNextHigherAssembly.name"
            @keyup.enter="addNextHigherAssembly"
            placeholder="Add New Next Higher Assembly"
          />
        </div>
        <div class="flex items-center flex-wrap gap-2 mt-4">
          <div v-for="nextHigherAssembly in product.nextHigherAssemblies" :key="nextHigherAssembly._id">
            <div class="flex items-center text-xs text-slate-50">
              <span
                class="whitespace-nowrap pl-3 pr-2 border border-slate-400 bg-slate-600 rounded-tl-full rounded-bl-full h-6 flex items-center"
              >
                {{ nextHigherAssembly.name }}</span
              >
              <button
                class="h-6 border border-gay-500 rounded-tr-full rounded-br-full flex items-center pl-1 pr-2 bg-slate-200 cursor-pointer"
              >
                <XIcon class="w-4 h-4 text-gray-500" @click="$emit('removeNextHigherAssembly', nextHigherAssembly)" />
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
