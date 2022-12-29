<script setup lang="ts"></script>

<template>
  <!DOCTYPE html>

  <main class="wrapper">
    <h1>Meet the team</h1>
    <div class="switcher">
      <article class="duotone-card">
        <div class="duotone-card__inner">
          <div class="duotone-card__content">
            <h2 class="duotone-card__heading">María Godoy</h2>
            <p class="duotone-card__summary">Founder</p>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              class="duotone-card__icon"
            >
              <path
                d="M9.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"
              ></path>
            </svg>
          </div>
          <a href="#" class="cover-button">
            <span class="visually-hidden">View María’s profile</span>
          </a>
          <div class="duotone-card__media">
            <img
              src="/images/image-1.jpg"
              width="300"
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
          </div>
        </div>
      </article>
      <article class="duotone-card">
        <div class="duotone-card__inner">
          <div class="duotone-card__content">
            <h2 class="duotone-card__heading">Tiago Monteiro</h2>
            <p class="duotone-card__summary">
              <abbr title="Chief Creative Officer">CCO</abbr>
            </p>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              class="duotone-card__icon"
            >
              <path
                d="M9.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"
              ></path>
            </svg>
          </div>
          <a href="#" class="cover-button">
            <span class="visually-hidden">View Tiago’s profile</span>
          </a>
          <div class="duotone-card__media">
            <img
              src="/images/image-3.jpg"
              width="300"
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
          </div>
        </div>
      </article>
      <article class="duotone-card">
        <div class="duotone-card__inner">
          <div class="duotone-card__content">
            <h2 class="duotone-card__heading">Amelia Harris</h2>
            <p class="duotone-card__summary">
              <abbr title="Chief Technical Officer">CTO</abbr>
            </p>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              class="duotone-card__icon"
            >
              <path
                d="M9.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"
              ></path>
            </svg>
          </div>
          <a href="#" class="cover-button">
            <span class="visually-hidden">View Amelia’s profile</span>
          </a>
          <div class="duotone-card__media">
            <img
              src="/images/image-2.jpg"
              width="300"
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
          </div>
        </div>
      </article>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.wrapper {
  --color-pink: #faa7ed;
  --color-navy: #0c1f72;
  --color-navy-opaque: rgba(6, 0, 79, 0.77);
  --color-light: #ffffff;
  --color-dark: #252525;
  --font-serif: Georgia, serif;
  --font-sans: Helvetica, sans-serif;
  --metric-wrapper: 40rem;
  --metric-gutter: 1.25rem;
  --transition-snappy: 200ms linear;
  --transition-silky: 300ms cubic-bezier(1, 0, 0.55, 0.85);
}

abbr {
  text-decoration: none;
}

.wrapper {
  max-width: var(--metric-wrapper);
  margin-left: auto;
  margin-right: auto;
}

.switcher {
  display: flex;
  flex-wrap: wrap;
  margin: calc(var(--metric-gutter) * -1) 0 0 calc(var(--metric-gutter) * -1);
}

.switcher > * {
  flex-basis: calc((var(--metric-wrapper) - 100%) * 999);
  flex-grow: 1;
  margin: var(--metric-gutter) 0 0 var(--metric-gutter);
}

.duotone-card {
  --duotone-card-media-opacity: 1;
  --duotone-card-media-brightness: 1.1;
  --duotone-card-media-grayscale: 1;
  --duotone-card-icon-x: -0.5rem;
  --duotone-card-icon-opacity: 0;
  --duotone-card-content-background: var(--color-navy-opaque);

  max-width: 15rem;
}

.duotone-card__inner {
  position: relative;
  // padding-bottom: 115%;
  aspect-ratio: 1/1.25;
}

.duotone-card__content {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: var(--duotone-card-content-background);
  color: var(--color-light);
  padding: 0.6rem 3rem 0.6rem 0.6rem;
  line-height: 1.1;
}

.duotone-card__summary {
  font-family: var(--font-sans);
  font-size: 0.88rem;
  margin-top: 0.3rem;
}

.duotone-card__icon {
  fill: currentcolor;
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translate(var(--duotone-card-icon-x), -50%);
  opacity: var(--duotone-card-icon-opacity);
  font-size: 1.5em;
  transition: opacity var(--transition-snappy),
    transform var(--transition-silky);
}

.duotone-card__media {
  position: absolute;
  width: 100%;
  height: 100%;
}

.duotone-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(var(--duotone-card-media-grayscale))
    brightness(var(--duotone-card-media-brightness));
  transition: filter var(--transition-snappy);
}

@supports (mix-blend-mode: multiply) {
  .duotone-card__media::before,
  .duotone-card__media::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: var(--duotone-card-media-opacity);
    transition: opacity var(--transition-snappy);
  }

  .duotone-card__media::before {
    background: var(--color-pink);
    mix-blend-mode: multiply;
  }

  .duotone-card__media::after {
    background: var(--color-navy);
    mix-blend-mode: lighten;
  }
}

.duotone-card:hover,
.duotone-card:focus-within {
  --duotone-card-media-opacity: 0;
  --duotone-card-media-brightness: 1;
  --duotone-card-media-grayscale: 0;
  --duotone-card-icon-opacity: 1;
  --duotone-card-icon-x: 0;
  --duotone-card-content-background: var(--color-navy);
}

.cover-button {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 3;
}
.cover-button:focus {
  outline: 0.25rem solid var(--color-navy);
}
</style>
