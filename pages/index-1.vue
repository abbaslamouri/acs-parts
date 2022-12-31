<template>
  <div class="main-div">
    <h1>Leader in PMA Designsdf dsfsdffsd sdfsdfs sdfsdfsdf sdfsdfsdf sd sdfsdfsdfsf s sdfsdfsdfs🤣</h1>
    <h2>Paragraph H2 Leader in PMA Designsdf dsfsdffsd sdfsdfs sdfsdfsdf sdfsdfsdf sd sdfsdfsdfsf s sdfsdfsdfs</h2>
    <h3>Paragrap H3 Leader in PMA Designsdf dsfsdffsd sdfsdfs sdfsdfsdf sdfsdfsdf sd sdfsdfsdfsf s sdfsdfsdfs</h3>

    <button @click="signinUser">Login</button>
    <!-- <button @click="signupUser">Register</button> -->
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
      of Lorem Ipsum.
    </p>
    <img src="/images/home-page-hero-2500x800.jpg" alt="Home Page Hero" />

    <p>This is a narrow column of text, with a very long word: antidisestablishmentarianism.</p>
    <p>The same problem happens with URLs: https://www.somewebsite.com/articles/a1b2c3</p>
    <button>Hello Wold</button>
  </div>
</template>

<script setup lang="ts">
// const { status, data, signIn, signOut } = useSession()
// status.value // Session status: `unauthenticated`, `loading`, `authenticated`
// data.value // Session data, e.g., expiration, user.email, ...
const signinUser = async () => {
  // await signIn()
} // Sign in the user
</script>

<style scoped>
.main-div p {
  width: 1000px;
  border: 1px solid red;
}
/* h1 {
  // font-weight: bold;
  font-size: 4rem;
  // background-color: lch(50% 100 0);
} */
</style>
