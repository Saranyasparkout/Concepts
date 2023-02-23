//Usestate and UseReducer
import React from 'react'

export default function Exercise1() {

    let user = "React"
    user = "Saranayaaaa sarah"
    console.log(user)
    const Changename =() => {


    }
    return (
    <>
       <h3>{user}</h3>
       <button onClick={Changename}>ChangeNmae</button>
    </>

    )
}