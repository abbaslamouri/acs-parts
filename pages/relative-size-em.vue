<script setup lang="ts">
const trigger = ref()
const panel = ref()
const panelInner = ref()

onMounted(() => {
  // const expanded = trigger.value.getAttribute('aria-expanded')
  // if (!expanded) {
  //   trigger.value.setAttribute('aria-expanded', null)
  //   trigger.value.removeAttribute('hidden')
  // }
  // // trigger.value.setAttribute('aria-expanded', true);
  // console.log(
  //   'TR',
  //   getComputedStyle(panel.value).getPropertyValue('--panel-max-height')
  //   // document.documentElement.style.getPropertyValue('--panel-max-height')
  // )
  // // window
  // //   .getComputedStyle(panel.value)
  // //   .setProperty(
  // //     '--panel-max-height',
  // //     `${panelInner.value.getBoundingClientRect().height}px`
  // //   )
})

const showPanel = () => {
  // console.log('TR', trigger.value.getAttribute('aria-expanded') === 'null')
  // console.log('KKKKK', panelInner.value.getBoundingClientRect().height)
  // if (
  //   trigger.value.getAttribute('aria-expanded') != 'true'
  //   // trigger.value.getAttribute('aria-expanded') == false
  // ) {
  //   panel.value.style.setProperty(
  //     '--panel-max-height',
  //     `${panelInner.value.getBoundingClientRect().height}px`
  //   )
  //   trigger.value.setAttribute('aria-expanded', 'true')
  //   panel.value.removeAttribute('inert')
  // } else {
  //   panel.value.style.setProperty('--panel-max-height', 0)
  //   trigger.value.setAttribute('aria-expanded', 'false')
  //   panel.value.setAttribute('inert', '')
  // }
}
</script>

<template>
  <main class="[ container ] [ flow ]">
    <a href="https://andy-bell.design" class="fancy-link">
      <span class="fancy-link__text">More info</span>
      <svg
        class="[ icon ] [ fancy-link__icon ]"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fill-rule="nonzero"
          d="M7.43547133 19.4355653L14.7947168 12 7.43547133 4.56443467c-.58062844-.58664991-.58062844-1.53779734 0-2.12444724.58062844-.58664991 1.52201314-.58664991 2.10264158 0L19 12l-9.46188709 9.5600126c-.58062844.5866499-1.52201314.5866499-2.10264158 0-.58062844-.5866499-.58062844-1.5377974 0-2.1244473z"
        ></path>
      </svg>
    </a>
    <hr />
    <a href="https://andy-bell.design" class="fancy-link fancy-link--large">
      <span class="fancy-link__text">More info</span>
      <svg
        class="[ icon ] [ fancy-link__icon ]"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fill-rule="nonzero"
          d="M7.43547133 19.4355653L14.7947168 12 7.43547133 4.56443467c-.58062844-.58664991-.58062844-1.53779734 0-2.12444724.58062844-.58664991 1.52201314-.58664991 2.10264158 0L19 12l-9.46188709 9.5600126c-.58062844.5866499-1.52201314.5866499-2.10264158 0-.58062844-.5866499-.58062844-1.5377974 0-2.1244473z"
        ></path>
      </svg>
    </a>
    <section class="user">
      <div class="profile">
        <img
          class="profile__image"
          src="http://source.unsplash.com/IWBSuyANw8c/800x800"
          alt="Profile shot of Sofia Teixeira"
        />
        <h1 class="profile__heading">Sofia Teixeira</h1>
      </div>
      <p>
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Donec
        sed odio dui. Vestibulum id ligula porta felis euismod semper. Cum
        sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Aenean lacinia bibendum nulla sed consectetur.
      </p>
    </section>
    <hr />
    <section class="user">
      <div class="profile profile--large">
        <img
          class="profile__image"
          src="http://source.unsplash.com/IWBSuyANw8c/800x800"
          alt="Profile shot of Sofia Teixeira"
        />
        <h1 class="profile__heading">Sofia Teixeira</h1>
      </div>
      <p>
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Donec
        sed odio dui. Vestibulum id ligula porta felis euismod semper. Cum
        sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Aenean lacinia bibendum nulla sed consectetur.
      </p>
    </section>
  </main>
</template>

<style scoped></style>
