import React from 'react';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#932F6D',
    },
    secondary: {
      main: '#65743A',
    },
  },
});

export const Theme = (props) => (
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>
);
