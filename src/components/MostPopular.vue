<script>

import SpecialHeader from "../components/SpecialHeader.vue";
import MovieCard from "../components/MovieCard.vue";
import SpinLoader from "./SpinLoader.vue";
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
            mostPopular: [],
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
    methods: {
        onClickHandler(page) {
            localStorage.setItem('currentPage', page);
            this.currentPage = page
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

        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${this.currentPage}`, options)
        .then(response => response.json())
        .then(response => this.mostPopular = response.results)
        .catch(err => console.error(err));
    },
    updated() {
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjI3MTdlOTU1ZmU3M2Y1OTkxNGU4NDU3ZWRiZGU1MyIsInN1YiI6IjY1MzNiOGMwOGNmY2M3MDBjODNkNjVjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VCBH0D_Q6oZ5JcoXZyIrCFbWIpOSxRFL54ZefY6koXs'
        }
        };

        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${this.currentPage}`, options)
        .then(response => response.json())
        .then(response => this.mostPopular = response.results)
        .catch(err => console.error(err));
    }
}

</script>

<template>

    <div class="py-16">
        <special-header class="container">
            <template #title>
                Most Popular
            </template>
            <template #description>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, officiis.
            </template>
        </special-header>

        <swiper
            v-if="mostPopular.length"
            class="swiper-container mt-10 overflow-y-visible"
            :modules="modules"
            :space-between="10"
            :breakpoints="breakpoints"
            navigation
        >
            <swiper-slide class="flex justify-center items-center" v-for="movie in mostPopular" :key="movie.id">
                <movie-card
                    :id="movie.id" 
                    :poster="movie.poster_path"
                    :title="movie.original_title"
                    :rate="movie.vote_average" 
                />
            </swiper-slide>
        </swiper>

        <spin-loader class="swiper-container h-[408.8px]" v-else /> 
        
        <vue-awesome-paginate
            :total-items="50"
            :items-per-page="5"
            :max-pages-shown="5"
            v-model="currentPage"
            :on-click="onClickHandler"
            :show-breakpoint-buttons="false"
            :hide-prev-next-when-ends="true"
        >
            <template #prev-button>
                <i class="fa-solid fa-angle-left"></i>
            </template>
            <template #next-button>
                <i class="fa-solid fa-angle-right"></i>
            </template>
        </vue-awesome-paginate>
    </div>

</template>