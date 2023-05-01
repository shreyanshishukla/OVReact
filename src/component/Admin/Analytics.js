import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Analytics() {
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
  
  return (
  <>
     <div>Showing Analytics</div>
    <p> Total Number of Voters:{b} </p>
    <p> Total Number of Candidates :{a}</p>
    <p>  Total number of votes:{c} </p>


  </>
  )
}
