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
      },
      {
        path: '/member/trade',
        name: 'MemberTrade',
        component: () => import(/* webpackChunkName: "MemberTrade" */ '@/views/member/Trade.vue')
      },
      {
        path: '/member/inner',
        name: 'MemberInner',
        component: () => import(/* webpackChunkName: "MemberInner" */ '@/views/member/Inner.vue')
      },
      {
        path: '/member/detail/:userId',
        name: 'MemberDetail',
        component: () => import(/* webpackChunkName: "MemberDetail" */ '@/views/member/Detail.vue')
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

router.beforeEach((to, from, next) => {
  if(to.path !== '/login') {
    let token = localStorage.getItem('token')
    if(token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
