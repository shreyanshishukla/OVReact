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
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#624F5',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function VotingPage() {
  const [blockchain,setblockchain]=useState({})
  async function loadBlockchainData() {
    // const web3 = await getWeb3();
    // const accounts = await web3.eth.getAccounts();
    // console.log(accounts)
     const web3 = new Web3(Web3.givenProvide)
     const contractAddr='0xDFB1E76026907fbB493FFb7e6606021A85A30371';
     const SimpleContract = new web3.eth.Contract(SimpleStorageAbi, contractAddr);
    const accounts = await web3.eth.getAccounts()
    // setblockchain({ account: accounts[0] })
    // const web3= new Web3(Web3.givenProvider||"http://localhost:8545")
    // const nertwork=await web3.eth.net.getNetworkType()
    // console.log("network",nertwork)
  }
  const User=useContext(Context)
  const [Candidatesdata, setCandidatesdata] = useState([])
  useEffect(() => {
    loadBlockchainData()
    axios.get('http://localhost:5000/fetchCandidates',undefined)
    .then((response) => {
    setCandidatesdata(response.data.Candidatesdata) }, (error) => {
      console.log(error);
    });
  }, [])
  const val=Candidatesdata
  const block=[blockchain]
  const handleVote=()=>
  {
    User.setVoted(true);
    console.log("Voted")
  }
  return (
  <>
    <h1>
      Please Click on the Vote Button in front of the candidate to vote the candidate.
     
    </h1>
    <div>{console.log("blockchain",blockchain)}</div>
    <Box sx={{ width: '100%',marginTop:"5vh" }}>
      <h3>Election Candidates :</h3>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='Absolute-Center'>
      {
        
         val.map((candidate)=>(
      <Grid xs={9} key={candidate._id} >
          <Item className='box-shadow'>
         
          <h3>{candidate.firstName + candidate.lastName}</h3>
          <span> <p>Age:{candidate.Age} </p> 
          <p>  PartyName:{candidate.party}</p><p> Gender:{candidate.Gender}</p></span>
          <p> PartySymbol:{}</p>
            
          <button className='button-85' onClick={handleVote}> Vote</button>
          </Item>
        </Grid>
    ))    
    }
     
      </Grid>
    </Box>

  </>
  )
}


 

