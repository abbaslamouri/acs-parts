<script setup lang="ts">
definePageMeta({
  title: 'Home',
  description:
    'A leader in the design, development, manufacture, and delivery of Aerospace Engine/Airframe PMA parts to service the global Aftermarket',
})

const featuresRef = ref()

const setFeaturesRef = () => {
  console.log('JJJJJJ')
  if (featuresRef.value.getBoundingClientRect().width > 46 * 16) featuresRef.value.setAttribute('data-layout', '3')
  else featuresRef.value.removeAttribute('data-layout')
}

onMounted(() => {
  setFeaturesRef()
  window.addEventListener('resize', () => {
    setFeaturesRef()
  })
})
</script>

<template>
  <div class="flow">
    <article class="hero">
      <div>
        <p>Aviation Component Solutions</p>
        <h1>A Leading Supplier of OEM Alternative Parts</h1>
      </div>
      <p>
        <abbr title="Aviation Component Solutions">ACS </abbr> strives to be the leader in the design, development,
        manufacturing, and delivery of Aerospace Engine/Airframe PMA parts to service the global Aftermarket segment
        using continuous improvement to drive stakeholder satisfaction.
      </p>
      <a href="#">Explore Our Catalog</a>
    </article>

    <article class="">
      <h2>All ACS parts are FAA-PMA approved</h2>
      <p>
        We realize there’s more to our customer’s purchasing decision than just price. This is why ACS seeks not only to
        provide the best pricing in the industry, but to create value using any means available to us. Stocking 100% of
        our inventory for next day delivery, offering eCommerce solutions for online customers, utilizing the latest
        data management technology, and offering the latest manufacturing / design solutions are some of the many
        methods we’ve adopted to create value for our customers.
      </p>
      <ul class="grid" role="list" ref="featuresRef">
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>
          <h3>Design and Engineering</h3>
          <p>
            To assure customers that the parts we provide will perform as promised, both functional and dimensional
            analyses are critical to our design process.
          </p>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>
          <h3>Quality Control</h3>
          <p>
            The driving force behind our approach to quality control is simple – to assure that our customers receive
            the highest quality, airworthy parts, every single time they order.
          </p>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>
          <h3>Materials Testing</h3>
          <p>
            Our partnership with some of the industry’s most sophisticated Materials Labs provides us with the ability
            to investigate chemical, mechanical, and metallurgical properties of the candidate part to match material,
            hardness, and strength.
          </p>
        </li>
      </ul>
      <a href="#">Learn More</a>
    </article>
    <article class="">
      <h2>Our Team</h2>
      <ul class="grid" role="list">
        <li>
          <img src="/images/mike-carabotta.png" alt="Mike Carabotta, Engineering Manager" />
          <h4>Mike Carabotta</h4>
          <p>Engineering Manager</p>
          <p>Mike is directly responsible for the continued expansion of our already-vast catalog.</p>
        </li>
        <li>
          <img src="/images/joe-klinehamer.png" alt="Mike Carabotta, Engineering Manager" />
          <h4>Joe Klinehamer</h4>
          <p>President</p>
          <p>Joe is always looking for the next opportunity to expand and develop our business at ACS.</p>
        </li>
        <li>
          <img src="/images/mitch-kokish.png" alt="Mike Carabotta, Engineering Manager" />
          <h4>Mitch Kokish Carabotta</h4>
          <p>Quality Manager</p>
          <p>Mike is a certified FAA Manufacturing DAR with involvement in over 500 certification projects.</p>
        </li>
      </ul>
      <a href="#">Learn More</a>
      <a href="#">Contact Us</a>
    </article>
    <article class="">
      <h2>Ready to work with us</h2>
      <blockquote>
        <p>
          It was as though the web design community were participating in a shared consensual hallucination. Rather than
          acknowledge the flexible nature of the browser window, they chose to settle on one set width as the ideal
          …even if that meant changing the ideal every few years.
        </p>
        <p>Jeremy Keith - Resilient Web Design</p>
      </blockquote>
      <address>
        <p>26451 Curtiss Wright Pkwy</p>
        <p>Cleveland, OH 44143</p>
        <a href="mailto:abbaslamouri@yrlus.com">Email: info@acs-parts.com</a>
        <a href="tel:Phone: +14402956590">+1 (440) 295-6590 x 111</a>
      </address>
    </article>
  </div>
</template>

<style scoped lang="scss">
article {
  border: 2px solid green;
  // --flow-space: 2rem;
  &.hero {
    background-image: url(/images/home-page-hero.jpg);

    color: var(--color-background);
  }
}
</style>
