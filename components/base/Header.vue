<template>
  <div>Header--{{ notification.text }}</div>
</template>

<script setup lang="ts">
const { notification } = useNotification()
</script>

<style lang="scss" scoped></style>
