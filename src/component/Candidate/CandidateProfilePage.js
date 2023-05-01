import React ,{useEffect,useState}from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import axios from 'axios'
import './Candidate.css'
import bjp from '../../Images/bjp.png'
import congress from '../../Images/congress.jpg'
import LDP from '../../Images/LDP.webp'
import SP from '../../Images/samajwadi party.png'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#A6A9C8',
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

    }, (error) => {
      console.log(error);
    });

  
    
  }, [])
  const val=candidates

  return (
    
    
    <>
    <div className='base'>
      Election Candidates :
     <div className='tmain'>
        
         {val.map((candidate)=>(
     
          
          <div className='mainnn'>
         <div className="info"> {candidate.firstName + candidate.lastName}
          <p>Age:{candidate.Age}</p>
          <p>  PartyName:{candidate.party}</p>
          <p> Gender:{candidate.Gender}
             </p>
          </div> 
          <div   className='party'> <div><div>PartySymbol: </div>{ 
            (candidate.party.toLowerCase()=='bjp') &&<img src={bjp} className='partylogo' />}
            {(candidate.party.toLowerCase()=='ldp') &&<img src={LDP} className='partylogo' />}
            {(candidate.party.toLowerCase()=='samajwadi party') &&<img src={SP} className='partylogo' />}
            {(candidate.party.toLowerCase()=='congress') &&<img src={congress} className='partylogo' /> } </div></div>
          </div>))}
          </div>
     
    </div>
    </>

  )
}




