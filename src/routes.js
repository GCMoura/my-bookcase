import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/landingPage/Landing'
import Login from './pages/loginPage/Login'
import Account from './pages/accountPage/Account'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Landing} exact/>
        <Route path='/login' component={Login}/>
        <Route path='/account' component={Account}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes