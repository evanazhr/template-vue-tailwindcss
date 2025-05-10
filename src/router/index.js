import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import NoPageView from '@/views/NoPageView.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', component: HomeView },
      { path: 'about', component: AboutView },
      { path: '*', component: NoPageView },
    ],
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
