<template>
  <div class="wrapper">
    <BaseHeader />
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.wrapper {
  outline: solid pink;
  min-height: 100%;
}
</style>
