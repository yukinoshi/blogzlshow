import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/views/HomeView.vue";
import indexView from "../components/views/indexView.vue";
const routes = [
  {
    path: '/',
    redirect: '/home',
    component: indexView,
    children: [
      { path: 'home', component: HomeView }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
