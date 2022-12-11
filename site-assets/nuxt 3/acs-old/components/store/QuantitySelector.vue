<script lang="ts" setup>
import { PlusIcon } from '@heroicons/vue/outline'
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
  product: {
    type: Object,
    // required: true
  },
  minVal: {
    type: Number,
    required: true,
  },
  maxVal: {
    type: Number,
    required: true,
  },
  stepVal: {
    type: Number,
    required: true,
  },
  btnText: {
    type: [String, Number],
  },
  // showQuantitySelector: {
  //   type: Boolean,
  // },
  parentComponent: {
    type: String,
  },
})

const emit = defineEmits(['quantitySelected'])
const { addItem } = useCart()
const uuid = useUniqueId().getId()
const qty = ref(null)
const quantitySelectorPosition = ref('above')
// const quantitySelectortRef = ref(null)
const quantityArr = ref([])
// const quantitySelectorOffset = ref('above')
const cartQuantitySelectorOffset = ref(null)
const showQuantitySelector = ref<boolean>(false)
const quantitySelectorRef = ref(null)

onClickOutside(quantitySelectorRef, (event) => {
  console.log(event)
  showQuantitySelector.value = false
})

let i = props.minVal
while (i <= props.maxVal) {
  quantityArr.value.push(i)
  i += props.stepVal
}
// if (quantityArr.value.length <= 5) {
//   quantitySelectorOffset.value = `-110px`
//   cartQuantitySelectorOffset.value = `-30px`
// } else if (quantityArr.value.length > 5 && quantityArr.value.length <= 10) {
//   quantitySelectorOffset.value = `-150px`
//   cartQuantitySelectorOffset.value = `-50px`
// } else if (quantityArr.value.length > 10 && quantityArr.value.length <= 15) {
//   quantitySelectorOffset.value = `-190px`
//   cartQuantitySelectorOffset.value = `-70px`
// } else if (quantityArr.value.length > 15 && quantityArr.value.length <= 20) {
//   quantitySelectorOffset.value = `-230px`
//   cartQuantitySelectorOffset.value = `-90px`
// } else if (quantityArr.value.length > 20 && quantityArr.value.length <= 25) {
//   quantitySelectorOffset.value = `-270px`
//   cartQuantitySelectorOffset.value = `-110px`
// } else if (quantityArr.value.length > 25 && quantityArr.value.length <= 30) {
//   quantitySelectorOffset.value = `-310px`
//   cartQuantitySelectorOffset.value = `-130px`
// } else {
//   quantitySelectorOffset.value = `-350px`
//   cartQuantitySelectorOffset.value = `-150px`
// }

// if (process.client) {
//   document.addEventListener('click', (event) => {
//     if (
//       !event.target.closest(`.quantity-selector-${uuid}`) &&
//       !event.target.classList.contains(`quantity-selector-input`)
//     ) {
//       emi)
//     }
//   })
// }
const setQuantitySelectorPosition = (event: any) => {
  const position = event.target.getBoundingClientRect().y
  if (position < 300) quantitySelectorPosition.value = 'above'
  else quantitySelectorPosition.value = 'below'
  showQuantitySelector.value = true
  // emit('toggleQuantitySelectors', !props.showQuantitySelector)
}
// const quantitySelectorPosition = computed(() => {
//   const position = selectorElementRef.value
//   // const position = selectorElementRef.value.getBoundingClientRect().y
//   if (position < 320) return 'below'
//   else return 'above'
//   // emit('toggleQuantitySelectors', !props.showQuantitySelector)
// })

const setQuantity = (quantity: number) => {
  showQuantitySelector.value = false
  emit('quantitySelected', { item: props.product, quantity: quantity })
  // addItem(props.product, quantity)
  qty.value = null
}
</script>

<template>
  <div class="relative" :class="{ cart: parentComponent === 'cart' }">
    <button class="bg-primary rounded p-2 text-white" @click="setQuantitySelectorPosition">
      <!-- <client-only> -->
      <div class="h-4 w-4" v-if="btnText">{{ btnText }}</div>
      <PlusIcon v-else class="h-4 w-full" />
      <!-- </client-only> -->
    </button>
    <div
      class="absolute -left-[2.4rem] z-10 h-28 w-56 rounded border border-stone-300 bg-stone-100 p-4 before:absolute before:left-1/2 before:-translate-x-[4px] before:border-8 before:border-stone-200 before:border-x-transparent before:content-['']"
      :class="{
        'before:border-t-transparentx  bottom-full -translate-y-2   before:top-full before:border-b-transparent':
          quantitySelectorPosition == 'above',
        ' translate-y-3 before:top-0  before:border-t-transparent': quantitySelectorPosition == 'below',
        'before:border-t-transparentx  bottom-full -translate-y-2   before:top-full before:border-b-transparent':
          quantitySelectorPosition == 'below',
        ' translate-y-3 before:top-0  before:border-t-transparent': quantitySelectorPosition == 'below',
      }"
      ref="quantitySelectorRef"
      v-if="showQuantitySelector"
    >
      <ul class="grid grid-cols-5 items-center justify-center divide-x divide-stone-300 text-xs">
        <li
          class="quantity grid h-10 w-10 cursor-pointer place-items-center place-items-center"
          v-for="n in quantityArr"
          :key="`predefined-quantity-${n}`"
          @click="setQuantity(n)"
        >
          <span>{{ n }}</span>
        </li>
      </ul>
      <div class="mt-2 flex rounded bg-white">
        <input
          class="rounded-l p-2 text-xs"
          type="text"
          v-model="qty"
          placeholder="Add custom
        quantity"
          @change="setQuantity(qty)"
        />
        <button class="w-12 rounded-r bg-green-600 text-white" @click="setQuantity(qty)">OK</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .selector::before {
  content: 'ppp';
  border: 10px solid red;
  border-color: transparent transparent red transparent;
} */

/* @import '@/assets/scss/variables';

.quantity-selector {
  .selector {
    top: v-bind(quantitySelectorOffset);
    left: 50%;
    width: 215px;
    transform: translateX(-50%);
    background-color: $stone-200;

    &.below {
      top: 130%;
      &::before {
        top: -20px;
        border-color: transparent transparent $stone-200 transparent;
      }
    }

    &::before {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-width: 10px;
      border-style: solid;
      border-color: $stone-200 transparent transparent transparent;
    }

    .quantity {
      border-right: 1px solid $stone-400;
      span {
        padding: 0.5rem;
        border-radius: 3px;
        width: 30px;
        height: 30px;
        text-align: center;
      }

      &:hover {
        span {
          border: 1px solid $stone-400;
        }
      }

      &:nth-of-type(5n) {
        border-right: none;
      }
    }
  }

  &.cart {
    .selector {
      top: v-bind(cartQuantitySelectorOffset);
      left: -115px;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 210px;
        transform: translateY(-50%);
        border-width: 10px;
        border-style: solid;
        border-color: transparent transparent transparent $stone-200;
      }
    }
  }
} */
</style>
