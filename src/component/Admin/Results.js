import React,{useEffect, useState,useContext} from 'react'
import axios from 'axios'
import { AdminContext,Context } from '../../Context';

import './Result.css'
import Web3 from 'web3';
import { Chart } from "react-google-charts";
import Election from './../../ABI/Election.json'

export default function Result() {
  const data = [
  ["Task", "Hours per Day"],
  ["Total Number of Voters Voted:", 11],
  ["Total Number of Voter not Voted", 2],

];
const data2 = [
  ["Task", "Hours per Day"],
  ["Shashank Pandey:", 11],
  ["Stuti Awasthi", 22],
  ["Jhanvi Gupta", 12],


];
const options = {
  tittle: "Showing Analytics",
  is3D:true,
};
const options2 = {
  tittle: "Total number of votes per Candidate",
  is3D:true,
};

const [Loading, setLoading] = useState(false);
const [Result, setResult] = useState();
const Admin=useContext(AdminContext)
const User=useContext(Context)
const [WalletAddress, setWalletAddress] = useState();
const [candidate, setcandidate] = useState();

const [ElectionBlockchain, setElectionBlockchain] = useState();


async function loadWeb3()
{

  const provider= window.ethereum;
  window.web3= new Web3(provider)
  await window.ethereum.enable();
  

}
async function loadBlockchainData()
{
  const WEB3=window.web3;
  const account=await WEB3.eth.getAccounts();
  const netid=await WEB3.eth.net.getId();
  console.log("WEB3",WEB3);
  console.log("accounts",account[0]);
  console.log("netID",netid)
  setWalletAddress(account[0])
  const electionData=Election.networks[netid];
  if(electionData)
  {
    const ele=await new WEB3.eth.Contract(Election.abi,electionData.address)
    await setElectionBlockchain(ele)


  }
}
useEffect(() => {
  axios.get('http://localhost:5000/enquire',undefined)
  .then((response) => {
  setcandidate(response.data.winner)

  }, (error) => {
    console.log(error);
  });


  
}, [])
useEffect(() => {
  loadWeb3();
  loadBlockchainData();


},[])
  async function loadResult(){
    await ElectionBlockchain.methods.candidates(0).call({from: WalletAddress})
    .then(function(val){
      setResult(val)
      console.log(val)
      });
  }
  
 useEffect(()=>{
  loadResult();
  console.log( "fyhytytt",Admin.ElectionBlockchain)
 },[ElectionBlockchain])
  return(
    <>
      
     { true && <div style={{display:"flex", flexDirection:"row"}}> 
     {candidate && <h1>{candidate.firstName} won !!</h1>}
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"300px"} />
     <Chart
      chartType="PieChart"
      data={data2}
      options={options2}
      width={"100%"}
      height={"300px"}
    />
        </div>}
    </>
  )
}

// export default function Result() {
//   

// const [win, setwin] = useState("")
// setwin("Stuti Awasthi")

//   return (
// <>
// <div className='Home'>
       
//        <div className="section" data-description="Online-Voting">
//          <div class="wrapper">
   
//           {win=='' &&   <h1 class="beta uppercase montserrat regular line-after-heading"> No Winner </h1>}
//           {win!='' &&   <h1 class="beta uppercase montserrat regular line-after-heading">Winner is {win}</h1>}
           
//            <p class="delta cardo regular italic" style={{marginLeft:"23vw"}}>
//               RESULTS DECLARED !!
//            </p>
//    
//           </div>

//         </div>
 

//         </div>
// </>  )
// }
