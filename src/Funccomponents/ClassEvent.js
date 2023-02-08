// Using Handling Event & Event Binding in Class component
import { Component } from "react";
class ClassEvent extends Component{
    handeleClick(){
        console.log("Class based event handling!");
    }
    render(){
        return(
            <div>
                Class based Components
                <button onClick= {this.handeleClick}>Click here</button>
            </div>
        )
    }
}
export default ClassEvent;

