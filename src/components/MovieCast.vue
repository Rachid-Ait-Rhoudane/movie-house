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
    actors: {
      type: Array,
      required: true
    }
  }
}

</script>

<template>
  
    <section v-if="Array.from(actors).length" class="container py-10">
        <special-header>
            <template #title>
                actors
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
            <swiper-slide v-for="actor in actors" :key="actor.id">
                <movie-actor 
                :profile="actor.profile_path ?? ''"
                :name="actor.original_name"
                :character="actor.character"
                :gender="actor.gender"
                />
            </swiper-slide>
        </swiper>
    </section>

</template>
