<script>

import SearchResults from './SearchResults.vue';
import SpinLoader from './SpinLoader.vue';

export default {
    components: {
        SearchResults,
        SpinLoader
    },
    emits: ['finishSearch'],
    data() {
        return {
            title: '',
            results: []
        }
    },
    methods: {
        getResults() {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjI3MTdlOTU1ZmU3M2Y1OTkxNGU4NDU3ZWRiZGU1MyIsInN1YiI6IjY1MzNiOGMwOGNmY2M3MDBjODNkNjVjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VCBH0D_Q6oZ5JcoXZyIrCFbWIpOSxRFL54ZefY6koXs'
                }
            };

            fetch(`https://api.themoviedb.org/3/search/movie?query=${this.title}`, options)
            .then(response => response.json())
            .then(response => this.results = response.results)
            .catch(err => console.error(err));
        }
    }
}

</script>

<template>

    <div class="relative mt-4 flex items-center">
        <i class="fa-solid fa-magnifying-glass text-base md:text-xl text-white absolute"></i>
        <input v-model="title" @input="getResults" class="bg-black/60 border-b border-b-white focus:outline-none text-white h-10 w-full pl-7" type="text" placeholder="Enter a movie name">
    </div>

    <spin-loader v-if="title && !results.length" class="w-full h-[65%] mt-5" />
    
    <search-results v-else  @finish-search="$emit('finishSearch')" :results="results"  />
    
    <!-- <div class="flex items-center justify-center w-full h-[65%] mt-5">
        <span class="text-gray-300">No results</span>
    </div> -->

</template>
