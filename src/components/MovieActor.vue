<script>

import AvatarRender from './AvatarRender.vue';

export default {
    components: {
        AvatarRender
    },
    props: {
        profile: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        character: {
            type: String,
            required: true
        },
        gender: {
            type: Number,
            required: true
        }
    }
}

</script>

<template>
    <div class="flex flex-col items-center justify-center text-white gap-4">

        <avatar-render 
            class="w-40 aspect-square rounded-full"
            :path="`https://image.tmdb.org/t/p/original/${profile}`"
        />
        
        <div class="flex flex-col items-center justify-center gap-1">
            <span class="text-base md:text-xl">{{ name }}</span>
            <span class="text-sm md:text-base">{{ character }}</span>
        </div>
    </div>
</template>
