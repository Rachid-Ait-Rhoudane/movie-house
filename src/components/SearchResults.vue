<script>

import SearchMovieCard from './SearchMovieCard.vue';

export default {
    components: { 
        SearchMovieCard 
    },
    emits: ['finishSearch'],
    props: {
        results: {
            type: Array,
            required: true
        }
    }
}

</script>

<template>

    <div class="flex flex-col gap-4 w-full h-[calc(100%-180px)] mt-5 overflow-y-auto">
        <search-movie-card
            @finish-search="$emit('finishSearch')" 
            v-for="movie in results" 
            :key="movie.id"
            :id="movie.id"
            :poster="movie.poster_path"
            :title="movie.title"
            :rate="movie.vote_average"
            :overview="movie.overview"
        />
    </div>
    
</template>

<style scoped>

::-webkit-scrollbar {
    width: 5px;
}
 
::-webkit-scrollbar-track {
    background-color: #181818;
}

::-webkit-scrollbar-thumb {
    background: white; 
}

</style>
