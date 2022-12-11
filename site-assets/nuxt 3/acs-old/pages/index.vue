<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const title = ref('Main | YRL')
const config = useRuntimeConfig()
const active = ref(false)

// const { fetchAll } = useHttp()

const carouselGallery = ref([])

const counters = [
  { target: 98, suffix: '% +', text: 'On-time delivery' },
  { target: 850, suffix: ' +', text: 'PMA Parts' },
  { target: 20, suffix: ' +', text: 'Countries served' },
  { target: 500, suffix: ' +', text: 'Valued customers' },
]

// const { result, search } = useAlgoliaSearch('acs store')

// onMounted(async () => {
//   await search({ query: 'P01114' })
// })

// const response = await fetchAll('galleries', { name: 'Carousel' })
// console.log(response)
// if (response) carouselGallery.value = response.docs[0]
</script>

<template>
  <div class="">
    <Title>{{ title }}</Title>
    <Hero />
    <Features />
    <Categories />
    <NewArrivals />
    <Offer />
    <Recomended />

    <section class="flex flex-row justify-center py-4">
      <div class="container flex flex-col items-center gap-1">
        <h3 class="text-4xl uppercase">Creation of Value</h3>
        <IconsChart class="h-20 w-20" />
        <p>
          ACS is a leading supplier of OEM alternative parts. We realize there’s more to our customer’s purchasing
          decision than just price. This is why ACS seeks not only to provide the best pricing in the industry, but to
          create value using any means available to us. Stocking 100% of our inventory for next day delivery, offering
          eCommerce solutions for online customers, utilizing the latest data management technology, and offering the
          latest manufacturing / design solutions are some of the many methods we’ve adopted to create value for our
          customers. All ACS parts are FAA-PMA approved.
        </p>
      </div>
    </section>
    <section class="flex flex-row justify-center py-4">
      <div class="container flex flex-row justify-center gap-2 py-2">
        <div class="flex flex-1 flex-col items-center gap-2">
          <div class="flex flex-row items-center gap-2 self-start">
            <IconsLightBulb class="h-16 w-16 self-start" />
            <h3 class="text-md uppercase">Design & Engineering</h3>
          </div>
          <p>
            To assure customers that the parts we provide will perform as promised, both functional and dimensional
            analyses are critical to our design process.
          </p>
        </div>
        <div class="flex flex-1 flex-col items-center gap-2">
          <div class="flex flex-row items-center gap-2 self-start">
            <IconsEdit class="h-16 w-16 self-start" />
            <h3 class="text-md uppercase">Design & Engineering</h3>
          </div>
          <p>
            The driving force behind our approach to quality control is simple - to assure that our customers receive
            the highest quality, airworthy parts, every single time they order.
          </p>
        </div>
        <div class="flex flex-1 flex-col items-center gap-2">
          <div class="flex flex-row items-center gap-2 self-start">
            <IconsAnalyse class="s h-16 w-16 self-start" />
            <h3 class="text-md uppercase">Design & Engineering</h3>
          </div>
          <p>
            To assure customers that the parts we provide will perform as promised, both functional and dimensional
            analyses are critical to our design process.
          </p>
        </div>
      </div>
    </section>
    <AnimatedCounters :counters="counters" />
    <!-- <div> -->
    <!-- <Carousel
      :slides="carouselGallery.gallery"
      indicators
      controls
      interval="5"
      height="30"
      :slidesToDisplayCount="6"
    /> -->
    <!-- </div> -->

    <!-- <Menu>
      <MenuButton>More</MenuButton>
      <MenuItems>
        <MenuItem v-slot="{ active }">
          <a :class="{ 'bg-blue-500': active }" href="/account-settings"> Account settings </a>
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <a :class="{ 'bg-blue-500': active }" href="/account-settings"> Documentation </a>
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <a :class="{ 'bg-blue-500': active }" href="/account-settings"> Documentation </a>
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <a :class="{ 'bg-blue-500': active }" href="/account-settings"> Documentation </a>
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <a :class="{ 'bg-blue-500': active }" href="/account-settings"> Documentation </a>
        </MenuItem>
        <MenuItem disabled>
          <span class="opacity-75">Invite a friend (coming soon!)</span>
        </MenuItem>
      </MenuItems>
    </Menu> -->
  </div>
</template>

<style lang="" scoped>
/* img {
  box-sizing: border-box;
  transform: scale(1.1);
} */
</style>
