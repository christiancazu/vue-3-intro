<template>
<section class="p-4">
  <h4 class="h4 text-center">Vue 3 - Teleport</h4>

  <button
    class="btn btn-primary"
    @click="toggleDestination"
  >
    toggle destination
  </button>

  <Teleport :to="destination">
    <span class="badge badge-success">MY CONTENT</span>
  </Teleport>
</section>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const destination = ref('#footer')

    function toggleDestination () {
      if (destination.value === '#footer') {
        destination.value = '#sidebar'
      } else {
        destination.value = '#footer'
      }
    }

    return {
      destination,
      toggleDestination
    }
  }
}

/**
 * teleport
 */
</script>
