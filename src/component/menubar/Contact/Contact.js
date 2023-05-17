import React from 'react'
import './Contact.css'
import email from '../../../Images/email.jpg'
import locc from '../../../Images/locc.png'
import phn from '../../../Images/phn.png'
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
  <div className="outer">
<section>
	<div class="container">
		<div class="row justify-content-center">
      
      
			<div class="col-8 col-md-6">
        <div class="jelly-card">
				  <div class="cards py-3 ">
            
            <div class="row">
            <div class="col-10 col-md-4 col-lg-3 jelly-bloc text-center text-md-start">
                
              </div>
                <div class="col-12 col-md-8 col-lg-8">
                <div class="card-body slowfloat2s">
                  <h5 class="card-title">
                    Shreyanshi Shukla
                  </h5>
                  <div class="line"></div>
                  <p class="card-text">
                  Software Developer<br/>
                  <img src={phn} className='tools'/> 892832737<br/>
                  <img src={email} className='tools'></img> shreyashi1217@gmail.com<br/>
                  <img src={locc} className='tools'></img>Lucknow,Uttar Pradesh,India
                  </p>
                   <i class="fas fa-disease slowfloat3s"></i>
                </div>
            </div>
            </div>
				</div>
        </div>
      </div>
      
      
		</div>
	</div>
</section>
<section>
	<div class="container">
		<div class="row justify-content-center">
      
      
			<div class="col-8 col-md-6">
        <div class="jelly-card">
				  <div class="cards py-3 ">
            
            <div class="row">
            <div class="col-10 col-md-4 col-lg-3 jelly-bloc text-center text-md-start">
              
              </div>
                <div class="col-12 col-md-8 col-lg-8">
                <div class="card-body slowfloat2s">
                <h5 class="card-title">
                    Shashank Pandey
                  </h5>
                  <div class="line"></div>
                  <p class="card-text">
                  Software Developer<br/>
                  <img src={phn} className='tools'></img> 892832737<br/>
                  <img src={email} className='tools'></img> shashankpandey@gmail.com<br/>
                  <img src={locc} className='tools'></img>Lucknow,Uttar Pradesh,India<br/>
                  </p>
                   <i class="fas fa-disease slowfloat3s"></i>
                </div>
            </div>
            </div>
				</div>
        </div>
      </div>
      
      
		</div>
	</div>
</section>
</div>
     </div>
</>
  )
}