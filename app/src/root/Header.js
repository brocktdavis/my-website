import * as React from 'react';
import {
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Menu, Close } from '@mui/icons-material';
import { ROUTES } from './routes';

const NAV_OPTIONS = ROUTES.filter(route => !!route.navTitle);

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
      role={'presentation'}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ justifyContent: 'flex-end'}} onClick={toggleDrawer}>
            <Close />
          </ListItemButton>
        </ListItem>
        {NAV_OPTIONS.map(({ navTitle, path }) => (
          <ListItem key={navTitle} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} component={Link} to={path} onClick={toggleDrawer} >
              <ListItemText primary={navTitle} />
            </ListItemButton>
          </ListItem>
        ))}
        
      </List>
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
        size={'large'}
        color={'inherit'}
        aria-label={'menu'}
        onClick={toggleDrawer}
      >
        <Menu />
      </IconButton>
      <SideMenuDrawer open={open} toggleDrawer={toggleDrawer} />
    </>
  );
};

/** Renders navigation options directly on the toolbar. */
const NavigationBar = () => (
  <>
    {NAV_OPTIONS.map(({ navTitle, path }) => (
      <Button key={navTitle} color={'inherit'} size={'large'} component={Link} to={path}>
        {navTitle}
      </Button>
    ))}
    <div style={{ flexGrow: 1 }} />
  </>
);

export const Header = () => {
  useRouteTracking();

  const shouldCollapseOptions = useShouldCollapseHeader();

  return (
    <div id={'header'}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position={'static'} component={'nav'}>
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
