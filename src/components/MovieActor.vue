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
        profile: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        character: {
            type: String,
            required: true
        },
        gender: {
            type: Number,
            required: true
        }
    },
    methods: {
        imageLoadOnError(e) {
            if(this.gender == 2) {
                e.target.src = "/images/man.png";
            } else if (this.gender == 0) {
                e.target.src = "/images/not-specified.png";
            } else {
                e.target.src = "/images/woman.png";
            }
        },
        imgLoaded() {
            this.showImg = true;
        }
    }
}

</script>

<template>
    <div class="flex flex-col items-center justify-center text-white gap-4">
        <img v-show="showImg" @load="imgLoaded" @error="imageLoadOnError" class="w-40 aspect-square rounded-full" :src="`https://image.tmdb.org/t/p/original/${profile}`" alt="cast profile">
        <img-loader v-show="!showImg" class="w-40 aspect-square rounded-full" />
        <div class="flex flex-col items-center justify-center gap-1">
            <span class="text-base md:text-xl">{{ name }}</span>
            <span class="text-sm md:text-base">{{ character }}</span>
        </div>
    </div>
</template>
