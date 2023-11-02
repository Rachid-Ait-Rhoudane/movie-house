<script>

import VideoLoader from './VideoLoader.vue';

export default {
    components: {
        VideoLoader
    },
    data() {
        return {
            showVideo: false
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
        videoLoaded() {
            this.showVideo = true;
        },
        videoLoadOnError(e) {
            e.target.src = "/images/error.png";
        },
    }
}

</script>

<template>

    <iframe v-show="showVideo" @load="videoLoaded" @error="videoLoadOnError" :class="class" :src="path">
    </iframe>
    <video-loader v-show="!showVideo" :class="class" />

</template>
