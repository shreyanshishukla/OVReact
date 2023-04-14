import React ,{useEffect,useState}from 'react';
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


export default function CandidateProfilePage() {
  const [candidates, setcandidates] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/fetchCandidates',undefined)
    .then((response) => {
    setcandidates(response.data.Candidatesdata)
    
    //  navigate('/success')

    }, (error) => {
      console.log(error);
    });

  
    
  }, [])
  const val=candidates

  return (
    
    
    <>
      <Box sx={{ width: '100%',marginTop:"5vh" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    {   console.log("val",val) }
      {
        
         val.map((candidate)=>(
      <Grid xs={3} key={candidate._id}>
          <Item>
          <h3>{candidate.firstName + candidate.lastName}</h3>
          <p>Age:{candidate.Age}</p>
          <p>  PartyName:{candidate.party}</p>
          <p> PartySymbol:{}</p>
            <p> Gender:{candidate.Gender}
             </p>
          
          </Item>
        </Grid>
    ))    
    }
     
      </Grid>
    </Box>
    </>

  )
}




