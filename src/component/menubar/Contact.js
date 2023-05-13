import React from 'react'
import './Contact.css'
import email from '../../Images/email.jpg'
import locc from '../../Images/locc.png'
import phn from '../../Images/phn.png'
export default function Contact() {
  
 
  const contact=[{
    name:"Shreyanshi Shukla",
    contact_details:"9433823499",
    email:"shreyanshi1217@gmail.com",
    address:"Lucknow Uttar Pradesh"
  },{
    name:"Shashank Pandey",
    contact_details:"9433823499",
    email:"shashankpandey@gmail.com",
    address:"Gorakhpur Uttar Pradesh"
  }]
  return (
<>  <div className='m'>
  
        <div class="container">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400" rel="stylesheet"></link>

  <div class="card">
    <h3 class="title">Card 1</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
    </div>
 
  </div>
 
  <div class="card">
    <h3 class="title">Card 3</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
    </div>
   
  </div>
</div>
     </div>
</>
  )
}
