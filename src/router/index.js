import { createRouter, createWebHistory } from 'vue-router'
import store from "@/store";
import Home from "@/components/Home.vue"
import Login from "@/components/Login.vue"
import Logout from "@/components/Logout.vue"
import Register from "@/components/Register.vue"

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/login');
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/')
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/signup',
    name: 'signup',
    component: Register,
    beforeEnter: ifNotAuthenticated,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
