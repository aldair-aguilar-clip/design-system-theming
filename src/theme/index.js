import { createTheme } from '@mui/material/styles';

import colors from './colors';
import typography from './typography';
import shadows from './shadows';
import breakpoints from './breakpoints';
import spacing from './spacing';
// const theme = createTheme({ ...colors, ...typography, ...shadows });

// console.log(theme);
const theme = createTheme({
  ...typography,
  ...colors,
  ...shadows,
  ...breakpoints,
  ...spacing,
});

console.log(theme);

export default theme;
