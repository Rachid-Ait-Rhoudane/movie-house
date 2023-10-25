<script>

export default {
    data() {
        return {
            movie: null
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

        fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?language=en-US`, options)
        .then(response => response.json())
        .then(response => {
            this.movie = response;
            console.log(this.movie);
        })
        .catch(err => console.error(err));
    }
}

</script>

<template>
    <div v-if="movie" class="relative overflow-x-hidden w-screen h-screen before:fixed before:top-0 before:left-0 before:bg-black/80 before:w-full before:h-full before:z-10">
        <img class="fixed top-0 left-0 w-full h-full object-cover" :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`" alt="movie backdrop">
        <div class="relative z-20 container mt-24">
            
            <div class="flex flex-col justify-center sm:flex-row gap-10 w-full">
                <div class="w-full sm:w-[450px]">
                    <img class="w-full aspect-[3/4]" :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" alt="poster image">
                </div>
                <ul class="flex flex-col gap-4 text-white">
                    <h1 class="text-3xl md:text-6xl">{{ movie.title }}</h1>
                    <li class="flex items-center gap-2 text-base md:text-xl border-b border-b-white py-4">
                        <i class="fa-solid fa-star text-primary"></i>
                        <span class="block font-bold text-gray-300">Rate </span> - 
                        {{ movie.vote_average }}
                    </li>
                    <li class="flex items-center gap-2 text-base md:text-xl border-b border-b-white py-4">
                        <i class="fa-solid fa-hourglass-start text-primary"></i>
                        <span class="block font-bold text-gray-300">Runtime </span> -
                        {{ movie.runtime }} min
                    </li>
                    <li class="flex items-center gap-2 text-base md:text-xl border-b border-b-white py-4">
                        <i class="fa-solid fa-dollar-sign text-primary"></i>
                        <span class="block font-bold text-gray-300">Budget </span> -
                        {{ movie.budget }}
                    </li>
                    <li class="flex items-center gap-2 text-base md:text-xl border-b border-b-white py-4">
                        <i class="fa-solid fa-chart-line text-primary"></i>
                        <span class="block font-bold text-gray-300">Popularity </span> -
                        {{ movie.popularity }}
                    </li>
                    <li class="flex items-center gap-2 text-base md:text-xl border-b border-b-white py-4">
                        <span class="block font-bold text-gray-300">Genres </span> -
                        <div class="divide-x-2 divide-primary">
                            <span class="px-2" v-for="genre in movie.genres">{{ genre.name }}</span>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    </div>  
</template>
