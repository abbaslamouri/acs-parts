<script setup lang="ts"></script>

<template>
  <article>
    <div class="center-split">
      <h1>
        <span>Equal center split layout</span>
      </h1>
      <p>
        <span>
          Each item of <code>.center-split</code> is 50% wide. The content
          within is sized with the <code>--center-split-max-width</code> Custom
          Property. Inner content in all items is pushed into the center.
        </span>
      </p>
    </div>
    <div class="center-split">
      <p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit
          non mi porta gravida at eget metus. Etiam porta sem malesuada magna
          mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
          Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur
          blandit tempus porttitor. Maecenas sed diam eget risus varius blandit
          sit amet non magna.
        </span>
      </p>
      <h2>
        <span>A large subheading</span>
      </h2>
    </div>
    <div class="center-split">
      <p>
        <span>
          Donec id elit non mi porta gravida at eget metus. Donec id elit non mi
          porta gravida at eget metus. Aenean lacinia bibendum nulla sed
          consectetur. Cras mattis consectetur purus sit amet fermentum. Nullam
          id dolor id nibh ultricies vehicula ut id elit. Sed posuere
          consectetur est at lobortis.
        </span>
      </p>
      <p>
        <span>
          Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id
          ligula porta felis euismod semper. Donec id elit non mi porta gravida
          at eget metus. Maecenas sed diam eget risus varius blandit sit amet
          non magna.
        </span>
      </p>
    </div>
  </article>

  <article>
    <figure class="center-split">
      <img
        src="https://source.unsplash.com/Sfs_64L9UHE/500x300"
        srcset="
          https://source.unsplash.com/Sfs_64L9UHE/500x300    500w,
          https://source.unsplash.com/Sfs_64L9UHE/1000x600  1000w,
          https://source.unsplash.com/Sfs_64L9UHE/1500x900  1500w,
          https://source.unsplash.com/Sfs_64L9UHE/2000x1200 1000w
        "
        alt="The golden light of the setting sun illuminates the Valle de la Luna in the Atacama Desert, Chile"
      />
      <figcaption>
        <h1>Equal center split layout</h1>
        <p>
          Each item of <code>.center-split</code> is 50% wide. The content
          within is sized with the <code>--center-split-max-width</code> Custom
          Property. Inner content in all items is pushed into the center.
        </p>
      </figcaption>
    </figure>
    <figure class="center-split">
      <figcaption>
        <p>
          Nullam quis risus eget urna mollis ornare vel eu leo. Aenean eu leo
          quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla
          vitae elit libero, a pharetra augue. Curabitur blandit tempus
          porttitor. Nulla vitae elit libero, a pharetra augue. Donec id elit
          non mi porta gravida at eget metus. Sed posuere consectetur est at
          lobortis.
        </p>
      </figcaption>
      <img
        src="https://source.unsplash.com/VJTmFSendQ0/500x300"
        srcset="
          https://source.unsplash.com/VJTmFSendQ0/500x300    500w,
          https://source.unsplash.com/VJTmFSendQ0/1000x500  1000w,
          https://source.unsplash.com/VJTmFSendQ0/1500x900  1500w,
          https://source.unsplash.com/VJTmFSendQ0/2000x1200 1000w
        "
        alt="Sunset behind a big-ass mountain"
      />
    </figure>
    <figure class="center-split">
      <img
        src="https://source.unsplash.com/hGgd46qq3ww/500x300"
        srcset="
          https://source.unsplash.com/hGgd46qq3ww/500x300    500w,
          https://source.unsplash.com/hGgd46qq3ww/1000x500  1000w,
          https://source.unsplash.com/hGgd46qq3ww/1500x900  1500w,
          https://source.unsplash.com/hGgd46qq3ww/2000x1200 1000w
        "
        alt="Sunset behind a big-ass mountain"
      />
      <figcaption>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed
          consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras
          justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo
          quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
        </p>
      </figcaption>
    </figure>
  </article>
</template>

<style scoped></style>
