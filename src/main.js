import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/base.css';
import './assets/styles.css';
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";
import 'swiper/css';
import 'swiper/css/navigation';

const app = createApp(App);

app.use(router);

app.use(VueAwesomePaginate);

app.mount('#app');
