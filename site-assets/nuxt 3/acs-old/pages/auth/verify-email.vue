<script lang="ts" setup>
import { LockOpenIcon, ChevronRightIcon } from '@heroicons/vue/outline'

const title = ref('Verify Email | YRL')

const router = useRouter()
const route = useRoute()
const { verifyEmail } = useAuth()
const errorMsg = useErrorMsg()
const message = useMessage()
const email = ref<string>('abbaslamouri@yrlus.com')
const loading = ref<boolean>(false)

const confirmEmail = async () => {
  if (!email.value) return (errorMsg.value = 'Please enter your email')
  loading.value = true
  const auth = await verifyEmail(email.value, route.query.signupToken)
  loading.value = false
  if (!auth) return
  router.push({ name: 'index' })
  message.value = 'Registration successfull.  You are now logged in.'
}

const getNewToken = async () => {
  router.push({ name: 'auth-forgotpassword' })
}
</script>

<template>
  <div class="container grid flex-1 place-items-center">
    <Title>{{ title }}</Title>
    <div class="max-w-md rounded border px-6 py-8 shadow" v-if="!loading">
      <h2 class="text-2xl font-medium uppercase">Activate your account</h2>
      <div class="mt-4 flex flex-col gap-1 rounded bg-red-100 p-6 text-xs" v-if="errorMsg.includes('exists')">
        <div class="" v-html="errorMsg"></div>
        <NuxtLink class="btn btn-link items-self-end mt-3 text-xs" :to="{ name: 'auth-forgot-password' }">
          <span>Reset Password</span>
          <ChevronRightIcon class="h-4 w-4" />
        </NuxtLink>
      </div>
      <div class="mt-4 flex flex-col gap-4">
        <FormsBaseInput v-model="email" label="Name" placeholder="name" />
      </div>
      <button
        class="hover:text-primary-light transtion bg-primary-light border-primary-light mt-4 flex h-12 w-full items-center justify-center rounded border px-6 py-2 uppercase text-white hover:bg-white"
        @click="confirmEmail"
      >
        <LockOpenIcon class="h-5 w-5" /><span class="flex-1">Continue</span>
      </button>
    </div>
    <Spinner class="h-16 w-16" v-else />
  </div>
</template>
