<template>
<section class="p-4">
  <h4 class="h4 text-center">Vue 3 - Multiple v-model</h4>

  {{ name }}

  <Input v-model:name="name" />
</section>
</template>

<script>
const { ref } = require('vue')

import Input from '@/components/Input'
export default {
  components: {
    Input
  },

  setup () {
    const name = ref('abc')

    return {
      name,
      Input
    }
  }
}



/**
 * multiple v-model
 */
</script>

<style vars>
</style>
