<script>

export default {
    data() {
        return {
            showMenu: false,
        }
    },
    methods: {
        toggleMenuIcon() {
            this.showMenu = !this.showMenu;
        }
    }
}

</script>

<template>
    <nav class="container relative py-2 text-white flex justify-between items-center">
        <div class="flex items-center gap-10">
            <a href="/">
                <img class="w-14 h-14" src="/images/Movie-House-logo.png" alt="logo">
            </a>
            <ul id="menu" class="bg-black/60 hidden absolute z-20 md:relative top-full md:top-0 left-0 w-full md:w-auto p-2 md:p-0 text-center md:text-left md:flex md:gap-12">
                <li class="text-xl hover:text-gray-300">
                    <router-link class="block p-4" to="/">
                        <i class="fa-solid fa-house"></i>
                        Home
                    </router-link>
                </li>
                <li class="text-xl hover:text-gray-300">
                    <router-link class="block p-4" to="/about">
                        <i class="fa-solid fa-bookmark"></i>
                        My Movies
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="flex items-center gap-5">
            <i id="burger-icon" @click="toggleMenuIcon" :class="[showMenu ? 'fa-solid fa-x' : 'fa-solid fa-bars']" class="block md:hidden hover:text-primary cursor-pointer text-2xl"></i>
            <i class="fa-solid fa-magnifying-glass hover:text-primary cursor-pointer text-2xl"></i>
        </div>
    </nav>
</template>

<style scoped>
.active {
    color: #F68B1E;
    border-bottom: 2px solid #F68B1E;
}

</style>