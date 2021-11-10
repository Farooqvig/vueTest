import Vue from 'vue'
import VueRouter from 'vue-router'
import NewCard from '../views/newCard.vue'
import AllCards from '../views/displayAll.vue'
import OneCard from '../views/onecard.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'NewCard',
    component: NewCard
  },
  {
    path: '/allcards',
    name: 'AllCards',
    component: AllCards
  },
  {
    path: '/onecard',
    name: 'OneCard',
    component: OneCard

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
