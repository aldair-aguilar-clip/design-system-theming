/* eslint-disable import/no-anonymous-default-export */
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

export default {
  shadows: {
    ...theme.shadows,
    0: 'none',
    small: '0.0px 2.0px 2.0px 0px rgba(24, 26, 54, 0.16)',
    medium: {
      gray: '0.0px 6.0px 12.0px 0px rgba(24, 26, 54, 0.12)',
      orange: '0.0px 6.0px 12.0px 0px rgba(252, 76, 2, 0.2)',
    },
    big: {
      up: '0.0px -8.0px 16.0px 0px rgba(24, 26, 54, 0.04)',
      down: '0.0px 8.0px 16.0px 0px rgba(24, 26, 54, 0.04)',
    },
  },
};
