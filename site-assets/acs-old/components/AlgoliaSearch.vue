<script setup>
import debounce from 'lodash.debounce'

import {
  AisInstantSearch,
  AisSearchBox,
  AisHits,
  AisHighlight,
  AisConfigure,
  AisClearRefinements,
  AisRefinementList,
  AisPagination,
} from 'vue-instantsearch/vue3/es'

import { TruckIcon, CashIcon, ClockIcon, SearchIcon } from '@heroicons/vue/outline'

const { result, search } = useAlgoliaSearch('acs_search') // pass your index name as param

const indexName = 'acs_search'
const searchClient = useAlgoliaRef()
const keyword = ref('')
const hits = ref([])

const fetchSearchResults = async () => {
  console.log(keyword.value)
  if (!keyword.value) {
    hits.value = []
  } else {
    await search({ query: keyword.value })
    hits.value = result.value.hits
  }
}

if (process.client) {
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.search-box')) {
      keyword.value = ''
      fetchSearchResults()
    } else {
    }
  })
}

const showProduct = (_id) => {
  console.log(_id)
}

// onMounted(async () => {
//   await search({ query: keyword })
// })

// watch(
//   () => keyword.value,
//   debounce(async (newVal) => {
//     console.log(newVal)
//     // const { result, search } = useAlgoliaSearch('acs_search')
//     await search({ query: newVal })
//   }, 600),
//   { deep: true }
// )
</script>

<template>
  <div class="serach-box relative max-w-md flex-1">
    <div class="relative hidden md:flex">
      <SearchIcon class="text-secondary-light absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2" />
      <input
        class="border-primary focus:ring-primary rounded rounded-r-none border border-r-0 p-3 pl-12"
        type="text"
        placeholder="Search"
        v-model="keyword"
        @input="fetchSearchResults"
      />
      <button
        type="submit"
        class="bg-primary border-primary hover:text-primary rounded-r border px-4 text-sm text-white transition duration-200 hover:bg-transparent"
      >
        Search
      </button>
    </div>
    <div class="absolute top-full max-h-60 w-full overflow-auto bg-white py-4" v-if="hits.length">
      <!-- {{ hits }}ppp -->
      <div
        v-for="hit in hits"
        class="flex cursor-pointer items-center justify-between gap-2 px-6 py-2 hover:bg-slate-200"
        @click="showProduct(hit._id)"
      >
        <div class="flex gap-2">
          <div class="text-sm font-bold">{{ hit.name }}</div>
          <div class="text-xs text-gray-500">{{ hit.description }}</div>
        </div>
        <div class="aspect-square w-12">
          <img :src="hit.imageUrl" alt="" />
        </div>
      </div>
    </div>
  </div>

  <!-- <div>
    {{ keyword }}
    <input
      class="border border-red-500 p-4"
      type="text"
      v-model="keyword"
      placeholder="Search"
      @input="fetchSearchResults"
    />
    <div v-if="hits.length">
      <div v-for="hit in hits" class="flex gap-2">
        <div>{{ hit.name }}</div>
        
      </div>
    </div>

    <ais-instant-search :index-name="indexName" :search-client="searchClient">
      <div class="left-panel">
        <ais-clear-refinements />
        <h2>OEMS</h2>
        <ais-refinement-list attribute="oem" searchable />
        <ais-configure :hitsPerPage="10" />
      </div>
      <div class="right-panel">
        <ais-search-box />
        <ais-configure :hitsPerPage="10" />

        <ais-hits>
          <template v-slot:item="{ item }">
            <h2>{{ item.name }}</h2>
            <div class="hit-name font-bold">
              <ais-highlight attribute="acsPartNumber" :hit="item"></ais-highlight>
            </div>
          </template>
        </ais-hits>
        <ais-pagination />
      </div>
    </ais-instant-search>
  </div> -->
</template>

<style scoped></style>
