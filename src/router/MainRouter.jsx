import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import EstateDataPage from '../page/EstateDataPage'

const MainRouter = () => (
  <Router>
    <Switch>
      <Route path="/data" component={EstateDataPage}/>
      <Redirect from="/" to="/data"/>
    </Switch>
  </Router>
)

export default MainRouter
