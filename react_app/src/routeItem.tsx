// react
import * as React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

// @material-ui
import MenuItem from '@material-ui/core/MenuItem';

// components for links
import { TopPage } from './components/TopPage/TopPage';
import { User } from './components/User/User';
import { WithoutAppBarPage } from './components/WithoutAppBarPage/WithoutAppBarPage';
import { NotFound } from './components/others/NotFound';

/**
 * サービスの上部のBarに含まれるリンクを設定
 * @param handleClose リンクのウィンドウを閉じる関数
 */
export const AppBarItem = (handleClose: any) => {
  return (
    <>
      <MenuItem onClick={handleClose}><Link to='/'>TopPage</Link></MenuItem>
      <MenuItem onClick={handleClose}><Link to='/user'>User</Link></MenuItem>
      <MenuItem onClick={handleClose}><Link to='/without_app_bar_page'>WithoutAppBarPage</Link></MenuItem>
    </>
  );
}

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
