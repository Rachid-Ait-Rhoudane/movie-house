<script>

import SpecialHeader from "../components/SpecialHeader.vue";
import MovieCard from "../components/MovieCard.vue";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
    components: {
        SpecialHeader,
        MovieCard,
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            currentPage: 1,
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
    props: {
        similar: {
            type: Array,
            required: true
        }
    }
}

</script>

<template>

    <div v-if="Array.from(similar).length" class="my-20">
        <special-header>
            <template #title>
                similar
            </template>
        </special-header>

        <swiper
            class="swiper-container mt-10 overflow-y-visible"
            :modules="modules"
            :space-between="10"
            :breakpoints="breakpoints"
            navigation
        >
            <swiper-slide class="flex justify-center items-center" v-for="movie in similar" :key="movie.id">
                <movie-card
                    :id="movie.id" 
                    :poster="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
                    :title="movie.original_title"
                    :rate="movie.vote_average" 
                />
            </swiper-slide>
        </swiper>
    </div>

</template>