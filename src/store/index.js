import Vue from 'vue'
import Vuex from 'vuex'

import { SET_SCROLL } from './types'

import numbers from './modules/numbers'
import products from './modules/products'

// vue安装vuex插件
Vue.use(Vuex)

// state
const state = {
  scroll: null
}

// getters，如果需要从 store 中的 state 中派生出一些状态
const getters = {
  //scroll: state => state.scroll
}

// mutations，更改 Vuex 的 store 中的状态的唯一方法
const mutations = {
  [SET_SCROLL] (state, scroll) {
    state.scroll = scroll
  }
}

/*
  Action 类似于 mutation，不同在于：
    Action 提交的是 mutation，而不是直接变更状态。
    Action 可以包含任意异步操作。
*/
const actions = {
  [SET_SCROLL] ({commit}, scroll) {
    commit(SET_SCROLL, scroll)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    number: {
      namespaced: true,
      ...numbers
    },
    product: {
      namespaced: true,
      ...products
    }
  }
})
