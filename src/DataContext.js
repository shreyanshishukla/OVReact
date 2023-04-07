import { Context } from './Context';
import React ,{useState} from 'react'

export default function DataContext() {
    const [User, setUser] = useState("");
    return (
      <div>
         <Context.Provider
          value={ {User,setUser} }>
          {this.props.children}
        </Context.Provider>
        </div>
    )
}



