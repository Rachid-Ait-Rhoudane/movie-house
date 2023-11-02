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
    }
}

</script>

<template>

    <div class="text-white mt-4 flex flex-col md:flex-row items-center justify-between gap-2">

        <search-language />

        <search-genre />

        <search-rate />

        <button class="py-2 px-4 border border-white rounded-md text-white capitalize hover:bg-primary font-bold" type="button">search</button>

    </div>

    <search-results />

</template>
