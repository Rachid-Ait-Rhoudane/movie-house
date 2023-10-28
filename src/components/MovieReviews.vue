<script>

import SpecialHeader from "./SpecialHeader.vue";
import MovieFeedback from './MovieFeedback.vue';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  data() {
    return {
      reviews: null,
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
      }
    }
  },
  props: {
    id: {
        type: Number,
        required: true
    }
  },
  components: {
    SpecialHeader,
    MovieFeedback,
    Swiper,
    SwiperSlide,
  },
  created() {
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjI3MTdlOTU1ZmU3M2Y1OTkxNGU4NDU3ZWRiZGU1MyIsInN1YiI6IjY1MzNiOGMwOGNmY2M3MDBjODNkNjVjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VCBH0D_Q6oZ5JcoXZyIrCFbWIpOSxRFL54ZefY6koXs'
        }
        };

        fetch(`https://api.themoviedb.org/3/movie/${this.id}/reviews?language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => this.reviews = response.results)
        .catch(err => console.error(err));
    },
}

</script>

<template>
  
  <div v-if="reviews" class="my-20">

    <special-header>
        <template #title>
            reviews
        </template>
    </special-header>
    <swiper
        class="swiper-container mt-10"
        :modules="modules"
        :space-between="10"
        :breakpoints="breakpoints"
        navigation
    >
        <swiper-slide v-for="review in reviews" :key="review.id">
            <movie-feedback 
            :avatar="review.author_details.avatar_path ?? ''"
            :username="review.author_details.username"
            :rate="review.author_details.rating"
            :content="review.content"
            :url="review.url"
            />
        </swiper-slide>
    </swiper>

  </div>

</template>
