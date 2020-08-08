import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import stocks from '../components/stocks/stocks.vue'
import portifolio from '../components/portfolio/portifolio.vue'

Vue.use(VueRouter)

const routes = [
  {
    
    path: '/',
    component: Home
  },
  {
    path: '/stocks',
    component: stocks
  },
  {
    path: '/portifolio',
    component: portifolio
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
