<script>

import ImgLoader from './ImgLoader.vue';

export default {
    components: {
        ImgLoader
    },
    data() {
        return {
            showImg: false
        }
    },
    props: {
        avatar: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        rate: {
            required: true
        },
        content: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    methods: {
        imageLoadOnError(e) {
            e.target.src = "/images/not-specified.png";
        },
        imgLoaded() {
            this.showImg = true;
        }
    }
}

</script>

<template>

    <div class="group flex flex-col justify-between bg-secondary/80 p-4 rounded-md min-h-[310px]">
        <div class="flex flex-col text-white gap-4 pb-2">
            <div class="flex flex-col lg:flex-row items-center gap-4">
                <img v-show="showImg" @load="imgLoaded" @error="imageLoadOnError" class="w-14 rounded-full aspect-square" :src="`https://image.tmdb.org/t/p/original${avatar}`" alt="author avatar">
                <img-loader v-show="!showImg" class="w-14 rounded-full aspect-square" />
                <div class="text-base md:text-xl text-white flex flex-col items-center lg:items-start">
                    <span>{{ username }}</span>
                    <span v-if="rate" class="flex items-center gap-1">
                        <i class="fa-solid fa-star text-primary"></i>
                        {{ rate }}
                    </span>
                </div>
            </div>
            <p class="line-clamp-3 lg:line-clamp-6">{{ content }}</p>
        </div>
        <div class="flex justify-between items-center text-white capitalize border-t border-t-white pt-2 text-base md:text-xl">
            <a target="_blank" class="hover:text-primary hover:underline" :href="url">see more</a>
            <i class="fa-solid fa-right-long group-hover:animate-bounce-left-right text-primary text-xl"></i>
        </div>
    </div>

</template>
