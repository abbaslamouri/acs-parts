<script setup>
defineProps({
  value: {
    type: [String, Number],
    default: '',
  },
  options: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  nullOption: {
    type: String,
    defualt: 'Select Option',
  },
})
const emit = defineEmits(['update:modelValue'])

const errorMsg = ref('')
const uuid = useUniqueId().getId()
</script>

<script>
export default {
  inheritAttrs: false,
}
</script>

<template>
  <div class="relative border border-gray-400 pb-1 pt-5" :class="`base-select base-select-${uuid}`">
    <select
      class="bg-gray peer w-full cursor-pointer appearance-none rounded border-2 border-gray-300 px-4 pb-2 pt-5 text-xs text-gray-500 focus:border-none focus:outline-transparent"
      ref="selectRef"
      :class="`base-select-${uuid}`"
      :aria-describedby="errorMsg ? `base-input-error-${uuid}` : null"
      :aria-invalid="errorMsg ? true : null"
      :aria-readonly="typeof $attrs.readonly != undefined ? true : null"
      :aria-required="typeof $attrs.required != undefined ? true : null"
      @change="emit('update:modelValue', $event.target.value)"
    >
      <option value="">{{ nullOption }}</option>
      <option
        v-for="option in options"
        :key="option.key"
        :value="option.key"
        :selected="value == option.key"
        :disabled="option.disabled || option.disabledIf"
      >
        {{ option.name }}
      </option>
    </select>
    <label
      :for="`base-select-${uuid}`"
      class="absolute top-0 left-3 origin-[0] scale-75 transform text-sm text-gray-500 duration-300"
      v-if="label"
    >
      {{ label }}
    </label>
    <!-- <IconsChevronDown class="absolute right-2 -top-1" /> -->
  </div>
</template>

<style lang="" scoped></style>
