import axios from 'axios'

const state = {
  custom: [],
  customDetail: {}
}

const getters = {
  // 根据id筛选数据（详细页）
  getCustomDetail: (state) => (cid) => {
    return state.custom.find(function(x){
      return x.ID == cid
    }) 
  }
}

const mutations = {
  getCustom (state, res) {
    state.custom = res
  }
}

const actions = {
  // 获取数据
  getCustom ({ commit }) {
    axios.get('http://localhost:4714/api/CustomType').then(res => {
      // 调用mutations（计算属性）
      commit("getCustom", JSON.parse(res.data))
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}