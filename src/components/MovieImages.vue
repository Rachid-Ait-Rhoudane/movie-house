<script>

import SpecialHeader from "./SpecialHeader.vue";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
    components: {
        SpecialHeader,
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            modules: [Navigation],
            images: null
        }
    },
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    created(){
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjI3MTdlOTU1ZmU3M2Y1OTkxNGU4NDU3ZWRiZGU1MyIsInN1YiI6IjY1MzNiOGMwOGNmY2M3MDBjODNkNjVjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VCBH0D_Q6oZ5JcoXZyIrCFbWIpOSxRFL54ZefY6koXs'
            }
        };
        
        fetch(`https://api.themoviedb.org/3/movie/${this.id}/images`, options)
        .then(response => response.json())
        .then(response => this.images = response.backdrops)
        .catch(err => console.error(err));
    }
}

</script>

<template>

    <div v-if="images" class="my-20">
        <special-header>
            <template #title>
                Images
            </template>
        </special-header>
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

</template>
