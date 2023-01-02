<script setup lang="ts"></script>

<template>
  <a href="#main" class="skip-link not:focus:visually-hidden">Skip to main content</a>
</template>

<style lang="scss" scoped>
.skip-link {
  display: inline-block;
  padding: 0.7rem 1rem 0.5rem 1rem;
  background: var(--color-primary-container);
  color: var(--color-on-primary-container);
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 1;

  &:hover {
    background: var(--color-on-primary-container);
    color: var(--color-primary-container);
  }
}
</style>
