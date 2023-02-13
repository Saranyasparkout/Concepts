import React from 'react';
function Forms(){
    function handleChange(event){
        // console.log("Data Changed")
        console.log(event.target.value);
    }
    return(
        <div>
            <h1>New Changes</h1>
            <input
            onChange={handleChange}
            type="text" placeholder="Enter Your Name"
            />
            <button>Submit</button>
        </div>
    )
}
export default Forms