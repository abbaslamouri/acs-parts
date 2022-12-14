<script lang="ts" setup>
const { userData, setUserData } = useUserData()
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
  // if (user.password !== user.passwordConfirm)
  //   return (errorMsg.value = "Your password and confirmation password don't match")
  // if (user.password.length < 8) return (errorMsg.value = 'Password must be at least 8 characters long')
  // loading.value = true
  // const response = await signup(user, `${window.location.protocol}//${window.location.host}/auth/verify-email`)
  // loading.value = false
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
          <ChevronRightIcon class="" />
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

      <button class="" @click="signup"><LockOpenIcon class="" /><span class="">Continue</span></button>
    </div>
    <Spinner class="" v-else />
  </div>
</template>

<style lang="" scoped></style>
