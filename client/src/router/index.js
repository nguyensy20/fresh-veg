import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import UserProfile from '../views/userProfile.vue'
import ListVegs from '../views/ListProduct.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Cart from '../views/Cart.vue'
import ChooseAddress from '../views/ChooseAddress.vue'
import Confirm from '../views/Confirm.vue'
import AddAddress from '../views/AddAddress.vue'
import History from '../views/History.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/userProfile',
      name: 'userProfile',
      component: UserProfile
    },
    {
      path: '/vegetables',
      name: 'vegetables',
      component: ListVegs,
    },
    {
      path: '/productDetail',
      name: 'productDetail',
      component: ProductDetail,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/chooseAddress',
      name: 'chooseAddress',
      component: ChooseAddress,
    },
    {
      path: '/addAddress',
      name: 'addAddress',
      component: AddAddress,
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: Confirm,
    },
    {
      path: '/history',
      name: 'history',
      component: History,
    },
  ]
})

export default router
