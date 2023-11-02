<script>

import SearchTitle from './SearchTitle.vue';
import SearchParams from './SearchParams.vue';
import SearchType from './SearchType.vue';

export default {
    components: {
        SearchTitle,
        SearchParams,
        SearchType
    },
    emits: ['closeModal'],
    data() {
        return {
            searchType: 'searchTitle'
        }
    },
    props: {
        showModal: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    methods: {
        changeSearchType(searchType) {
            this.searchType = searchType.component;
        }
    }
}

</script>

<template>

    <Teleport to="body">
        <Transition name="fade">
            <div v-show="showModal" class="fixed top-0 left-0 w-full h-full z-50 bg-black/60 flex justify-center">
                <Transition name="zom">
                    <div v-show="showModal" class="relative bg-black w-3/4 md:w-1/2 h-3/4 p-4 border border-primary rounded-md mt-16">
                        <i @click="$emit('closeModal')" class="fa-solid fa-x hover:text-primary text-white absolute top-4 right-4 cursor-pointer"></i>
                        <h1 class="text-xl md:text-3xl text-white w-fit mx-auto capitalize font-bold py-1 px-2 border-l-4 border-l-primary">search for a movie</h1>

                        <search-type @change-type="changeSearchType" />

                        <Component @finish-search="$emit('closeModal')" :is="searchType" />

                    </div>
                </Transition>
            </div>
        </Transition>
    </Teleport>

</template>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.zom-enter-active,
.zom-leave-active {
  transition: scale 0.5s ease;
}

.zom-enter-from,
.zom-leave-to {
  scale: 0.8;
}

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
