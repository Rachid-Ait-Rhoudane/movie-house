<script>

import VideoRender from "./VideoRender.vue";
import SpecialHeader from "./SpecialHeader.vue";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
    components: {
        SpecialHeader,
        Swiper,
        SwiperSlide,
        VideoRender
    },
    data() {
        return {
            modules: [Navigation]
        }
    },
    props: {
        videos: {
            type: Array,
            required: true
        }
    }
}

</script>

<template>

    <section v-if="Array.from(videos).length" class="container py-20">
        <special-header>
            <template #title>
                Videos
            </template>
            <template #description>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, officiis.
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

                <video-render
                    class="w-full aspect-video"
                    :path="`https://www.youtube.com/embed/${video.key}`"
                />
                
            </swiper-slide>
        </swiper>
    </section>

</template>
