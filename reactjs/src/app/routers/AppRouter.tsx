import { BrowserRouter, Route, Routes } from 'react-router';

import { HeaderLayout } from 'app/layouts';

import { AboutPage } from 'pages/about';
import { AlbionPage } from 'pages/albion';
import { BlogPage } from 'pages/blog';
import { HomePage } from 'pages/home';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<HeaderLayout />}>
        <Route index element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='blog' element={<BlogPage />} />
      </Route>
      <Route path='albion' element={<AlbionPage />} />
    </Routes>
    {/* TODO: 404 Page */}
  </BrowserRouter>
);
