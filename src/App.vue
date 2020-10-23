<template>
<main>
  <section class="fixed-right bg-warning">
    <h6 class="h6">teleport slot sidebar</h6>
    <div id="sidebar" />
  </section>

  <h1 class="h1 text-center text-title">Composition API - Vue 3</h1>

  <!-- <RouterLink to="/">Home</RouterLink> |
  <RouterLink to="/about">About</RouterLink> -->
  <RouterView />

  <section class="fixed-bottom bg-info">
    <h6 class="h6">teleport slot footer</h6>
    <div id="footer" />
  </section>
</main>
</template>

<style lang="scss" scoped>
main {
  font-size: 2rem;
  min-height: 100vh;
}

.text-title {
  text-decoration: underline;
  color: greenyellow;
  font-weight: bold;
}

.fixed-bottom {
  height: 5rem;
  width: 100%;
  position: fixed;
  bottom: 0;
}

.fixed-right {
  height: 100vh;
  width: 8rem;
  position: fixed;
  right: 0;
}
</style>
