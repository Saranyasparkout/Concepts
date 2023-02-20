// How to import a Src new files or components in React 
import React from 'react'
//import Github from './Hooks/Github';
// import FC from './Funccomponents/FC';
// import Expressions from './Expressions ';
// import Counter from './Components/Counter';
//import Objs from './Hooks/Objs';
import Concept1 from './Components/Concept1';
import Concept2 from './Components/Concept2';
function App(){
  return(
    <div className="App">
    {/* <FC/> */}
    {/* <Objs/> */}
    {/* <Github username='Saranyasparkout'/>  */}
    {/* <Expressions/> */}
    {/* <Counter/> */}
    <Concept1/>
    <Concept2/>
    </div>
  )

}

export default App;