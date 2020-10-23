<template>
<section class="p-4">
  <h4 class="h4 text-center">Vue 3 - Suspense</h4>

  <!-- <Suspense>
    <template #default>
      <Foo />
    </template>
    <template #fallback>
      <Spinner />
    </template>
  </Suspense> -->
</section>

<Baz />
</template>

<script>
// import Foo from '@/components/Foo'
import Spinner from '@/components/Spinner'
import ErrorComponent from '@/components/Error'
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    // Foo,
    // Spinner,
    // Bar: defineAsyncComponent(() => import('@/components/Error.vue')),
    Baz: defineAsyncComponent({
      // loader: () => import('@/components/Error.vue'),
      loader: () => new Promise((res, rej) => {
        setTimeout(() => {
          rej()
        }, 3000)
      }),
      loadingComponent: Spinner,
      errorComponent: ErrorComponent
    })
  },

  setup () {

  }
}

/**
 * suspense
 * defineAsyncComponent(function & object syntax)
 */
</script>

<style vars>
</style>
