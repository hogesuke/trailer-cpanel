import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as types from './mutation-types'

Vue.use(Vuex)

const state = {
  isDark: false,
  trailers: []
}

const mutations = {
  [types.SET_DARK] (state, isDark) {
    state.isDark = isDark
  },
  [types.SET_TRAILERS] (state, trailers) {
    state.trailers = trailers
  }
}

const actions = {
  fetchTrailers ({ commit }) {
    // TODO: エラーハンドリング
    return axios.get('http://localhost:7777/movies/')
      .then((res) => {
        commit(types.SET_TRAILERS, res.data)
      })
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
