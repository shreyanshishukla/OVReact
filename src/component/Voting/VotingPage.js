import React ,{useEffect,useState} from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import axios from 'axios'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#FDF4F5',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function VotingPage() {
  const [Candidatesdata, setCandidatesdata] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/fetchCandidates',undefined)
    .then((response) => {
    setCandidatesdata(response.data.Candidatesdata) }, (error) => {
      console.log(error);
    });
  }, [])
  const val=Candidatesdata
  
  return (
  <>
    <h1>
      Please Click on the Vote Button in front of the candidate to vote the candidate.
    </h1>
    <Box sx={{ width: '100%',marginTop:"5vh" }}>
      <h3>Election Candidates :</h3>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {
        
         val.map((candidate)=>(
      <Grid xs={12} key={candidate._id} elevation={20}>
          <Item>
         
          <h3>{candidate.firstName + candidate.lastName}</h3>
          <span> <p>Age:{candidate.Age} </p> 
          <p>  PartyName:{candidate.party}</p><p> Gender:{candidate.Gender}</p></span>
          <p> PartySymbol:{}</p>
            
          <button> Vote</button>
          </Item>
        </Grid>
    ))    
    }
     
      </Grid>
    </Box>

  </>
  )
}
