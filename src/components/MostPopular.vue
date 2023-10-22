<script>

import SpecialHeader from "../components/SpecialHeader.vue";
import MovieCard from "../components/MovieCard.vue";

export default {
    components: {
        SpecialHeader,
        MovieCard
    },
    data() {
        return {
            currentPage: 1
        }
    },
    methods: {
        onClickHandler(page) {
            console.log(page);
        }
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
        <vue-awesome-paginate
            :total-items="50"
            :items-per-page="5"
            :max-pages-shown="5"
            v-model="currentPage"
            :on-click="onClickHandler"
            :show-breakpoint-buttons="false"
            :hide-prev-next-when-ends="true"
        />
    </div>

</template>

<style>

.pagination-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 60px;
    width: 100%;
}

.paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
    background-color: transparent;
    border: 2px solid #F68B1E;
    color: #F68B1E;
}

@media (max-width: 350px) {
    .paginate-buttons {
        height: 30px;
        width: 30px;
    }
}

.paginate-buttons:hover {
    background-color: #181818;
}

.active-page {
    background-color: #F68B1E;
    border: 2px solid #F68B1E;
    color: white;
}

.active-page:hover {
    background-color: #F68B1E;
}

</style>