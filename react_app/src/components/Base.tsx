// react
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom'

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
