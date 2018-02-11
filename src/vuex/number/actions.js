import * as types from './types'

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

export default actions
