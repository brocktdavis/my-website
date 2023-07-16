import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello, Router!</div>,
  },
]);

export const Router = () => (
  <RouterProvider router={router} />
);