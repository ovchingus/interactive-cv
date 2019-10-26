import React from 'react'
import { Provider } from 'react-redux'

import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import MobileDetect from 'mobile-detect'
import store from './store'

const md = new MobileDetect(window.navigator.userAgent)
const isMobile = Boolean(md.mobile())

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
