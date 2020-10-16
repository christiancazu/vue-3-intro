<template>
<section class="p-4">
  <h4 class="h4 text-center">Ref vs Reactive</h4>

  <div>{{ name }}</div>
  <div> passwordRef {{ passwordRef }}</div>

  <!-- <div>
    reactive: {{ form.name }}
  </div> -->



  <button
    class="btn btn-primary"
    @click="increment"
  >
    increment
  </button>
</section>
</template>

<script>
import { reactive, ref, toRef, toRefs } from 'vue'

export default {
  name: 'Home',

  setup () {
    // const name = ref('qweqweqw')

    const form = reactive({
      name: 'aaaaaaaaa',
      password: 'qweqweqwe'
    })

    setTimeout(() => {
      console.warn('before', form.name)
      form.name = 'bbbbbbbbbbb'
      console.warn('after', form.name)
    }, 1000)

    const { name } = toRefs(form)

    const passwordRef = toRef(form, 'password')

    passwordRef.value

    function increment () {
      form.name = ''
      form.password = ''
    }

    return {
      name,
      passwordRef,
      increment
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
