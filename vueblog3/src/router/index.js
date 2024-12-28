import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';
import ShowPost from '../views/posts/Show.vue';
import CreatePost from '../views/posts/Create.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/posts/create',
    name: 'CreatePost',
    component: CreatePost,
  },
  {
    path: '/posts/:id',
    name: 'ShowPost',
    component: ShowPost,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
