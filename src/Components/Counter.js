//How to Use setstate In class Components & Event binding in
import React,{ Component } from "react";
class Counter extends Component{
        state={
            count:0
        }
        OnIncrement=()=>{
        console.log(this)
        this.setState((prevstate=>({count:prevstate.count+1})))
        }
        OnDecrement=()=>{
        console.log(this)
        this.setState((prevstate=>({count:prevstate.count-1})))
        }
        render(){
        const {count}=this.state;
        return(
        <div>
        <p>Counter value in Class components</p>
        <p>{count}</p>
        <button type="button"onClick={ this.OnIncrement}>Increment</button>
        <button type="button"onClick={ this.OnDecrement}>Decrement</button>
        </div>
    )
    }
}

export default Counter
