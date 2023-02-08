//class component example
import { Component } from "react";
class Message extends Component{
  render(){
     return(
     <div>
     <h1>This is a Class Component</h1>
     <h2>Message:{this.props.messagecontent}</h2>
     </div>
     );
    }
}
export default Message;
