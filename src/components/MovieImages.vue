<script>

import ImgLoader from './ImgLoader.vue';
import SpecialHeader from "./SpecialHeader.vue";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
    components: {
        SpecialHeader,
        Swiper,
        SwiperSlide,
        ImgLoader
    },
    data() {
        return {
            modules: [Navigation],
            showImg: false
        }
    },
    props: {
        images: {
            type: Array,
            required: true
        }
    },
    methods: {
        imgLoaded() {
            this.showImg = true;
        }
    }
}

</script>

<template>

    <div v-if="Array.from(images).length" class="my-20">
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
                <img v-show="showImg" @load="imgLoaded" class="w-full aspect-video" :src="`https://image.tmdb.org/t/p/original${image.file_path}`" alt="movie image">
                <img-loader v-show="!showImg" class="w-full aspect-video" />
            </swiper-slide>
        </swiper>
    </div>
    <div class="my-20 text-white" v-else>
        No images found
    </div>

</template>
