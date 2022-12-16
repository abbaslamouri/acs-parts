<script setup lang="ts">
const { userData, setUserData } = useUserData()
const { notification, setNotification } = useNotification()

const router = useRouter()
const user = reactive({
  email: 'abbaslamouri@yrlus.com',
  password: 'adrar0714',
})
const loading = ref(false)

const signout = async () => {
  loading.value = true

  const { data, error } = await useFetch('/api/v1/auth/signin', { method: 'POST' })

  // if (error.value && error.value.data) return setNotification({ message: error.value.data.statusMessage })

  loading.value = false

  setUserData({})

  router.push({ name: 'index' })

  setNotification({ message: 'You are logout' })
}
</script>

<template>
  <div>Header--{{ notification.message }}</div>
  <div>{{ userData }}</div>
  <div>
    <NuxtLink :to="{ name: 'index' }">
      <span>Home</span>
    </NuxtLink>
    <NuxtLink :to="{ name: 'auth-signup' }">
      <span>Signup</span>
    </NuxtLink>
    <NuxtLink :to="{ name: 'auth-signin' }">
      <span>Signin</span>
    </NuxtLink>
    <button @click="signout">
      <span>Logout</span>
    </button>
  </div>
</template>

<style scoped>
a {
  margin: 1rem;
}
</style>
