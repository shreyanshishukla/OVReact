import React ,{useContext} from 'react'
import { AdminContext,Context } from '../../Context';
import AddCandidates from './AddCandidate';
import ResponsiveAppBar from '../../material-ui/RA2'
import Success from './Success';
import Error from './Error';
import Results from './Results'
import Analytics from './Analytics'
import Delete from './Delete';


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
    const handldeAnalytics=()=>
    {
      Admin.setAllFalse();
      User.setAllFalse();
      Admin.setadminLoggedIn(true)
      Admin.setShowAnalytics(true)

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
      {!Admin.ShowAnalytics &&<button onClick={handldeAnalytics} className='button-1'>Display analytics</button>}
      {!Admin.DeleteCandidate &&<button onClick={handleDeleteCandidate} className='button-1'>Delete a candidate</button>}
      {Admin.AddCandidate && <AddCandidates/>}
      {Admin.DeclareResult && <Results/>}
      {Admin.ShowAnalytics && <Analytics/>}
      {Admin.Error && <Error/>}
      {Admin.CandidateAddedSuccessfully && <Success/>}
      {Admin.DeleteCandidate && <Delete/>}

      


      </div>
  </>
  )
}
