<script>

import navBar from "./components/NavBar.vue";

export default {
  components: {
    navBar
  }
}
</script>

<template>

  <header class="fixed w-full top-0 left-1/2 -translate-x-1/2 z-30 bg-black/80">
    <nav-bar />
  </header>

  <main>
    <router-view />
  </main>

</template>

