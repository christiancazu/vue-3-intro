<template>
<section class="p-4">
  <h4 class="h4 text-center">Ref vs Reactive</h4>

  <div>{{ value }}</div>

  <button
    class="btn btn-primary"
    @click="increment"
  >
    increment
  </button>
</section>
</template>

<script>
export default {
  name: 'Home',

  data () {
    return {
      value: 0
    }
  },

  setup () {
  },

  methods: {
    increment () {
      this.value++
    }
  }
}

/**
 * ref (unwrap)
 * reactive (destructuring)
 * toRefs
 * toRef
 */
</script>
