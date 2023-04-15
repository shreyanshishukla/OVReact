import React, { useState , useEffect,useContext} from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link,useNavigate } from 'react-router-dom';
import  {Context,AdminContext}  from '../../Context'
import axios from 'axios';
import './Css.css'


export default function Login() {
 
 const User=useContext(Context)
 const Admin=useContext(AdminContext)

  function handleOnClick()
  {
    User.setRegisterUser(false)
    User.setisLoggedIn(false)
    Admin.setRegisterAdmin(false)
    User.setadminLoggin(true)
    Admin.setadminLoggedIn (false)
  }
  function handleOnClickRegister()
  {
    User.setRegisterUser(true)
    User.setisLoggedIn(false)
    Admin.setRegisterAdmin(false)
    User.setadminLoggin(false)
    Admin.setadminLoggedIn (false)
  }
  const navigate=useNavigate()
    const onFinish = ({firstName,lastName,email,password}) => {
     //   console.log('Received values of form: ',    firstName,lastName,email, password);
        axios.post('http://localhost:5000/login', { firstName, lastName, email, password }) .then((response) => {
          if(!response.data.token)
          console.log("invalid pass or user id");
           else{
            //@TODO 
            //authorization
            User.setUser( {firstName,lastName, email, password})
            User.setisLoggedIn(true)
            
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
    </header></div>
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
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Lastname" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
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
        <Button type="primary" htmlType="submit" className="button-17">
          Log in
        </Button>
    <h3>OR</h3>       <button  className='button-17' onClick={handleOnClickRegister} >
          Register
        </button>
      </Form.Item>
      </div>
      <Form.Item>
        <button className='button-30' onClick={handleOnClick} >
          Click here to Login as Admin
        </button>
      </Form.Item>
    </Form>
    </div>
  
  </>
  )
}



