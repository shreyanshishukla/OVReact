
import React,{useContext} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Context } from '../Context';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    
  </Box>
);


export default function Voting() {
  const User=useContext(Context)
  function handleOnClick()
  {
    User.setshowVotingPage(true);
    User.setshowCandidateDetails(false);
    User.setshowVoterProfile(false);
    User.setshowVoting(false);
    User.setshowVoterProfilePage(false);
    User.setshowCandidateProfilePage(false);
    User.setadminLoggin(false);


  }
  const card = (
  

    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="#000" gutterBottom>
        <Button onClick={handleOnClick}>Voting......</Button>
          
  
        </Typography>
        
       
      </CardContent>
     
    </React.Fragment>
  );
  return (
    <div>
       <Container sx={{ minWidth: 275 , }}>
      <Card variant="outlined">{card}</Card>
    </Container>
    </div>
   
  );
}