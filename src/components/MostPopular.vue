<script>

import SpecialHeader from "../components/SpecialHeader.vue";
import MovieCard from "../components/MovieCard.vue";

export default {
    components: {
        SpecialHeader,
        MovieCard
    }
}

</script>

<template>

    <div class="py-16 mt-16">
        <special-header>Most Popular</special-header>
        <div class="container mt-24 grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            <movie-card />
            <movie-card />
            <movie-card />
            <movie-card />
            <movie-card />
            <movie-card />
            <movie-card />
        </div>
    </div>
    
</template>