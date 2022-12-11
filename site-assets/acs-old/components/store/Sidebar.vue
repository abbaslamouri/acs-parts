<script setup>
import { ViewGridIcon, ViewListIcon } from '@heroicons/vue/outline'
import debounce from 'lodash.debounce'

import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

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

// const route = useRoute()
// console.log(route)

const config = useRuntimeConfig()
const message = useState('message')
const { fetchAll, importProducts, deleteProducts } = useHttp()

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
</script>

<template>
  <div class="divide-y divide-gray-300 rounded border px-4 shadow-sm">
    <div class="pb-6 pt-2">
      <h3 class="font-bold uppercase text-gray-500">Categories</h3>
      <ul class="mt-2 space-y-1">
        <li class="">
          <div class="flex justify-between text-gray-400" :to="{ name: `index` }">
            <label class="flex cursor-pointer items-center gap-2">
              <input class="" type="checkbox" />
              <span>Bedrooms</span>
            </label>
            <span class="text-xs">(50)</span>
          </div>
        </li>
        <li class="">
          <div class="flex justify-between text-gray-400" :to="{ name: `index` }">
            <label class="flex cursor-pointer items-center gap-2">
              <input class="" type="checkbox" />
              <span>Sofas</span>
            </label>
            <span class="text-xs">(50)</span>
          </div>
        </li>
        <li class="">
          <div class="flex justify-between text-gray-400" :to="{ name: `index` }">
            <label class="flex cursor-pointer items-center gap-2">
              <input class="" type="checkbox" />
              <span>Offices</span>
            </label>
            <span class="text-xs">(50)</span>
          </div>
        </li>
        <li class="">
          <div class="flex justify-between text-gray-400" :to="{ name: `index` }">
            <label class="flex cursor-pointer items-center gap-2">
              <input class="" type="checkbox" />
              <span>Outdoors</span>
            </label>
            <span class="text-xs">(50)</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="pb-6 pt-2">
      <h3 class="font-bold uppercase text-gray-500">Brands</h3>
      <ul class="mt-2 space-y-1">
        <li class="">
          <div class="flex justify-between text-gray-400" :to="{ name: `index` }">
            <label class="flex cursor-pointer items-center gap-2">
              <input class="" type="checkbox" />
              <span>Nike</span>
            </label>
            <span class="text-xs">(50)</span>
          </div>
        </li>
        <li class="">
          <div class="flex justify-between text-gray-400" :to="{ name: `index` }">
            <label class="flex cursor-pointer items-center gap-2">
              <input class="" type="checkbox" />
              <span>Addidas</span>
            </label>
            <span class="text-xs">(50)</span>
          </div>
        </li>
        <li class="">
          <div class="flex justify-between text-gray-400" :to="{ name: `index` }">
            <label class="flex cursor-pointer items-center gap-2">
              <input class="" type="checkbox" />
              <span>LaCoste</span>
            </label>
            <span class="text-xs">(50)</span>
          </div>
        </li>
        <li class="">
          <div class="flex justify-between text-gray-400" :to="{ name: `index` }">
            <label class="flex cursor-pointer items-center gap-2">
              <input class="" type="checkbox" />
              <span>Underarmor</span>
            </label>
            <span class="text-xs">(50)</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="pb-6 pt-2">
      <h3 class="font-bold uppercase text-gray-500">Price</h3>
      <div class="mt-2 flex items-center justify-between gap-2">
        <FormsBaseInput class="border border-4 border-gray-500" label="Min" />
        <span> - </span>
        <FormsBaseInput class="border border-gray-500" label="Max" />
      </div>
    </div>
    <div class="pb-6 pt-2">
      <h3 class="font-bold uppercase text-gray-500">Size</h3>
      <div class="mt-2 flex items-center gap-2">
        <button class="h-6 w-6 rounded border border-gray-300 text-xs uppercase">XS</button>
        <button class="h-6 w-6 rounded border border-gray-300 text-xs uppercase">S</button>
        <button class="bg-primary-light h-6 w-6 rounded border border-gray-300 text-xs uppercase text-white">M</button>
        <button class="border-gray3400 h-6 w-6 rounded border text-xs uppercase">Lg</button>
        <button class="border-gray3400 h-6 w-6 rounded border text-xs uppercase">XL</button>
      </div>
    </div>
    <div class="pb-6 pt-2">
      <h3 class="font-bold uppercase text-gray-500">Color</h3>
      <div class="mt-2 flex items-center gap-2">
        <input type="checkbox" class="h-6 w-6 rounded-full bg-green-600" />
        <input type="checkbox" class="h-6 w-6 rounded-full bg-red-600" />
        <input type="checkbox" class="h-6 w-6 rounded-full bg-pink-600" />
        <input type="checkbox" class="h-6 w-6 rounded-full bg-blue-600" />
        <input type="checkbox" class="bg-white-600 h-6 w-6 rounded-full" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
