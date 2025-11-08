import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/views/HomeView.vue";
import indexView from "../components/views/indexView.vue";
import articleDetails from "../components/article/article-details.vue";
const routes = [
  {
    path: '/',
    redirect: '/home',
    component: indexView,
    children: [
      { path: 'home', component: HomeView }
    ]
  },
  {
    path: '/article',
    component: articleDetails
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
