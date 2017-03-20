import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
// import createLogger from 'redux-logger'
import AppRouter from './router/MainRouter'
import './styles/App.css'

const middleWare = [ thunk ]

const store = createStore(reducers, applyMiddleware(...middleWare))

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>, document.getElementById('app')
)
