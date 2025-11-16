import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/views/HomeView.vue";
import indexView from "../components/views/indexView.vue";
import articleDetails from "../components/article/article-details.vue";
import BlogView from "../components/views/BlogView.vue";
import GalleryView from "../components/views/GalleryView.vue";
import DiaryView from "../components/views/DiaryView.vue";
const routes = [
  {
    path: '/',
    redirect: '/home',
    component: indexView,
    children: [
      {
        path: 'home', component: HomeView
      },
      {
        path: 'blog', component: BlogView
      },
      {
        path: 'gallery', component: GalleryView
      },
      {
        path: 'diary', component: DiaryView
      }
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
