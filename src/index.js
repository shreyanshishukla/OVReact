import React, { useState ,createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Register from './component/LoginRegister/Register'
import Main from './component/Main'
import Login from './component/LoginRegister/Login';
import RegisterAdmin from './component/LoginRegister/RegisterAdmin' ;
import Adminlogin from './component/LoginRegister/Admin-login';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 
  <React.StrictMode>

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/Main' element={<Main/>}></Route>
      <Route path="/registeradmin" element={<RegisterAdmin/>}></Route>
      <Route path='/admin-login' element={<Adminlogin/>}></Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

