// react
import * as React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

// components for links
import { TopPage } from './TopPage/TopPage';
import { User } from './User/User';
import { WithoutAppBarPage } from './WithoutAppBarPage/WithoutAppBarPage';
import { NotFound } from './others/NotFound';

// components
import { MyAppBar } from '../appBar'
import { Routes } from '../routeItem'

// @material-ui
import Paper from '@material-ui/core/Paper';


export const Base = () => {
  return (
    <BrowserRouter>
      <MyAppBar />
      <hr/>
      <div>
        <Paper className='paper' style={{backgroundColor: '#ffffe0'}}>
          <Routes />
        </Paper>
      </div>
    </BrowserRouter>
  );
}
