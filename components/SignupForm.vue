<script setup lang="ts">
const emailInputRef = ref()

const submitForm = () => {
  console.log(emailInputRef.value.getAttribute('required'))
}
</script>

<template>
  <main class="[ signup ] [ flow ]">
    <h1 class="signup__heading">Sign up for the latest updates</h1>
    <form id="signupForm" class="[ signup__form ] [ flow ]" novalidate @submit.prevent="submitForm">
      <label for="email">Email address</label>
      <div class="inline-field-control">
        <input
          type="email"
          name="email"
          id="email"
          autocapitalize="none"
          autocorrect="off"
          required
          pattern="[^@]+@[^\.]+\..+"
          ref="emailInputRef"
        />
        <button type="submit" class="button">
          <span class="visually-hidden">Submit email</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11.293 5.707L16.586 11H5a1 1 0 000 2h11.586l-5.293 5.293a.999.999 0 101.414 1.414l7-7a1.006 1.006 0 000-1.414l-7-7a.999.999 0 10-1.414 1.414z"
            />
          </svg>
        </button>
      </div>
    </form>
    <div aria-atomic="true" role="alert" class="signup__alert">
      <figure class="alert" data-state="error">
        <svg
          class="alert__icon"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M11.148 4.374a.973.973 0 01.334-.332c.236-.143.506-.178.756-.116s.474.216.614.448l8.466 14.133a.994.994 0 01-.155 1.192.99.99 0 01-.693.301H3.533a.997.997 0 01-.855-1.486zM9.432 3.346l-8.47 14.14c-.422.731-.506 1.55-.308 2.29s.68 1.408 1.398 1.822c.464.268.976.4 1.475.402H20.47a3 3 0 002.572-4.507L14.568 3.346a2.995 2.995 0 00-4.123-1.014c-.429.26-.775.615-1.012 1.014zM11 9v4a1 1 0 002 0V9a1 1 0 00-2 0zm2 8a1 1 0 10-2 0 1 1 0 002 0z"
          />
        </svg>
        <p class="alert__content"><b>Please use a valid email.</b> Like: person@inbox.com.</p>
      </figure>
      <figure class="alert" data-state="success">
        <svg
          class="alert__icon"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19.293 5.293L9 15.586l-4.293-4.293a.999.999 0 10-1.414 1.414l5 5a.999.999 0 001.414 0l11-11a.999.999 0 10-1.414-1.414z"
          />
        </svg>
        <p class="alert__content"><b>Yay! Thank you!</b> We’ve sent a confirmation link to your inbox.</p>
      </figure>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.signup {
  max-width: 20rem;
  //   border: 1px solid red;

  --flow-space: 1em;

  //   &__form + &__alert {
  // --flow-space: 1em;
  //   }

  .inline-field-control {
    --flow-space: 0.5rem;
    display: flex;
    box-shadow: 0 2px 10px rgba(23, 11, 41, 0.12);
  }

  .inline-field-control input {
    flex: auto;
  }

  .button {
    background: #f9d170;
    color: #4c2982;
    font-size: 1.6rem;
    min-width: 3.5rem;
    cursor: pointer;

    svg {
      transform: translateY(1px); /* Optical adjustment */
    }

    &:hover {
      filter: brightness(1.05);
    }
  }

  .alert {
    --alert-text: #252525;
    --alert-bg: #f9f7f3;

    display: flex;
    align-items: flex-start;
    background: var(--alert-bg);
    color: var(--alert-text);
    border: 1px solid;
    padding: 1rem 1rem;
    margin-top: 1rem;
    animation: slide-up 250ms ease;

    &[data-state='error'] {
      --alert-text: #b71540;
      --alert-bg: #fdeff3;
    }

    &[data-state='success'] {
      --alert-text: #067973;
      --alert-bg: #f5fff;
    }

    &__icon {
      font-size: 1.6em;
      flex-shrink: 0;
    }

    &__content {
      padding-left: 0.8rem;
    }

    &__content b {
      display: block;
    }
  }
}
</style>
