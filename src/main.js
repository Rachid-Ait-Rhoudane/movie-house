import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";
import 'swiper/css';
import 'swiper/css/navigation';
import './assets/base.css';
import './assets/styles.css';

const app = createApp(App);

app.use(router);

app.use(VueAwesomePaginate);

app.mount('#app');
