import React from 'react'
import './Home.css'
export default function Home() {
 
  return (
    <div className='Home'>
       
<div className="section" data-description="Online-Voting">
	<div class="wrapper">
	 <h1 class="beta uppercase montserrat regular line-after-heading">
		Your Vote,Your Voice
		</h1>
		<p class="delta cardo regular italic" style={{marginLeft:"23vw"}}>
		Make your Vote count
		</p>
	 </div>
 </div>

	
	<div className="section" data-description="Vote Now">
	<div class="wrapper">
	 <h1 class="mega montserrat bold">
     Only you can cast your vote, <span class="color-emphasis-1"> only you.</span><br/>
     <button class="button-24" role="button">Vote Now</button> <span class="color-emphasis-1"></span>
		</h1>
	 </div>
	</div>
	
	<div className="section" data-description="Candidates">
	<div class="wrapper">
	 <h1 class="gamma lato thin uppercase ls-xlarge">
		 Explore more about<br/>
		 <span class="open-sans tera ls-xlarge bold">Candidates</span><br/>
		 <span class="epsilon ls-medium">You are going to Vote for</span>
		</h1>
        <button class="button-25" role="button">Explore Candidates</button>
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

        <button class="button-25" role="button">Click here</button>

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

        <button class="button-25" role="button">Click here</button>
		</h1>
	 </div>
	</div>
	
	
	<div className="section" data-description="FAQ">
	<div class="wrapper">
	 <h1 class="giga bree-serif regular double-header-line">Have any Questions?</h1>
     <br/>
     <br/>

        <button class="button-25" role="button">Ask Us</button>

	 </div>
	</div>
	
	
    </div>
  )
}
