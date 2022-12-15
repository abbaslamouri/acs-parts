<script lang="ts" setup>
definePageMeta({
  title: 'Signup',
  description: 'ACS signup page',
  robots: 'none',
})
const { setNotification, notification } = useNotification()
const router = useRouter()
const loading = ref<boolean>(false)
const user = reactive({
  name: 'Abbas Lamouri',
  email: 'abbaslamouri@yrlus.com',
  password: 'adrar0714',
  passwordConfirm: 'adrar0714',
})

const signup = async () => {
  if (user.password !== user.passwordConfirm)
    return setNotification({ message: "Your password and confirmation password don't match" })

  if (user.password.length < 8) return setNotification({ message: 'Password must be at least 8 characters long' })

  loading.value = true

  const { data, error } = await useFetch('/api/v1/auth/signup', {
    method: 'POST',
    body: { ...user, verifyUrl: `${window.location.protocol}${window.location.host}/auth/verify` },
  })

  loading.value = false

  if (error.value && error.value.data) return setNotification({ message: error.value.data.statusMessage })

  router.push({ name: 'index' })
  setNotification({
    message:
      'Thank you for signing up.  Pleaase check your email and follow the link in the email to verify your account',
  })
}
</script>

<template>
  <div class="">
    <h2 class="">Signup</h2>
    <p class="">Fields marked with * are required</p>
    <div class="" v-if="notification.message.includes('exists')">
      <div class=""></div>
      <NuxtLink class="" :to="{ name: 'auth-forgotpassword' }">
        <span>Reset Password</span>
      </NuxtLink>
    </div>
    <div class="">
      <FormsBaseInput v-model="user.name" label="Name" />
      <FormsBaseInput type="email" v-model="user.email" label="Email" />
      <FormsBaseInput type="password" v-model="user.password" label="Password" />
      <FormsBaseInput type="password" v-model="user.passwordConfirm" label="Confirm Password" />
    </div>
    <p class="">
      By clicking on “continue” you acknowledge that you have read and agree with YRL Privacy Notice & Terms of Service.
    </p>

    <button class="" @click="signup">
      <span class="" v-if="!loading">Continue</span>
      <div v-else>....Loading<BaseSpinner class="" /></div>
    </button>
  </div>
</template>

<style scoped></style>
