<script lang="ts" setup>
import { SearchIcon, HeartIcon, ShoppingCartIcon, UserIcon, MenuIcon } from '@heroicons/vue/outline'

// const { isAuthenticated } = useAuth()
const loggedInUser = useState('loggedInUser')
const colorMode = useColorMode()
const isAuthenticated = useState('isAuthenticated')
type Theme = 'light' | 'dark' | 'sepia'

colorMode.preference = 'light'
const setColorMode = (newTheme: Theme) => {
  console.log(newTheme)
  colorMode.preference = newTheme
}

// const showCartSlideout = useState('showCart')

// console.log('JWT', useCookie('jwt').value)

// const { showCartSlideout } = useAppState()
</script>

<template>
  <div class="flex min-h-screen flex-col dark:bg-slate-900">
    <header class="sticky top-0 z-20 border-4 border-green-900">
      <Header @setColorMode="setColorMode" />
      <MainNav />
      <MobileNav />
    </header>

    <main class="flex flex-1 flex-col">
      <slot />
    </main>

    <footer class=""><Footer /></footer>

    <!-- <div class="app flex flex-col justidy-between min-h-100vh">
      <header class="sticky top-0 z-9">
        <FreeShipping />
        <div class="bg-white flex items-center justify-between px-4 py-2">
          <Branding />
          <div class="flex gap-2 items-center">
            <LoginDropdown theme="dark" v-if="!isAuthenticated" />
            <ProfileDropdown theme="dark" v-else />
            <NavCart />
          </div>
        </div>
        <nav class="nav">
          <MainNav />
        </nav>
      </header>
      <main class="flex-1 flex flex-col">
        <slot />
      </main>
    </div> -->
  </div>
</template>

<style lang="" scoped></style>
