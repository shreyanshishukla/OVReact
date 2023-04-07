import React,{useContext} from 'react'
import Login from './Login';
import Main from './Main'
import { Context } from '../Context';

export default function OnlineVoting() {
  const User=useContext(Context)
  return (
    <>
       { !User.isLoggedIn &&<Login/>}
       { User.isLoggedIn && <Main/>}
    </>
  )
}
