import { createStore } from 'redux'
import rootReducer from './reducers'

export { default as actions } from './actions'
export { default as reducers } from './reducers'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
