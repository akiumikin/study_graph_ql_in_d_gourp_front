import * as React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import { App } from './components/App';
import { User } from './components/User'
import { NotFound } from './components/NotFound'

export const Routes = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/user'>User</Link></li>
      </ul>

      <hr />
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/user' component={User} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)
