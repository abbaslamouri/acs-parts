<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  rows: {
    type: String,
    default: '3',
  },
  cols: {
    type: String,
    default: '',
  },
})
defineEmits(['update:modelValue'])

const inputRef = ref('')
const errorMsg = ref('')
const uuid = useUniqueId().getId()
</script>

<script>
export default {
  inheritAttrs: false,
}
</script>

<template>
  <div class="base-input relative z-0 rounded shadow-sm">
    <!-- <label :for="`base-input-${uuid}`" v-if="label">{{ label }}</label> -->
    <textarea
      class="peer pb-1 pt-5 px-5"
      placeholder=" "
      ref="inputRef"
      v-bind="$attrs"
      :value="modelValue"
      :id="`base-input-${uuid}`"
      @input="$emit('update:modelValue', $event.target.value)"
      :aria-describedby="errorMsg ? `base-input-error-${uuid}` : null"
      :aria-invalid="errorMsg ? true : null"
      :aria-readonly="typeof $attrs.readonly != undefined ? true : null"
      :aria-required="typeof $attrs.required != undefined ? true : null"
      :rows="rows"
      :cols="cols"
    />
    <span
      class="absolute top-4 left-3 -z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-3 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-600 peer-focus:dark:text-gray-500"
      >{{ label }}</span
    >
  </div>
</template>

<style scoped lang=""></style>
