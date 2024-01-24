import {
  About,
  Blog,
  Home,
  Resume,
} from 'pages';

export const ROUTES = [
  { path: '', Element: Home, },
  { path: 'home', Element: Home, navTitle: 'HOME', },
  { path: 'blog', Element: Blog, navTitle: 'BLOG', },
  { path: 'about', Element: About, navTitle: 'ABOUT', },
  { path: 'resume', Element: Resume, },
];
