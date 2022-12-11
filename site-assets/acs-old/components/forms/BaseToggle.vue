<script setup>
import { SwitchGroup, Switch, SwitchLabel } from '@headlessui/vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
  toogleHeight: {
    type: Number,
    default: 18,
  },
  direction: {
    type: String,
    default: 'horizontal',
    validator: (value) => {
      return !value || ['horizontal', 'vertical'].includes(value)
    },
  },
  rounded: {
    type: Boolean,
    default: true,
  },
})
const emit = defineEmits(['update:modelValue'])
const attrs = useAttrs()

const sliderBeforeWidth = `${0.75 * props.toogleHeight}px`
const sliderBeforeLeft = `${0.15 * props.toogleHeight}px`
const sliderBorderRadius = `${0.5 * props.toogleHeight}px`
const sliderWidth = `${2 * props.toogleHeight}px`
const sliderHeight = `${props.toogleHeight}px`

const enabled = ref(false)

watch(
  () => enabled.value,
  (newVal) => {
    console.log(newVal)
    emit('update:modelValue', newVal)
  },
  { deep: true }
)
</script>

<script>
export default {
  inheritAttrs: false,
}
</script>

<template>
  <div class="flex gap-2">
    <SwitchGroup>
      <SwitchLabel class="mr-1">{{label}}</SwitchLabel>
      <Switch
        v-model="enabled"
        :class="enabled ? 'bg-slate-800' : 'bg-slate-400'"
        class="relative inline-flex h-6 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <span class="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          :class="enabled ? 'translate-x-6' : 'translate-x-0'"
          class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
        />
      </Switch>
    </SwitchGroup>
  </div>
  <!-- <label class="toggle relative flex items-center justify-center gap-2" :class="{ vertical: direction === 'vertical' }">
    <span> {{ label }}</span>
    <input
      class="absolute opacity-0 w-0 h-0"
      type="checkbox"
      :checked="modelValue"
      v-bind="$attrs"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <span
      class="slider relative block cursor-pointer bg-gray-400 transition duration-300 before:(absolute bg-white top-1/2 transform -translate-y-1/2 )"
      :class="{ rounded }"
    ></span>
  </label> -->
</template>

<style lang="" scoped>
/* .toggle {
  &.vertical {
    flex-direction: column;
  }

  input {
    &:checked + .slider {
      background-color: $slate-800; 

      &:before {
        left: 53.125%;
      }
    }
  }

  .slider {
    width: v-bind(sliderWidth);
    height: v-bind(sliderHeight);

    &:before {
      content: '';
      width: v-bind(sliderBeforeWidth);
      height: v-bind(sliderBeforeWidth);
      left: v-bind(sliderBeforeLeft);
    }

    &.rounded {
      border-radius: v-bind(sliderBorderRadius);

      &::before {
        border-radius: 50%;
      }
    }
  }
} */
</style>
