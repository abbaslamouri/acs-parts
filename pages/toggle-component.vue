<script setup lang="ts">
const trigger = ref()
const panel = ref()
const panelInner = ref()

onMounted(() => {
  const expanded = trigger.value.getAttribute('aria-expanded')
  console.log(expanded)
  if (expanded === null) {
    trigger.value.setAttribute('aria-expanded', 'false')
    // trigger.value.removeAttribute('hidden')
  }
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
  if (trigger.value.getAttribute('aria-expanded') === 'true')
    trigger.value.setAttribute('aria-expanded', 'false')
  else {
    trigger.value.setAttribute('aria-expanded', 'true')
    panel.value.style.setProperty(
      '--panel-max-height',
      `${panelInner.value.getBoundingClientRect().height}px`
    )
  }

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
    <h1>Buy this thing!</h1>
    <p>It is very good and there's absolutely no hidden exceptions!</p>
    <a href="//example.com" class="button">Buy it now!!</a>
    <div class="terms">
      <button
        class="[ link-button ] [ js-trigger ]"
        type="button"
        hidden
        ref="trigger"
        @click="showPanel"
      >
        See the terms & conditions
        <svg
          viewBox="0 0 512 512"
          aria-hidden="true"
          fill="currentColor"
          width="1em"
          height="1em"
        >
          <path d="M60 99.333l196 196 196-196 60 60-256 256-256-256z"></path>
        </svg>
      </button>
      <div class="[ panel ] [ js-panel ]" ref="panel">
        <article class="[ panel__inner ] [ js-panel__inner ]" ref="panelInner">
          <h2>Terms & Conditions</h2>
          <p>
            Here's some secret terms and conditions that we didn't want you to
            see because they explain how the product isn't actually very good.
          </p>

          <p>
            Lorem ipsum dolor sit amet, appareat pertinax et ius, ne pro nibh
            consulatu consetetur, nulla virtute definitiones nec in. Ad consul
            feugait eligendi mea, mutat tamquam ei mei. No hinc graecis phaedrum
            pro, cu erat ipsum sed, ut novum dissentiunt ullamcorper pro.
            <a href="#">Dicat aliquid dissentias</a> in per, meis alterum
            quaestio mei eu, vero praesent ex eam. Ei nam homero noluisse
            dissentiunt, ut vim quot putent. Vis elitr accusam accommodare id,
            cu usu quaestio conceptam, habeo tibique placerat eos cu. An nullam
            corpora consulatu qui, graeci euripidis est et.
          </p>
          <p>
            In tantas scripta nominati quo, ne essent maluisset voluptaria nam.
            Dicat putent feugiat ei sed, te vis delicata gubergren honestatis,
            ius liber blandit delicata ut. Vix et dictas detracto voluptua, vis
            an inani dicunt. Qui inciderint intellegebat ea, cetero verear cu
            duo.
          </p>
          <p>
            Vix id etiam sapientem. Vix case velit feugait eu. Id diceret
            delenit perpetua vis, has sale utamur aeterno te. Cum et consetetur
            mediocritatem.
          </p>
        </article>
      </div>
      <div>
        <h1>Other text</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
          fugit enim voluptatibus quis corporis earum excepturi? Neque optio
          officiis mollitia, porro rerum esse eligendi inventore?
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
