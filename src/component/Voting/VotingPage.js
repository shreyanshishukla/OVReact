import React ,{useEffect,useState,useContext } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import axios from 'axios'
import Web3 from 'web3';
import { Context,AdminContext } from '../../Context';
import './Voting.css'
import {SimpleStorageAbi} from '../../config.js'
import bjp from '../../Images/bjp.png'
import congress from '../../Images/congress.jpg'
import LDP from '../../Images/LDP.webp'
import SP from '../../Images/samajwadi party.png'
import Election from './../../ABI/Election.json'



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#624F5',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function VotingPage() {
 

  const Admin=useContext(AdminContext)
  const User=useContext(Context)
  const [Candidatesdata, setCandidatesdata] = useState([])
  useEffect(() => {
   
    axios.get('http://localhost:5000/fetchCandidates',undefined)
    .then((response) => {
    setCandidatesdata(response.data.Candidatesdata) }, (error) => {
      console.log(error);
    });
  }, [])
  const val=Candidatesdata
 
  let candarray=[]
  let vote=[]

  const handleVote=(index)=>
  {
    axios.put('http://localhost:5000/p', {
         index:index
        })
        .then((response) => {
         User.setAllFalse();
         Admin.setAllFalse();
         User.setisLoggedIn(true)
         User.setshowVotingPage(true)
       // User.setVoted(true)
          

        }, (error) => {
          User.setAllFalse();
          Admin.setAllFalse();
          User.setisLoggedIn(true);
          console.log(error);
        });
   
  }
  return (
  <>
    <h1 className='text'>
      Please Click on the Vote Button in front of the candidate to vote the candidate.
      You can only vote once !!
    </h1>
    
    <Box sx={{ width: '100%',marginTop:"5vh" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='Absolute-Center'>
      {
        
         val.map((candidate,index)=>{ candarray.push({
            ...candidate,
            vote:0
          })
          vote.push(0);
          return(
         
      <Grid xs={4} key={candidate._id} >
          <Item className='box-shadow'>
         
          
          <div className='mainnn'>
         <div className="info"> {candidate.firstName + candidate.lastName}
          <p>Age:{candidate.Age}</p>
          <p>  PartyName:{candidate.party}</p>
          <p> Gender:{candidate.gender}
             </p>
          </div> 
          <div   className='party'> <div><div>PartySymbol: </div>{ 
            (candidate.party.toLowerCase()=='bjp') &&<img src={bjp} className='partylogo' />}
            {(candidate.party.toLowerCase()=='ldp') &&<img src={LDP} className='partylogo' />}
            {(candidate.party.toLowerCase()=='samajwadi party') &&<img src={SP} className='partylogo' />}
            {(candidate.party.toLowerCase()=='congress') &&<img src={congress} className='partylogo' /> } </div></div>
          </div>
            
          <button className='button-85'  onClick={()=>handleVote(candidate._id)}> Vote</button>
          </Item>
        </Grid>
    )}) }   
    
     
      </Grid>
    </Box>

  </>
  )
}


 

