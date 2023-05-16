import React,{useContext,useState} from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { AdminContext,Context } from '../../Context';
import axios from 'axios';
import { useEffect } from 'react';
import './Admin.css'


export default function AddCandidates() {
  const Admin=useContext(AdminContext)
  const User=useContext(Context)
  const [alreadyexits, setalreadyexits] = useState(false)
  useEffect(() => {
    setalreadyexits(false)

  }, [])
  
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        axios.post('http://localhost:5000/admin/addCandidates', {
          firstName: values.firstName,
          lastName: values.lastName,
          party:values.party,
          age:values.age,
          gender:values.gender
        })
        .then((response) => {
          if(response.data!='failure')
          {
            User.setAllFalse();
            Admin.setAllFalse();
            Admin.setadminLoggedIn(true)
            Admin.setCandidateAddedSuccessfully(true)
          }
          else{
              setalreadyexits(true)
          }

          console.log(response)

        }, (error) => {
          User.setAllFalse();
          Admin.setAllFalse();
          Admin.setadminLoggedIn(true)
          Admin.setError(true)
          console.log(error);
        });

      };
  return (
    <>

    <div className='ad'>
    <h1 class="gamma lato thin uppercase ls-xlarge">
		Add candidates!</h1>

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
        name="age"
        rules={[{ required: true, message: 'Please input age !' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="number"
          placeholder="age"
        />
      </Form.Item>
      <Form.Item
        name="gender"
        rules={[{ required: true, message: 'Gender !' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
         
          placeholder="gender"
        />
      </Form.Item>
      <div>{alreadyexits && <div class="failure-msg">
  <i class="fa fa-check"></i>
  Candidate Already exists 
</div>}</div>

      <Form.Item>
    
        <Button type="primary" htmlType="submit" className="login-form-button">
          Add Candidate
        </Button>
      </Form.Item>
    </Form>
  </div>
  </>
  )
}