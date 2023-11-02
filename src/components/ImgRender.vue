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
        class: {
            type: String
        },
        path: {
            type: String,
            required: true
        }
    },
    methods: {
        imgLoaded() {
            this.showImg = true;
        },
        imageLoadOnError(e) {
            e.target.src = "/images/poster-error.png";
        },
    }
}

</script>

<template>
    <img v-show="showImg" @load="imgLoaded" @error="imageLoadOnError" :class="class" :src="path" alt="image">
    <img-loader :class="class" v-show="!showImg" />
</template>
