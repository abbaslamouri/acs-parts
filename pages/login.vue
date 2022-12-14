<template>
  <div>
    <!-- <div>SV={{ status }}</div> -->
    <!-- <div>SV={{ data }}</div> -->
    <button @click="signinUser">Login</button>
    <button @click="signoutUser">Logout</button>
  </div>
</template>

<script setup lang="ts">
const signinUser = async () => {
  // await signIn('credentials', { username: 'jsmith', password: 'hunter2' })
}

const signoutUser = async () => {
  // await signOut()
}
</script>

<style scoped></style>
