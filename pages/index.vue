<script setup lang="ts">
// definePageMeta({
//   title: 'Home',
//   description:
//     'A leader in the design, development, manufacture, and delivery of Aerospace Engine/Airframe PMA parts to service the global Aftermarket',
//   // layout: 'home',
// })
const pageTitle = 'Home'

const headerRef = ref()

const salesDirectors = ref([
  {
    name: 'Elizabeth Arguello',
    title: 'Sales Director',
    phoneNumber: '(786) -597-1609',
    email: 'arguello@acs-parts.com',
    image: 'new-york.jpg',
  },
  {
    name: 'ERick C. Ray',
    title: 'Sales Director',
    phoneNumber: '1.801.446.1040',
    email: 'Ray@acs-parts.com',
    image: 'san-francisco.jpg',
  },
  {
    name: 'Elizabeth Arguello',
    title: 'Sales Director',
    phoneNumber: '(786) -597-1609',
    email: 'arguello@acs-parts.com',
    image: 'rio.jpg',
  },
  {
    name: 'Brandon Detzel',
    title: 'Sales Director',
    phoneNumber: '1.440.569.1825',
    email: 'detzel@acs-parts.com',
    image: 'barcelona.jpg',
  },
  {
    name: 'Bing Li',
    title: 'Sales Director',
    phoneNumber: '86.1381.002.5764',
    email: 'li@acs-parts.com',
    image: 'shanghai.jpg',
  },
  {
    name: 'Robyn Frank',
    title: 'Sales Director',
    phoneNumber: '1.210.380.9988',
    email: 'frank.robyn3@gmail.com',
    image: 'us-army.jpg',
  },
])

const currentRoute = computed(() => useRoute().name)
onMounted(() => {
  // console.log(window.getComputedStyle(document.body).getPropertyValue('--nav-breakpoint'))
  // console.log(document.documentElement.clientWidth)
  // console.log(burgerToggleRef.value)
  // console.log(headerRef.value)
  // toggleMobileNav(
  //   document.documentElement.clientWidth,
  //   window.getComputedStyle(document.body).getPropertyValue('--nav-breakpoint')
  // )
  // window.addEventListener('resize', () => {
  //   toggleMobileNav(
  //     document.documentElement.clientWidth,
  //     window.getComputedStyle(document.body).getPropertyValue('--nav-breakpoint')
  //   )
  // })
  // viewportWidth.value = document.documentElement.clientWidth
  // console.log(viewportWidth.value)
  // toggleMobileNav(
  //   document.documentElement.clientWidth,
  //   window.getComputedStyle(document.body).getPropertyValue('--nav-breakpoint')
  // )
  // let header: any = document.getElementById('header')
  // const sticky = header.offsetTop
  // window.addEventListener('scroll', () => {
  //   console.log(header.offsetTop)
  //   if (window.pageYOffset > sticky) {
  //     header.classList.add('sticky')
  //   } else {
  //     header.classList.remove('sticky')
  //   }
  //   // if (window.scrollY > 0) {
  //   //   headerRef.value.setAttribute('data-sticky', true)
  //   // } else {
  //   //   headerRef.value.removeAttribute('data-sticky')
  //   // }
  // })
})
</script>

