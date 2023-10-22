<script>

import SpecialHeader from "../components/SpecialHeader.vue";
import MovieCard from "../components/MovieCard.vue";

export default {
    components: {
        SpecialHeader,
        MovieCard
    },
    data() {
        return {
            currentPage: localStorage.getItem('currentPage') ?? 1,
            mostPopular: []
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

    <div class="py-16 mt-16">
        <special-header>Most Popular</special-header>
        <div class="container mt-24 grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            <movie-card
                v-for="movie in mostPopular" 
                :poster="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
                :title="movie.original_title"
                :rate="movie.vote_average" 
            />
        </div>

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