import React from 'react'

const CallbackC = ({incrementCount}) => {
  return (
    <div>
      <button onClick={incrementCount}>Increment</button>
    </div>
  )
}

export default CallbackC