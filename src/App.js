import Web3 from 'web3';

import React,{useContext,useEffect} from 'react';
import {UserProvider,Context,AdminProvider} from './Context';
import Login from './component/LoginRegister/Login';
import Main from './component/Main'
import OnlineVoting from './component/OnlineVoting'

async function loadBlockchainData()
  {
 if(window.ethereuem)
 {
  console.log("FFFF")

  }
  console.log("okayua",window.ethereuem)
  }
 
function App() {

  useEffect(() => {
    loadBlockchainData();
  
  
  }, [])
  
  
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
