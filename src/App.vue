<template>
<main>
  <h1 class="h1 text-center text-title">Composition API - Vue 3</h1>

  <RouterLink to="/">Home</RouterLink> |
  <RouterLink to="/about">About</RouterLink>
  <RouterView/>
</main>
</template>

<script>
import { provide, reactive } from 'vue'

import bookStore from '@/my-store'

export default {
  setup () {
    const store = reactive({
      user: {
        id: 1,
        name: 'Christian'
      }
    })

    provide('MY_STORE', store)
    provide('BOOK_STORE', { ...bookStore })
  }
}
</script>

<style lang="scss" scoped>
main {
  font-size: 2rem;
  min-height: 100vh;
  background-color: whitesmoke;
}

.text-title {
  text-decoration: underline;
  color: green;
  font-weight: bold;
}
</style>
