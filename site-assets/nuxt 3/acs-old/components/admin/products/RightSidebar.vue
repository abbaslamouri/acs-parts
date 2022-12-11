<script setup>
const props = defineProps({
  product: {
    type: Object,
  },
})
const emit = defineEmits(['saveProduct', 'updateProductStatus'])

// const product = useState('product')
// const { fetchAll } = useHttp()

const selectedCategoryIds = ref([])
const localProductStatus = ref(props.product.status)

// const response = await fetchAll('categories')
// const allCategories = response.docs

// selectedCategoryIds.value = product.value.categories
//   ? [
//       ...product.value.categories.map((c) => {
//         return c._id
//       }),
//     ]
//   : []

// const updateProductCategories = (event) => {
//   product.value.categories = []
//   for (const prop in selectedCategoryIds.value) {
//     const category = allCategories.find((c) => c._id == selectedCategoryIds.value[prop])
//     product.value.categories.push(category)
//   }
// }

watch(
  () => localProductStatus.value,
  (newVal) => {
    console.log(newVal)
    emit('updateProductStatus', newVal)
  },
  { deep: true }
)
</script>

<template>
  <section class="shadow-md w-full p-4 sticky top-30 flex flex-col gap-6" id="details">
    <button
      class="btn btn-checkout w-full px-4 py-4 bg-green-600 text-white flex justify-center"
      @click.prevent="$emit('saveProduct')"
    >
      Save Changes
    </button>
    <FormsBaseToggle v-model="localProductStatus" label="Active" />
  </section>
</template>

<style lang="" scoped></style>
