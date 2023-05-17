import React ,{useContext} from 'react'

import './home2.css'
import { AdminContext,Context } from '../../../Context';

export default function Home2() {
	const Admin=useContext(AdminContext)
const User=useContext(Context)
	const handleaddCandidate =()=>{
		Admin.setAllFalse();
		User.setAllFalse();
		Admin.setadminLoggedIn(true)
		Admin.setAddCandidate(true)
  
	  }
	  const handleContact=()=>{
		console.log(";k;kjlk")
		Admin.setAllFalse();
		Admin.setadminLoggedIn(true)
		Admin.setContact(!Admin.Contact)
	  }
	  const handleFAQ=()=>{
		console.log("clicked")
		Admin.setAllFalse();
		Admin.setadminLoggedIn(true)
		Admin.setFAQ(!Admin.FAQ)
	  }
	  const handleAbout=()=>{
		console.log("clickedd")
		Admin.setAllFalse();
		Admin.setadminLoggedIn(true)
		Admin.setAbout(!Admin.About)
	  }
	  const handleDeclareResults=()=>
	  {
		Admin.setAllFalse();
		User.setAllFalse();
		Admin.setadminLoggedIn(true)
		Admin.setDeclareResult(true)
  
	  }
	 
	  const handleDeleteCandidate=()=>{
		Admin.setAllFalse();
		User.setAllFalse();
		Admin.setadminLoggedIn(true)
		Admin.setDeleteCandidate(true)
	  }
  
 
  return (
    <div className='Home'>
       
<div className="section" data-description="Online-Voting">
	<div class="wrapper">
	 <h1 class="beta uppercase montserrat regular line-after-heading">
		Add Candidates
		<br/>
		<br/>
		<button class="button-24" role="button" onClick={handleaddCandidate}>Click here</button> <span class="color-emphasis-1"></span>

		</h1>
		
	 </div>
 </div>

	
	<div className="section" data-description="Vote Now">
	<div class="wrapper">
	 <h1 class="mega montserrat bold">
 <span class="color-emphasis-1"> Delete Candidates.</span><br/>
     <button class="button-24" role="button" onClick={handleDeleteCandidate}>Click here</button> <span class="color-emphasis-1"></span>
		</h1>
	 </div>
	</div>
	
	<div className="section" data-description="Candidates">
	<div class="wrapper">
	 <h1 class="gamma lato thin uppercase ls-xlarge">
		<br/>
		 <span class="open-sans tera ls-xlarge bold">Answer Pending Queries</span><br/>
	
		</h1>
        <button class="button-25" role="button" onClick={handleFAQ}>Click here</button>
	 </div>
	</div>
	
	<div className="section" data-description="About-us">
	<div class="wrapper">
	 <h1 class="gamma light merriweather  text-right">
       
		Know more about how <br/>
        <br/>
    

		 <span class="open-sans tera ls-small bold">Online Voting</span><br/>
        <br/>

        
		Using Blockchain works <br/>
        <br/>
        <br/>

        <button class="button-25" role="button" onClick={handleAbout}>Click here</button>

		</h1>
	 </div>
	</div>
	
	<div className="section" data-description="Contact-us">
	<div class="wrapper">
	 <h1 class="delta uppercase thin raleway color-emphasis-2 ls-medium">
		 Know more about <br/>
		<span class="supersize montserrat bold">Developers</span>
        <br/>
        <br/>

        <button class="button-25" role="button" onClick={handleContact}>Click here</button>
		</h1>
	 </div>
	</div>
	
	
	<div className="section" data-description="FAQ">
	<div class="wrapper">
	 <h1 class="giga bree-serif regular double-header-line">Declare Results</h1>
     <br/>
     <br/>

        <button class="button-25" role="button" onClick={handleDeclareResults}>Click Here</button>

	 </div>
	</div>
	
	
    </div>
  )
}
