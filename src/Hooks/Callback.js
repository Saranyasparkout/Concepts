import React from 'react';
import { useCallback,useState } from 'react';
import CallbackC from './CallbackC';

const Callback = () => {
  const[count,setCount]=useState(0);

  const incrementCount = useCallback(()=> { //The useCallback hook is used to memoize the function and specify that it depends on the count state variable.
    setCount(count + 1 );
  }, [count]);


  return (
    <div>
      <CallbackC incrementCount={incrementCount}/>
      <p>{count}</p>
    </div>
  )
}

export default Callback