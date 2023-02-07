//How to Use This.state In class Components
import { Components } from "react";

class Counter extends Components{
    constructor(){
        super();
        this.state={
            Counter:0,
        };
    }
    render(){
      return<h3>The count value is:{this.Counter.Message}</h3>
    }

}
export default Counter;
