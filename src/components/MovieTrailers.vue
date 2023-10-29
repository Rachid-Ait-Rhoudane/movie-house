<script>

import VideoLoader from "./VideoLoader.vue"
import SpecialHeader from "./SpecialHeader.vue";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
    components: {
        SpecialHeader,
        Swiper,
        SwiperSlide,
        VideoLoader
    },
    data() {
        return {
            modules: [Navigation],
            trailers: null,
            showVideo: false
        }
    },
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    methods: {
        videoLoaded() {
            this.showVideo = true;
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
            this.trailers = response.results.filter((video) => {
                return video.type === 'Trailer';
            })
        })
        .catch(err => console.error(err));
    }
}

</script>

<template>

    <div v-if="trailers && Array.from(trailers).length" class="my-20">
        <special-header>
            <template #title>
                Trailers
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
            <swiper-slide v-for="trailer in trailers" :key="trailer.key" class="flex justify-center items-center">
                <iframe v-show="showVideo" @load="videoLoaded" class="w-full aspect-video" :src="`https://www.youtube.com/embed/${trailer.key}`">
                </iframe>
                <video-loader v-show="!showVideo" class="w-full aspect-video" />
            </swiper-slide>
        </swiper>
    </div>

</template>
