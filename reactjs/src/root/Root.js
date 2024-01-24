import * as React from 'react';
import { Theme } from './Theme';
import { Router } from './Router';

export const Root = () => (
  <React.StrictMode>
    <Theme>
      <Router />
    </Theme>
  </React.StrictMode>
);
