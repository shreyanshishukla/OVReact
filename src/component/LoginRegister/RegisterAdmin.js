import React, { useContext,useEffect,useState} from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link ,useNavigate} from 'react-router-dom';
import  {Context,AdminContext}  from '../../Context'
import './Css.css'

import axios from 'axios';



export default function RegisterAdmin() {
   
  const User=useContext(Context)
 const Admin=useContext(AdminContext)
 const [OTP, setOTP] = useState()
 const [adhar, setadhar] = useState()
 const [wrongOTP, setwrongOTP] = useState(false)
 const [alreadyexits, setalreadyexits] = useState(false)
 const [verificationDone, setverificationDone] = useState(false)
 const [wrongadhar, setwrongadhar] = useState(false)
 useEffect(() => {
   setadhar('')
   setOTP('')
   setwrongOTP(false)
   setalreadyexits(false)
   setverificationDone(false)
   setwrongadhar(false)
  User.setUserOTP(false)

 
   
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
 const handlegetOTP=()=>{
  axios.post('http://localhost:5000/getOTP', {
    
    adhaar_number:adhar,
  
  })
  .then((response) => {

    console.log(response);

  
      if(response.data=="SubmitOtp")
      {   User.setUserOTP(true)}
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
  function handleOnClickLogin()
  {
    User.setRegisterUser(false)
    User.setisLoggedIn(false)
    Admin.setRegisterAdmin(false)
    User.setadminLoggin(true)
    Admin.setadminLoggedIn (false)
  }
    const navigate=useNavigate()
    const onFinish = (values) => {
        console.log('Received values of form: ', values);//firstname,lastname,email,password);
        axios.post('http://localhost:5000/register-admin', {
          firstName: values.firstName,
          lastName: values.lastName,
          email:values.email,
          password:values.password,
          adhaar_number:values.adhaar_number
        })
        .then((response) => {

          console.log(response);
          
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
          User.setadminLoggin(true)

          }

        }, (error) => {
          console.log(error);
        });

      };
  return (
    <>
    <div className='Absolute-Center' >
    <header>
      <h2>Register Admin </h2>
    </header>
</div>
    <div className='Absolute-Center' >
   
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
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
        rules={[{ required: true, message: 'Please input your Lastname!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Lastname" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
      </Form.Item>
      <Form.Item
        name="adhaar_number"
        rules={[{ required: true, message: 'Please input your aadhar number!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="adhaar_number"  onChange={handleadharonchange}/>
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
      
      { !User.UserOTP && !verificationDone && <Form.Item> 
        <Button type="primary" onClick={handlegetOTP} className="button-17" >
         GetOTP
        </Button>
      </Form.Item>}
      {/* OTP logic */}
        
     {User.UserOTP && !verificationDone && <> <Form.Item
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
     { verificationDone && !wrongOTP &&<div class="success-msg">
  <i class="fa fa-check"></i>
  OTP verified successfully.You can Rgister Now.
</div>}
 { wrongOTP &&  !verificationDone && <div class="failure-msg">
  <i class="fa fa-check"></i>
  Wrong OTP.Try Again
</div>}
<div>{alreadyexits && <div class="failure-msg">
  <i class="fa fa-check"></i>
  Already exits 
</div>
}{wrongadhar && <div class="failure-msg">
  <i class="fa fa-check"></i>
  Wrong Adhaar 
</div>}</div>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>
      <div className='center-b'>
      <Form.Item>
        <Button  htmlType="submit" className="button-17" disabled id="Register">
         Register Admin
        </Button>
       <h4>OR</h4>    <button  onClick={handleOnClickLogin} className="button-17"  >
          Login as Admin
        </button>
      </Form.Item>
      </div>
      <Form.Item>
        <button  onClick={handleOnClick} className="button-30" >
          Click here to Login as Voter
        </button>
      </Form.Item>
    </Form>
    </div>
  </>
  )
}



