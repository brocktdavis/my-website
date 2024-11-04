import * as React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#421E34',
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
      <link
        rel='stylesheet'
        href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
        integrity='sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY='
        crossOrigin=''
      />
      <script
        src='https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
        integrity='sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo='
        crossOrigin=''
      />
      {props.children}
    </>
  </ThemeProvider>
);
