import React ,{useEffect,useState,useContext } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import axios from 'axios'
import { Context,AdminContext } from '../../Context';
import './Delete.css'
import bjp from '../../Images/bjp.png'
import congress from '../../Images/congress.jpg'
import LDP from '../../Images/LDP.webp'
import SP from '../../Images/samajwadi party.png'
import general from '../../Images/generall.png'

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
  const [deleted, setdeleted] = useState(true)

  
  useEffect(() => {
  
    axios.get('http://localhost:5000/fetchCandidates',undefined)
    .then((response) => {
    setCandidatesdata(response.data.Candidatesdata)
    }, (error) => {
      console.log(error);
    });
  }, [deleted])
  const val=Candidatesdata
  const handleDelete=(candidate)=>{
   
    axios.delete('http://localhost:5000/DeleteCandidates', { data: candidate }).then((response)=>{
      setdeleted(!deleted)

    }
    
    ).catch((error)=>{
      console.log(error)
    })
  }


  return (
  <>
 
    <h1 className='text'>
      Please Click on the Vote Button in front of the candidate to vote the candidate.
      You can only vote once !!
    </h1>
    <div className='topflex'>

      {val.map((candidate)=>{ 
          return(
        
         <div className='card'>
        <div className="container">
        <div className="box">
        <span className="title">{candidate.firstName }<br></br>{candidate.lastName}</span>
        <div>
            <strong>Age:{candidate.Age}</strong>
            <strong>PartyName:{candidate.party}</strong>
            <strong>Gender:{candidate.gender}</strong>
<div className='flex'>
        <div className='ps'>PartySymbol:</div>
        <div className='img'> { 
            (candidate.party.toLowerCase()=='bjp') &&<img src={bjp} className='partylogo' />}
            {(candidate.party.toLowerCase()=='ldp') &&<img src={LDP} className='partylogo' />}
            {(candidate.party.toLowerCase()=='samajwadi party') &&<img src={SP} className='partylogo' />}
           {(candidate.party.toLowerCase()=='congress') &&<img src={congress} className='partylogo' /> } 
           {(candidate.party.toLowerCase()!='congress') && (candidate.party.toLowerCase()!='samajwadi party') && (candidate.party.toLowerCase()!='sldp') && (candidate.party.toLowerCase()!='bjp') &&<img src={general} className='partylogo' /> }</div></div>
           <button className='button-85'  onClick={()=>handleDelete(candidate)}> Delete</button>
           </div>
       
    </div>
    

</div>
</div>

          
    )}) } 
    </div>  
    
    
  </>
  )
}


 

