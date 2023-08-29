import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

//axios
import axios from 'axios';

const app = createApp(App);

app.provide('$axios', axios).use(store).use(router).mount('#app');
