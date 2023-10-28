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
            similar: null,
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
        id: {
            type: Number,
            required: true
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

        fetch(`https://api.themoviedb.org/3/movie/${this.id}/similar?language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => this.similar = response.results)
        .catch(err => console.error(err));
    }
}

</script>

<template>

    <div v-if="similar && Array.from(similar).length" class="my-20">
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