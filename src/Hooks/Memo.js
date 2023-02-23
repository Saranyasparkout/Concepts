import React from 'react'
import { useMemo } from 'react';

const Memo = ({a,b}) =>{
  const result = useMemo(() =>{
    return a*b;
  },[a,b])
  return (
    <div>{result}</div>
  )
}

export default Memo