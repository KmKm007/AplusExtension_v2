import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import AppRouter from './router/MainRouter'
import store from '@store'
import './styles/App.css'

injectTapEventPlugin()

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>, document.getElementById('app')
)
