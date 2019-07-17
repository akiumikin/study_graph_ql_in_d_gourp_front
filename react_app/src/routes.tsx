import * as React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import { App } from './components/App';
import { GithubPage } from './components/GithubPage'
import { NotFound } from './components/NotFound'

export const Routes = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/github_page'>GithubPage</Link></li>
      </ul>

      <hr />
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/github_page' component={GithubPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)
