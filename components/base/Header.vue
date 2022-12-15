<template>
  <div>Header--{{ notification.message }}</div>
  <div>{{ userData }}</div>

  <div>
    <NuxtLink :to="{ name: 'auth-signup' }">
      <span>Signup</span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { userData, setUserData } = useUserData()
const { notification } = useNotification()
</script>

<style lang="scss" scoped></style>
