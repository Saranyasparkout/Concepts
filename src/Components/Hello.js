//how to use functional components & arrow function

const displayMessage= ()=>{
    return "I need help!";
}

function Hello(){
    return<h1>The Message is:{displayMessage()}</h1>
}
export default Hello;