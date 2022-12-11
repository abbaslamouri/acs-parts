<script lang="ts" setup>
import debounce from 'lodash.debounce'
import { ISort } from '~/types/ISort'
import { IProduct } from '~/types/IProduct'

import {
  SwitchVerticalIcon,
  ShoppingBagIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  CheckIcon,
  XIcon,
} from '@heroicons/vue/outline'

definePageMeta({
  layout: 'admin',
})
const title = ref('Products | YRL')
const config = useRuntimeConfig()
const message = useMessage()
const { fetchAll, importProducts, deleteProducts, deleteDoc } = useHttp()
const { createAlgoliaIndex } = useProduct()
const products = ref<[]>()
const totalCount = ref<number>(0) // Total item count in the database
const count = ref<number>(null) // item count taking into account params
const page = ref<number>(1)
const perPage = ref<number>(10)
const keyword = ref<string>('')
const sort: ISort = reactive({
  field: 'acsPartNumber',
  direction: '-',
})
const showDropZone = ref<boolean>(false)
const selectedProducts = ref([])
const productsDeleteAlertOpen = ref<boolean>(false)

let response: any
const sortOptions = [
  { key: 'sortOrder', name: 'Direction' },
  { key: 'name', name: 'Name' },
  { key: 'acsPartNumber', name: 'ACS Part Number' },
  { key: 'eom', name: 'OEM' },
  { key: 'eomPartNumber', name: 'OEM Part Number' },
  { key: 'dateCreated', name: 'Date Created' },
]

const params = computed(() => {
  const params = {
    match: '',
    project: 'name, slug, acsPartNumber, price, media, tbq, status',
    page: page.value,
    limit: perPage.value,
    sort: `${sort.direction}${sort.field}`,
    keyword: keyword.value ? keyword.value : '',
  }
  return params
})

const pages = computed(() => {
  return totalCount.value % perPage.value
    ? Math.round(totalCount.value / perPage.value) + 1
    : Math.round(totalCount.value / perPage.value)
})

const fetchAllProducts = async () => {
  response = await fetchAll('products', params.value)
  console.log(response)
  if (!response) return
  products.value = response.docs
  count.value = response.results
  totalCount.value = response.totalCount
}

const handleSearch = async (searchKeyword: string) => {
  keyword.value = searchKeyword
  page.value = 1
  await fetchAllProducts()
}

const toggleSort = async (event: ISort) => {
  sort.field = event.field
  sort.direction = event.direction
  // await fetchAllProducts()
}

const setPage = async (currentPage: number) => {
  page.value = currentPage
  await fetchAllProducts()
}

const setPerPage = async () => {
  await fetchAllProducts()
}

const updateSelectedProducts = (product: IProduct) => {
  const index = selectedProducts.value.findIndex((p: IProduct) => p._id == product._id)
  if (index === -1) selectedProducts.value.push(product)
  else selectedProducts.value.splice(index, 1)
}

const deleteProduct = async (productId: string) => {
  if (
    !confirm(
      'Are you sure you want to delete this products?  This product and all associated variants will also be deleted'
    )
  )
    return
  if (!(await deleteDoc('products', productId))) return
  console.log(response)
  fetchAllProducts()
  message.value = 'Product and product variants deleted succesfully'
}

const deleteSelectedProducts = async () => {
  // if (!confirm('Are you sure you want to delete these files?')) return
  productsDeleteAlertOpen.value = false
  console.log(selectedProducts.value)
  response = await deleteProducts('products', selectedProducts.value)
  console.log('RES', response)
  if (!response) return
  await fetchAllProducts()
  message.value = 'Products deleted succesfully'
  selectedProducts.value = []
}

const uploadFile = async (files) => {
  console.log(files)
  showDropZone.value = false
  const formData = new FormData()
  formData.append('media', files[0])
  const response = await importProducts(formData)
  console.log('SEEDER', response)
}

const createSearchIndex = async () => {
  const response = await createAlgoliaIndex()
  console.log(response)
}

await fetchAllProducts()

watch(
  () => params.value,
  debounce(async (newVal) => {
    console.log(newVal)
    await fetchAllProducts()
    // emit('updateUser', newVal)
  }, 600),
  { deep: true }
)
</script>

