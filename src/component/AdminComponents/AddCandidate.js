import React, { useState , useEffect} from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';



export default function AddCandidates() {
    const navigate=useNavigate()
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        axios.post('http://localhost:5000/admin/addCandidates', {
          firstName: values.firstName,
          lastName: values.lastName,
          party:values.party,
          contact:values.contact
        })
        .then((response) => {

          console.log(response);
        
          navigate('/success')

        }, (error) => {
          console.log(error);
        });

      };
  return (
    <>
    <div>Add candidates!</div>
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
        name="party"
        rules={[{ required: true, message: 'Please input Party name!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="party name" />
      </Form.Item>
      <Form.Item
        name="contact"
        rules={[{ required: true, message: 'Please input contact number!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="number"
          placeholder="contact number"
        />
      </Form.Item>

      <Form.Item>
    
        <Button type="primary" htmlType="submit" className="login-form-button">
          Add Candidate
        </Button>
      </Form.Item>
    </Form>
  </>
  )
}