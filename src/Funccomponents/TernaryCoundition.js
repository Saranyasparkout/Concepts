//Ternary Conditional
import { useState} from "react";
export default function TernaryCondition(){
const [display,setDisplay] =useState(true);
return display ? (
    <div>
    <h2>This is a Ternary Conditional</h2>
    </div>
) : (
    <div>
    <h2>Nothing to see here</h2>
    </div>
);

}