import { createTheme } from '@mui/material/styles';

// import colors from "./colors";
import typography from './typography';
// import shadows from "./shadows";

// const theme = createTheme({ ...colors, ...typography, ...shadows });

// console.log(theme);
const theme = createTheme({ ...typography });

console.log(theme);

export default theme;
