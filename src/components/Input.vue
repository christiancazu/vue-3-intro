<template>
<div class="hello">
  <input
    class="form-control"
    :value="name"
    @input="$emit('update:name', $event.target.value)"
  >
</div>
</template>

<script>
export default {
  name: 'HelloWorld',

  props: {
    name: {
      type: String,
      default: ''
    }
  },

  emits: {
    'update:name': (val) => {
      if (val.length > 5) {
        alert('no es valido')
        return false
      }
      return true
    }
  }

}
</script>
