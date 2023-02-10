//Conditional rendering
import { useState} from "react";
export default function ConditionalComponent(){
    const [display,setDisplay] =useState(false);
    let output;
    if(display){
     output = <h2>This is a condtional component</h2>
     } else{
     return(
     output = <h3>Nothing to see here</h3>
     )
    }
    return <div>{output}</div>
}
