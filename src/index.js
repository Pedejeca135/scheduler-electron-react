import React from 'react';
import ReactDOM from 'react-dom';
import MainDrawer  from './components/mainDrawer';
import './css/index.css';
import './css/custom.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00695c',
    },
    secondary: {
      main: '#e65100',
    },
  },
  typography: {
    useNextVariants: true,
  }
});

function Site() {
  return (
    <MuiThemeProvider theme={theme}>
       <MainDrawer />
    </MuiThemeProvider>
  );
}
  
  // ========================================
 
  ReactDOM.render(
    <Site />,
    document.getElementById('root')
  );