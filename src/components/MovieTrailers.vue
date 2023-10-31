<script>

import VideoLoader from "./VideoLoader.vue";
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
            showVideo: false
        }
    },
    computed: {
        trailers() {
            return this.videos.filter((video) => {
                return video.type === 'Trailer';
            })
        }
    },
    props: {
        videos: {
            type: Array,
            required: true
        }
    },
    methods: {
        videoLoaded() {
            this.showVideo = true;
        }
    }
}

</script>

<template>

    <div v-if="Array.from(trailers).length" class="my-20">
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
