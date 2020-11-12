import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'HomeIndex',
        component: () => import(/* webpackChunkName: "HomeIndex" */ '@/components/HomeIndex.vue')
      },
      {
        path: '/member/commerce',
        name: 'MemberCommerce',
        component: () => import(/* webpackChunkName: "MemberCommerce" */ '@/views/member/Commerce.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
