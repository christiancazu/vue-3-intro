<template>
<div>
  <h1 class="h1">
    counter value: {{ value }}
  </h1>
</div>
</template>

<script>
export default {
  name: 'ValueCounter',

  props: {
    value: {
      type: Number,
      default: 0
    }
  },

  setup () {
  }
}
/**
 * return
 * props,
 * context { attrs, emit, slots },
 */
</script>
