import * as types from './mutation-types'

export default {
  [types.TOGGLE_DARK] (state) {
    state.isDark = !state.isDark
  }
}
