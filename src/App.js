import Web3 from 'web3';
import React,{useContext,useEffect, useState} from 'react';
import {UserProvider,Context,AdminProvider} from './Context';
import Login from './component/LoginRegister/Login';
import Main from './component/Main'
import OnlineVoting from './component/OnlineVoting'

  
function App() {
  
  
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
