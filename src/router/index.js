import { createRouter, createWebHistory } from 'vue-router'
import store from "@/store";
import Home from "@/components/Home.vue"
import Login from "@/components/Login.vue"
import Logout from "@/components/Logout.vue"
import Register from "@/components/Register.vue"
import Cart from "@/components/Cart.vue"
import Products from "@/components/Products.vue"
import Order from "@/components/Order.vue"

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
    path: '/signup',
    name: 'signup',
    component: Register,
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: '/products',
    name: 'products',
    component: Products,
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart, Products,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/cart/${product.id}',
    name: 'cart/${product.id}',
    component: Products, Cart,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout,
    beforeEnter: ifAuthenticated
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
