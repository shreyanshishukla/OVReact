import React, { useState , useEffect,useContext} from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link,useNavigate } from 'react-router-dom';
import  {Context,AdminContext}  from '../../Context'
import axios from 'axios';
import './Css.css'



export default function Adminlogin() {
 
  const User=useContext(Context)
 const Admin=useContext(AdminContext)
 const [OTP, setOTP] = useState()
 const [adhar, setadhar] = useState()
 const [wrongOTP, setwrongOTP] = useState(false)
 const [verificationDone, setverificationDone] = useState(false)
 const [alreadyexits, setalreadyexits] = useState(false)
 const [wrongadhar, setwrongadhar] = useState(false)

 useEffect(() => {
  setadhar('')
  setOTP('')
  setwrongOTP(false)
  setalreadyexits(false)
  setverificationDone(false)
  setwrongadhar(false)
  Admin.setAdminOTP(false)


  
}, [])

 function handleadharonchange(event)
 {
  setadhar(event.target.value)
 }
 function handleOTP(event)
 {
  setOTP(event.target.value)
 }
 function handleVerifyOTP()
 {
  axios.post('http://localhost:5000/verifyOTP', {
        
        adhaar_number:adhar,
        OTP
      
      })
      .then((response) => {

        console.log(response);

      
        if(response.data=='Verified')

        {   var btnReg=document.getElementById('Register')
           btnReg.disabled=false;
           setverificationDone(true)}
          else
          {
           setwrongOTP(true)
           setverificationDone(false);
          
   
          }

      }, (error) => {

        setwrongOTP(true)
        console.log(error);
      });

 }
  function handleOnClick()
  {
    User.setRegisterUser(false)
    User.setisLoggedIn(false)
    Admin.setRegisterAdmin(false)
    User.setadminLoggin(true)
    Admin.setadminLoggedIn (false)
  }
  function handleOnClickLogin()
  {
    User.setRegisterUser(false)
    User.setisLoggedIn(false)
    Admin.setRegisterAdmin(false)
    User.setadminLoggin(false)
    Admin.setadminLoggedIn (false)
  } 
   
    const handlegetOTP=()=>{
      axios.post('http://localhost:5000/getOTP', {
        
        adhaar_number:adhar,
      
      })
      .then((response) => {

        console.log(response);
        
       
     
        if(response.data=="SubmitOtp")
          {     Admin.setAdminOTP(true)}
            else
            {
            setwrongadhar(true)
     
            }
        

      }, (error) => {
        console.log(error);
      });

    }


  function handleOnClick()
  {
    User.setRegisterUser(false)
    User.setisLoggedIn(false)
    Admin.setRegisterAdmin(false)
    User.setadminLoggin(false)
    Admin.setadminLoggedIn (false)
  }
  function handleOnClickRegister()
  {
    User.setRegisterUser(false)
    User.setisLoggedIn(false)
    Admin.setRegisterAdmin(true)
    User.setadminLoggin(false)
    Admin.setadminLoggedIn (false)
  }
  
  const navigate=useNavigate()
    const onFinish = ({firstName,lastName,email,password,adhaar_number}) => {
        console.log('Received values of form: ',    firstName,
        lastName,
        email,adhaar_number,
        password);
        axios.post('http://localhost:5000/admin-login', {
          firstName,
          lastName,
          email,
          password,
          adhaar_number
        })
        .then((response) => {
          console.log(response)
          if(!response.data.token)
          console.log("invalid pass or user id");
           else{
         
            console.log(User.Admin)
            Admin.setAdmin({
            firstName,
            lastName,
            email,
            password,
            adhaar_number
            })
            if(response.data=='already exits')
            {  
             
            setOTP('');
            setadhar('');
            setwrongOTP(false);
            setverificationDone(false);
            setalreadyexits(true)
            User.setUserOTP(false)
            var btnReg=document.getElementById('Register')
            btnReg.disabled=true;
            
  
            }
            else{
              User.setAllFalse();
            Admin.setAllFalse();
            setOTP('');
            setadhar('');
            setwrongOTP(false);
            setverificationDone(false);
            Admin.setadminLoggedIn(true)
            }  
        
       
    

            
           }
        }, (error) => {
          console.log(error);
        });

      };
  return (
    <>
 <div className='Absolute-Center' >
    <header>
      <h2>Login</h2>
    </header>
    </div>
    <div className='Absolute-Center' >
    <Form
      name="normal_login"
      className="login-form"
      onFinish={onFinish}
    >
      <Form.Item
        name="firstName"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Firstname" />
      </Form.Item>
      <Form.Item
        name="lastName"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Lastname" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input email !' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
      </Form.Item>
      <Form.Item
        name="adhaar_number"
        rules={[{ required: true, message: 'Please input your Aadhar Number!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Aadhar number"  onChange={handleadharonchange} />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
          { !Admin.AdminOTP && !verificationDone && <Form.Item> 
        <Button type="primary" onClick={handlegetOTP} className="button-17" >
         GetOTP
        </Button>
      </Form.Item>}
      {/* OTP logic */}
        
     {Admin.AdminOTP && !verificationDone && <> <Form.Item
        name="OTP"
        rules={[{ required: true, message: 'Please input your OTP!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" /> 
          }
          
          placeholder="OTP" 
          onChange={handleOTP}
        />
        
        </Form.Item> 
         <Form.Item>
        <Button type="primary"  className="button-17" onClick={handleVerifyOTP}>
        Verify OTP
        </Button>
      </Form.Item> </> }
     { verificationDone && <div class="success-msg">
  <i class="fa fa-check"></i>
  OTP verified successfully.You can Login Now.
</div>}
 { wrongOTP && <div class="failure-msg">
  <i class="fa fa-check"></i>
  Wrong OTP.Try Again
</div>}
  <div>{alreadyexits && <div class="failure-msg">
  <i class="fa fa-check"></i>
  Already exits 
</div>}
{wrongadhar && <div class="failure-msg">
  <i class="fa fa-check"></i>
  Wrong Adhar
</div>}</div>
     
      <div className='center-b'>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="button-17 " disabled id="Register">
          Log in as Admin
        </Button>
        <h4>OR</h4>   <button  onClick={handleOnClickRegister} className="button-17">
          Register new Admin user
        </button>
      </Form.Item>
      </div>
      <Form.Item>
        <button  onClick={handleOnClick} className="button-30">
          Click here to Login as Voter
        </button>
      </Form.Item>
    
    </Form>
    </div>
  
  </>
  )
}



