<script>

import ImgRender from "./ImgRender.vue";
import SpecialHeader from "./SpecialHeader.vue";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
    components: {
        SpecialHeader,
        Swiper,
        SwiperSlide,
        ImgRender
    },
    data() {
        return {
            modules: [Navigation],
        }
    },
    props: {
        images: {
            type: Array,
            required: true
        }
    }
}

</script>

<template>

    <section v-if="Array.from(images).length" class="container py-10">
        <special-header>
            <template #title>
                Images
            </template>
            <template #description>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, officiis.
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

                <img-render 
                    :path="`https://image.tmdb.org/t/p/original${image.file_path}`"
                    class="w-full aspect-video" 
                />
                
            </swiper-slide>
        </swiper>
    </section>
    
</template>
