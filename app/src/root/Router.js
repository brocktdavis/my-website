import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { Header } from 'root';
import { ROUTES } from './routes';

export const Router = () => (
  <BrowserRouter>
    <Routes>
        <Route path={'/'} element={<Header />}>
        { ROUTES.map(({ path, Element }) => (
          <Route path={path} element={<Element />} />
        ))}
        </Route>
    </Routes>
  </BrowserRouter>
);
