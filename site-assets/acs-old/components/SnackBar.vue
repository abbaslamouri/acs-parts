<script setup>
import { ExclamationCircleIcon, XIcon, CheckIcon } from '@heroicons/vue/solid'

const props = defineProps({
  duration: {
    type: [String, Number],
    default: 30,
  },
  position: {
    type: String,
    default: 'top-right',
    validator: (value) => {
      return !value || ['top-left', 'top-right'].includes(value)
    },
  },
})

const errorMsg = useState('errorMsg')
const message = useState('message')
let timeout = ref(null)

const snackbarMessage = computed(() => (useErrorMsg().value ? useErrorMsg().value : message.value ? message.value : ''))
const snackbarType = computed(() => (errorMsg.value ? 'Error' : message.value ? 'Success' : ''))
const transitionName = computed(() => (props.position.includes('right') ? 'rtl' : 'ltr'))

watchEffect(() => {
  clearTimeout(timeout.value)
  if (props.duration != 0) {
    if (props.show) {
      timeout.value = setTimeout(() => {
        emit('hideSnackbar')
      }, props.duration * 1000)
    }
  }
})

const hideSnackbar = () => {
  errorMsg.value = ''
  message.value = ''
}
</script>

<template>
  <transition :name="transitionName">
    <div
      class="fixed top-20 z-[50] flex max-w-xl flex-row items-center gap-4 rounded p-4 text-sm tracking-wide text-slate-50"
      :class="{
        'border-l-8 border-red-900 bg-red-700': snackbarType === 'Error',
        'border-l-8 border-green-900 bg-green-700': snackbarType === 'Success',
        'right-10': position === 'top-right',
        'left-10': position === 'top-left',
      }"
      v-show="snackbarMessage"
    >
      <CheckIcon
        class="h-10 w-10 shrink-0 rounded-full bg-white p-2 text-green-700"
        v-if="snackbarType === 'Success'"
      />
      <ExclamationCircleIcon class="h-10 w-10 shrink-0 text-white" v-else-if="snackbarType === 'Error'" />

      <div class="gap-05 flex flex-col">
        <h3 class="text-lg font-bold">{{ snackbarType }}</h3>
        <div v-html="snackbarMessage"></div>
      </div>
      <button
        class="group rounded-full p-2"
        :class="{
          'group-hover:bg-red-200 group-hover:text-red-700': snackbarType === 'Error',
          'group-hover:bg-green-200 group-hover:text-green-700': snackbarType === 'Success',
        }"
        @click="hideSnackbar"
      >
        <XIcon class="h-6 w-5 text-white" />
      </button>
    </div>
  </transition>
</template>

<style scoped>
.rtl-enter-active,
.rtl-leave-active,
.ltr-enter-active,
.ltr-leave-active {
  transition: all 0.2s ease-in-out;
}

.rtl-enter-from,
.rtl-leave-to {
  transform: translateX(100%);
  /* opacity: 0; */
}

.rtl-enter-to .rtl-leave-from {
  transform: translateX(0%);
  /* opacity: 1; */
}

.ltr-enter-from,
.ltr-leave-to {
  transform: translateX(-100%);
  /* opacity: 0; */
}
</style>
