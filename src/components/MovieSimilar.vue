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

    <section v-if="Array.from(similar).length" class="container py-10">
        <special-header>
            <template #title>
                similar
            </template>
            <template #description>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, officiis.
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
                    :poster="movie.poster_path"
                    :title="movie.original_title"
                    :rate="movie.vote_average" 
                />
            </swiper-slide>
        </swiper>
    </section>

</template>