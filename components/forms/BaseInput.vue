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
  fieldType: {
    type: String,
    default: 'text',
  },
  // placeholder: {
  //   fieldType: String,
  //   default: '',
  // },
})
defineEmits(['update:modelValue'])

// const fieldType = ref(props.type)
</script>

<template>
  <div class="">
    <input
      class=""
      :type="fieldType"
      placeholder=""
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <label class="">{{ label }} </label>
    <div class="" v-if="fieldType === 'password'">
      <span class="icon" v-if="fieldType === 'password'" @click="fieldType = 'text'"> </span>
      <span class="icon" v-else @click="fieldType = 'password'"> </span>
    </div>
  </div>
</template>

<style scoped></style>
