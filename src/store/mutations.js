import * as types from './mutation-types'

export default {
  [types.SET_DARK] (state, isDark) {
    state.isDark = isDark
  }
}
