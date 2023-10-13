import {
  About,
  Blog,
  Home,
  Resume,
} from 'pages';

export const ROUTES = [
  { path: '', Element: Home, },
  { path: 'home', Element: Home, },
  { path: 'blog', Element: Blog, },
  { path: 'about', Element: About, },
  { path: 'resume', Element: Resume, },
];
