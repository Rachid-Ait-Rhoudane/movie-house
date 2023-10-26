<script>

import SpecialHeader from "../components/SpecialHeader.vue";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
    components: {
        SpecialHeader,
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            movie: null,
            modules: [Navigation],
            images: null,
            videos: null
        }
    },
    created() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjI3MTdlOTU1ZmU3M2Y1OTkxNGU4NDU3ZWRiZGU1MyIsInN1YiI6IjY1MzNiOGMwOGNmY2M3MDBjODNkNjVjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VCBH0D_Q6oZ5JcoXZyIrCFbWIpOSxRFL54ZefY6koXs'
            }
        };

        fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?language=en-US`, options)
        .then(response => response.json())
        .then(response => {this.movie = response;})
        .catch(err => console.error(err));

        fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}/images`, options)
        .then(response => response.json())
        .then(response => this.images = response.backdrops)
        .catch(err => console.error(err));

        fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}/videos?language=en-US`, options)
        .then(response => response.json())
        .then(response => this.videos = response.results)
        .catch(err => console.error(err));
    }
}

</script>

<template>
    <div v-if="movie" class="relative overflow-x-hidden w-screen h-screen before:fixed before:top-0 before:left-0 before:bg-black/80 before:w-full before:h-full before:z-10">
        <img class="fixed top-0 left-0 w-full h-full object-cover" :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`" alt="movie backdrop">
        <div class="relative z-20 container mt-24">
            <div class="flex items-center flex-col sm:flex-row gap-4 w-full">
                <img class="w-80 aspect-[3/4]" :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" alt="poster image">
                <div class="flex flex-col gap-5 text-white">
                    <h1 class="text-3xl md:text-6xl font-bold">{{ movie.title }}</h1>
                    <div class="flex items-center gap-2">
                        <span class="text-sm py-1 px-2 border border-white rounded-md" v-for="genre in movie.genres" :key="genre.id">{{ genre.name }}</span>
                    </div>
                    <span class="flex items-center gap-2 text-base md:text-xl">
                        <i class="fa-solid fa-star text-primary"></i>
                        {{ movie.vote_average }}
                    </span>
                    <p class="text-base md:text-xl">{{ movie.overview }}</p>
                </div>
            </div>
            <div class="my-20">
                <h1 class="text-3xl md:text-6xl font-bold py-1 md:py-2 px-1 md:px-2 border-l-[5px] md:border-l-[10px] border-l-primary capitalize text-white">
                    Trailers
                </h1>
                <swiper
                    id="video-swiper"
                    class="w-full lg:w-3/4 mt-10"
                    :slides-per-view="1"
                    :modules="modules"
                    :space-between="10"
                    navigation
                >
                    <template v-for="video in videos" :key="video.key">
                        <swiper-slide v-if="video.type == 'Trailer'" class="flex justify-center items-center">
                            <iframe class="w-full aspect-video" :src="`https://www.youtube.com/embed/${video.key}`">
                            </iframe>
                        </swiper-slide>
                    </template>
                </swiper>
            </div>
            <div class="my-20">
                <h1 class="text-3xl md:text-6xl font-bold py-1 md:py-2 px-1 md:px-2 border-l-[5px] md:border-l-[10px] border-l-primary capitalize text-white">
                    Numbers
                </h1>
                <div class="bg-secondary/80 mt-10 py-10 grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 justify-center">
                    <div class="text-white flex flex-col gap-2 items-center text-base sm:text-3xl">
                        <i class="fa-solid fa-hourglass-start text-6xl text-primary"></i>
                        <span class="block font-bold text-gray-300">Runtime </span>
                        {{ movie.runtime }} min
                    </div>
                    <div class="text-white flex flex-col gap-2 items-center text-base sm:text-3xl">
                        <i class="fa-solid fa-dollar-sign text-6xl text-primary"></i>
                        <span class="block font-bold text-gray-300">Budget </span>
                        {{ movie.budget }}
                    </div>
                    <div class="text-white flex flex-col gap-2 items-center text-base sm:text-3xl">
                        <i class="fa-solid fa-sack-dollar text-6xl text-primary"></i>
                        <span class="block font-bold text-gray-300">Revenue </span>
                        {{ movie.revenue }}
                    </div>
                    <div class="text-white flex flex-col gap-2 items-center text-base sm:text-3xl">
                        <i class="fa-solid fa-chart-line text-6xl text-primary"></i>
                        <span class="block font-bold text-gray-300">Popularity </span>
                        {{ movie.popularity }}
                    </div>
                </div>
            </div>
            <div class="my-20">
                <h1 class="text-3xl md:text-6xl font-bold py-1 md:py-2 px-1 md:px-2 border-l-[5px] md:border-l-[10px] border-l-primary capitalize text-white">
                    Images
                </h1>
                <swiper
                    class="w-full lg:w-3/4 mt-10"
                    :slides-per-view="1"
                    :modules="modules"
                    :space-between="10"
                    navigation
                >
                    <swiper-slide class="flex justify-center items-center" v-for="image in images" :key="image.file_path">
                        <img class="w-full aspect-video" :src="`https://image.tmdb.org/t/p/original${image.file_path}`" alt="movie image">
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>  
</template>
