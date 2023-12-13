import * as React from 'react';
import {
    Outlet,
    useLocation,
} from 'react-router-dom';
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { Menu, Close } from '@mui/icons-material';

/** Direction from which the navigation drawers slides. */
const MENU_POSITION = 'right';

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

/** Component that is displayed within the side menu drawer on mobile-sized devices. */
const SideMenuDrawer = ({ open, toggleDrawer }) => (
  <Drawer
    anchor={MENU_POSITION}
    open={open}
    onClose={toggleDrawer}
  >
    <Box
      sx={{ width: '100vw' }}
      role='presentation'
    >
      <Toolbar>
        <div style={{ flexGrow: 1}} />
        <IconButton size='large' color='inherit' aria-label='close' onClick={toggleDrawer}>
          <Close />
        </IconButton>
      </Toolbar>
      {/* TODO: follow https://mui.com/material-ui/react-drawer/ to make nice looking drawer */}
    </Box>
  </Drawer>
);

/** Renders navigation options as a menu button that opens a presented modal-type side container. */
const NavigationSideMenu = () => {
  const [ open, setOpen ] = React.useState(false);
  
  const toggleDrawer = event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(!open);
  };

  return (
    <>
      <div style={{ flexGrow: 1 }} />
      <IconButton
        size='large'
        color='inherit'
        aria-label='menu'
        onClick={toggleDrawer}
      >
        <Menu />
      </IconButton>
      <SideMenuDrawer open={open} toggleDrawer={toggleDrawer} />
    </>
  );
};

/** Renders navigation options directly on the toolbar. */
const NavigationBar = () => {

  return (
    <>
      <Button color='inherit'>Option 1</Button>
      <Button color='inherit'>Option 2</Button>
      <Button color='inherit'>Option 3</Button>
      <div style={{ flexGrow: 1 }} />
      <Button color='inherit'>Login</Button>
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
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </div>
  );
};
