<script>

import navBar from "./components/NavBar.vue";

export default {
  components: {
    navBar
  }
}
</script>

<template>

  <header class="bg-black/80">
    <nav-bar />
  </header>

  <main>
    <router-view />
  </main>

</template>

