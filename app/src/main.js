import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import "chart.js/auto";
import './assets/style.css';

createApp(App).use(router).mount('#app');