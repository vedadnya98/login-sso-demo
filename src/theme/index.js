import { createMuiTheme } from '@material-ui/core';

import palette from './palette';
import typography from './typography';
// import overrides from './overrides/index';
// import transitions from './transitions'
// import breakpoints from './breakpoints'
// import mixins from './mixins'
// import zIndex from './zIndex'


const theme = createMuiTheme({
  spacing : 8,
  palette,
  typography,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        'font-family': 'Nunito Sans',
      },
    },
  },
  // transitions,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    }
  }
  // mixins,
  // zIndex,
});

export default theme;