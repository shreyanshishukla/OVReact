import { useSetState } from '@mantine/hooks';
import  {createContext, useState} from 'react';

 const Context = createContext();
function UserProvider({children}){
    const [User, setUser] = useState("Shreyanshi");
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [showVoterProfile, setshowVoterProfile] = useState(false);
    const [showContactDetails, setshowContactDetails] = useState(false);
 
    return (
        <Context.Provider value={{User,setUser,isLoggedIn,setisLoggedIn,showContactDetails,setshowContactDetails,showVoterProfile,setshowVoterProfile}}>
            {children}
        </Context.Provider>
    )
}
export {Context,UserProvider}