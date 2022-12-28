<script setup lang="ts">
definePageMeta({
  title: 'Page Title',
  description: 'Description',
})
</script>

<template>
  <article class="wrapper">
    <!-- <FormsToggle />> -->
    <h1 class="fluid-type">Full bleed CSS Utility</h1>
    <p>
      You can break an element out of its container while maintaining its flow within that container using
      <code>margin</code> and <code>transform</code>. There’s two examples, both using the
      <code>.full-bleed</code> utility to achieve this affect.
    </p>
    <SignupForm />
    <aside class="[ full-bleed ] [ promo ]">
      <div class="wrapper">
        <h2 class="fluid-type">Some aside content that is full bleed</h2>
        <p>This element contains the full bleed utility, so it's broken out of the article’s horizontal bounds.</p>
      </div>
    </aside>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Donec ullamcorper nulla non metus
      auctor fringilla. Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor.
    </p>
    <h2 class="fluid-type">Cras mattis consectetur purus sit amet fermentum.</h2>
    <p>
      Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor.
      Cras justo odio, dapibus ac facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod. Cras
      mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
      lacinia odio sem nec elit.
    </p>
    <figure class="[ full-bleed ] [ feature-figure ]">
      <img
        src="https://source.unsplash.com/e_DmszdpETY/1200x600"
        srcset="
          https://source.unsplash.com/e_DmszdpETY/2400x1200 2400w,
          https://source.unsplash.com/e_DmszdpETY/1400x700  1400w,
          https://source.unsplash.com/e_DmszdpETY/1200x600  1200w,
          https://source.unsplash.com/e_DmszdpETY/800x400    800w,
          https://source.unsplash.com/e_DmszdpETY/600x300    600w
        "
        sizes="100vw"
        alt="low-angle photography of trees"
      />
      <figcaption>A full bleed image, using the same utility - Photo by Jonathan Borba on Unsplash</figcaption>
    </figure>
    <p>
      Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.
      Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Fusce dapibus, tellus ac cursus commodo,
      tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
    </p>
    <p>
      Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient
      montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget
      metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis
      parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis.
    </p>
  </article>
</template>

<style scoped></style>
