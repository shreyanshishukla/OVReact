import React, { useState ,createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Register from './component/Register'
import Main from './component/Main'
import Login from './component/Login';
import Admin from './component/AdminComponents/Admin';
import AddCandidates from './component/AdminComponents/AddCandidate';
import AdminSuccess from './component/AdminComponents/AdminSucess';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 
  <React.StrictMode>

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/Main' element={<Main/>}></Route>
      <Route path = '/admin' element={<Admin/>}></Route>
      <Route path= '/admin/addCandidate' element={<AddCandidates/>}></Route>
      <Route path = "/success" element={<AdminSuccess/>}></Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
