<script lang="ts" setup>
useState('errorMsg', () => '')
useState('message', () => '')
useState('showCart', () => false)
useState('jwt', () => (useCookie('jwt') && useCookie('jwt').value ? useCookie('jwt').value : ''))
useState('authToken', () =>
  useCookie('authToken') && useCookie('authToken').value ? useCookie('authToken').value : ''
)
useState('isAuthenticated', () => (useCookie('authToken') && useCookie('authToken').value ? true : false))
useState('loggedInUser', () =>
  useCookie('userName') && useCookie('userName').value ? useCookie('userName').value : ''
)
useState('loggedInUserName', () =>
  useCookie('userName') && useCookie('userName').value ? useCookie('userName').value : ''
)

const nuxtApp = useNuxtApp()

nuxtApp.hook('page:finish', () => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="">
    <Html class="scroll-smooth">
      <!-- <Title>{{ title }}</Title> -->
      <!-- <Meta name="description" :content="title" /> -->
      <!-- <Style type="text/css" children="body { background-color: green; }" /> -->
    </Html>
    <NuxtLayout>
      <NuxtPage />
      <LazySnackBar duration="0" />
    </NuxtLayout>
  </div>
</template>
