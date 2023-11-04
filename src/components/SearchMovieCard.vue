<script>

import ImgRender from './ImgRender.vue';
import WatchlistButton from './WatchlistButton.vue';

export default {
    components: {
        ImgRender,
        WatchlistButton
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
        overview: {
            type: String,
            reuiqred: true
        }
    }
}

</script>

<template>
    
    <div  class="relative flex gap-2 text-white border border-white bg-secondary">

        <div class="relative">
            <watchlist-button
            :id="id"
            :poster="poster"
            :title="title"
            :rate="rate"
            />
            <img-render
                class="w-32 aspect-[3/4]"
                :path="`https://image.tmdb.org/t/p/original${poster}`"
            />
        </div>
        <div class="relative flex flex-col justify-center flex-1 p-2 gap-2">
            <div class="flex flex-col">
                <span @click="visitMoviePage" class="text-base sm:text-xl font-bold line-clamp-2 hover:underline hover:text-primary hover:cursor-pointer">{{ title }}</span>
                <span class="text-sm">
                    <i class="fa-solid fa-star text-primary"></i>
                    {{ rate }}
                </span>
            </div>
            <p class="text-sm line-clamp-3 w-full">
                {{ overview }}
            </p>
        </div>
    </div>

</template>
