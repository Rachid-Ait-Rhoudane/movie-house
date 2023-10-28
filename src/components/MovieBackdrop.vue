<script>

import ImgLoader from '../components/ImgLoader.vue';

export default {
    components: {
        ImgLoader
    },
    data() {
        return {
            movie: null,
            showImg: false
        }
    },
    props: {
        backdrop: {
            type: String,
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

    <img v-show="showImg" @load="imgLoaded" class="fixed top-0 left-0 w-full h-full object-cover" :src="`https://image.tmdb.org/t/p/original/${backdrop}`" alt="movie backdrop">
    <img-loader v-show="!showImg" class="fixed top-0 left-0 w-full h-full object-cover" /> 

</template>
