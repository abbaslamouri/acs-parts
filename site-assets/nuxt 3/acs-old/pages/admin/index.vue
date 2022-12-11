<script setup lang="ts">
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle, DialogDescription } from '@headlessui/vue'
definePageMeta({
  layout: 'admin',
})
const config = useRuntimeConfig()

const isOpen = ref(true)

// const setIsOpen = (value) => {
//   isOpen.value = value
// }

// console.log(config)
// const data = await $fetch('/api/v1/users')
// console.log(data)
</script>

<template>
  <div class="">
    <h3 class="   ">Hello World</h3>
    <button class="btn-green">Click me</button>
    

    <!-- <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam tempora animi aliquam accusantium, provident autem
      minus magnam dolorem! Inventore placeat nulla omnis, modi repellendus error quos officia nesciunt? Porro,
      repudiandae!
    </p> -->
  </div>
</template>

<style lang="" scoped></style>
