<script lang="ts" setup>
const { userData, setUserData } = useUserData()

const { setNotification, notification } = useNotification()
const router = useRouter()
const user = reactive({
  email: 'abbaslamouri@yrlus.com',
  password: 'adrar0714',
})
const loading = ref(false)

const signin = async () => {
  if (!user.email || !user.password) return setNotification({ message: 'Email and Password are required' })

  loading.value = true

  const { data, error } = await useFetch('/api/v1/auth/signin', { method: 'POST', body: user })

  if (error.value && error.value.data) return setNotification({ message: error.value.data.statusMessage })

  loading.value = false

  setUserData(data.value)

  router.push({ name: 'index' })

  setNotification({ message: 'Login succesful' })
}
</script>

<template>
  <div>
    <h2>Login</h2>
    <p class="mt-4">Login if you are a returnnuing customer</p>
    <FormsBaseInput label="Email" v-model="user.email" />
    <FormsBaseInput type="password" label="Password" v-model="user.password" />
    <div>
      <label>
        <input type="checkbox" />
        <span> Remember me </span>
      </label>
      <NuxtLink :to="{ name: 'index' }"> Forgot password? </NuxtLink>
    </div>
    <button @click="signin">
      <Spinner v-if="loading" />
      <div v-else>Login</div>
    </button>
    <!-- <div >
      <div ></div>
      <div ></div>Or login with</div>
    </div>
    <div >
      <button
      >
        <Spinner  v-if="loading" />
        <div v-else>Facebook</div>
      </button>
      <button
      >
        <Spinner  v-if="loading" />
        <div v-else>Google</div>
      </button>
    </div>
    <div >
      <span>Don't have an account?&nbsp;</span>
      <NuxtLink :to="{ name: 'index' }">
        Register now?
      </NuxtLink>
    </div> -->
  </div>
</template>
