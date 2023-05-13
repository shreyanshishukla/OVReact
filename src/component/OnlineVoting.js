import React,{useContext} from 'react'
import Login from './LoginRegister/Login';
import Main from './Main'
import { Context , AdminContext} from '../Context';
import Adminlogin from './LoginRegister/Admin-login';
import AdminPortal from './Admin/AdminPortal';
import Register from './LoginRegister/Register';
import Contact from './menubar/Contact';
import './Main.css'
import RegisterAdmin from './LoginRegister/RegisterAdmin';


export default function OnlineVoting() {
  const User=useContext(Context)
const Admin=useContext(AdminContext)

  return (
 
       <>
       <div className='full-height'>
       {User.RegisterUser &&  <Register/>}
      {!User.RegisterUser && !User.isLoggedIn && !User.adminLoggin && !Admin.RegisterAdmin && !Admin.adminLoggedIn && <Login/>}
       { User.isLoggedIn && <Main/>}
       {Admin.RegisterAdmin && <RegisterAdmin/>}
       {User.adminLoggin && <Adminlogin/>}
       {User.Contact && <Contact/>}
       {Admin.adminLoggedIn && <AdminPortal/>}
       
       </div>
       </>
  
  
   
  
  )
}

