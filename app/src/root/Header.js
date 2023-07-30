import React, { useEffect } from 'react';
import {
    Outlet,
    useLocation,
} from 'react-router-dom';

const useRouteTracking = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('Location: ', location);
  }, [location])
};
  
export const Header = () => {
  useRouteTracking();

  return (
    <div>
      Hello, Header!
      <Outlet />
    </div>
  );
};