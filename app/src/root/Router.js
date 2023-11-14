import * as React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { Header } from './Header';
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
