import React ,{useContext} from 'react'
import { AdminContext,Context } from '../../Context';
import AddCandidates from './AddCandidate';
import ResponsiveAppBar from '../../material-ui/RA2'
import Success from './Success';
import Error from './Error';
import Results from './Results'
import Delete from './Delete';
import Contact from '../menubar/Contact/Contact';
import About from '../menubar/About/About'
import Home from '../menubar/Home2/Home2'
import FAQ from './FAQ'

export default function AdminPortal() {
    const Admin=useContext(AdminContext)
    const User=useContext(Context)
    console.log("user",User)
    console.log("admin",Admin)
    const handleaddCandidate =()=>{
      Admin.setAllFalse();
      User.setAllFalse();
      Admin.setadminLoggedIn(true)
      Admin.setAddCandidate(true)
      

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
  <>
      
     <ResponsiveAppBar/>
     <div style={{margin:"5vh"}}>
     {!Admin.AddCandidate && <button onClick={handleaddCandidate} className='button-1'>Add a candidate</button>}
      {!Admin.DeclareResult && <button onClick={handleDeclareResults} className='button-1'>Declare Results</button>}
      {!Admin.DeleteCandidate &&<button onClick={handleDeleteCandidate} className='button-1'>Delete a candidate</button>}
      {Admin.AddCandidate && <AddCandidates/>}
      {Admin.DeclareResult && <Results/>}
      {Admin.Error && <Error/>}
      {Admin.CandidateAddedSuccessfully && <Success/>}
      {Admin.DeleteCandidate && <Delete/>}
      {Admin.Contact && <Contact/>}
{Admin.FAQ && <FAQ/>}
{!Admin.AddCandidate && !Admin.Contact && !Admin.FAQ && !Admin.DeclareResult && !Admin.About && !Admin.DeleteCandidate &&  ! Admin.Error && !Admin.CandidateAddedSuccessfully && !Admin.DeleteCandidate &&  <Home/>}
{Admin.About && <About/>}

      


      </div>
  </>
  )
}
