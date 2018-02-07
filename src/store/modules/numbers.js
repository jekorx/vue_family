import * as types from '@store/types'

// state
const state = {
  numA: 1,
  numB: 100
}

// getters，如果需要从 store 中的 state 中派生出一些状态
const getters = {
  count: state => state.numA + state.numB
}

// mutations，更改 Vuex 的 store 中的状态的唯一方法
const mutations = {
  [types.INCREMENT_NUM_A] (state) {
    state.numA++
  },
  [types.INCREMENT_NUM_B] (state) {
    state.numB++
  },
  [types.DECREMENT_NUM_A] (state) {
    state.numA--
  },
  [types.DECREMENT_NUM_B] (state) {
    state.numB--
  }
}

/*
  Action 类似于 mutation，不同在于：
    Action 提交的是 mutation，而不是直接变更状态。
    Action 可以包含任意异步操作。
*/
const actions = {
  [types.INCREMENT_NUM_A]({ commit }) {
    commit(types.INCREMENT_NUM_A)
  },
  [types.INCREMENT_NUM_B]({ commit }) {
    commit(types.INCREMENT_NUM_B)
  },
  [types.DECREMENT_NUM_A]({ commit }) {
    commit(types.DECREMENT_NUM_A)
  },
  [types.DECREMENT_NUM_B]({ commit }) {
    commit(types.DECREMENT_NUM_B)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
