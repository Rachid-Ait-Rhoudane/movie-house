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
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.    eyJhdWQiOiI1NjI3MTdlOTU1ZmU3M2Y1OTkxNGU4NDU3ZWRiZGU1MyIsInN1YiI6IjY1MzNiOGMwOGNmY2M3MDBjODNkNjVjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VCBH0D_Q6oZ5JcoXZyIrCFbWIpOSxRFL54ZefY6koXs'
        }
        };

        fetch(`https://api.themoviedb.org/3/movie/${this.route.params.id}?language=en-US`, options)
        .then(response => response.json())
        .then(response => this.movie = response)
        .catch(err => console.error(err));
    }
}

</script>

<template>
    <div>

    </div>  
</template>
