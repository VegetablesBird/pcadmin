import Vue from 'vue'
import Vuex from 'vuex'

import custom from '../store/modules/custom'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    custom
  }
})
