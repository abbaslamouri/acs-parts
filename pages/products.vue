<script setup>
// import { ViewGridIcon, ViewListIcon } from '@heroicons/vue/outline'
// import debounce from 'lodash.debounce'

// import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

// import {
//   SwitchVerticalIcon,
//   ShoppingBagIcon,
//   FolderIcon,
//   PlusIcon,
//   PencilIcon,
//   TrashIcon,
//   CheckIcon,
//   XIcon,
// } from '@heroicons/vue/outline'

const title = ref('Products | YRL')

// const route = useRoute()
// console.log(route)

const config = useRuntimeConfig()
const message = useState('message')
// const { fetchAll, importProducts, deleteProducts } = useHttp()

const products = ref([])
const totalCount = ref(0) // Total item count in the database
const count = ref(null) // item count taking into account params
const page = ref(1)
const perPage = ref(50)
// const project = 'name, acsPartNumber, gallery, eligibilities'
// const lookup = 'gallery, eligibilities'
const keyword = ref('')
const sort = reactive({
  field: 'acsPartNumber',
  order: '-',
})
const showDropZone = ref(false)
const selectedProducts = ref([])
const productsDeleteAlertOpen = ref(false)

let response
const sortOptions = [
  { key: 'sortOrder', name: 'Order' },
  { key: 'name', name: 'Name' },
  { key: 'acsPartNumber', name: 'ACS Part Number' },
  { key: 'eom', name: 'OEM' },
  { key: 'eomPartNumber', name: 'OEM Part Number' },
  { key: 'dateCreated', name: 'Date Created' },
]

const params = computed(() => {
  const params = {
    match: '',
    project: 'name, slug, acsPartNumber, price, media, oem, oemPartNumberm, eligibilities',
    // lookup: 'media, eligibilities, oem, oemPartNumber',
    page: page.value,
    limit: perPage.value,
    sort: `${sort.order}${sort.field}`,
    // keyword: keyword.value ? keyword.value : '',
  }
  // if (!keyword.value) delete params.keyword
  return params
})

const pages = computed(() => {
  return totalCount.value % perPage.value
    ? parseInt(totalCount.value / perPage.value) + 1
    : parseInt(totalCount.value / perPage.value)
})

const fetchAllProducts = async () => {
  const { data, pending, error } = await useFetch('/api/v1/products/fetchall', {
    method: 'GET',
  })
  console.log(data.value)
  products.value = data.value
  //   response = await fetchAll('products', params.value)
  //   console.log(response)
  //   if (!response) return
  //   products.value = response.docs
  //   count.value = response.results
  //   totalCount.value = response.totalCount
}

const handleSearch = async (searchKeyword) => {
  keyword.value = searchKeyword
  page.value = 1
  //   await fetchAllProducts()
}

const toggleSort = async (event) => {
  sort.field = event.field
  sort.order = event.order
  // await fetchAllProducts()
}

const setPage = async (currentPage) => {
  page.value = currentPage
  //   await fetchAllProducts()
}

const setPerPage = async () => {
  //   await fetchAllProducts()
}

const updateSelectedProducts = (product) => {
  //   const index = selectedProducts.value.findIndex((p) => p._id == product._id)
  //   if (index === -1) selectedProducts.value.push(product)
  //   else selectedProducts.value.splice(index, 1)
}

const deleteProduct = async (productId) => {
  //   if (
  //     !confirm(
  //       'Are you sure you want to delete this products?  This product and all associated variants will also be deleted'
  //     )
  //   )
  //     return
  //   if (!(await deleteDoc('products', productId))) return
  //   console.log(response)
  // //   fetchAllProducts()
  //   message.value = 'Product and product variants deleted succesfully'
}

const deleteSelectedProducts = async () => {
  // if (!confirm('Are you sure you want to delete these files?')) return
  //   productsDeleteAlertOpen.value = false
  //   console.log(selectedProducts.value)
  //   response = await deleteProducts('products', selectedProducts.value)
  //   console.log('RES', response)
  //   if (!response) return
  // //   await fetchAllProducts()
  //   message.value = 'Products deleted succesfully'
  //   selectedProducts.value = []
}

const uploadFile = async (files) => {
  //   console.log(files)
  //   showDropZone.value = false
  //   const formData = new FormData()
  //   formData.append('media', files[0])
  //   const response = await importProducts(formData)
  //   console.log('SEEDER', response)
}

await fetchAllProducts()

// watch(
//   () => params.value
//   debounce(async (newVal) => {
//     console.log(newVal)
//     // await fetchAllProducts()
//     // emit('updateUser', newVal)
//   }, 600),
//   { deep: true }
// )
</script>

<template>
  <div class="">
    <Title>{{ title }}</Title>
    <!-- <AlgoliaSearch /> -->
    <!-- <BreadCrumbs /> -->
    <div class="">
      <ul class="products" role="list">
        <li v-for="product in products">
          <!-- <div v-if="uploadedProducts.length > n - 1"> -->
          {{ product.name }}
          <div class="image">
            <img
              :src="`https://acs-space.nyc3.cdn.digitaloceanspaces.com/products/${product.image}.jpg`"
              alt=""
              v-if="product.image"
            />
            <img src="/images/placeholder.png" alt="" v-else />
          </div>
        </li>
      </ul>

      <!-- </div> -->
      <!-- <div v-else>Loading...</div> -->
      <!-- <StoreSidebar /> -->
      <div class="">
        <div class="">
          <div class="">
            <!-- <FormsBaseSelect
              label="Default Sorting"
              value="default-sorting"
              :options="[
                { key: 'default-sorting', name: 'Default Sorting' },
                { key: 'price-hi-to-low', name: 'Price High To Low' },
                { key: 'price-low-to-hi', name: 'Price Low To High' },
              ]"
            /> -->
          </div>
          <div class="">
            <!-- <ViewGridIcon class="" /> -->
            <!-- <ViewListIcon class="" /> -->
          </div>
        </div>
        <div class="">
          <!-- <StoreProductCard
            class=""
            v-for="product in products"
            :product="product"
          /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  color: red;
  gap: 1rem;
  .image {
    width: 4rem;
    height: 4rem;
  }
}
</style>
