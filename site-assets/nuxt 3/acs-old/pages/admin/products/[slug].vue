<script setup>
import { ArrowLeftIcon, CheckIcon } from '@heroicons/vue/outline'
import { ExclamationCircleIcon } from '@heroicons/vue/solid'
definePageMeta({
  layout: 'admin',
})
const pageTitle = ref('Product | YRL')

const algoliaSearch = useAlgoliaSearch('acs_search')
console.log('ALGOLIA', algoliaSearch)

const config = useRuntimeConfig()
const errorMsg = useState('errorMsg')
const message = useState('message')
// const errors = ref([])
const { fetchAll, fetchBySlug, saveMedia, saveDoc, deleteDocs } = useHttp()
const route = useRoute()
const router = useRouter()
const mediaIntro = 'This image gallery contains all images associated with this product.'

let response = null
const product = ref({
  status: 'Draft',
  media: [],
  oem: {},
  oemPartNumber: {},
  eligibilities: [],
  nextHigherAssemblies: [],
})
const slug = route.params.slug === '_' ? null : route.params.slug

// onMounted(async () => {
if (slug) {
  // const params = {
  //   match: `slug[eq]=${slug}`,
  //   // project: 'name, slug, acsPartNumber, price, media, oem, oemPartNumberm, eligibilities',
  //   lookup: 'media, eligibilities, oem, oemPartNumber, nextHigherAssemblies',
  // }
  response = await fetchBySlug('products', slug)
  console.log('RREESS', response)
  if (response) product.value = { ...product.value, ...response }
}
// })

const updateAttribute = async (attributeName, attributeValue, action) => {
  if (action === 'add') {
    if (attributeValue && !product.value[attributeName].find((e) => e._id == attributeValue._id))
      product.value[attributeName].push(attributeValue)
  }

  if (action === 'remove') {
    const j = product.value[attributeName].findIndex((e) => e._id == attributeValue._id)
    if (j !== -1) product.value[attributeName].splice(j, 1)
  }
}

// const removeAttribute = async (attributeName, attributeValue) => {
//   const j = product.value[attributeName].findIndex((e) => e._id == attributeValue._id)
//   if (j !== -1) product.value[attributeName].splice(j, 1)
// }

// const addEligibility = async (eligibility) => {
//   console.log('EEEEE', eligibility)
//   if (eligibility && !product.value.eligibilities.find((e) => e._id == eligibility._id))
//     product.value.eligibilities.push(eligibility)
// }

// const removeEligibility = async (eligibility) => {
//   const j = product.value.eligibilities.findIndex((e) => e._id == eligibility._id)
//   if (j !== -1) product.value.eligibilities.splice(j, 1)
// }

// const addNextHigherAssembly = async (nextHigherAssembly) => {
//   console.log('EEEEE', nextHigherAssembly)
//   if (nextHigherAssembly && !product.value.nextHigherAssemblies.find((n) => n._id == nextHigherAssembly._id))
//     product.value.nextHigherAssemblies.push(nextHigherAssembly)
// }
// const removeNextHigherAssembly = async (nextHigherAssembly) => {
//   const j = product.value.nextHigherAssemblies.findIndex((e) => e._id == nextHigherAssembly._id)
//   if (j !== -1) product.value.nextHigherAssemblies.splice(j, 1)
// }

// const updateProductNextHigherAssemblies = async (newNextHigherAssembly) => {
//   console.log('new', newNextHigherAssembly)
//   product.value.eligibilities.push(newNextHigherAssembly)
//   const savedProduct = await saveDoc('products', product.value)
//   if (!Object.values(savedProduct).length) return

//   // router.push({ name: 'admin-products-slug', params: { slug: '_' } })
// }

const updateGeneralInfo = (generalInfo) => {
  console.log(generalInfo)
  product.value = { ...product.value, ...generalInfo }
}

const setMedia = (media) => {
  console.log(media)
  for (const prop in media) {
    if (!product.value.media.find((m) => m._id == media[prop]._id)) product.value.media.push(media[prop])
  }
}

