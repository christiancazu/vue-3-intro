<template>
<main>
  <h1 class="h1 text-center text-title">Composition API - Vue 3</h1>

  <!-- <RouterLink to="/">Home</RouterLink> |
  <RouterLink to="/about">About</RouterLink> -->
  <RouterView/>
</main>
</template>

<style lang="scss" scoped>
main {
  min-height: 100vh;
  background-color: whitesmoke;
}

.text-title {
  text-decoration: underline;
  color: green;
  font-weight: bold;
}
</style>
