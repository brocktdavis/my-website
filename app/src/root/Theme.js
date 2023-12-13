import * as React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#742556',
    },
    secondary: {
      main: '#798071',
    },
  },
});

export const Theme = (props) => (
  <ThemeProvider theme={theme}>
    <>
      <CssBaseline />
      {props.children}
    </>
  </ThemeProvider>
);
