<template>
<section class="p-4">
  <h4 class="h4 text-center">Vue 3 - Breaking changes</h4>

  <!-- <template
    v-for="(number) in 8"
    :key="number"
  >
    <div v-if="false">{{ number }}</div>
    <div v-else>{{ number * 2 }}</div>
  </template> -->

  <!-- <button
    class="btn btn-primary"
    @click="callToChildMethod"
  >
    callToChildMethod
  </button> -->

  <!-- <Foo
    v-for="(number, index) in 8"
    :key="index"
    :ref="setRefItems"
    :number="index"
  >
    COMPONENT
  </Foo> -->

  <Foo />
</section>
</template>

<script>
import { onMounted } from 'vue'
import Foo from '@/components/Foo'

import BusEvent from '@/bus-event'


// const EventBus = new Vue()

// EventBus.$on('listener', (params) => {
//   console.warn(object)
// })

// EventBus.$emit('listener', 5)


export default {
  components: {
    Foo
  },

  setup () {
    BusEvent.on('foo', e => console.log('BUS_EVENT emited', e))

    let refItems = []

    function setRefItems (ref) {
      refItems.push(ref)
    }

    onMounted(() => {
      console.warn(refItems)
    })

    function callToChildMethod () {
      refItems[5].sayFoo()
    }

    return {
      setRefItems,
      callToChildMethod
    }
  }
}


/**
 * x sync modifier
 * x key in template
 * multiple ref
 *
 * mitt replace event bus
 */
</script>

<style vars>
</style>
