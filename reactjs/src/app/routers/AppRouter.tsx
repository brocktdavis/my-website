import { BrowserRouter, Route, Routes } from 'react-router';

import { HeaderLayout } from 'app/layouts';

import { HomePage } from 'pages/home';
import { AlbionPage } from 'pages/albion';
// import { MapPage } from 'pages/blog';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<HeaderLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path='albion' element={<AlbionPage />} />
    </Routes>
    {/* TODO: 404 Page */}
  </BrowserRouter>
);
