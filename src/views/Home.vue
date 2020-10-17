<template>
<section class="p-4">
  <h4 class="h4 text-center">Provide & Inject</h4>

  <button :to="{ name: 'About' }">to about</button>

  <div>
    {{ storeItems.state.items }}
  </div>

  <input class="form-control">

  <!-- {{ id }}
  {{ name }}

  <User /> -->

  <pre>
    {{ books }}
  </pre>

</section>
</template>

<script>
import { inject, toRefs } from 'vue'

import User from '@/components/User'

import useStateBooks from '@/composables/useStateBooks'

console.warn('useStateBooks', useStateBooks)

import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'Home',

  components: {
    User
  },

  setup () {
    const store = inject('MY_STORE')
    const { books, addBook } = useStateBooks()

    const storeItems = useStore()

    console.warn(books)

    function goToAbout () {
      useRouter().push({ name: 'About' })
    }

    setInterval(() => {
      addBook({
        id: 3,
        name: 'asdasd'
      })
    }, 1000)

    return {
      goToAbout,
      books,
      storeItems,
      ...toRefs(store.user)
    }
  }
}

/**
 * provide
 * inject
 * use store as composable function
 */
</script>
