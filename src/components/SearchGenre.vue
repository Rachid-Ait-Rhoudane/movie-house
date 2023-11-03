<script>

export default {
    data() {
        return {
            showGenreMenu: false,
            genres: null,
            chosenGenres: []
        }
    },
    emits: ['genres'],
    methods: {
        changeVisibility() {
            this.showGenreMenu = !this.showGenreMenu;
        }
    },
    created() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjI3MTdlOTU1ZmU3M2Y1OTkxNGU4NDU3ZWRiZGU1MyIsInN1YiI6IjY1MzNiOGMwOGNmY2M3MDBjODNkNjVjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VCBH0D_Q6oZ5JcoXZyIrCFbWIpOSxRFL54ZefY6koXs'
            }
        };

        fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
        .then(response => response.json())
        .then(response => {
            this.genres = response.genres
        })
        .catch(err => console.error(err));
    }
}

</script>

<template>

    <div class="relative w-full md:w-[40%] bg-secondary">
        <span @click="changeVisibility" class="w-full border border-white rounded-sm p-2 flex items-center justify-between cursor-pointer">
            Genres
            <i :class="showGenreMenu ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-right'"></i>
        </span>
        <ul v-show="showGenreMenu" class="absolute z-40 bg-secondary w-full border border-white rounded-sm mt-1 h-36 overflow-auto divide-y-[1px] divide-white">
            <li v-for="genre in genres" :key="genre.id" class="flex items-center gap-2 p-2 hover:bg-[#222222]">
                <input @change="$emit('genres', chosenGenres)" v-model="chosenGenres" :value="genre.id"  class="w-4 h-4" :id="genre.name" type="checkbox">
                <label class="block w-full h-full cursor-pointer" :for="genre.name">{{ genre.name }}</label>
            </li>
        </ul>
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
