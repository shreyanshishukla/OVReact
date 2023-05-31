import React,{useContext,useState} from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { AdminContext,Context } from '../../Context';
import axios from 'axios';
import { useEffect } from 'react';
import './Admin.css'
import Election from './../../ABI/Election.json'
import Web3 from 'web3'
export default function AddCandidates() {
  const [WalletAddress, setWalletAddress] = useState();
  const [ElectionBlockchain, setElectionBlockchain] = useState();
  async function loadWeb3()
  {
    const provider= window.ethereum;
    window.web3= new Web3(provider)
    await window.ethereum.enable();

  }
  async function loadBlockchainData()
  {
    const WEB3=window.web3;
    const account=await WEB3.eth.getAccounts();
    const netid=await WEB3.eth.net.getId();
    console.log("WEB3",WEB3);
    console.log("accounts",account[0]);
    console.log("netID",netid)
    setWalletAddress(account[0])
    const electionData=Election.networks[netid];
    if(electionData)
    {
      const ele=await new WEB3.eth.Contract(Election.abi,electionData.address)
      await setElectionBlockchain(ele)
    }
  }
  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  },[])
  useEffect(() => {
    setalreadyexits(false)
  }, [])

  const Admin=useContext(AdminContext)
  const User=useContext(Context)
  const [alreadyexits, setalreadyexits] = useState(false)
  const addCandidateToBlockchain=async (id,name)=> {
    await ElectionBlockchain.methods.addCandidate(name, id).send({ from: WalletAddress })
    .on('receipt', (receipt) => {
     console.log(receipt)
})
console.log("addeddd")}
const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        axios.post('http://localhost:5000/admin/addCandidates', {
          firstName: values.firstName,
          lastName: values.lastName,
          party:values.party,
          age:values.age,
          gender:values.gender
        })
        .then( async (response) => {
          if(response.data!='failure')
          { 
            console.log("stssss",WalletAddress)

            User.setAllFalse();
            Admin.setAllFalse();
            Admin.setadminLoggedIn(true)
            Admin.setCandidateAddedSuccessfully(true)
            const name=values.firstName+' '+values.lastName;
            let id=5657;
            // addCandidateToBlockchain(4565,name)
           await ElectionBlockchain.methods.candidatesCount().call({from: WalletAddress})
.then(function(result){
  console.log(result);
 
});
 } else{ setalreadyexits(true)}}, (error) => {
          User.setAllFalse();
          Admin.setAllFalse();
          Admin.setadminLoggedIn(true)
          Admin.setError(true)
          console.log(error);
        });

      };
    console.log("fgh",ElectionBlockchain)

  return (
    <>    <div className='ad'>
    <h1 class="gamma lato thin uppercase ls-xlarge">
		Add candidates!</h1>
    <Form name="normal_login" className="login-form" onFinish={onFinish}>
      <Form.Item name="firstName" rules={[{ required: true, message: 'Please input your Username!' }]}>
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Firstname" />
      </Form.Item>
      <Form.Item  name="lastName" rules={[{ required: true, message: 'Please input your Username!' }]} >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Lastname" />
      </Form.Item>
      <Form.Item name="party"  rules={[{ required: true, message: 'Please input Party name!' }]} >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="party name" />
      </Form.Item>
      <Form.Item   name="age"    rules={[{ required: true, message: 'Please input age !' }]}  >
        <Input prefix={<LockOutlined className="site-form-item-icon" />}  type="number"   placeholder="age"
        />
      </Form.Item>
      <Form.Item  name="gender" rules={[{ required: true, message: 'Gender !' }]} >
        <Input prefix={<LockOutlined className="site-form-item-icon" />}  placeholder="gender" />
      </Form.Item>
      <div>{alreadyexits && <div class="failure-msg">
  <i class="fa fa-check"></i>
  Candidate Already exists 
</div>}</div>
 <Form.Item>
        <button  type='submit' className="button-249">
          Add Candidate
        </button>
      </Form.Item>
    </Form>
  </div>
  </>
  )
}