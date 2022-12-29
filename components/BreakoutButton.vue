<script setup lang="ts">
const buttonRef = ref()

onMounted(() => {
  buttonRef.value.parentElement.setAttribute('data-interactive', '')
  buttonRef.value.removeAttribute('hidden')
})

const showAlert = () => {
  alert('Oh hi there 👋')
}
</script>

<template>
  <article class="box">
    <h1>A semantic, breakout button</h1>
    <p>
      This whole box is clickable, but still uses a button element, correctly.
    </p>
    <button
      class="breakout-button"
      type="button"
      hidden
      ref="buttonRef"
      @click="showAlert()"
    >
      Say Hi 👋
    </button>
  </article>
</template>

<style lang="scss" scoped>
.box {
  color: #fff;
  padding: 2rem;
  max-width: 30rem;
  background: #252525;
  position: relative;
  box-shadow: none;
  transition: transform 300ms ease-in-out, box-shadow 400ms ease,
    background 100ms ease;

  &[data-interactive]:hover,
  &[data-interactive]:focus-within {
    background: #111111;
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.3);
    transform: translateY(-0.5rem);
  }

  .breakout-button {
    font: inherit;
    font-weight: 600;
    padding: 0.6rem 2rem;
    background: transparent;
    color: currentColor;
    border: 1px solid;
    transition: background 100ms ease;
    position: static;
  }

  .breakout-button,
  .breakout-button::before {
    cursor: pointer;
  }

  .breakout-button::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .breakout-button:focus {
    outline: none;
  }

  .breakout-button:hover {
    background: #333333;
  }

  .breakout-button:focus::before {
    outline: 1px solid #ffffff;
    outline-offset: -0.8rem;
  }
}
</style>
