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
        rate: {
            type: Number,
            required: true
        }
    }
}
</script>

<template>

    <div class="group duration-500 hover:-translate-y-3 relative bg-secondary w-full">

        <watchlist-button 
            :id="id"
            :poster="poster"
            :title="title"
            :rate="rate"
        />
        
        <img-render 
            :path="`https://image.tmdb.org/t/p/original${poster}`" 
            class="w-full aspect-[3/4]" 
        />
        
        <div class="p-2">
            <h1 class="text-xl capitalize font-bold text-white min-h-[55px] max-w-full line-clamp-2">{{ title }}</h1>
            <span class="block mt-2 text-white">
                <i class="fa-solid fa-star text-primary"></i>
                {{ rate }}
            </span>
        </div>
        <div class="py-2 m-2 border-t-2 border-t-white flex justify-between items-center text-white">
            <router-link :to="{name: 'movie', params: {id: id}}" class="capitalize font-bold cursor-pointer hover:underline hover:text-primary" type="button">sead more</router-link>
            <i class="fa-solid fa-right-long group-hover:animate-bounce-left-right text-primary text-xl"></i>
        </div>
    </div>

    
</template>