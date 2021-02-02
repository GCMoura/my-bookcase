import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/landingPage/Landing'
import Home from './pages/homePage/Home'
import Bookcase from './pages/bookcasePage/Bookcase'
import Register from './pages/registerPage/Register'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Landing} exact/>
        <Route path='/bookcase/*' component={Bookcase}/>
        <Route path='/register/*' component={Register}/>
        <Route path='/*' component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes