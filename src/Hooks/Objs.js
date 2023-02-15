import React from 'react'
import { useState } from 'react';

const Objs = () => {
    const [state,setState] = useState({
        counter :0,
        message : 'Hello I am Hooks',
        isEnabled:true
      })
    
      const handleClick =  ()=>
      {
        setState(prevState =>({
          ...prevState,
          counter :prevState.counter+1,
          message : 'Object as a state',
          isEnabled : false
        }))
      }
    
      return(
        <div>
          <p>Counter : {state.counter}</p>
          <p>Message : {state.message}</p>
          <button onClick={handleClick} disabled={!state.isEnabled}>Click me</button>
        </div>
      )
}

export default Objs
