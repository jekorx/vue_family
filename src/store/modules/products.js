import * as types from '@store/types'

// state
const state = {
  name: 'vuex',
  price: 'store'
}

// getters
const getters = {
  info: state => state.name + ' --> ' + state.price
}

// mutations，更改 Vuex 的 store 中的状态的唯一方法
const mutations = {
  [types.SET_PROD_NAME] (state, name) {
    state.name = name
  },
  [types.SET_PROD_PRICE] (state, price) {
    state.price = price
  }
}

/*
  Action 类似于 mutation，不同在于：
    Action 提交的是 mutation，而不是直接变更状态。
    Action 可以包含任意异步操作。
*/
const actions = {
  [types.COMMIT_PRODUCT]({ commit }, { name, price }) {
    commit(types.SET_PROD_NAME, name)
    commit(types.SET_PROD_PRICE, price)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