const placeMedia = (payload) => {
  console.log(payload)
  product.value.media[payload.index] = payload.value

  // for (const prop in media) {
  //   if (!product.value.media.find((m) => m._id == media[prop]._id)) product.value.media.push(media[prop])
  // }
}

const removeMedia = (index) => {
  console.log(index)
  product.value.media.splice(index, 1)
}

const saveProduct = async () => {
  console.log(product.value)
  if (!product.value.acsPartNumber) return (errorMsg.value = 'ACS Part Number is required')
  // const id = product.value.id ? product.value.id : null
  const savedProduct = await saveDoc('products', product.value)
  console.log('savedProduct', savedProduct)
  if (!savedProduct) return
  // slug = newProduct.slug
  message.value = 'product saved succesfully'
  // savedProduct = await deleteDocs('variants', { product: newProduct.id })
  // if (!savedProduct) return
  // if (product.value.variants.length) savedProduct = await $saveDoc('variants', product.value.variants)
  router.push({ name: 'admin-products-slug', params: { slug: savedProduct.slug } })
  message.value = 'product saved succesfully'
  // savedProduct = await $fetchBySlug('products', slug)
  // if (savedProduct) product.value = savedProduct
}
// watch(
//   () => galleryMedia.value,
//   (currentVal) => {
//     if (mediaReference.value === 'productMedia') product.value.gallery[0] = currentVal[0]
//   },
//   { deep: true }
// )
</script>

<template>
  <div class="flex h-full scroll-mt-24 flex-col p-4" id="go-to-top">
    <Title>{{ pageTitle }}</Title>
    <div class="flex justify-between px-6">
      <NuxtLink class="flex items-center gap-4" :to="{ name: 'admin-products' }">
        <ArrowLeftIcon class="h-6 w-6 text-yellow-700" />
        <span class="text-lg font-bold">{{ product.acsPartNumber }}</span>
      </NuxtLink>
      <button class="btn btn-add" @click.prevent="saveProduct">
        <CheckIcon class=" " />
      </button>
    </div>
    <!-- <div
      class="mx-auto mt-4 flex w-full max-w-7xl flex-row items-center gap-6 rounded border-l-4 border-l-red-600 bg-slate-200 p-2"
      v-if="errors.length"
    > -->
    <!-- <ExclamationCircleIcon class="h-8 w-8 rounded-full text-red-600" />
      <div class="text-red-600">
        <div class="">The following fields have invalid values:</div>
        <ul>
          <li class="ml-4 list-disc text-sm" v-for="(error, i) in errors" :key="`error-${i}`">{{ error }}</li>
        </ul>
      </div>
    </div> -->
    <!-- <h3 class="mt-4 text-xl font-semibold">Edit Product</h3> -->
    <main class="mt-4 w-full flex-1">
      <div class="flex flex-col items-start gap-6">
        <AdminProductsGeneralInfo :product="product" @updateGeneralInfo="updateGeneralInfo" />
        <AdminProductsEligibilities
          :product="product"
          sectionId="product-eligibilities"
          @addEligibility="updateAttribute('eligibilities', $event, 'add')"
          @removeEligibility="updateAttribute('eligibilities', $event, 'remove')"
        />
        <AdminProductsNextHigherAssemblies
          :product="product"
          sectionId="product-nextHigherAssemblies"
          @AddNextHigherAssembly="updateAttribute('nextHigherAssemblies', $event, 'add')"
          @removeNextHigherAssembly="updateAttribute('nextHigherAssemblies', $event, 'remove')"
        />
        <AdminMediaGallery
          :media="product.media"
          :mediaIntro="mediaIntro"
          @setMedia="setMedia"
          @placeMedia="placeMedia"
          @removeMedia="removeMedia"
        />
      </div>
      <!-- <div class="w-64">
        <AdminProductsRightSidebar
          :product="product"
          @updateProductStatus="product.status = $event"
          @saveProduct="saveProduct"
        />
      </div> -->
    </main>
    <a href="#go-to-top" class="sticky bottom-6 mr-8 mt-6 self-end rounded border bg-slate-200 px-4 py-2 text-sm"
      >Go To Top</a
    >
  </div>
</template>

<style lang="" scoped></style>
