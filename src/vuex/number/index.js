import mutations from './mutations'
import actions from './actions'

// state
const state = {
  numA: 1,
  numB: 100
}

// getters，如果需要从 store 中的 state 中派生出一些状态
const getters = {
  count: state => state.numA + state.numB
}

export default {
  state,
  getters,
  mutations,
  actions
}
