<template>
  <div>
    <div>SV={{ status }}</div>
    <div>SV={{ data }}</div>
    <button @click="signinUser">Login</button>
    <button @click="signoutUser">Logout</button>
  </div>
</template>

<script setup lang="ts">
const { status, data, signIn, signOut } = useSession()
status.value // Session status: `unauthenticated`, `loading`, `authenticated`
data.value // Session data, e.g., expiration, user.email, ...

const signinUser = async () => {
  await signIn('credentials', { username: 'jsmith', password: 'hunter2' })
}

const signoutUser = async () => {
  await signOut()
}
</script>

<style scoped></style>
