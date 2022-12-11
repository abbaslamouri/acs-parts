<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
})
defineEmits(['update:modelValue'])

const fieldType = ref(props.type)
</script>

<template>
  <div class="base-input relative z-0 rounded border border-gray-300 shadow-sm">
    <input
      class="peer px-5 pb-1 pt-5"
      :type="fieldType"
      placeholder=" "
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <label
      class="absolute top-4 left-3 -z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-3 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-600 peer-focus:dark:text-gray-500"
      >{{ label }}
    </label>
    <div class="absolute top-1/2 right-3 -translate-y-1/2 transform cursor-pointer" v-if="type === 'password'">
      <span class="icon" v-if="fieldType === 'password'" @click="fieldType = 'text'">
        <IconsHide class="h-4 w-4" />
      </span>
      <span class="icon" v-else @click="fieldType = 'password'">
        <IconsShow class="h-4 w-4" />
      </span>
    </div>
  </div>
</template>

<style scoped lang=""></style>
