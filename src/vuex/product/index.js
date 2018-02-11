import mutations from './mutations'
import actions from './actions'

// state
const state = {
  name: 'vuex',
  price: 'store'
}

// getters
const getters = {
  info: state => state.name + ' --> ' + state.price
}

export default {
  state,
  getters,
  mutations,
  actions
}
