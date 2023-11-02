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
            if(this.gender == 2) {
                e.target.src = "/images/man.png";
            } else if (this.gender == 0) {
                e.target.src = "/images/not-specified.png";
            } else {
                e.target.src = "/images/woman.png";
            }
        },
    }
}

</script>

<template>
    <img v-show="showImg" @load="imgLoaded" @error="imageLoadOnError" :class="class" :src="path" alt="image">
    <img-loader :class="class" v-show="!showImg" />
</template>
