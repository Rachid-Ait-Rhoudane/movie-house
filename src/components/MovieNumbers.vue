<script>

import SpecialHeader from "./SpecialHeader.vue";

export default {
    components: {
        SpecialHeader
    },
    props: {
        runtime: {
            type: Number,
            required: true
        },
        budget: {
            type: Number,
            required: true
        },
        revenue: {
            type: Number,
            required: true
        },
        popularity: {
            type: Number,
            required: true
        }
    }
}

</script>

<template>

    <section class="container py-10">
        <special-header>
            <template #title>
                Numbers
            </template>
            <template #description>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, officiis.
            </template>
        </special-header>
        <div class="bg-secondary/80 mt-10 py-10 grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 justify-center">
            <div class="text-white flex flex-col gap-2 items-center text-base sm:text-3xl">
                <i class="fa-solid fa-hourglass-start text-6xl text-primary"></i>
                <span class="block font-bold text-gray-300">Runtime </span>
                {{ runtime }} min
            </div>
            <div class="text-white flex flex-col gap-2 items-center text-base sm:text-3xl">
                <i class="fa-solid fa-dollar-sign text-6xl text-primary"></i>
                <span class="block font-bold text-gray-300">Budget </span>
                {{ budget }}
            </div>
            <div class="text-white flex flex-col gap-2 items-center text-base sm:text-3xl">
                <i class="fa-solid fa-sack-dollar text-6xl text-primary"></i>
                <span class="block font-bold text-gray-300">Revenue </span>
                {{ revenue }}
            </div>
            <div class="text-white flex flex-col gap-2 items-center text-base sm:text-3xl">
                <i class="fa-solid fa-chart-line text-6xl text-primary"></i>
                <span class="block font-bold text-gray-300">Popularity </span>
                {{ popularity }}
            </div>
        </div>
    </section>

</template>
