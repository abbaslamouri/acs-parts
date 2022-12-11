<script setup>
import {
  TruckIcon,
  CashIcon,
  UserIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  HeartIcon,
  LogoutIcon,
  TrashIcon,
} from '@heroicons/vue/outline'

const router = useRouter()
const route = useRoute()
console.log('RR', route.params)
const config = useRuntimeConfig()
const { fetchLoggedInUser, updateLoggedInUserInfo, updateLoggedInUserPwd } = useAuth()
const errorMsg = useState('errorMsg')
const message = useState('message')
const loggedInUser = useState('loggedInUser')
const isAuthenticated = useState('isAuthenticated')
// const { errorMsg, message } = useAppState()
const content = ref('personal-information')
// const email = ref('')
const confirmEmail = ref('')
const currentPassword = ref('adrar0714')
const newPassword = ref('adrar0715')
const confirmNewPassword = ref('adrar0715')
const user = ref({})
const selected = ref(false)
const wishList = ref([])

onMounted(async () => {
  // const response = await fetchLoggedInUser()
  // console.log('U', response)
  // if (response) user.value = response
  // confirmEmail.value = user.value.email
})

const updateLoggedInUserInformation = async () => {
  if (user.value.email !== confirmEmail.value) return (errorMsg.value = "Email and confirmation email don't match")
  const response = await updateLoggedInUserInfo({ email: user.value.email, name: user.value.name })
  console.log('U', response)
  if (!response) return
  loggedInUser.value = user.value.name
}

const updateLoggedInUserPassword = async () => {
  if (newPassword.value !== confirmNewPassword.value)
    return (errorMsg.value = "Password and confirmation [password] don't match")
  const response = await updateLoggedInUserPwd({
    currentPassword: currentPassword.value,
    newPassword: newPassword.value,
  })
  console.log('U', response)
  // if (response) user.value = response
}

const getNewToken = async () => {
  router.push({ name: 'auth-forgotpassword' })
  showAuthForm.value = false
}
</script>

