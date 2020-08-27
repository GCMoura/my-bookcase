import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/landingPage/Landing'
import Login from './pages/loginPage/Login'
import Account from './pages/accountPage/Account'
import Bookcase from './pages/bookcasePage/Bookcase'
import Register from './pages/registerPage/Register'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Landing} exact/>
        <Route path='/login' component={Login}/>
        <Route path='/account' component={Account}/>
        <Route path='/bookcase/*' component={Bookcase}/>
        <Route path='/register/*' component={Register}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes