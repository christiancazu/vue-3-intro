
<template>
<section>
  <ValueCounter :value="value" />

  <button
    class="btn btn-primary"
    @click="increment">
    increment
  </button>
</section>
</template>

<script>
import ValueCounter from '@/components/ValueCounter'

export default {
  name: 'Home',

  components: {
    ValueCounter
  },

  data () {
    return {
      value: 0
    }
  },

  methods: {
    increment () {
      this.value++
    }
  }
}
</script>
