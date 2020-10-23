<template>
<section class="p-4">
  <h4 class="h4 text-center">Vue 3</h4>

  <button
    class="btn btn-success"
    @click="modifyCSSVariables"
  >
    modifyCSSVariables
  </button>

  <div class="my-text my-2">MY TEXT</div>
</section>
</template>

<script setup>
import { ref, computed } from 'vue'

const size = ref(10)
const color = ref('#ffffff')

function modifyCSSVariables () {
  size.value++
  color.value = '#000000'.replace(/0/g, () => (~~(Math.random() * 16)).toString(16))
}

const computedSize = computed(() => size.value + 'px')

export {
  modifyCSSVariables,
  computedSize,
  color
}
/**
 * multiple nodes
 * '#000000'.replace(/0/g, () => (~~(Math.random() * 16)).toString(16))
 */
</script>

<style vars="{ computedSize, color }">
.my-text {
 font-size: var(--computedSize);
 color: var(--color);
}
</style>
