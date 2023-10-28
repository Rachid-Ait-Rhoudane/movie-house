<script>

import MovieGeneralInfo from "../components/MovieGeneralInfo.vue";
import MovieNumbers from "../components/MovieNumbers.vue";
import MovieTrailers from "../components/MovieTrailers.vue";
import MovieImages from "../components/MovieImages.vue";
import MovieVideos from "../components/MovieVideos.vue";
import MovieCast from "../components/MovieCast.vue";
import MovieReviews from "../components/MovieReviews.vue";
import MovieSimilar from "../components/MovieSimilar.vue";

export default {
    components: {
        MovieReviews,
        MovieGeneralInfo,
        MovieNumbers,
        MovieTrailers,
        MovieImages,
        MovieVideos,
        MovieCast,
        MovieSimilar
    },
    data() {
        return {
            movie: null,
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

        this.$watch(() => this.$route.params, () => {
            fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?language=en-US`, options)
            .then(response => response.json())
            .then(response => {this.movie = response;})
            .catch(err => console.error(err));
        })
    }
}

</script>

<template>
    <div v-if="movie" class="relative overflow-x-hidden w-screen h-screen before:fixed before:top-0 before:left-0 before:bg-black/80 before:w-full before:h-full before:z-10">
        <img class="fixed top-0 left-0 w-full h-full object-cover" :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`" alt="movie backdrop">
        <div class="relative z-20 container mt-24">

            <movie-general-info 
                :poster="movie.poster_path"
                :title="movie.title"
                :genres="movie.genres"
                :rate="movie.vote_average"
                :overview="movie.overview"
            />

            <movie-numbers 
                :runtime="movie.runtime"
                :budget="movie.budget"
                :revenue="movie.revenue"
                :popularity="movie.popularity"
            />

            <movie-trailers />
            
            <movie-images />

            <movie-videos />

            <movie-cast />

            <movie-reviews />

            <movie-similar />

        </div>
    </div>  
</template>
