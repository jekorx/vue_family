import * as types from './types'

// mutations，更改 Vuex 的 store 中的状态的唯一方法
const mutations = {
  [types.INCREMENT_NUM_A](state) {
    state.numA++
  },
  [types.INCREMENT_NUM_B](state) {
    state.numB++
  },
  [types.DECREMENT_NUM_A](state) {
    state.numA--
  },
  [types.DECREMENT_NUM_B](state) {
    state.numB--
  }
}

export default mutations
