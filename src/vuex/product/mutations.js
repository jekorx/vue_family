import * as types from './types'

// mutations，更改 Vuex 的 store 中的状态的唯一方法
const mutations = {
  [types.SET_PROD_NAME](state, name) {
    state.name = name
  },
  [types.SET_PROD_PRICE](state, price) {
    state.price = price
  }
}
export default mutations
