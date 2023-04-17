import React,{useEffect, useState} from 'react'
import axios from 'axios'

export default function Result() {
const [win, setwin] = useState("nONE")
useEffect(() => {
  axios.get('http://localhost:5000/result',undefined)
  .then((response) => {
  console.log("winner" ,response)
  const index=response.data.winner
  axios.get('http://localhost:5000/fetchCandidates',undefined)
  .then((response) => {
  console.log("winner" ,response.data.Candidatesdata[index])
  setwin(response.data.Candidatesdata[index].firstName)
  
  console.log("win",win)
  win=response.data.Candidatesdata[index]
}, (error) => {
    console.log(error);
  });}, (error) => {
    console.log(error);
  });

  
}, [])


  return (
<>
  <div>Result
  <p>{win
}</p></div>
</>  )
}
