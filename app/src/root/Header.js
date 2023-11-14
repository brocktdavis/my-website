import * as React from 'react';
import {
    Outlet,
    useLocation,
} from 'react-router-dom';
import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Menu } from '@mui/icons-material';

/** Tracks the router (i.e. URL) location. */
const useRouteTracking = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log('Location: ', location);
  }, [location])
};

/** Hook that returns `true` if the navigation options should be collapsed into a presented menu,
 *  rather than directly on the App Bar (e.g. for mobile phones with less toolbar space) */
const useShouldCollapseHeader = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('sm'));
};

/** Renders navigation options as a menu button that opens a presented modal-type side container. */
const NavigationSideMenu = () => {

  return (
    <IconButton
      size='large'
      edge='start'
      color='inherit'
      aria-label='menu'
      sx={{ mr: 2 }}
    >
      <Menu />
    </IconButton>
  );
};

/** Renders navigation options directly on the toolbar. */
const NavigationBar = () => {

  return (
    <>
      <Button color='inherit'>Option 1</Button>
      <Button color='inherit'>Option 2</Button>
      <Button color='inherit'>Option 3</Button>
    </>
  );
};

export const Header = () => {
  useRouteTracking();

  const shouldCollapseOptions = useShouldCollapseHeader();

  return (
    <div id="header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            { shouldCollapseOptions ? (
              <NavigationSideMenu />
            ) : (
              <NavigationBar />
            )}
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </div>
  );
};
