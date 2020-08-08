import Vue from 'vue'
import Vuex from 'vuex'
import stocks from './modules/stocks'
import portifolio from './modules/portifolio'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  stocks,
  portifolio
  }
})
