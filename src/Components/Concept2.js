// Controlled Parent Component 
import React from 'react'
import { useState } from 'react'
import Concept1 from './Concept1';
const Concept2 = () => {
  const [inputValue,setInputValue]=useState('');

  function handleInputValue(event)
  {
    setInputValue(event.target.value);
  }
  return (
    <div>
      <Concept1 value={inputValue} onChange={handleInputValue}/>
    </div>
  )
}

export default Concept2
