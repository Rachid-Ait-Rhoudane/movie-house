<script>

import SpecialHeader from "../components/SpecialHeader.vue";

export default {
    components: {
        SpecialHeader
    }
}

</script>

<template>
    
    <div class="relative h-[calc(100vh-78px)] overflow-hidden flex justify-center before:absolute before:top-0 before:left-0 before:bg-black/80 before:w-full before:h-full before:z-10">
        <img class="absolute w-full h-full object-cover" src="/images/movies-bg-image.jpg" alt="bg image">
        <div class="container relative text-white z-20 text-center flex flex-col gap-10 mt-28">
            <h1 class="text-3xl md:text-6xl">Movie House: Your Ultimate Movie Companion</h1>
            <span class="block h-1 w-52 bg-primary mx-auto"></span>
            <p class="text-base md:text-xl">Welcome to Movie House, your ultimate movie companion! With Movie House, you can access a vast collection of your favorite films, from timeless classics to the latest releases.</p> 
        </div>
        <i class="absolute animate-bounce left-1/2 -translate-x-1/2 bottom-10 z-20 fa-solid fa-arrow-down text-primary text-3xl md:text-6xl"></i>
    </div>


    <div class="py-16">
        <special-header>Movies</special-header>
    </div>

</template>
