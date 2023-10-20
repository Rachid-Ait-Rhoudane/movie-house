<script>

</script>

<template>
    <nav class="container py-2 text-white flex justify-between items-center">
        <div class="flex items-center gap-10">
            <a href="/">
                <img class="w-14 h-14" src="/images/Movie-House-logo.png" alt="logo">
            </a>
            <ul class="flex gap-12">
                <li class="text-xl hover:text-gray-300">
                    <router-link class="p-4" to="/">
                        <i class="fa-solid fa-house"></i>
                        Home
                    </router-link>
                </li>
                <li class="text-xl hover:text-gray-300">
                    <router-link class="p-4" to="/about">
                        <i class="fa-solid fa-bookmark"></i>
                        My Movies
                    </router-link>
                </li>
            </ul>
        </div>
        <i class="fa-solid fa-magnifying-glass hover:text-primary cursor-pointer text-2xl"></i>
    </nav>
</template>

<style scoped>
.active {
    color: #F68B1E;
    border-bottom: 2px solid #F68B1E;
}

</style>