<template>
<section class="p-4">
  <h4 class="h4 text-center">Computed & Watchers</h4>

  <input
    v-model="name"
    class="form-control"
    placeholder="name">

  <input
    v-model="password"
    class="form-control"
    placeholder="password">

  {{ readonlyForm.name }}

  <!-- <div>
    name: {{ name }}
  </div>
  <div>
    password: {{ password }}
  </div>

  <input
    v-model="name"
    class="form-control"
    placeholder="name">

  <input
    v-model="password"
    class="form-control"
    placeholder="password"> -->

  <div>
  </div>

</section>
</template>

<script>
import { computed, reactive, readonly, ref, watch, watchEffect } from 'vue'
import axios from 'axios'

const API = 'https://rickandmortyapi.com/api/character'

export default {
  name: 'Home',

  setup () {
    const name = ref('')
    const password = ref('')
    const charactedId = ref(1)

    // const computedName = computed({
    //   get: () => name.value,
    //   set: val => name.value = val.toUpperCase()
    // })

    // watch([name, password], ([newName, newPassword], [oldName, oldPassword]) => {
    //   console.warn('name', oldName)
    //   console.warn('password', oldPassword)
    //   if ([newName, newPassword].every(v => v === 'abc')) {
    //     console.log('HAS MATCH')
    //   }
    // })

    watchEffect(async () => {
      const { data: { id, name } } = await axios.get(`${API}/${charactedId.value}`)
      console.warn(id, name)
    })

    const form = reactive({
      name: 'foo'
    })

    const readonlyForm = readonly(form)

    readonlyForm.name = 'bar'
    form.name = 'bar'

    return {
      name,
      password,
      readonlyForm
      // computedName
    }
  }
}

/**
 * computed (get, set)
 * watch (array)
 * watchEffect (async API: 'https://rickandmortyapi.com/api/character/id')
 * readonly
 */
</script>
