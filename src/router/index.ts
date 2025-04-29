import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import HonorableMentionsPage from '../views/HonorableMentionsPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    // TODO:
    // { path: '/projects', name: 'projects',  component: ProjectsPage, },
    // { path: '/contact', name: 'contact',  component: ProjectsPage, },
    { path: '/stars', name: 'stars', component: HonorableMentionsPage },
    {
      path: '/:pathMatch(.*)*',
      name: 'redirect',
      component: () => import('../views/RedirectPage.vue'),
    },
  ],
})

export default router
