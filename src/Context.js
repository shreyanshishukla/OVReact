import { useSetState } from '@mantine/hooks';
import  {createContext, useState} from 'react';

 const Context = createContext();
 const AdminContext=createContext();
function UserProvider({children}){
    const [User, setUser] = useState("Shreyanshi");
    const [isLoggedIn, setisLoggedIn] = useState(true);
    const [showVoterProfile, setshowVoterProfile] = useState(true);
    const [showCandidateDetails, setshowCandidateDetails] = useState(true);
    const [showVotingPage, setshowVotingPage] = useState(false);
    const [showVoterProfilePage, setshowVoterProfilePage] = useState(false);
    const [showCandidateProfilePage, setshowCandidateProfilePage] = useState(false);
    const [showVoting, setshowVoting] = useState(true);
    const [adminLoggin, setadminLoggin] = useState(false);
    const [Admin, setAdmin] = useState({});
    return (
        <Context.Provider value={{Admin,setAdmin,adminLoggin,setadminLoggin,User,setUser,isLoggedIn,setisLoggedIn,showVoting,showVoterProfilePage,showCandidateProfilePage,setshowCandidateProfilePage,setshowVoterProfilePage,setshowVoting,showCandidateDetails,showVotingPage,setshowVotingPage,setshowCandidateDetails,showVoterProfile,setshowVoterProfile}}>
            {children}
        </Context.Provider>
    )
}
function AdminProvider({children}){
   const [AddCandidate, setAddCandidate] = useState(false);
   const [DeclareResult, setDeclareResult] = useState(false);
    const [ShowAnalytics, setShowAnalytics] = useState(false);

    return (
        <Context.Provider value={{ShowAnalytics,setShowAnalytics,setDeclareResult,DeclareResult,AddCandidate, setAddCandidate}}>
            {children}
        </Context.Provider>
    )
}
export {Context,UserProvider,AdminContext,AdminProvider}