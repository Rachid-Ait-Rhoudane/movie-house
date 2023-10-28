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
            videos: null
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
        
        fetch(`https://api.themoviedb.org/3/movie/${this.id}/videos?language=en-US`, options)
        .then(response => response.json())
        .then(response => {
            this.videos = response.results.filter((video) => {
                return video.type !== 'Trailer';
            })
        })
        .catch(err => console.error(err));
    }
}

</script>

<template>

    <div v-if="videos && Array.from(videos).length" class="my-20">
        <special-header>
            <template #title>
                Videos
            </template>
        </special-header>
        <swiper
            id="video-swiper"
            class="w-full lg:w-3/4 mt-10"
            :slides-per-view="1"
            :modules="modules"
            :space-between="10"
            navigation
        >
            <swiper-slide v-for="video in videos" :key="video.key" class="flex justify-center items-center">
                <iframe class="w-full aspect-video" :src="`https://www.youtube.com/embed/${video.key}`">
                </iframe>
            </swiper-slide>
        </swiper>
    </div>

</template>