<template>
  <div class="border-6 flex h-full flex-col p-6">
    <Title>{{ title }}</Title>
    <div class="flex flex-1 flex-col justify-between gap-3">
      <div class="flex items-center justify-around py-2 px-8 sm:justify-between">
        <h2 class="bg-light-50 bg-light-200tracking-wide flex items-center gap-2 text-xl font-semibold">
          <ShoppingBagIcon class="hidden h-6 w-6 md:block" /><span>Products</span>
        </h2>
        <div class="flex items-center gap-2">
          <div class="hidden text-sm text-slate-400 lg:block">
            {{ (page - 1) * perPage + 1 }} - {{ page * perPage }} of {{ totalCount }}
          </div>
          <Search v-model="keyword" @update:modelValue="$emit('setKeyword', keyword)" />
          <NuxtLink
            class="text-sm"
            v-if="selectedProducts.length === 1"
            :to="{
              name: 'admin-products-slug',
              params: { slug: selectedProducts[0] && selectedProducts[0].slug ? selectedProducts[0].slug : '_' },
            }"
          >
            <PencilIcon
              class="h-9 w-9 rounded-full bg-gray-200 p-2 transition-all duration-300 hover:bg-green-700 hover:text-white"
            />
          </NuxtLink>
          <button
            class="cursor-pointer border border-transparent bg-slate-50"
            v-if="selectedProducts.length"
            @click="productsDeleteAlertOpen = true"
          >
            <TrashIcon
              class="h-9 w-9 rounded-full bg-gray-200 p-2 transition-all duration-300 hover:bg-red-700 hover:text-white"
            />
          </button>
          <NuxtLink class="btn btn-add text-sm" :to="{ name: 'admin-products-slug', params: { slug: '_' } }">
            <PlusIcon class=" " />
          </NuxtLink>
          <button class="btn btn-add" @click="showDropZone = true">
            <SwitchVerticalIcon class=" " />
          </button>
          <button class="btn btn-add" @click="createSearchIndex">
            <ShoppingBagIcon class=" " />
          </button>
        </div>
      </div>
      <div class="flex items-center justify-between border-t border-b border-b-gray-300 border-t-gray-300 py-3">
        <div class="flex flex-row items-center gap-2">
          <div class="flex items-center gap-4">
            <div class="w-20">
              <FormsBaseInput name="Per Page" label="Per Page" v-model="perPage" />
            </div>
            <button
              class="flex items-center gap-1"
              v-if="!selectedProducts.length"
              @click="selectedProducts = products"
            >
              <CheckIcon class="h-6 w-6 rounded-full border border-gray-400 p-1" />Select All
            </button>
          </div>

          <button
            class="flex items-center gap-1"
            v-if="selectedProducts.length"
            @click="$emit('toggleSelectAll', false)"
          >
            <XIcon class="h-6 w-6 rounded-full border border-gray-400 p-1" />{{ selectedProducts.length }} Items
            Selected
          </button>
        </div>
        <Sort :sort="sort" :sortOptions="sortOptions" @toggleSort="toggleSort" />
      </div>
      <main class="w-full flex-1 flex-col gap-4">
        <div class="flex flex-col flex-col gap-3">
          <div class="flex flex-row items-center gap-4" v-if="totalCount"></div>

          <AdminProductsList
            :products="products"
            :totalCount="totalCount"
            :selectedProducts="selectedProducts"
            @updateSelectedProducts="updateSelectedProducts"
            @deleteProduct="deleteProduct"
          />
          <Alert
            :alertOpen="productsDeleteAlertOpen"
            @closeAlert="productsDeleteAlertOpen = false"
            @ok="deleteSelectedProducts"
          >
            <template #header>Are you sure?</template>
            <template #description>This action cannot be undone</template>
          </Alert>
        </div>
      </main>
      <footer class="max-width-130 w-full">
        <Pagination :page="page" :pages="pages" @pageSet="setPage" v-if="pages > 1 && !keyword" />
      </footer>
    </div>
    <!-- <AdminListFallback>
      <template #header>Add your first physical or digital product</template>
      <template #default>
        <div class="">Add your product and variants. Products must have at least a name and a price</div>
      </template>
      <template #footer>
        <NuxtLink class="btn btn-primary" :to="{ name: 'admin-products-slug', params: { slug: '_' } }">
          <IconsPlus class="w-5 h-5 fill-white" />
          <span>Add</span>
        </NuxtLink>
      </template>
    </AdminListFallback> -->
    <MediaDropZone
      :showDropZone="showDropZone"
      :fileTypes="['text/csv']"
      @toggleDropZone="showDropZone = $event"
      @cancelFileUpload="showDropZone = !showDropZone"
      @uploadItemsSelected="uploadFile"
    />
  </div>
</template>

<style lang="" scoped></style>
