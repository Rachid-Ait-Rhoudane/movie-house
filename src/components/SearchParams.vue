<script>

import SearchLanguage from './SearchLanguage.vue';
import SearchGenre from './SearchGenre.vue';
import SearchRate from './SearchRate.vue';
import SearchResults from './SearchResults.vue';

export default {
    components: {
        SearchLanguage,
        SearchGenre,
        SearchRate,
        SearchResults
    },
    data() {
        return {
            results: [],
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

            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjI3MTdlOTU1ZmU3M2Y1OTkxNGU4NDU3ZWRiZGU1MyIsInN1YiI6IjY1MzNiOGMwOGNmY2M3MDBjODNkNjVjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VCBH0D_Q6oZ5JcoXZyIrCFbWIpOSxRFL54ZefY6koXs'
                }
            };

            fetch(`https://api.themoviedb.org/3/discover/movie?language=${this.chosenLanguage}&vote_average.gte=${this.chosenRate}&with_genres=${this.chosenGenres.join(',')}`, options)
            .then(response => response.json())
            .then(response => this.results = response.results)
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

    <search-results @finish-search="$emit('finishSearch')" :results="results" />

</template>
