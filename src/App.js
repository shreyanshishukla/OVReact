import Web3 from 'web3';

import React,{useContext} from 'react';
import {UserProvider,Context} from './Context';
import Login from './component/Login';
import Main from './component/Main'
import OnlineVoting from './component/OnlineVoting'
async function loadBlockchainData()
  {
    const web3= new Web3(Web3.givenProvider||"http://localhost:8545")
    const nertwork=await web3.eth.net.getNetworkType()
    console.log("network",nertwork)
  }

 
function App() {


  
  return (
    <div className="App"> 

      <UserProvider>
      <OnlineVoting/>
      </UserProvider>
    </div>
  );
}

export default App;
