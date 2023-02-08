// Handling Events In Functional Based components 
function FunctionEvent() {
    const handleClick = ()=>{
        console.log("Functional based Event handling!");
    }
return(
     <div>
     Functional based Components
     <button onClick={handleClick}>Click here</button>
     </div>
  )
    
}
export default FunctionEvent;
