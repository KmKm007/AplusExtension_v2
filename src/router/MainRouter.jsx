import React from 'react'
import { Router, Route, browserHistory, Redirect } from 'react-router'
import EstateDataPage from '../page/EstateDataPage'

class MainRouter extends React.Component {
  render () {
    return (
      <Router history={ browserHistory }>
        <Route path="/data" component={ EstateDataPage } />
        <Redirect from="/" to="/data"  />
      </Router>
    )
  }
}

export default MainRouter
