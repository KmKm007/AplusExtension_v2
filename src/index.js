import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import createLogger from 'redux-logger'
import actions from './actions/EstateData'
// import AppRouter from './router/MainRouter'

const middleWare = [ thunk, createLogger()]

console.log(actions)

const store = createStore(reducers, applyMiddleware(...middleWare))

ReactDOM.render(
  <Provider store={store}>
    <div>123</div>
  </Provider>, document.getElementById('app')
)
