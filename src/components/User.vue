<template>
<section class="text-danger">

  <!-- {{ store }} -->

  {{ userId }}

  <div class="text-warning">
    {{ store }}
  </div>
</section>
</template>

<script>
import { inject, toRef } from 'vue'
export default {
  setup () {
    const store = inject('MY_STORE')

    const userId = toRef(store.user, 'id')

    return {
      store,
      userName: store.user.name,
      userId
      // userId: store.user.id
    }
  }
}
</script>

<style>

</style>
