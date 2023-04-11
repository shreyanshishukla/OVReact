import { useSetState } from '@mantine/hooks';
import  {createContext, useState} from 'react';

 const Context = createContext();
function UserProvider({children}){
    const [User, setUser] = useState("Shreyanshi");
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [showVoterProfile, setshowVoterProfile] = useState(true);
    const [showCandidateDetails, setshowCandidateDetails] = useState(true);
    const [showVotingPage, setshowVotingPage] = useState(false);
    const [showVoterProfilePage, setshowVoterProfilePage] = useState(false);
    const [showCandidateProfilePage, setshowCandidateProfilePage] = useState(false);
    const [showVoting, setshowVoting] = useState(true);
    return (
        <Context.Provider value={{User,setUser,isLoggedIn,setisLoggedIn,showVoting,showVoterProfilePage,showCandidateProfilePage,setshowCandidateProfilePage,setshowVoterProfilePage,setshowVoting,showCandidateDetails,showVotingPage,setshowVotingPage,setshowCandidateDetails,showVoterProfile,setshowVoterProfile}}>
            {children}
        </Context.Provider>
    )
}
export {Context,UserProvider}