import React,{useContext} from 'react'
import { Context,AdminContext } from '../Context';
import ResponsiveAppBar from "../material-ui/ResponsiveAppBar"
import { createTheme,  ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import FixedBottomNavigation from './../material-ui/FixedBottomNavigation'
import VotingPage from './Voting/VotingPage';
import VoterProfilePage from './Voter/VoterProfilePage';
import backgroundImage from './../bg.png'
import CandidateProfilePage from './Candidate/CandidateProfilePage';




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
  const Admin=useContext(AdminContext)
  const handleVote=()=>
  {
    User.setAllFalse();
    User.setisLoggedIn(true);
    Admin.setAllFalse();
    User.setshowVotingPage(true);
  }
  const handleVoterProfile=()=>{
    User.setAllFalse();
    User.setisLoggedIn(true);
    Admin.setAllFalse();
    User.setshowVoterProfilePage(true);
  }
  const handleCandidate=()=>
  {
    User.setAllFalse();
    User.setisLoggedIn(true);
    Admin.setAllFalse();
    User.setshowCandidateProfilePage(true);
  }
    
  console.log("Main",User)
    return (
        <>
        
       <Grid container  style={{backgroundColor:"#C9CCD5"}}   > 
      <Grid item xs={12}>
<ThemeProvider theme={theme}>
<ResponsiveAppBar elevation={20}/>

<div>
<button onClick={handleVote}>
  Vote
</button>
 <button onClick={handleVoterProfile}>
  Voter Profile
 </button>
 <button onClick={handleCandidate}>
  Show Candidates
 </button>
 </div>
 {User.showVotingPage && <VotingPage/>}
{User.showCandidateProfilePage && <CandidateProfilePage/>}
{User.showVoterProfilePage && <VoterProfilePage/>}

 <FixedBottomNavigation/>
 </ThemeProvider></Grid>  </Grid>


      </>
      );
}


