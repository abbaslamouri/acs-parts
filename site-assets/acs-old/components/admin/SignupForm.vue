<script lang="ts" setup>
import { LockOpenIcon } from '@heroicons/vue/outline'
import { IUser } from '~/types/IUser.js'

interface Props {
  user: IUser
}

const { user } = defineProps<{
  user: IUser
}>()
// const emit = defineEmits(['updateUser', 'register'])

const emit = defineEmits<{
  (e: 'updateUser', id: IUser): void
  (e: 'register'): void
}>()

const config = useRuntimeConfig()
const router = useRouter()
const errorMsg = useState('errorMsg')

// const { signup } = useAuth()
// const { cart, updateLocalStorage } = useCart()
// const { errorMsg, message } = useAppState()
// const localUser = ref({ ...props.user })
// const user = reactive({
// 	name: 'Abbas Lamouri',
// 	email: 'abbaslamouri@yrlus.com',
// 	password: 'adrar0714',
// 	passwordConfirm: 'adrar0714',
// })

const localUser: IUser = reactive({
  name: user.name,
  email: user.email,
  password: user.password,
  passwordConfirm: user.passwordConfirm,
})
const loading = ref(false)
// const errorMsg = ref('')

// const register = async () => {
// 	if (user.password !== user.passwordConfirm)
// 		return (errorMsg.value = "Your password and confirmation password don't match")
// 	const response = await signup(user)
// 	console.log(response)
// 	if (!response) return
// 	const customer = response.user
// 	cart.value.customer = customer
// 	cart.value.name = customer.name
// 	cart.value.email = customer.email
// 	cart.value.billingAddress = customer.billingAddress
// 	const cartShippingAddress = customer.shippingAddresses.find((a) => a.isDefault)
// 	if (cartShippingAddress) cart.value.shippingAddress = cartShippingAddress
// 	else cart.value.shippingAddress = customer.shippingAddresses[0]
// 	const cartPhoneNumber = customer.phoneNumbers.find((p) => p.isDefault)
// 	if (cartPhoneNumber) cart.value.phoneNumber = cartPhoneNumber
// 	else cart.value.phoneNumber = customer.phoneNumbers[0]

// 	console.log(cart.value)

// 	router.push({ name: 'ecommerce-shipping' })
// }

watch(
  () => localUser,
  (newVal) => {
    emit('updateUser', newVal)
  },
  { deep: true }
)
</script>

<template>
  <form class="max-w-md text-center" @submit.prevent="$emit('register')">
    <div class="flex flex-col gap-6">
      <div class="br-3 flex flex-col gap-1 p-2 text-xs" v-if="errorMsg">
        <!-- <div v-html="errorMsg"></div> -->
        <NuxtLink class="link items-self-end text-md" :to="{ name: 'auth-forgot-password' }">
          <span>Reset Password</span>
          <IconsChevronRight />
        </NuxtLink>
      </div>
      <h3 class="text-2xl font-bold">Signup</h3>
      <p class="self-start text-sm">Fields marked with * are required.</p>
      <FormsBaseInput v-model="user.name" label="Name" placeholder="name" />
      <FormsBaseInput type="email" v-model="user.email" label="Email" placeholder="Email" />
      <FormsBaseInput type="password" v-model="user.password" label="Password" placeholder="Password" />
      <FormsBaseInput
        type="password"
        v-model="user.passwordConfirm"
        label="Confirm Password"
        placeholder="Confirm Password"
      />
      <p class="self-start text-left text-xs">
        By clicking on “continue” you acknowledge that you have read and agree with YRL Privacy Notice & Terms of
        Service.
      </p>
      <button class="btn btn-primary w-full py-2 px-4 text-xs">
        <!-- <div class="flex w-full items-center justify-between"> -->
        <LockOpenIcon class="h-5 w-5" /><span class="flex-1">Continue</span>
        <!-- </div> -->
      </button>
    </div>
  </form>
</template>

<style lang="" scoped></style>
