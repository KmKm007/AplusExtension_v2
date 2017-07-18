import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import EstateDataPage from '@pages/EstateDataPage'
import HomePage from '@pages/HomePage'
import EstateDrawingPage from '@pages/EstateDrawing'

const MainRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/data" component={EstateDataPage}/>
      <Route exact path="/estate-drawing/:template" component={EstateDrawingPage}/>
      <Redirect from="/" to="/data"/>
    </Switch>
  </Router>
)

export default MainRouter
