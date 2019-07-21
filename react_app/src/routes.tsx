// react
import * as React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

// components for links
import { App } from './components/App';
import { User } from './components/User'
import { WithoutAppBarPage } from './components/WithoutAppBarPage'
import { NotFound } from './components/NotFound'

// @material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';

export function Routes() {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  
  return (
    <BrowserRouter>
      <div className='menu'>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <MenuIcon />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><Link to='/'>Home</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to='/user'>User</Link></MenuItem>
            </Menu>
            <Typography variant="h6" color="inherit">
              MyGraphQL
            </Typography>
          </Toolbar>
        </AppBar>
      </div>

      <hr />
      
      <div>
        <Paper className='paper' style={{backgroundColor: '#ffffe0'}}>
          <Switch>
            <Route exact path='/' component={App} />
            <Route path='/user' component={User} />
            <Route path='/without_app_bar_page' component={WithoutAppBarPage} />
            <Route component={NotFound} />
          </Switch>
        </Paper>
      </div>
    </BrowserRouter>
  );
}
