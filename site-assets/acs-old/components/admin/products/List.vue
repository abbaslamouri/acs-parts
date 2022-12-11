<script setup>
import {
  SwitchVerticalIcon,
  ShoppingBagIcon,
  FolderIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  CheckIcon,
  XIcon,
} from '@heroicons/vue/outline'
const props = defineProps({
  products: {
    type: Array,
  },
  totalCount: {
    type: Number,
  },
  selectedProducts: {
    type: Array,
  },
})
const emit = defineEmits(['deleteProduct', 'updateSelectedProducts'])

const config = useRuntimeConfig()

const router = useRouter()

const showActionKeys = ref([])

const resetActions = () => {
  for (const prop in props.products) {
    showActionKeys.value[prop] = false
  }
}

const setActions = (payload) => {
  resetActions()
  showActionKeys.value[payload.index] = payload.action
}

// const handleEditProduct = (slug) => {
//   resetActions()
//   router.push({ name: 'ecommerce-products-slug', params: { slug } })
// }

const deleteProduct = (productId) => {
  emit('deleteProduct', productId)
  resetActions()
}
</script>

<template>
  <div>
    <!-- <table class="text-xs shadow-md">
      <thead>
        <tr class="bg-slate-200">
          <th class="w-6">Image</th>
          <th>Name</th>
          <th>Price</th>
          <th class="text-right min-w-12">actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="product._id">
          <td class="flex-row justify-center items-center">
            <div class="justify-center items-center w-16 h-16">
              <img
                class="w-full h-full cover"
                v-if="
                  product.media &&
                  product.media.length &&
                  product.media[0] &&
                  product.media[0].mimetype &&
                  product.media[0].mimetype.includes('image')
                "
                :src="`${config.doSpaceEndpoint}/uploads/${product.media[0].originalFilename}`"
              />
              <img v-else class="w-full hfull contain" src="/placeholder.png" />
            </div>
          </td>
          <td class="text-center font-bold">{{ product.name }}</td>
          <td class="text-center">{{ product.price }}</td>
        </tr>
      </tbody>
    </table> -->

    <div class="media-list flex flex-row flex-wrap items-center justify-evenly gap-6 px-1 py-6">
      <div v-for="(product, index) in products" class="item shadow-md relative" v-if="products && products.length">
        <AdminProductsCard :product="product" :key="product._id" :selectedProducts="selectedProducts" />
        <div
          class="absolute top-1 left-1 border border-slate-400 rounded-full w-6 h-6 grid place-items-center cursor-pointer bg-white hover:border-2 hover:border-indigo-800 hover:bg-indigo-300"
          :class="{ 'bg-white text-indigo-700': selectedProducts.find((m) => m._id == product._id) }"
          @click="$emit('updateSelectedProducts', product)"
        >
          <CheckIcon class="w-4 h-4" v-show="selectedProducts.find((m) => m._id == product._id)" />
        </div>
      </div>
      <div v-else>There are no images to display. Add new images</div>
    </div>
  </div>
</template>

<style lang="" scoped>
/* tr {
  border-bottom: 1px solid $slate-300; 
}
th {
  padding: 1rem;
}
td {
  padding: 0.5rem;

  border: 1px solid red;
} */
</style>
