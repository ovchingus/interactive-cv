import { combineReducers } from 'redux'

import actions from './actions'

const deviceReducer = (state = {}, action) => {
  switch (action.type) {
    case (actions.setDevice):
      return Object.assign({}, state, {
        device: action.device
      })
    default:
      return state
  }
}

export default combineReducers({
  device: deviceReducer
})
