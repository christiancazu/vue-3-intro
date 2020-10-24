<template>
<h1 class="h1 text-primary">component</h1>

<button @click="emitByEventBus">emit</button>
</template>

<script>
import BusEvent from '@/bus-event'

export default {
  props: {
    number: {
      type: Number,
      default: 0
    }
  },

  setup (props) {
    function sayFoo () {
      console.log('sayy foo', props.number)
    }

    function emitByEventBus () {
      BusEvent.emit('foo', 5)
    }

    return {
      sayFoo,
      emitByEventBus
    }
  }
}
</script>
