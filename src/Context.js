import { useSetState } from '@mantine/hooks';
import  {createContext, useState} from 'react';

 const Context = createContext();
 const AdminContext=createContext();
function UserProvider({children}){
    const [User, setUser] = useState("Shreyanshi");
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [showVoterProfile, setshowVoterProfile] = useState(false);
    const [showCandidateDetails, setshowCandidateDetails] = useState(false);
    const [showVotingPage, setshowVotingPage] = useState(false);
    const [showVoterProfilePage, setshowVoterProfilePage] = useState(false);
    const [showCandidateProfilePage, setshowCandidateProfilePage] = useState(false);
    const [showVoting, setshowVoting] = useState(true);
    const [adminLoggin, setadminLoggin] = useState(false);
    const[Voted,setVoted]=useState(false);
    const [RegisterUser, setRegisterUser] = useState(false);
    const [UserOTP, setUserOTP] = useState(false)
    const setAllFalse=()=>{
     //   setUser({firstName:"shreyanshi",lastName:"shukla",email:"sdd",passsword:""})
        setshowVoterProfile(false)
        setisLoggedIn(false)
        setshowCandidateDetails(false)
        setshowVotingPage(false)
        setshowVoterProfilePage(false)
        setshowCandidateProfilePage(false)
        setshowVoting(false)
        setadminLoggin(false)
        setRegisterUser(false)
        setUserOTP(false);



    }
    
    return (
        <Context.Provider value={{Voted,UserOTP,setUserOTP,setVoted,setAllFalse,RegisterUser, setRegisterUser,adminLoggin,setadminLoggin,User,setUser,isLoggedIn,setisLoggedIn,showVoting,showVoterProfilePage,showCandidateProfilePage,setshowCandidateProfilePage,setshowVoterProfilePage,setshowVoting,showCandidateDetails,showVotingPage,setshowVotingPage,setshowCandidateDetails,showVoterProfile,setshowVoterProfile}}>
            {children}
        </Context.Provider>
    )
}
function AdminProvider({children}){
   const [AddCandidate, setAddCandidate] = useState(false);
   const [DeclareResult, setDeclareResult] = useState(false);
    const [ShowAnalytics, setShowAnalytics] = useState(false);
    const [adminLoggedIn, setadminLoggedIn] = useState(false);
    const [RegisterAdmin, setRegisterAdmin] = useState(false)
    const [CandidateAddedSuccessfully, setCandidateAddedSuccessfully] = useState(false)
    const [AdminOTP, setAdminOTP] = useState(false)
    const [Error, setError] = useState(false)

    const [Admin, setAdmin] = useState({});

    const setAllFalse=()=>{
        setAdmin({})
        setAddCandidate(false)
        setDeclareResult(false)
        setShowAnalytics(false)
        setadminLoggedIn(false)
        setRegisterAdmin(false)
        setCandidateAddedSuccessfully(false);
        setError(false);
        setAdminOTP(false);

        

    }

    return (
        <AdminContext.Provider value={{CandidateAddedSuccessfully,setAdminOTP,AdminOTP, setCandidateAddedSuccessfully,Error, setError,setAllFalse,RegisterAdmin, setRegisterAdmin,Admin,setAdmin,ShowAnalytics,adminLoggedIn,setadminLoggedIn,setShowAnalytics,setDeclareResult,DeclareResult,AddCandidate, setAddCandidate}}>
            {children}
       </AdminContext.Provider>
    )
}
export {Context,UserProvider,AdminContext,AdminProvider}