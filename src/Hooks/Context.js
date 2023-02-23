//Use context....
import React, {createContext } from 'react'
import { useState , useContext } from 'react';

const UserContext = createContext();

const Context = () => {
    const [user,SetUser]=useState('Saranya');
  return (
    <div>
         <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <Context2/>
    </UserContext.Provider>
    </div>
   
  )
}
function Context2()
{
    return(
        <div>
            <Context3/>
        </div>
    )

}

function Context3(){
    const user = useContext(UserContext);
    return(
        <div>
            <h2>{`Hello ${user} again!`}</h2>
        </div>
    )
}

export default Context
