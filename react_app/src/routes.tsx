import * as React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import { App } from './components/App';
import { Page1 } from './components/Page1'
import { NotFound } from './components/NotFound'

export const Routes = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/page1'>Page1</Link></li>
      </ul>

      <hr />
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/page1' component={Page1} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)
