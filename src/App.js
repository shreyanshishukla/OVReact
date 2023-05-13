import Web3 from 'web3';
import React,{useContext,useEffect} from 'react';
import {UserProvider,Context,AdminProvider} from './Context';
import Login from './component/LoginRegister/Login';
import Main from './component/Main'
import OnlineVoting from './component/OnlineVoting'

async function loadBlockchainData()
  {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
    const accounts = await web3.eth.getAccounts();
    console.log("web3",web3);
    console.log("accounts",accounts )
  }
 
function App() {

  useEffect(() => {
    loadBlockchainData();
  
  
  },[])
  
  
  return (
    <div className="App"> 
     <AdminProvider>
     <UserProvider>
      <OnlineVoting/>
      </UserProvider>
     </AdminProvider>
      
    </div>
  );
}

export default App;
