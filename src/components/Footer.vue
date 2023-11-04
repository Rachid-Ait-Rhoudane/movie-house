<template>
    <footer class="relative w-full bg-secondary flex flex-col gap-5 items-center p-4 pb-16">
        <div class="text-3xl text-white space-x-4">
            <a class="hover:text-primary" href="#">
                <i class="fa-brands fa-facebook"></i>
            </a>
            <a class="hover:text-primary" href="#">
                <i class="fa-brands fa-square-instagram"></i>
            </a>
            <a class="hover:text-primary" href="#">
                <i class="fa-brands fa-tiktok"></i>
            </a>
            <a class="hover:text-primary" href="#">
                <i class="fa-brands fa-youtube"></i>
            </a>
            <a class="hover:text-primary" href="#">
                <i class="fa-brands fa-square-twitter"></i>
            </a>
        </div>
        <div class="flex justify-center items-center text-white gap-4 flex-wrap">
            <a class="hover:text-primary hover:underline" href="#">Help</a>
            <a class="hover:text-primary hover:underline" href="#">About-Us</a>
            <a class="hover:text-primary hover:underline" href="#">Contact-Us</a>
            <a class="hover:text-primary hover:underline" href="#">Tmdb</a>
            <a class="hover:text-primary hover:underline" href="#">Imdb</a>
            <a class="hover:text-primary hover:underline" href="#">Movie-House</a>
            <a class="hover:text-primary hover:underline" href="#">Netflix</a>
        </div>
        <div class="flex items-center justify-center gap-4">
            <img class="w-20 aspect-square" src="/images/Movie-House-logo.png" alt=" logo">
            <img class="w-44 aspect-video" src="/images/TMDB.svg" alt="tmdb logo">
        </div>
        <div class="absolute bottom-0 left-0 w-full text-white text-xl py-4 bg-[#222222] text-center">
            &copy; 2023-2024 by Movie-House.
        </div>
    </footer>
</template>