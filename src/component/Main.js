
import Menubar from './Menubar';
import Voting from './Voting';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import React,{useContext} from 'react'
import { Context } from '../Context';
import Candidates from './Candidates';
import VoterProfile from './VoterProfile';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ResponsiveAppBar from "../material-ui/ResponsiveAppBar"
import { createTheme,  ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import FixedBottomNavigation from './../material-ui/FixedBottomNavigation'
import VotingPage from './VotingPage';
import VoterProfilePage from './VoterProfilePage';
import backgroundImage from './../bg.png'
import CandidateProfilePage from './CandidateProfilePage';
import Adminlogin from './Admin-login';
import AdminPortal from './AdminPortal';



const theme = createTheme({
  palette: {
    primary: {
      light: '#333333',
      main: '#65647C',
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


const  style={backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: "120vh", top:"20vh"}

export default function Main() {
  const User=useContext(Context)
    
  console.log(User)
    return (
        <>
        
       <Grid container  style={{backgroundColor:"#C9CCD5"}}   > 
      <Grid item xs={12}>
<ThemeProvider theme={theme}>
<ResponsiveAppBar elevation={20}/>
{User.showVotingPage && <VotingPage/>}
{User.showCandidateProfilePage && <CandidateProfilePage/>}
{User.showVoterProfilePage && <VoterProfilePage/>}
{User.adminLoggin && <Adminlogin/>}
{User.admin!={} && <AdminPortal/>}
 
<Container style={{margin:"34px"}}>
    <Grid container spacing={24}>
  <Grid item md={3}>
  { User.showVoting &&  <Voting />}
  </Grid>
  <Grid item md={3}>
   {User.showVoterProfile && <VoterProfile />}
  </Grid>
  <Grid item md={3}>
  {  User.showCandidateDetails && <Candidates />}
  </Grid>
</Grid>

 </Container>
 <FixedBottomNavigation/>
 </ThemeProvider></Grid>  </Grid>


      </>
      );
}


