import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import axios from 'axios'
axios.defaults.baseURL = '/api'
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';

export default new Vuex.Store({

  state: {
    
  },

  getters: { //这里是get方法

  },

  mutations: {
   
  },

  actions: {
   
  },

  modules: {

  }

})