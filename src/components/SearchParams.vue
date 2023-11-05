<script>

import SearchLanguage from './SearchLanguage.vue';
import SearchGenre from './SearchGenre.vue';
import SearchRate from './SearchRate.vue';
import SearchResults from './SearchResults.vue';
import SpinLoader from './SpinLoader.vue';

export default {
    components: {
        SearchLanguage,
        SearchGenre,
        SearchRate,
        SearchResults,
        SpinLoader
    },
    data() {
        return {
            loading: false,
            results: null,
            chosenLanguage: 'en-US',
            chosenGenres: [],
            chosenRate: 8
        }
    },
    emits: ['finishSearch'],
    methods: {
        setChosenLanguage(language) {
            this.chosenLanguage = language.value;
        },
        setChosenGenres(genres) {
            this.chosenGenres = genres;
        },
        setChosenRate(rate) {
            this.chosenRate = rate;
        },
        getResults() {

            this.loading = true;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjI3MTdlOTU1ZmU3M2Y1OTkxNGU4NDU3ZWRiZGU1MyIsInN1YiI6IjY1MzNiOGMwOGNmY2M3MDBjODNkNjVjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VCBH0D_Q6oZ5JcoXZyIrCFbWIpOSxRFL54ZefY6koXs'
                }
            };

            fetch(`https://api.themoviedb.org/3/discover/movie?language=${this.chosenLanguage}&vote_average.gte=${this.chosenRate}&with_genres=${this.chosenGenres.join(',')}`, options)
            .then(response => response.json())
            .then(response => {
                this.results = response.results; 
                this.loading = false;
            })
            .catch(err => console.error(err));
        }
    }
}

</script>

<template>

    <div class="text-white mt-4 flex flex-col md:flex-row items-center justify-between gap-2">

        <search-language @language="setChosenLanguage" />

        <search-genre @genres="setChosenGenres" />

        <search-rate @rate="setChosenRate" />

        <button @click="getResults" class="py-2 px-4 border border-white rounded-md text-white capitalize hover:bg-primary font-bold" type="button">search</button>

    </div>

    <spin-loader v-if="loading" class="w-full h-[65%] mt-5" />
    
    <search-results class="h-[calc(100%-320px)] md:h-[calc(100%-180px)]" v-if="!loading && Array.isArray(results) && results.length" @finish-search="$emit('finishSearch')" :results="results"  />

    <div v-if="!loading && Array.isArray(results) && !results.length" class="flex items-center justify-center w-full h-[65%] mt-5">
        <span class="text-gray-300">No results</span>
    </div>

</template>
