<script>

import SpinLoader from '../components/SpinLoader.vue';
import ImgRender from '../components/ImgRender.vue';
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
        ImgRender,
        MovieReviews,
        MovieGeneralInfo,
        MovieNumbers,
        MovieTrailers,
        MovieImages,
        MovieVideos,
        MovieCast,
        MovieSimilar,
        SpinLoader
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

        fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?append_to_response=videos,images,casts,reviews,similar`, options)
        .then(response => response.json())
        .then(response => {this.movie = response;})
        .catch(err => console.error(err));

        this.$watch(() => this.$route.params, () => {
            this.movie = null;
            fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?append_to_response=videos,images,casts,reviews,similar`, options)
            .then(response => response.json())
            .then(response => {this.movie = response;})
            .catch(err => console.error(err));
        })
    }
}

</script>

<template>

    <div v-if="movie">

        <movie-general-info
            :key="movie.id"
            :id="movie.id"
            :backdrop="movie.backdrop_path"
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
           :actors="movie.casts.cast"
       />

       <movie-reviews 
            :key="movie.id"
            :reviews="movie.reviews.results"
        />

        <movie-similar 
            :key="movie.id"
            :similar="movie.similar.results"
        />

    </div>

    <spin-loader class="w-full h-screen" v-else />

</template>
