<script>

export default {
    emits: ['changeType'],
    data() {
        return {
            searchTypes: [
                {
                    type: 'Title',
                    component: 'SearchTitle'
                },
                {
                    type: 'Parameters',
                    component: 'SearchParams'
                }
            ],
            showRateMenu: false,
            chosenType: 'Title'
        }
    },
    methods: {
        changeSearchType(searchType) {
            this.chosenType = searchType.type;
            this.showRateMenu = false;
            this.$emit('changeType', searchType);
        },
        changeVisibility() {
            this.showRateMenu = !this.showRateMenu;
        }
    }
}

</script>

<template>

    <div class="relative w-full md:w-[30%] mt-4 text-white mx-auto">
        <span @click="changeVisibility" class="w-full bg-secondary border border-white rounded-sm p-2 flex items-center justify-between cursor-pointer">
            <span class="flex items-center gap-2">
                {{ chosenType }}
            </span>
            <i :class="showRateMenu ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-right'"></i>
        </span>
        <ul v-show="showRateMenu" class="absolute z-[99] w-full bg-secondary border border-white rounded-sm mt-1 h-fit overflow-auto divide-y-[1px] divide-white">
            <li v-for="searchType in searchTypes" :key="searchType.type" @click="changeSearchType(searchType)" :class="chosenType==searchType.type?'bg-[#222222]':'bg-transparent'" class="flex items-center gap-2 p-2 hover:bg-[#222222] cursor-pointer">
                {{ searchType.type }}
            </li>
        </ul>
    </div>

</template>
