<script>

import SpecialHeader from "./SpecialHeader.vue";
import MovieActor from './MovieActor.vue';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  components: {
    SpecialHeader,
    MovieActor,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      actors: null,
      modules: [Navigation],
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        530: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        }
      }
    }
  },
  props: {
    id: {
      type: Number,
      required: true
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

        fetch(`https://api.themoviedb.org/3/movie/${this.id}/credits?language=en-US`, options)
        .then(response => response.json())
        .then(response => this.actors = response.cast.filter((cast) => cast.known_for_department==="Acting"))
        .catch(err => console.error(err));
    },
}

</script>

<template>
  
    <div v-if="actors" class="my-20">
        <special-header>
            <template #title>
                actors
            </template>
        </special-header>
        <swiper
            class="swiper-container mt-10"
            :modules="modules"
            :space-between="10"
            :breakpoints="breakpoints"
            navigation
        >
            <swiper-slide v-for="actor in actors" :key="actor.id">
                <movie-actor 
                :profile="actor.profile_path ?? ''"
                :name="actor.original_name"
                :character="actor.character"
                :gender="actor.gender"
                />
            </swiper-slide>
        </swiper>
    </div>

</template>
