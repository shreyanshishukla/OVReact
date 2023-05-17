import React,{useContext,useState} from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { AdminContext,Context } from '../../Context';
import axios from 'axios';
import { useEffect } from 'react';
import { message, Space } from 'antd';
import './Admin.css'



export default function FAQ() {
  const Admin=useContext(AdminContext)
  const User=useContext(Context)
  
  const [datastate, setdatastate] = useState()
  const [posted,setposted]=useState(false)
  const [Key,setKey]=useState('')
  const [size,setsize]=useState(false)



  var datas=[]
  const [alreadyexits, setalreadyexits] = useState(false)
  useEffect(() => {
     axios.get('http://localhost:5000/faq', undefined)
        .then((response) => {
            
     setdatastate(response.data.FAQ)
     setsize(false)
    

        }, (error) => {
             console.log(error);
        });

  }, [posted])
  
  
    const onFinish = (values) => {
        console.log(values.answer,Key)
        axios.put('http://localhost:5000/faqpost', {
            ans: values.answer,
            id:Key
          
          })
          .then((response) => {
            if(response.data=='OK')
            {
                setKey('')
              message.success('Submit success!');
            }
            else{
                setKey('')
              message.error('Submit failed!');
      
            }
            
            setposted(!posted)
      
     
      })};
      const val=datastate
      console.log(val)
      console.log("key",Key)
    
  return (
    <>
  <div className='ad'>
    <h1 class="gamma lato thin uppercase ls-xlarge">
		Answer Queries!</h1>
       
    { val!=undefined   && <div>
 {  val.map((d)=>
    (  <>
   { 
    d.ans=='' &&      <Form
      name="normal_login"
      className="login-form"
      onFinish={onFinish}
    > 
    {setsize(true)}
    <Form.Item
        name="id"
        label={d.FAQ}
        rules={[
          {
            required: false,
          },
          {
            warningOnly: true,
          },
          {
            type: 'string',
            min: 6,
          },
        ]}
        style={{
           display:"none"
        }}
        >


        <Input  style={{height:"50px",width:"50vw",marginLeft:"1vw"}} value={d._id}/>
      </Form.Item>
     <Form.Item
        name="answer"
        label={d.FAQ}
        rules={[
          {
            required: true,
          },
          {
            warningOnly: true,
          },
          {
            type: 'string',
            min: 6,
          },
        ]}
        style={{
            marginTop:"50px",
        }}
      >
      

        <Input  style={{height:"50px",width:"50vw",marginLeft:"1vw"}} placeholder="Answer"/>
      </Form.Item>
      <br/>
      <button  type='submit' className="button-249" a-key={d._id} onClick={(event,key)=>{setKey(event.target.getAttribute('a-key'))}}>
          Post Answer
        </button>
      </Form>}
  
      </>
    )
 )}
 </div>}
 { !size &&  <h1 class="gamma lato thin uppercase ls-xlarge">
	OOPS	NO Queries!</h1> }
  </div>
  </>
  )
}



  

          
   



