<script>

import SpecialHeader from '../components/SpecialHeader.vue';
import MovieCard from "../components/MovieCard.vue";
import SpinLoader from "../components/SpinLoader.vue";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
    components: {
        SpecialHeader,
        MovieCard,
        Swiper,
        SwiperSlide,
        SpinLoader
    },
    data() {
        return {
            currentPage: 1,
            savedMovies: null,
            modules: [Navigation],
            breakpoints: {
                300: {
                    slidesPerView: 1,
                },
                530: {
                    slidesPerView: 2,
                },
                640: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 5,
                },
                1280: {
                    slidesPerView: 6,
                },
            }
        }
    },
    created() {
        this.savedMovies = JSON.parse(localStorage.getItem('savedMovies') ?? '[]');
    }
}

</script>

<template>

    <div class="relative h-screen overflow-hidden flex justify-center before:absolute before:top-0 before:left-0 before:bg-black/80 before:w-full before:h-full before:z-10">
        <img class="absolute w-full h-full object-cover" src="/images/movies-bg-image.jpg" alt="bg image">
        <div class="container relative z-50 mt-28">

            <special-header>
                <template #title>
                    Watchlist
                </template>
                <template #description>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, officiis.
                </template>
            </special-header>

            <swiper
                v-if="savedMovies"
                class="swiper-container mt-10 overflow-y-visible"
                :modules="modules"
                :space-between="10"
                :breakpoints="breakpoints"
                navigation
            >
                <swiper-slide class="flex justify-center items-center" v-for="movie in savedMovies" :key="movie.id">
                    <movie-card
                        :id="movie.id"
                        :poster="movie.poster"
                        :title="movie.title"
                        :rate="movie.rate" 
                    />
                </swiper-slide>
            </swiper>

            <spin-loader class="swiper-container h-[408.8px]" v-else />

        </div>

    </div>
    
</template>
