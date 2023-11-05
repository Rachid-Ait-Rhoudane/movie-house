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

    <div class="container mt-28">

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
    
</template>
