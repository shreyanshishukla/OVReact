
import Menubar from './Menubar';
import Candidates from './Candidates'
import Voting from './Voting';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import React,{useContext} from 'react'
import { Context } from '../Context';

import ResponsiveAppBar from "../material-ui/ResponsiveAppBar"
import { createTheme,  ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#333333',
      main: '#000000',
      dark: '#000000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffa733',
      main: '#ff9100',
      dark: '#b26500',
      contrastText: '#000',
    },
  },
});

export default function Main() {
  const User=useContext(Context)
    
  console.log(User)
    return (
        <>

  
     

<ThemeProvider theme={theme}>
<Container>
<ResponsiveAppBar elevation={20}/>
 <Voting/>
 </Container>
 </ThemeProvider>

      </>
      );
}