<template>
  <div class="">
    <Head>
      <Title>ACS | {{ pageTitle }}</Title>
      <Meta name="description" :content="pageTitle" />
    </Head>
    <article class="hero">
      <div class="hero__inner | flow container">
        <div>
          <p class="panorama">Aviation Component Solutions</p>
          <h1>A Leading Supplier of OEM Alternative Parts</h1>
        </div>
        <p>
          <abbr title="Aviation Component Solutions">ACS </abbr> strives to be the leader in the design, development,
          manufacturing, and delivery of Aerospace Engine/Airframe PMA parts to service the global Aftermarket segment
          using continuous improvement to drive stakeholder satisfaction.
        </p>
        <a href="#" class="btn btn-accent">Explore Our Catalog</a>
      </div>
    </article>
    <article class="capabilities">
      <div class="flow container">
        <!-- <div class="flow center"> -->
        <h2 class="">All ACS parts are FAA-PMA approved</h2>
        <p class="">
          We realize there???s more to our customer???s purchasing decision than just price. This is why ACS seeks not only
          to provide the best pricing in the industry, but to create value using any means available to us. Stocking
          100% of our inventory for next day delivery, offering eCommerce solutions for online customers, utilizing the
          latest data management technology, and offering the latest manufacturing / design solutions are some of the
          many methods we???ve adopted to create value for our customers.
        </p>
        <!-- </div> -->
        <div>
          <ul class="" role="list">
            <li class="">
              <div class="flex items-center">
                <IconsDesign class="" />
                <h3>Design and Engineering</h3>
              </div>
              <p>
                To assure customers that the parts we provide will perform as promised, both functional and dimensional
                analyses are critical to our design process.
              </p>
            </li>
            <li>
              <div class="flex items-center">
                <IconsVerified class="" />
                <h3>Quality Control</h3>
              </div>
              <p>
                The driving force behind our approach to quality control is simple ??? to assure that our customers
                receive the highest quality, airworthy parts, every single time they order.
              </p>
            </li>
            <li>
              <div class="flex items-center">
                <IconsScience class="" />
                <h3>Materials Testing</h3>
              </div>
              <p>
                Our partnership with some of the industry???s most sophisticated Materials Labs provides us with the
                ability to investigate chemical, mechanical, and metallurgical properties of the candidate part to match
                material, hardness, and strength.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <a class="btn btn-primary" href="#">Learn More</a>
        </div>
      </div>
    </article>
    <article class="team">
      <div class="container flow">
        <h2 class="">Meet Our Team</h2>
        <div>
          <ul class="" role="list">
            <li class="flow">
              <img src="/images/mike-carabotta.png" alt="Mike Carabotta, Engineering Manager" />
              <div class="heading">
                <h4>Mike Carabotta</h4>
                <p>Engineering Manager</p>
              </div>
              <p>Mike is directly responsible for the continued expansion of our already-vast catalog.</p>
            </li>
            <li class="flow">
              <img src="/images/joe-klinehamer.png" alt="Mike Carabotta, Engineering Manager" />
              <h4>Joe Klinehamer</h4>
              <p>President</p>
              <p>Joe is always looking for the next opportunity to expand and develop our business at ACS.</p>
            </li>
            <li class="flow">
              <img src="/images/mitch-kokish.png" alt="Mike Carabotta, Engineering Manager" />
              <h4>Mitch Kokish Carabotta</h4>
              <p>Quality Manager</p>
              <p>Mike is a certified FAA Manufacturing DAR with involvement in over 500 certification projects.</p>
            </li>
          </ul>
        </div>
        <div>
          <a class="btn btn-accent" href="#">Learn More</a>
        </div>
      </div>
    </article>
    <article class="capabilities--yy">
      <div class="flow container">
        <!-- <div class="flow center"> -->
        <h2 class="">All ACS parts are FAA-PMA approved</h2>
        <p class="">
          We realize there???s more to our customer???s purchasing decision than just price. This is why ACS seeks not only
          to provide the best pricing in the industry, but to create value using any means available to us. Stocking
          100% of our inventory for next day delivery, offering eCommerce solutions for online customers, utilizing the
          latest data management technology, and offering the latest manufacturing / design solutions are some of the
          many methods we???ve adopted to create value for our customers.
        </p>
        <!-- </div> -->

        <div>
          <a class="btn btn-primary" href="#">Learn More</a>
        </div>
      </div>
    </article>
    <article class="globe">
      <div class="container">
        <div>
          <img src="/images/globe-map.png" alt="" />
        </div>
        <div>
          <ul role="list">
            <li class="flow" v-for="(director, i) in salesDirectors" :index="`sales-director-${i}`">
              <div class="image">
                <img :src="`/images/${director.image}`" alt="" />
              </div>
              <p>{{ director.name }}</p>
              <p>{{ director.title }}</p>
              <p>{{ director.phoneNumber }}</p>
              <p>{{ director.email }}</p>
            </li>
          </ul>
        </div>
      </div>
    </article>
    <article class="contact-us">
      <div class="container">
        <div>
          <h2>Can???t find what you are after contact us</h2>
          <address>
            <p>Jeneen Anderson</p>
            <p>Customer Service Representative</p>
            <p>26451 Curtiss Wright Pkwy</p>
            <p>Cleveland, OH 44143</p>
            <a href="mailto:abbaslamouri@yrlus.com">Email: info@acs-parts.com</a><br />
            <a href="tel:Phone: +14402956590">+1 (440) 295-6590 x 111</a>
          </address>
        </div>
        <div>
          <form action="">
            <label for="">
              <span> Your name</span>
              <input type="text" />
            </label>
          </form>
        </div>
      </div>
    </article>
  </div>
</template>

<style scoped lang="scss">
// .xx,
// h2 {
//   text-align: center;
//   margin: 0 auto;
// }
</style>
