import React,{useEffect, useState} from 'react'
import axios from 'axios'
import './Result.css'
import { Chart } from "react-google-charts";

export default function Result() {

const [win, setwin] = useState("")
var x={};
const [a, seta] = useState()
const [b, setb] = useState()
const [c, setc] = useState()

useEffect(() => {
  axios.get('http://localhost:5000/getanalytics',undefined)
  .then((response) => {
 x=response.data.Analytics;
 seta(x.a)
 setb(x.b)
 setc(x.c)
 console.log(x.a)
  }, (error) => {
    console.log(error);
  });


}, [])
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

const data = [
  ["Task", "Hours per Day"],
  ["Total Number of Voters Voted:", 11],
  ["Total Number of Voter not Voted", 2],

];
const data2 = [
  ["Task", "Hours per Day"],
  ["Shashank Pandey:", 11],
  ["Stuti Awasthi", 22],
  ["Jhanvi Gupta", 12],


];
const options = {
  tittle: "Showing Analytics",
  is3D:true,
};
const options2 = {
  tittle: "Total number of votes per Candidate",
  is3D:true,
};
  return (
<>
<div className='Home'>
       
       <div className="section" data-description="Online-Voting">
         <div class="wrapper">
   
          {win=='' &&   <h1 class="beta uppercase montserrat regular line-after-heading"> No Winner </h1>}
          {win!='' &&   <h1 class="beta uppercase montserrat regular line-after-heading">Winner is {win}</h1>}
           
           <p class="delta cardo regular italic" style={{marginLeft:"23vw"}}>
              RESULTS DECLARED !!
           </p>
           <div style={{display:"flex", flexDirection:"row"}}>

    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"300px"}
    />
     <Chart
      chartType="PieChart"
      data={data2}
      options={options2}
      width={"100%"}
      height={"300px"}
    />
    </div>
          </div>

        </div>
 

        </div>
</>  )
}
