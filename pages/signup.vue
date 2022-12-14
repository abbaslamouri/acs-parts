<script lang="ts" setup>
const { userData, setUserData } = useUserData()
const { notification, setNotification } = useNotification()
// import { LockOpenIcon, ChevronRightIcon } from '@heroicons/vue/outline'
// import { IUser } from '~/types/IUser'

// const title = ref<string>('Products | YRL')
const router = useRouter()
// const { signup } = useAuth()
const errorMsg = ref('')
// const errorMsg = useErrorMsg()
// const message = useMessage()
const loading = ref<boolean>(false)

const user = reactive({
  name: 'Abbas Lamouri',
  email: 'abbaslamouri@yrlus.com',
  password: 'adrar0714',
  passwordConfirm: 'adrar0714',
})

const signup = async () => {
  if (user.password !== user.passwordConfirm)
    return setNotification({ text: "Your password and confirmation password don't match" })

  if (user.password.length < 8) return setNotification({ text: 'Password must be at least 8 characters long' })

  loading.value = true

  const { data, pending, error } = await useFetch('/api/v1/auth/signup', {
    method: 'POST',
    body: { ...user, verifyUrl: `${window.location.protocol}${window.location.host}/auth/verify` },
  })

  loading.value = false

  if (error.value && error.value.data) return setNotification({ text: error.value.data.statusMessage })

  console.log(data.value)

  // if (!response) return
  // router.push({ name: 'index' })
  // message.value = 'Thank you for signing up.  Pleaase check your email to verify your account'
}
</script>

<template>
  <div class="">
    <!-- <Title>{{ title }}</Title> -->
    <div class="" v-if="!loading">
      <h2 class="">Signup</h2>
      <p class="">Fields marked with * are required</p>
      <div class="" v-if="errorMsg.includes('exists')">
        <div class="" v-html="errorMsg"></div>
        <NuxtLink class="" :to="{ name: 'auth-forgot-password' }">
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
        By clicking on “continue” you acknowledge that you have read and agree with YRL Privacy Notice & Terms of
        Service.
      </p>

      <button class="" @click="signup"><span class="">Continue</span></button>
    </div>
    <div v-else>
      ....Loading
      <!-- <Spinner class="" /> -->
    </div>
  </div>
</template>

<style lang="" scoped></style>
