import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import EstateDataPage from '@pages/EstateDataPage'
import EstateDrawingPage from '@pages/EstateDrawing'

const MainRouter = () => (
  <Router>
    <Switch>
      <Route path="/data" component={EstateDataPage}/>
      <Route exact path="/estate-drawing/:template" component={EstateDrawingPage}/>
      <Redirect from="/" to="/data"/>
    </Switch>
  </Router>
)

export default MainRouter
