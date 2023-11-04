<script>

export default {
    data() {
        return {
            savedMovies: null,
            saved: false
        }
    },
    props: {
        id: {
            type: Number,
            required: true
        },
        poster: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        rate: {
            type: Number,
            required: true
        }
    },
    methods: {
        saveOrRemoveMovie() {
            if(this.saved) {

                this.savedMovies = this.savedMovies.filter(movie => {
                    return movie.id !== this.id
                });
                localStorage.setItem('savedMovies', JSON.stringify(this.savedMovies)); 
                this.saved = false;

            } else {

                let movie = {
                    id: this.id,
                    poster: this.poster,
                    title: this.title,
                    rate: this.rate
                };
                this.savedMovies.push(movie);
                localStorage.setItem('savedMovies', JSON.stringify(this.savedMovies)); 
                this.saved = true;

            }
        }
    },
    created() {

        this.savedMovies = JSON.parse(localStorage.getItem('savedMovies') ?? '[]');

        this.savedMovies.forEach(movie => {
            if(movie.id === this.id) {
                this.saved = true;
            }
        });
        
    }
}

</script>

<template>

    <span @click="saveOrRemoveMovie" class="absolute top-0 left-2 flex justify-center w-12 h-6 bg-secondary/80 after:absolute after:-bottom-[48px] after:left-0 after:w-full after:border-[24px] after:border-secondary/80 after:border-b-transparent">
        <i 
            class="fa-solid relative z-50 text-xl cursor-pointer mt-3" 
            :class="saved ? 'fa-trash text-primary' : 'fa-plus text-white'"
        ></i>
    </span>

</template>
