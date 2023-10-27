<script>

import SpecialHeader from "../components/SpecialHeader.vue";
import MovieGeneralInfo from "../components/MovieGeneralInfo.vue";
import MovieNumbers from "../components/MovieNumbers.vue";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
    components: {
        SpecialHeader,
        MovieGeneralInfo,
        MovieNumbers,
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            movie: null,
            modules: [Navigation],
            images: null,
            videos: null
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

        fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}/images`, options)
        .then(response => response.json())
        .then(response => this.images = response.backdrops)
        .catch(err => console.error(err));

        fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}/videos?language=en-US`, options)
        .then(response => response.json())
        .then(response => this.videos = response.results)
        .catch(err => console.error(err));
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
            
            <div class="my-20">
                <h1 class="text-3xl md:text-6xl font-bold py-1 md:py-2 px-1 md:px-2 border-l-[5px] md:border-l-[10px] border-l-primary capitalize text-white">
                    Trailers
                </h1>
                <swiper
                    id="video-swiper"
                    class="w-full lg:w-3/4 mt-10"
                    :slides-per-view="1"
                    :modules="modules"
                    :space-between="10"
                    navigation
                >
                    <template v-for="video in videos" :key="video.key">
                        <swiper-slide v-if="video.type == 'Trailer'" class="flex justify-center items-center">
                            <iframe class="w-full aspect-video" :src="`https://www.youtube.com/embed/${video.key}`">
                            </iframe>
                        </swiper-slide>
                    </template>
                </swiper>
            </div>
            <div class="my-20">
                <h1 class="text-3xl md:text-6xl font-bold py-1 md:py-2 px-1 md:px-2 border-l-[5px] md:border-l-[10px] border-l-primary capitalize text-white">
                    Images
                </h1>
                <swiper
                    class="w-full lg:w-3/4 mt-10"
                    :slides-per-view="1"
                    :modules="modules"
                    :space-between="10"
                    navigation
                >
                    <swiper-slide class="flex justify-center items-center" v-for="image in images" :key="image.file_path">
                        <img class="w-full aspect-video" :src="`https://image.tmdb.org/t/p/original${image.file_path}`" alt="movie image">
                    </swiper-slide>
                </swiper>
            </div>
            <div class="my-20">
                <h1 class="text-3xl md:text-6xl font-bold py-1 md:py-2 px-1 md:px-2 border-l-[5px] md:border-l-[10px] border-l-primary capitalize text-white">
                    Videos
                </h1>
                <swiper
                    id="video-swiper"
                    class="w-full lg:w-3/4 mt-10"
                    :slides-per-view="1"
                    :modules="modules"
                    :space-between="10"
                    navigation
                >
                    <template v-for="video in videos" :key="video.key">
                        <swiper-slide v-if="video.type !== 'Trailer'" class="flex justify-center items-center">
                            <iframe class="w-full aspect-video" :src="`https://www.youtube.com/embed/${video.key}`">
                            </iframe>
                        </swiper-slide>
                    </template>
                </swiper>
            </div>
        </div>
    </div>  
</template>
