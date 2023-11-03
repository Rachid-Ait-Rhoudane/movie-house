<script>

export default {
    data() {
        return {
            showLanguageMenu: false,
            languages: [
                {name:'English', value: 'en-US'},
                {name:'French', value: 'fr-FR'},
                {name:'Spanich', value: 'es-ES'},
                {name:'Korean', value: 'ko-KR'},
                {name:'Arabic', value: 'ar-SA'},
                {name:'Hindi', value: 'hi-IN'}
            ],
            chosenLanguage: {
                name: 'English',
                value: 'en-US'
            }
        }
    },
    emits: ['language'],
    methods: {
        changeVisibility() {
            this.showLanguageMenu = !this.showLanguageMenu;
        }
    }
}

</script>

<template>

    <div class="relative w-full md:w-[30%] bg-secondary">
        <span @click="changeVisibility" class="w-full border border-white rounded-sm p-2 flex items-center justify-between cursor-pointer">
            {{ chosenLanguage.name }}
            <i :class="showLanguageMenu ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-right'"></i>
        </span>
        <ul v-show="showLanguageMenu" class="absolute z-50 bg-secondary mr-2 w-full border border-white rounded-sm mt-1 h-36 overflow-auto divide-y-[1px] divide-white">
            <li v-for="language in languages" :key="language.name" class="flex items-center gap-2 p-2 hover:bg-[#222222]">
                <input @change="$emit('language', language)" v-model="chosenLanguage" :value="language" class="w-4 h-4 cursor-pointer" :id="language.name" type="radio">
                <label class="block w-full h-full cursor-pointer" :for="language.name">{{ language.name }}</label>
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
