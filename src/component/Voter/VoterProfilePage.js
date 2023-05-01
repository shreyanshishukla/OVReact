import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import React ,{useEffect,useContext} from 'react';
import { Context,AdminContext } from '../../Context';
import './Voter.css'

export default function VoterProfilePage() {
  const User=useContext(Context)
  const user=User.User

  
  
  return (
   
   <>
    <div className='base'>
    VoterProfilePage
      
    </div>
     <div className='tmain'>
        
      
     
          
          <div className='mainnn'>
         <div className="info"> {user.firstName + user.lastName}
          <p>Age:{user.Age || 34}</p>
          <p>  Voted:{User.Voted?"Yes":"No"}</p><p> Gender:{user.Gender || 'F'}</p>
          <p> AdharNumber:{user.adhaar_number}</p>
             
          </div> 
         
          </div>
          </div>
   
    </>
  )
}
