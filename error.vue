<template>
  <div>
    <h1>Error🤣</h1>
    <button @click="handleError">Clear errors</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object,
})
const handleError = () => clearError({ redirect: '/' })
</script>

<style scoped>
.main-div p {
  width: 200px;
  border: 1px solid red;
}
/* h1 {
  // font-weight: bold;
  font-size: 4rem;
  // background-color: lch(50% 100 0);
} */
</style>
