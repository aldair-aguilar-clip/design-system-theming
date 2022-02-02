import './App.css';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => {
  console.log(theme);
  return {
    padding: theme.spacing(1),
    [theme.breakpoints.down('tablet')]: {
      backgroundColor: theme.palette.primary['200'],
    },
    [theme.breakpoints.up('tablet')]: {
      backgroundColor: theme.palette.success.main,
    },
    [theme.breakpoints.up('desktop')]: {
      backgroundColor: theme.palette.warning.main,
    },
  };
});

function App() {
  return (
    <div className='App'>
      <Typography
        sx={{
          typography: {
            mobile: '2xl',
            tablet: '8xl',
            desktop: '10xl',
          },
          color: {
            mobile: 'red',
            tablet: 'green',
            desktop: 'blue',
          },
        }}
        variant='10xl'
        fontWeight='bold'
        component='h1'
      >
        10xl - Bold ▚ Clip is Extraordinary
      </Typography>

      <Root>
        <Typography>down(mobile): primary 100</Typography>
        <Typography>up(tablet): verde</Typography>
        <Typography>up(desktop): naranja</Typography>
      </Root>
    </div>
  );
}

export default App;
