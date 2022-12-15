<script lang="ts" setup>
definePageMeta({
  title: 'Verify Email',
  description: 'ACS verify signup email',
  robots: 'none',
})

const router = useRouter()
const route = useRoute()
// console.log(route)
const { userData, setUserData } = useUserData()
const { setNotification } = useNotification()

const email = ref('abbaslamouri@yrlus.com')
const loading = ref<boolean>(false)

const confirmEmail = async () => {
  if (!email.value) return setNotification({ message: 'Please enter your email' })

  loading.value = true

  const { data, error } = await useFetch('/api/v1/auth/verify', {
    method: 'POST',
    body: { email: email.value, signupToken: route.query.signupToken },
  })

  loading.value = false

  if (error.value && error.value.data) return setNotification({ message: error.value.data.statusMessage })

  setUserData(data.value)

  router.push({ name: 'index' })
  setNotification({ message: 'Registration successfull.  You are now logged in.' })
  // console.log(data.value)
  // console.log(data.value)
  // console.log('TOKEN', useCookie('authToken'))
  // console.log('TONameKEN', useCookie('userName'))
  // console.log("TOKEN",useCookie("authToken")
}

const getNewToken = async () => {
  loading.value = true
  const { data, error } = await useFetch('/api/v1/auth/signup', {
    method: 'POST',
    body: {
      name: '',
      email: email.value,
      password: '',
      verifyUrl: `${window.location.protocol}${window.location.host}/auth/verify`,
      refreshToken: true,
    },
  })
  loading.value = true

  if (error.value && error.value.data) return setNotification({ message: error.value.data.statusMessage })

  router.push({ name: 'index' })
  setNotification({
    message:
      'We have sent you an email with a new token.  Pleaase check your email and follow the link in the email to verify your account',
  })
}
</script>

<template>
  <div>
    <div v-if="!loading">
      <h2>Activate your account</h2>
      <div>
        <!-- <div class="mt-4 flex flex-col gap-1 rounded bg-red-100 p-6 text-xs" v-if="errorMsg.includes('exists')"> -->
        <div></div>
        <button @click="getNewToken">Get New Token</button>
      </div>
      <div>
        <FormsBaseInput v-model="email" label="Email" />
      </div>
      <button class="" @click="confirmEmail">
        <span class="" v-if="!loading">Continue</span>
        <div v-else>....Loading<BaseSpinner class="" /></div>
      </button>
    </div>
  </div>
</template>
