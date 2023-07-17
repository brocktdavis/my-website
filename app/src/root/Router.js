import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import {
  About,
  Blog,
  Home,
  Resume,
} from 'pages';

const useRouteTracking = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('Location: ', location);
  }, [location])
}

const Header = () => {
  useRouteTracking();

  return (
    <div>
      Hello, Header!
      <Outlet />
    </div>
  );
};

export const Router = () => (
  <BrowserRouter>
    <Routes>
        <Route path={'/'} element={<Header />}>
          <Route path={'home'} element={<Home />} />
          <Route path={'blog'} element={<Blog />} />
          <Route path={'about'} element={<About />} />
          <Route path={'resume'} element={<Resume />} />
        </Route>
    </Routes>
  </BrowserRouter>
);
