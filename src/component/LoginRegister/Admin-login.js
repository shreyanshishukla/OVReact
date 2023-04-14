import React, { useState , useEffect,useContext} from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link,useNavigate } from 'react-router-dom';
import  {Context,AdminContext}  from '../../Context'
import axios from 'axios';



export default function Adminlogin() {
 
  const User=useContext(Context)
 const Admin=useContext(AdminContext)

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
    const onFinish = ({firstName,lastName,email,password}) => {
        console.log('Received values of form: ',    firstName,
        lastName,
        email,
        password);
        axios.post('http://localhost:5000/admin-login', {
          firstName,
          lastName,
          email,
          password
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
            password
            })
    User.setshowVotingPage(false);
    User.setshowCandidateDetails(false);
    User.setshowVoterProfile(false);
    User.setshowVoting(false);
    User.setshowVoterProfilePage(false);
    User.setshowCandidateProfilePage(false);
    User.setadminLoggin(false)
    Admin.setadminLoggedIn(true)

            
           }
        }, (error) => {
          console.log(error);
        });

      };
  return (
    <>
    
    <div>Admin -Login</div>
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
        name="password"
        rules={[{ required: true, message: 'Please input password !' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
        
          placeholder="password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in as Admin
        </Button>
        Or   <button  onClick={handleOnClickRegister} >
          Register new Admin user
        </button>
      </Form.Item>
      <Form.Item>
        <button  onClick={handleOnClick} >
          Click here to Login as Voter
        </button>
      </Form.Item>
    
    </Form>
  
  </>
  )
}



