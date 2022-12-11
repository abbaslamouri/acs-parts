<script setup>
import { SearchIcon, HeartIcon, ShoppingCartIcon, UserIcon, MenuIcon } from '@heroicons/vue/outline'
import { onClickOutside } from '@vueuse/core'

const navLinkItems = ref([
  {
    name: 'Home',
    show: false,
    link: 'index',
  },
  {
    name: 'Our parts',
    show: false,
    link: 'products',
  },
  {
    name: 'Capabilities',
    show: false,
  },
  {
    name: 'News',
    show: false,
  },
  {
    name: 'About ACS',
    show: false,
  },
  {
    name: 'Account',
    show: false,
  },
  {
    name: 'Contact',
    show: false,
  },
])

const { signout } = useAuth()

// const loggedInUserName = useState('loggedInUserName')
const isAuthenticated = useState('isAuthenticated')

const loggedInUserName = useLoggedInUserName()

const dropdown = ref(false)
const dropdownRef = ref(null)
const loading = ref(false)
const errorMsg = useErrorMsg()
const message = useMessage()

onClickOutside(dropdownRef, (event) => {
  console.log(event)
  dropdown.value = false
})

const logout = async () => {
  // showDropdown.value = false
  loading.value = true
  const response = await signout()
  loading.value = false
  if (!response) return
  // console.log(response)
  // loggedInUser.value = ''
  // isAuthenticated.value = false
  message.value = 'You are logged out'
}
</script>

<template>
  <div class="bg-secondary-dark  hidden px-4 lg:block ">
    <div class="container">
      <div class="flex items-center space-x-6">
        <!-- Categories -->
        <div class="bg-primary-light group relative flex cursor-pointer items-center gap-4 py-4 px-8">
          <MenuIcon class="h-5 w-5 text-gray-200" />
          <span
            class="font-semibold capitalize tracking-wide text-gray-200 transition duration-200 group-hover:text-white"
            >Categories</span
          >
          <div
            class="invisible absolute left-0 top-full w-full divide-y divide-dashed bg-white opacity-0 shadow-md transition duration-300 group-hover:visible group-hover:opacity-100"
          >
            <NuxtLink
              class="text-secondary-light hover:text-primary flex items-center gap-2 px-6 py-3 text-sm transition hover:bg-gray-200"
              :to="{ name: 'index' }"
            >
              <HeartIcon class="h-5 w-5" />
              <span>Home</span>
            </NuxtLink>
            <NuxtLink
              class="text-secondary-light hover:text-primary flex items-center gap-2 px-6 py-3 text-sm transition hover:bg-gray-200"
              :to="{ name: 'index' }"
            >
              <ShoppingCartIcon class="h-5 w-5" />
              <span>Contact Us</span>
            </NuxtLink>
          </div>
        </div>

        <!-- Menu -->
        <nav class="flex flex-1 items-center text-white">
          <ul class="captitalize flex items-center space-x-6">
            <li class="whitespace-nowrap" v-for="item in navLinkItems" :key="item.title">
              <NuxtLink
                class="font-semibold tracking-wide text-gray-300 transition duration-200 hover:text-white"
                :to="{ name: item.link }"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Login/Register -->
        <div class="flex items-center gap-3" v-if="!isAuthenticated">
          <NuxtLink
            class="text-xs font-semibold uppercase tracking-wide text-gray-300 transition duration-200 hover:text-white"
            :to="{ name: 'auth-signin' }"
          >
            Login
          </NuxtLink>
          <NuxtLink class="btn btn-primary" :to="{ name: 'auth-signup' }"> register </NuxtLink>
        </div>
        <div class="relative rounded" v-else>
          <button
            class="cursor-pointer whitespace-nowrap rounded-t border bg-white bg-white px-4 py-2 text-xs text-gray-600 hover:bg-slate-400 hover:text-white"
            :class="{ 'rounded-b': !dropdown }"
            @click="dropdown = true"
          >
            Welcome {{ loggedInUserName }}
          </button>
          <ul
            class="absolute flex w-full flex-col items-start divide-y rounded-b bg-white text-xs"
            v-if="dropdown"
            ref="dropdownRef"
          >
            <li
              class="block w-full px-3 py-2 text-xs font-semibold tracking-wide text-gray-400 transition duration-200 hover:bg-gray-400 hover:text-white"
            >
              <NuxtLink class="block" :to="{ name: 'auth-signin' }"> Login </NuxtLink>
            </li>

            <li
              class="block w-full px-3 py-2 text-xs font-semibold tracking-wide text-gray-400 transition duration-200 hover:bg-gray-400 hover:text-white"
            >
              <button class="" @click="logout">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="" scoped></style>
