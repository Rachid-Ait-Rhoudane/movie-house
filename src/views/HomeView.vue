<script>

import LandingSection from "../components/LandingSection.vue";
import MostPopular from "../components/MostPopular.vue";
import TopRated from "../components/TopRated.vue";

export default {
    components: {
        LandingSection,
        MostPopular,
        TopRated
    }
}

</script>

<template>

    <landing-section />

    <most-popular />

    <top-rated />
    
</template>
