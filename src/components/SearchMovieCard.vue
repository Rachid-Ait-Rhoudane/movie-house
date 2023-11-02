<script>

import ImgRender from './ImgRender.vue';

export default {
    components: {
        ImgRender
    },
    emits: ['finishSearch'],
    methods: {
        visitMoviePage() {
            this.$router.push({
                name: 'movie',
                params: {
                    id: this.id
                }
            })
            this.$emit('finishSearch');
        }
    },
    props: {
        id: {
            type: Number,
            reuiqred: true
        },
        poster: {
            type: String,
            reuiqred: true
        },
        title: {
            type: String,
            reuiqred: true
        },
        rate: {
            type: Number,
            reuiqred: true
        },
    }
}

</script>

<template>
    
    <div  class="relative flex gap-2 text-white border border-white bg-secondary">
        <img-render
            class="w-24 aspect-[3/4]"
            :path="`https://image.tmdb.org/t/p/original${poster}`"
        />
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between flex-1 p-2 gap-2">
            <div class="flex flex-col gap-2 w-3/4">
                <span @click="visitMoviePage" class="text-base sm:text-xl font-bold line-clamp-2 hover:underline hover:text-primary hover:cursor-pointer">{{ title }}</span>
                <span>
                    <i class="fa-solid fa-star text-primary"></i>
                    {{ rate }}
                </span>
            </div>
            <button class="text-white self-center py-2 px-4 border border-white rounded-md hover:bg-primary">
                <i class="fa-solid fa-bookmark"></i>
                Save
            </button>
        </div>
    </div>

</template>
