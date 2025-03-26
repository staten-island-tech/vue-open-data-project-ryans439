<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CardsView from '../views/CardsView.vue'
=======
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
>>>>>>> parent of 2a91728 (hrtehj65j56j)
=======
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
>>>>>>> parent of 2a91728 (hrtehj65j56j)
=======
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
>>>>>>> parent of 2a91728 (hrtehj65j56j)

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;