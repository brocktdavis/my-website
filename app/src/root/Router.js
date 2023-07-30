import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { Header } from 'root';
import {
  About,
  Blog,
  Home,
  Resume,
} from 'pages';

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
