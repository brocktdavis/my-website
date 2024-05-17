import * as React from 'react';
import { Button } from '@mui/material';
import { Blog } from 'pages';

export const Home = (props) => {
  return <Blog {...props} />;

  return (
    <div>
      <p>Home</p>
      <Button variant='contained'>Hello, World</Button>
    </div>
  );
};
