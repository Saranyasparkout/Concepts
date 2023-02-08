//Using usestate in Functional components
import { useState } from "react";
function FunctionalCounter(){
    const [counter,setCounter] =useState(0)
    const increment =() =>{
        setCounter(counter+1);
        
    }
    const decrement =() =>{
        setCounter(counter-1);
        if(counter==-1){
            alert("There is nothing to decrease")
        }
    }
   
    return<div>
        <div>Counter value in Functional components <br/> {counter} </div>
        <br/>
        <button type="button"onClick={increment}>Increment</button>
        &nbsp;
        <button type="button"onClick={decrement}>Decrement</button>
        </div>

}
export default FunctionalCounter; 