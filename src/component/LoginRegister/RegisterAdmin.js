import React, { useContext} from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link ,useNavigate} from 'react-router-dom';
import  {Context,AdminContext}  from '../../Context'

import axios from 'axios';



export default function RegisterAdmin() {
   
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
          password:values.password
        })
        .then((response) => {

          console.log(response);
        
          navigate('/admin-login')

        }, (error) => {
          console.log(error);
        });

      };
  return (
    <>
    <div>Register Admin User</div>
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
         Register Admin
        </Button>
        Or   <button  onClick={handleOnClickLogin} >
          Login as Admin
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



