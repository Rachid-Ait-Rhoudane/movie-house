<script>

import ImgLoader from '../components/ImgLoader.vue';
import MovieBackdrop from '../components/MovieBackdrop.vue';
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
        ImgLoader,
        MovieBackdrop,
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
            showImg: false
        }
    },
    methods: {
        imgLoaded() {
            this.showImg = true;
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

        fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?append_to_response=videos,images`, options)
        .then(response => response.json())
        .then(response => {this.movie = response;})
        .catch(err => console.error(err));

        this.$watch(() => this.$route.params, () => {
            fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?append_to_response=videos,images`, options)
            .then(response => response.json())
            .then(response => {this.movie = response;})
            .catch(err => console.error(err));
        })
    }
}

</script>

<template>

    <div v-if="movie" class="relative overflow-x-hidden w-screen h-screen before:fixed before:top-0 before:left-0 before:bg-black/80 before:w-full before:h-full before:z-10">

        <movie-backdrop
            :key="movie.id"
            :backdrop="movie.backdrop_path"
        />

        <div class="relative z-20 container mt-24">

            <movie-general-info 
                :key="movie.id"
                :poster="movie.poster_path"
                :title="movie.title"
                :genres="movie.genres"
                :rate="movie.vote_average"
                :overview="movie.overview"
            />

            <movie-numbers 
                :key="movie.id"
                :runtime="movie.runtime"
                :budget="movie.budget"
                :revenue="movie.revenue"
                :popularity="movie.popularity"
            />

            <movie-trailers
                :key="movie.id"
                :videos="movie.videos.results"
            />
            
            <movie-images 
                :key="movie.id"
                :images="movie.images.backdrops"
            />

            <movie-videos 
                :key="movie.id"
                :videos="movie.videos.results"
            />

            <movie-cast 
                :key="movie.id"
                :id="movie.id"
            />

            <movie-reviews 
                :key="movie.id"
                :id="movie.id"
            />

            <movie-similar 
                :key="movie.id"
                :id="movie.id"
            />

        </div>
    </div>

</template>
