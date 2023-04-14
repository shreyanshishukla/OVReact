import React ,{useContext} from 'react'
import { AdminContext } from '../Context';
import AddCandidates from './AdminComponents/AddCandidate';
import { Result } from 'antd';
import { Analytics } from '@mui/icons-material';


export default function AdminPortal() {
    const Admin=useContext(AdminContext)
  return (
  <>
      <div>AdminPortal</div>
    AddCandidate   DeclareResult    ShowAnalytics

     {!Admin.AddCandidate && <Button>Add a candidate</Button>}
      {!Admin.DeclareResult && <Button>Declare Results</Button>}
      {!Admin.ShowAnalytics &&<Button>Display analytics</Button>}
      {Admin.AddCandidate && <AddCandidates/>}
      {Admin.DeclareResult && <Result/>}
      {Admin.ShowAnalytics && <Analytics/>}
  </>
  )
}
