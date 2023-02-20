// Controlled Child Component
import React from 'react'
const Concept1= ({value,onChange}) => {
  return (
    <div>
        <input type='text' placeholder='Enter Anything' onChange={onChange}></input>
      <p>Value : {value}</p>
    </div>
  )
}

export default Concept1