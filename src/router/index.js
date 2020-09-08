import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'DefaultLayout' },
    component: Home,
    children: [
      {
        path: 'page/:page',
        meta: { layout: 'DefaultLayout' },
        component: Home
      }
    ]
  },
  {
    path: '/question/:id',
    name: 'Question',
    meta: { layout: 'DefaultLayout' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "question" */ '../views/Question.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
  routes
})

export default router
