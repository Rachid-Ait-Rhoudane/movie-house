<script>

import SpecialHeader from "./SpecialHeader.vue";
import MovieFeedback from './MovieFeedback.vue';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  components: {
    SpecialHeader,
    MovieFeedback,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
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
    reviews: {
      type: Array,
      required: true
    }
  }
}

</script>

<template>
  
  <section v-if="Array.from(reviews).length" class="container py-10">

    <special-header>
        <template #title>
            reviews
        </template>
        <template #description>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, officiis.
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

  </section>

</template>
