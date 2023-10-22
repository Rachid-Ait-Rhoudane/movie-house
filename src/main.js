import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/base.css';
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";


const app = createApp(App);

app.use(router);

app.use(VueAwesomePaginate);

app.mount('#app');
