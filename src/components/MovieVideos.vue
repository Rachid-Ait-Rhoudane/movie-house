<script>

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
    components: {
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

    <div v-if="videos" class="my-20">
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
            <swiper-slide v-for="video in videos" :key="video.key" class="flex justify-center items-center">
                <iframe class="w-full aspect-video" :src="`https://www.youtube.com/embed/${video.key}`">
                </iframe>
            </swiper-slide>
        </swiper>
    </div>

</template>
