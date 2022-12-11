<script lang="ts" setup>
import { LockOpenIcon, ChevronRightIcon } from '@heroicons/vue/outline'
import { IUser } from '~/types/IUser'

const title = ref<string>('Products | YRL')
const router = useRouter()
const { signup } = useAuth()
const errorMsg = useErrorMsg()
const message = useMessage()
const user: IUser = reactive({
  name: 'Abbas Lamouri',
  email: 'abbaslamouri@yrlus.com',
  password: 'adrar0714',
  passwordConfirm: 'adrar0714',
})
const loading = ref<boolean>(false)

const register = async () => {
  if (user.password !== user.passwordConfirm)
    return (errorMsg.value = "Your password and confirmation password don't match")
  if (user.password.length < 8) return (errorMsg.value = 'Password must be at least 8 characters long')
  loading.value = true
  const response = await signup(user, `${window.location.protocol}//${window.location.host}/auth/verify-email`)
  loading.value = false
  if (!response) return
  router.push({ name: 'index' })
  message.value = 'Thank you for signing up.  Pleaase check your email to verify your account'
}
</script>

<template>
  <div class="container grid flex-1 place-items-center">
    <Title>{{ title }}</Title>
    <div class="max-w-md rounded border px-6 py-8 shadow" v-if="!loading">
      <h2 class="text-2xl font-medium uppercase">Signup</h2>
      <p class="mt-4 text-xs text-gray-500">Fields marked with * are required</p>
      <div class="mt-4 flex flex-col gap-1 rounded bg-red-100 p-6 text-xs" v-if="errorMsg.includes('exists')">
        <div class="" v-html="errorMsg"></div>
        <NuxtLink class="btn btn-link items-self-end mt-3 text-xs" :to="{ name: 'auth-forgot-password' }">
          <span>Reset Password</span>
          <ChevronRightIcon class="h-4 w-4" />
        </NuxtLink>
      </div>
      <div class="mt-4 flex flex-col gap-4">
        <FormsBaseInput v-model="user.name" label="Name" placeholder="name" />
        <FormsBaseInput type="email" v-model="user.email" label="Email" placeholder="Email" />
        <FormsBaseInput type="password" v-model="user.password" label="Password" placeholder="Password" />
        <FormsBaseInput
          type="password"
          v-model="user.passwordConfirm"
          label="Confirm Password"
          placeholder="Confirm Password"
        />
      </div>
      <p class="mt-4 text-xs text-gray-500">
        By clicking on “continue” you acknowledge that you have read and agree with YRL Privacy Notice & Terms of
        Service.
      </p>

      <button
        class="hover:text-primary-light transtion bg-primary-light border-primary-light mt-4 flex h-12 w-full items-center justify-center rounded border px-6 py-2 uppercase text-white hover:bg-white"
        @click="register"
      >
        <LockOpenIcon class="h-5 w-5" /><span class="flex-1">Continue</span>
      </button>
    </div>
    <Spinner class="h-16 w-16" v-else />
  </div>
</template>

<style lang="" scoped></style>
