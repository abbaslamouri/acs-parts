<script setup>
const props = defineProps({
  product: {
    type: Object,
  },
})

const emit = defineEmits(['updateGeneralInfo'])

const { fetchAll } = useHttp()
const { fetchOemPartNumbersByOemId } = useProduct()

const localProductInfo = ref({
  acsPartNumber: props.product.acsPartNumber,
  oem: props.product.oem,
  oemPartNumber: props.product.oemPartNumber,
  price: props.product.price,
  salePrice: props.product.salePrice,
  description: props.product.description,
  sortOrder: props.product.sortOrder,
  stockQty: props.product.stockQty,
  status: props.product.status,
})

const oems = ref([])
const oemPartNumbers = ref([])
let response

response = await fetchAll('oems', {})
if (response.docs) oems.value = response.docs

if (localProductInfo.value.oem) {
  response = await fetchOemPartNumbersByOemId(localProductInfo.value.oem._id)
  if (response) oemPartNumbers.value = response
}

const updateOem = async (oemId) => {
  const oem = oems.value.find((o) => o._id == oemId)
  if (oem) localProductInfo.value.oem = oem
  response = await fetchOemPartNumbersByOemId(oemId)
  if (response) oemPartNumbers.value = response
}

const updateOemPartNumber = async (oemPartNumberId) => {
  const oemPartNumber = oemPartNumbers.value.find((o) => o._id == oemPartNumberId)
  if (oemPartNumber) localProductInfo.value.oemPartNumber = oemPartNumber
}

watch(
  () => localProductInfo.value,
  (currentVal) => {
    emit('updateGeneralInfo', currentVal)
  },
  { deep: true }
)
</script>

<template>
  <AdminSection sectionId="general-info">
    <template #title>General Information</template>
    <template #default>
      <FormsBaseInput label="ACS Part Number" v-model="localProductInfo.acsPartNumber" />
      <FormsBaseTextarea label="Description" v-model="localProductInfo.description" />
      <div class="flex gap-4"></div>
      <div class="flex gap-4">
        <FormsBaseInput class="flex-1" label="Price" v-model="localProductInfo.price" />
        <FormsBaseInput class="flex-1" label="Sale Price" v-model="localProductInfo.salePrice" />
      </div>
      <div class="flex gap-4">
        <div class="flex-1">
          <FormsBaseSelect
            label="OEM"
            :options="
              oems.map((o) => {
                return { key: o._id, name: o.name }
              })
            "
            :value="localProductInfo.oem._id"
            @update:modelValue="updateOem"
          />
        </div>
        <div class="flex-1" v-if="localProductInfo.oem && oemPartNumbers.length">
          <LazyFormsBaseSelect
            label="OEM Part Number"
            :options="
              oemPartNumbers.map((o) => {
                return { key: o._id, name: o.name }
              })
            "
            :value="localProductInfo.oemPartNumber._id"
            @update:modelValue="updateOemPartNumber"
          />
        </div>
      </div>
      <FormsBaseSelect
        label=""
        :options="[
          { key: 'Draft', name: 'Draft' },
          { key: 'Published', name: 'Published' },
          { key: 'Archived', name: 'Archived' },
        ]"
        :value="localProductInfo.status"
      />
      <div class="flex gap-4">
        <FormsBaseInput class="flex-1" label="Stock Quantity" v-model="localProductInfo.stockQty" />
        <FormsBaseInput label="Sort Order" v-model="localProductInfo.sortOrder" />
      </div>
    </template>
  </AdminSection>
</template>

<style scoped></style>
