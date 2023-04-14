import React, { useState , useEffect,useContext} from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link,useNavigate } from 'react-router-dom';
import  {Context}  from '../Context'
import axios from 'axios';



export default function Adminlogin() {
 
 const User=useContext(Context)
 console.log("user",User)


  const navigate=useNavigate()
    const onFinish = ({firstName,lastName,email,password}) => {
        console.log('Received values of form: ',    firstName,
        lastName,
        email,
        password);//firstname,lastname,email,password);
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
            //@TODO 
            //authorization
            console.log(User.Admin)
            User.setAdmin({
            firstName,
            lastName,
            email,
            password
            })
            User.setadminLoggin(false)
        //   User.setisLoggedIn(true)
            
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
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="party name" />
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
        Login</Button>
        
        Or <Link to='/registeradmin'>Register admin user now!</Link>
      </Form.Item>
    
    </Form>
  
  </>
  )
}



