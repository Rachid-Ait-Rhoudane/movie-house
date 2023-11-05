<script>

import navBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    navBar,
    Footer
  }
}
</script>

<template>

  <header class="fixed w-full top-0 left-0 z-30 bg-black/80">
    <nav-bar />
  </header>

  <main class="min-h-screen">
    <router-view />
  </main>

  <Footer  />

</template>

<style>

::-webkit-scrollbar {
    width: 5px;
}
 
::-webkit-scrollbar-track {
    background-color: #181818;
}

::-webkit-scrollbar-thumb {
    background: #F68B1E; 
}

</style>


