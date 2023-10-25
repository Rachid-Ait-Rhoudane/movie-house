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
    methods: {
        imgLoaded() {
            this.showImg = true;
        }
    },
    props: {
        poster: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        rate: {
            type: Number,
            required: true
        }
    }
}
</script>

<template>

    <div class="group duration-500 hover:-translate-y-3 relative bg-secondary w-full">
        <span class="absolute z-20 top-0 left-2 after:absolute after:top-0 after:left-0 after:block after:border-x-[24px] after:border-t-[60px] after:border-b-[24px] after:border-secondary/60 after:border-b-transparent">
            <i class="fa-solid fa-plus text-xl text-white absolute z-30 left-4 top-4 cursor-pointer"></i>
        </span>
        <img v-show="showImg" @load="imgLoaded" class="w-full aspect-[3/4]" :src="poster" alt="poster image">
        <img-loader v-show="!showImg" />
        <div class="p-2">
            <h1 class="text-xl capitalize font-bold text-white min-h-[55px] max-w-full line-clamp-2">{{ title }}</h1>
            <span class="block mt-2 text-white">
                <i class="fa-solid fa-star text-primary"></i>
                {{ rate }}
            </span>
        </div>
        <div class="py-2 m-2 border-t-2 border-t-white flex justify-between items-center text-white">
            <button class="capitalize font-bold cursor-pointer" type="button">read more</button>
            <i class="fa-solid fa-right-long group-hover:animate-bounce-left-right text-primary text-xl"></i>
        </div>
    </div>

    
</template>