// react
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

// components for links
import { TopPage } from './components/TopPage/TopPage';
import { User } from './components/User/User';
import { WithoutAppBarPage } from './components/WithoutAppBarPage/WithoutAppBarPage';
import { NotFound } from './components/others/NotFound';

/**
 * react内のルーティングの設定
 */
export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={TopPage} />
        <Route path='/user' component={User} />
        <Route path='/without_app_bar_page' component={WithoutAppBarPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
