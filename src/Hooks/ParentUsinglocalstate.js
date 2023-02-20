import React from 'react'

const ParentUsinglocalstate = () => {
const [user,SetUser] = usestate('React')    
    return (
     <>
     <h1>ParentUsinglocalstate</h1>
     <Component1 user= {user}/>
     </>
  )
  function Component1({user}){
    return(
    <>
     <h3>Component 1</h3>
     

    </>
    )
  }
}
function Component2({user}){
    return(
    <>
     <h3>Component 2</h3>
    </>
    )
  }
  function Component3({user}){
    return(
    <>
     <h3>Component 3</h3>
    </>
    )
  }

  function Component4({user}){
    return(
    <>
     <h3>Component 4</h3>
    </>
    )
  }

  function Component5({user}){
    return(
    <>
     <h3>Component 5</h3>
     <h1>{`user is ${user}`}</h1>
    </>
    )
  }


export default ParentUsinglocalstate
