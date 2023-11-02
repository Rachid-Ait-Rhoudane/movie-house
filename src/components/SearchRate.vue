<script>

export default {
    data() {
        return {
            showRateMenu: false,
            rates: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            chosenRate: 8
        }
    },
    methods: {
        changeVisibility() {
            this.showRateMenu = !this.showRateMenu;
        }
    }
}

</script>

<template>
    
    <div class="relative w-full md:w-[30%] bg-secondary">
        <span @click="changeVisibility" class="w-full border border-white rounded-sm p-2 flex items-center justify-between cursor-pointer">
            <span class="flex items-center gap-2">
                <i class="fa-solid fa-star text-primary"></i>
                {{ chosenRate }}
            </span>
            <i :class="showRateMenu ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-right'"></i>
        </span>
        <ul v-show="showRateMenu" class="absolute z-30 bg-secondary w-full border border-white rounded-sm mt-1 h-36 overflow-auto divide-y-[1px] divide-white">
            <li v-for="rate in rates" :key="rate" class="flex items-center gap-2 p-2 hover:bg-[#222222]">
                <input v-model="chosenRate" :value="rate" class="w-4 h-4" :id="`rate-${rate}`" type="radio">
                <label class="flex items-center gap-2 w-full h-full cursor-pointer" :for="`rate-${rate}`">
                    <i class="fa-solid fa-star text-primary"></i>
                    {{ rate }}
                </label>
            </li>
        </ul>
    </div>

</template>

<style scoped>

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
