<script lang="ts" setup>
import { IUser } from '~/types/IUser'

const title = ref<string>('Products | YRL')
const { signin } = useAuth()
const router = useRouter()
const errorMsg = useErrorMsg()
const message = useMessage()
const user: IUser = reactive({
  email: 'abbaslamouri@yrlus.com',
  password: 'adrar0714',
})
const loading = ref(false)

const login = async () => {
  if (!user.email) return (errorMsg.value = 'Email is required')
  if (!user.password) return (errorMsg.value = 'Password is required')
  loading.value = true
  const auth = await signin(user)
  loading.value = false
  if (!auth) return
  router.push({ name: 'index' })
  message.value = 'Login succssful'
}
</script>

<template>
  <div class="container grid flex-1 place-items-center border-4">
    <Title>{{ title }}</Title>
    <div class="min-w-[50%] rounded border px-6 py-8 shadow">
      <h2 class="text-2xl font-medium uppercase">Login</h2>
      <p class="mt-4">Login if you are a returnnuing customer</p>
      <FormsBaseInput
        class="focus:border-primary-light mt-4 border border-gray-300"
        label="Email"
        v-model="user.email"
      />
      <FormsBaseInput class="mt-4 border border-gray-300" type="password" label="Password" v-model="user.password" />
      <div class="mt-4 flex items-center justify-between">
        <label class="cursor-pointer">
          <input type="checkbox" />
          <span class="ml-2"> Remember me </span>
        </label>
        <NuxtLink class="text-primary-light transition hover:text-gray-400" :to="{ name: 'index' }">
          Forgot password?
        </NuxtLink>
      </div>
      <button
        class="hover:text-primary-light transtion bg-primary-light border-primary-light mt-4 flex h-12 w-full items-center justify-center rounded border px-6 py-2 uppercase text-white hover:bg-white"
        @click="login"
      >
        <Spinner class="h-8 w-8" v-if="loading" />
        <div v-else>Login</div>
      </button>
      <div class="relative mt-6 grid place-items-center">
        <div class="absolute top-3 w-full border-b-2 border-gray-200"></div>
        <div class="relative bg-white px-3 text-sm uppercase text-gray-500">Or login with</div>
      </div>
      <div class="flex gap-4">
        <button
          class="transtion mt-4 flex h-12 w-full items-center justify-center rounded border border-blue-600 bg-blue-600 px-6 py-2 uppercase text-white hover:bg-white hover:text-blue-600"
        >
          <Spinner class="h-8 w-8" v-if="loading" />
          <div v-else>Facebook</div>
        </button>
        <button
          class="transtion mt-4 flex h-12 w-full items-center justify-center rounded border border-yellow-700 bg-yellow-700 px-6 py-2 uppercase text-white hover:bg-white hover:text-yellow-700"
        >
          <Spinner class="h-8 w-8" v-if="loading" />
          <div v-else>Google</div>
        </button>
      </div>
      <div class="mt-4 text-center">
        <span>Don't have an account?&nbsp;</span>
        <NuxtLink class="text-primary-light transition hover:text-gray-400" :to="{ name: 'index' }">
          Register now?
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