<template>
  <div class="container flex-1">
    <BreadCrumbs />

    <div class="grid grid-cols-1 gap-6 md:grid-cols-12">
      <div class="col-span-12 rounded md:col-span-3">
        <div class="flex gap-2 bg-gray-100 p-4">
          <div class="flex-shrink-0">
            <img
              class="h-14 w-14 rounded border border-gray-100"
              :src="`${config.doSpaceEndpoint}/uploads/${user.media[0].originalFilename}`"
              alt="User Avatar"
              v-if="user.media && user.media[0]"
            />
            <UserIcon class="h-10 w-10 rounded-full border border-gray-200 object-cover p-1 text-gray-400" v-else />
          </div>
          <div class="text-sm text-gray-500">
            <div>Hello..</div>
            <div class="font-bold">Abbas Lamouri</div>
          </div>
        </div>
        <div class="mt-4 divide-y divide-gray-300 rounded border bg-gray-100 text-sm shadow-sm">
          <div class="px-2 pb-6 pt-2">
            <div class="flex gap-2 text-gray-500">
              <UserIcon class="h-5 w-5" />
              <h3 class="font-bold uppercase">Manage account</h3>
            </div>
            <ul class="mt-2 ml-7 space-y-1 text-gray-400">
              <li class="">
                <a
                  href="#"
                  class="hover:text-primary-light flex cursor-pointer items-center gap-2 capitalize transition"
                >
                  <span>Mangage adresses</span>
                </a>
              </li>
              <li class="">
                <a
                  href="#"
                  class="hover:text-primary-light flex cursor-pointer items-center gap-2 capitalize transition"
                >
                  <span>Change password</span>
                </a>
              </li>
              <li class="">
                <a
                  href="#"
                  class="hover:text-primary-light flex cursor-pointer items-center gap-2 capitalize transition"
                >
                  <span>Profile Information</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="px-2 pb-6 pt-2">
            <div class="flex gap-2 text-gray-500">
              <ShoppingCartIcon class="h-5 w-5" />
              <h3 class="font-bold uppercase">Order Histtory</h3>
            </div>
            <ul class="mt-2 ml-7 space-y-1 text-gray-400">
              <li class="">
                <a
                  href="#"
                  class="hover:text-primary-light flex cursor-pointer items-center gap-2 capitalize transition"
                >
                  <span>Orders</span>
                </a>
              </li>
              <li class="">
                <a
                  href="#"
                  class="hover:text-primary-light flex cursor-pointer items-center gap-2 capitalize transition"
                >
                  <span>Returns</span>
                </a>
              </li>
              <li class="">
                <a
                  href="#"
                  class="hover:text-primary-light flex cursor-pointer items-center gap-2 capitalize transition"
                >
                  <span>Cancellations</span>
                </a>
              </li>
              <li class="">
                <a
                  href="#"
                  class="hover:text-primary-light flex cursor-pointer items-center gap-2 capitalize transition"
                >
                  <span>My Reviews</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="px-2 pb-6 pt-2">
            <div class="flex gap-2 text-gray-500">
              <CreditCardIcon class="h-5 w-5" />
              <h3 class="font-bold uppercase">Payment Methods</h3>
            </div>
            <ul class="mt-2 ml-7 space-y-1 text-gray-400">
              <li class="">
                <a
                  href="#"
                  class="hover:text-primary-light flex cursor-pointer items-center gap-2 capitalize transition"
                >
                  <span>Voucher</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="px-2 pb-6 pt-2">
            <div class="flex gap-2 text-gray-500">
              <HeartIcon class="h-5 w-5" />
              <h3 class="font-bold uppercase">Wishlist</h3>
            </div>
            <ul class="mt-2 ml-7 space-y-1 text-gray-400">
              <li class="">
                <a
                  href="#"
                  class="hover:text-primary-light flex cursor-pointer items-center gap-2 capitalize transition"
                >
                  <span>Voucher</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="px-2 pb-6 pt-2">
            <div class="flex gap-2 text-gray-500">
              <LogoutIcon class="h-5 w-5" />
              <h3 class="font-bold uppercase">Logout</h3>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-9">
        <div class="mb-4 flex flex-wrap items-center justify-between gap-2 rounded bg-slate-50 p-4 text-sm shadow">
          <div class="w-28 flex-shrink-0 border-4">
            <img
              class="rounded border border-gray-100 object-cover"
              :src="`${config.doSpaceEndpoint}/uploads/${wishList.media[0].originalFilename}`"
              alt="User Avatar"
              v-if="wishList.media && wishList.media[0]"
            />
            <img
              class="rounded border border-gray-100 object-cover"
              src="/products/product1.jpg"
              alt="wishList Avatar"
              v-else
            />
          </div>
          <div class="w-full md:flex-1">
            <h3 class="font-bold capitalize">Product name</h3>
            <div class="flex gap-2">
              <span class="">Availabiliy</span>
              <span class="text-green-600">In stock</span>
            </div>
          </div>
          <div class="text-primary-light font-bold">$123.00</div>
          <button
            class="border-primary-light bg-primary-light hover: text-priamry=light hover:text-primary-light rounded border px-4 py-2 text-white hover:bg-white"
          >
            Add to cart
          </button>
          <button class="text-primary-light hover: txt-gray-400"><TrashIcon class="h-5 w-5" /></button>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2 rounded bg-slate-50 p-4 text-sm shadow">
          <div class="w-28 flex-shrink-0 border-4">
            <img
              class="rounded border border-gray-100 object-cover"
              :src="`${config.doSpaceEndpoint}/uploads/${wishList.media[0].originalFilename}`"
              alt="User Avatar"
              v-if="wishList.media && wishList.media[0]"
            />
            <img
              class="rounded border border-gray-100 object-cover"
              src="/products/product1.jpg"
              alt="wishList Avatar"
              v-else
            />
          </div>
          <div class="w-full md:flex-1">
            <h3 class="font-bold capitalize">Product name</h3>
            <div class="flex gap-2">
              <span class="">Availabiliy</span>
              <span class="text-red-600">out of stock</span>
            </div>
          </div>
          <div class="text-primary-light font-bold">$123.00</div>
          <button
            class="border-primary-light bg-primary-light hover: text-priamry=light hover:text-primary-light rounded border px-4 py-2 text-white hover:bg-white"
          >
            Add to cart
          </button>
          <button class="text-primary-light hover: txt-gray-400"><TrashIcon class="h-5 w-5" /></button>
        </div>
      </div>
    </div>

    <!-- <div class=""> -->
    <!-- <div class=""> -->
    <div class="">
      <h2 class="">My account</h2>
      <div class="">
        <p>Welcome {{ loggedInUser }}</p>
        <p>Member since {{ new Date(user.signupDate).toLocaleDateString() }}</p>
        <p>Membership Number: {{ user.accountNumber }}</p>
      </div>
      <!-- <ul class="border-1 mt-4 flex flex-col divide-y divide-gray-400 border-gray-400 text-xs">
        <li class="flex cursor-pointer gap-2 py-4 px-2" @click="content = 'personal-information'">
          <NuxtLink :to="{ name: `auth-profile`, params: { tab: 'personal-information' } }"
            >Personal Information</NuxtLink
          >
          <IconsUser class="h-4 w-4" />
          <span>Personal Information</span>
        </li>
        <li class="flex cursor-pointer gap-2 py-4 px-2" @click="content = 'order-history'">
          <NuxtLink :to="{ name: `auth-profile`, params: { tab: 'order-history' } }">Order History</NuxtLink>
          <IconsUser class="h-4 w-4" />
          <span>Order History</span>
        </li>
        <li class="flex cursor-pointer gap-2 py-4 px-2" @click="content = 'Other'">
          <IconsUser class="h-4 w-4" />
          <span>Other</span>
        </li>
      </ul> -->
    </div>
    <!-- <div>
      <div v-if="content === 'personal-information'">
        <div class="border-b-2 border-b-gray-400 p-4">
          <h2>My personal information</h2>
          <div class="mt-4 flex flex-col">
            <p class="">Fill in the form below to update your personal information.</p>
            <div class="mt-4 flex flex-col gap-6">
              <FormsBaseInput type="text" label="Name" v-model="user.name" :required="true" />
              <FormsBaseInput type="email" label="Email" v-model="user.email" :required="true" />
              <FormsBaseInput type="email" label="Confirm Email" v-model="confirmEmail" :required="true" />
            </div>
            <button class="btn btn-primary mt-6 self-end py-2 px-4 text-xs" @click="updateLoggedInUserInformation">
              Save<IconsChevronRight class="h-5 w-5 fill-white" />
            </button>
          </div>
        </div>
        <div class="border-b-2 border-b-gray-400 p-4">
          <h2 class="fonrt-bold text-xl">Change Password</h2>
          <div class="mt-4 flex flex-col">
            <div class="flex flex-col gap-6">
              <FormsBaseInput type="password" label="Current Password" v-model="currentPassword" :required="true" />
              <FormsBaseInput type="password" label="New Password" v-model="newPassword" :required="true" />
              <FormsBaseInput
                type="password"
                label="Confirm New Password"
                v-model="confirmNewPassword"
                :required="true"
              />
            </div>
            <button class="btn btn-primary mt-6 self-end py-2 px-4 text-xs" @click="updateLoggedInUserPassword">
              Save<IconsChevronRight class="h-5 w-5 fill-white" />
            </button>
          </div>
        </div>
      </div>
      <div v-if="content === 'order-history'">
        <h2>Order History</h2>
        <p>Fill in the form below to update your personal information.</p>
        <FormsBaseInput type="email" label="Email" placeholder="Email" v-model="email" :required="true" />
        <button class="btn btn-primary self-end py-2 px-4 text-xs">
          Verity Email<IconsChevronRight class="h-5 w-5 fill-white" />
        </button>
      </div>
    </div> -->
    <!-- </div> -->
    <!-- </div> -->
  </div>
</template>

<style lang="" scoped></style>
