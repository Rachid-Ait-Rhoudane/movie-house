<script>

import ImgRender from './ImgRender.vue';
import WatchlistButton from './WatchlistButton.vue';

export default {
    components: {
        ImgRender,
        WatchlistButton
    },
    props: {
        id: {
            type: Number,
            required: true
        },
        poster: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        overview: {
            type: String,
            required: true
        },
        genres: {
            type: Array,
            required: true
        },
        rate: {
            type: Number,
            required: true
        },
        backdrop: {
            type: String,
            required: true
        }
    }
}

</script>

<template>

        <section class="relative w-full h-full py-28 flex items-center before:absolute before:top-0 before:left-0 before:bg-black/80 before:w-full before:h-full before:z-10">

            <img-render 
                :path="`https://image.tmdb.org/t/p/original/${backdrop}`" 
                class="absolute top-0 left-0 w-full h-full object-cover"    
            />

            <div class="relative z-20 container flex items-center flex-col sm:flex-row gap-4">
                <div class="relative">
                    <watchlist-button 
                        :id="id"
                        :poster="poster"
                        :title="title"
                        :rate="rate"
                    />
                    <img-render 
                        :path="`https://image.tmdb.org/t/p/original/${poster}`" 
                        class="w-80 aspect-[3/4]" 
                    />
                </div>
                
                <div class="flex flex-col gap-5 text-white flex-1">
                    <h1 class="text-3xl md:text-6xl font-bold ">{{ title }}</h1>
                    <div class="flex items-center gap-2 ">
                        <span class="text-sm py-1 px-2 border border-white rounded-md" v-for="genre in genres" :key="genre.id">{{ genre.name }}</span>
                    </div>
                    <span class="flex items-center gap-2 text-base md:text-xl">
                        <i class="fa-solid fa-star text-primary"></i>
                        {{ rate }}
                    </span>
                    <p class="text-base md:text-xl">{{ overview }}</p>
                </div>
            </div>

        </section>

</template>