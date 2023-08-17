import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import UserProfile from '../views/userProfile.vue'
import ListVegs from '../views/ListProduct.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Cart from '../views/Cart.vue'
import ChooseAddress from '../views/ChooseAddress.vue'
import Confirm from '../views/Confirm.vue'
import History from '../views/History.vue'
import ListAddress from '../views/ListAddress.vue'
import AddressDetail from '../views/AddressDetail.vue'
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
      path: '/logout',
      name: 'logout',
      component: Logout
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
      meta: {
        requiresAdminuth: true,
        requiredRoles: ['admin']
      }
    },
    {
      path: '/vegetables/detail/:itemId?',
      name: 'vegetableDetail',
      component: ProductDetail,
      props: true,
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
      path: '/address/detail/:itemId?',
      name: 'addressDetail',
      component: AddressDetail,
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
    {
      path: '/address',
      name: 'address',
      component: ListAddress,
    },
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if user is authenticated
    if (!store.getters.isAuthenticated) {
      next({
        path: '/',
        query: { redirect: to.fullPath }, // Preserve the intended route
      });
    } else {
      // Check if user has the necessary role/permissions for the route
      if (to.matched.some(record => record.meta.requiresAdmin && !store.getters.isAdmin)) {
        next({ path: '/' });
      } else {
        next();
      }
    }
  } else {
    next();
  }
});
export default router
