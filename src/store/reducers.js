import { combineReducers } from 'redux'

import actions from './actions'

const initialState = {
  device: 'desktop'
}

const deviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_DEVICE:
      return Object.assign({}, state, {
        device: action.payload
      })
    default:
      return state
  }
}

export default combineReducers({
  device: deviceReducer
})
