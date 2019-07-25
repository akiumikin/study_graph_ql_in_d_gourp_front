// react
import * as React from 'react';

// @material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';

// components
import { AppBarItem } from './routeItem';

/**
 * 画面上部のBarのcomponent
 */
export function MyAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
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
            <AppBarItem handleClose={handleClose}/>
          </Menu>
          <Typography variant="h6" color="inherit">
            MyGraphQL
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
