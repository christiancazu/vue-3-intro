<template>
<section id="my-section">
  <h4 class="h4 text-center">Lifecycles</h4>
</section>
</template>

<script>
export default {
  name: 'Home',

  setup () {
    const mySection = document.getElementById('my-section')

    console.log('mySection', mySection)
  }
}

/**
 *  beforeCreate -> use setup()
    created -> use setup()
    beforeMount -> onBeforeMount
    mounted -> onMounted
    beforeUpdate -> onBeforeUpdate
    updated -> onUpdated
    beforeDestroy -> onBeforeUnmount
    destroyed -> onUnmounted
    activated -> onActivated
    deactivated -> onDeactivated
    errorCaptured -> onErrorCaptured
 */
</script>
