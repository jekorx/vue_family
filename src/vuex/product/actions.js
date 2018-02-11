import * as types from './types'

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

export default actions
