import React, { useState , useEffect,useContext} from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link,useNavigate } from 'react-router-dom';
import  {Context}  from '../Context'
import axios from 'axios';



export default function Login() {
 
 const User=useContext(Context)


  const navigate=useNavigate()
    const onFinish = ({firstName,lastName,email,password}) => {
        console.log('Received values of form: ',    firstName,
        lastName,
        email,
        password);//firstname,lastname,email,password);
        axios.post('http://localhost:5000/login', {
          firstName,
          lastName,
          email,
          password
        })
        .then((response) => {
          if(!response.data.token)
          console.log("invalid pass or user id");
           else{
            //@TODO 
            //authorization
            User.setUser({
            firstName,
            lastName,
            email,
            password
            })
            User.setisLoggedIn(true)
            
           }
        }, (error) => {
          console.log(error);
        });

      };
  return (
    <>
    
    <div>Login</div>
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

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link to='/register'>Register  now!</Link>
      </Form.Item>
    </Form>
  
  </>
  )
}



