import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import React ,{useEffect,useContext} from 'react';
import { Context,AdminContext } from '../../Context';


export default function VoterProfilePage() {
  const User=useContext(Context)
  const user=User.User
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#624F5',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  
  return (
   <>
     <div>VoterProfilePage</div>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='Absolute-Center'>
      
        
      <Grid xs={9}  >
          <Item className='box-shadow'>
         
          <h3>{user.firstName + user.lastName}</h3>
          <span> <p>Age:{user.Age || 34} </p> 
          <p>  Voted:{User.Voted?"Yes":"NO"}</p><p> Gender:{user.Gender || 'F'}</p></span>
          <p> AdharNumber:{3873477348834}</p>
            
      
          </Item>
        </Grid>
   
     
      </Grid>
   </>
  )
}
