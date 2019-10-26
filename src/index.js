import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import MobileDetect from 'mobile-detect'

import App from './App'
import './index.css'
import * as serviceWorker from './serviceWorker'
import store, { actions as storeActions } from './store'
// import i18n (needs to be bundled ;))
import './i18n'

const md = new MobileDetect(window.navigator.userAgent)
const isMobile = Boolean(md.mobile())

store.dispatch(storeActions.setDevice(isMobile ? 'mobile' : 'desktop'))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
