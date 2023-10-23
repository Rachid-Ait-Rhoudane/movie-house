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
            mostPopular: [],
            modules: [Navigation]
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

        fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${this.currentPage}&sort_by=popularity.desc`, options)
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

        fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${this.currentPage}&sort_by=popularity.desc`, options)
        .then(response => response.json())
        .then(response => this.mostPopular = response.results)
        .catch(err => console.error(err));
    }
}

</script>

<template>

    <div class="py-16">
        <special-header>
            <template #title>
                Most Popular
            </template>
            <template #description>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, officiis.
            </template>
        </special-header>

        <swiper
            class="container mt-10"
            :modules="modules"
            :slides-per-view="5"
            :space-between="10"
            navigation
        >
            <swiper-slide class="flex justify-center items-center" v-for="movie in mostPopular" :key="movie.id">
                <movie-card 
                    :poster="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
                    :title="movie.original_title"
                    :rate="movie.vote_average" 
                />
            </swiper-slide>
        </swiper>
        
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