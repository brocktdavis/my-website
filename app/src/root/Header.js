import React, { useEffect } from 'react';
import {
    Outlet,
    useLocation,
} from 'react-router-dom';
import { Container } from '@mui/material';

const useRouteTracking = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('Location: ', location);
  }, [location])
};

export const Header = () => {
  useRouteTracking();

  return (
    <div id="header">
      <Container
        sx={{
          width: 1,
          height: 100,
          bgcolor: 'primary.main',
          border: '1px solid transparent', // forces children inside box
        }}
        maxWidth={false}
      >
        <p>Hello, Header</p>
      </Container>
      <Outlet />
    </div>
  );
};
