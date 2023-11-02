<script>

export default {
    props: {
        results: {
            type: Array,
            required: true
        }
    }
}

</script>

<template>

    <div class="flex flex-col gap-4 w-full h-[65%] mt-5 overflow-y-auto">
        <div v-for="movie in results" :key="movie.id" class="relative flex gap-2 text-white border border-white bg-secondary">
            <img class="w-24 aspect-[3/4]" :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`" alt="movie poster">
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between flex-1 p-2 gap-2">
                <div class="flex flex-col gap-2 w-3/4">
                    <span class="text-base sm:text-xl font-bold line-clamp-2">{{ movie.title }}</span>
                    <span>
                        <i class="fa-solid fa-star text-primary"></i>
                        {{ movie.vote_average }}
                    </span>
                </div>
                <button class="text-white self-center py-2 px-4 border border-white rounded-md hover:bg-primary">
                    <i class="fa-solid fa-bookmark"></i>
                    Save
                </button>
            </div>
        </div>
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
