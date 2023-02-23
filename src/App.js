// How to import a Src new files or components in React 
import React from 'react'
import Callback from './Hooks/Callback';
import Memo from './Hooks/Memo';
//import Exercise from './Hooks/Exercise1';
//import Github from './Hooks/Github';
// import FC from './Funccomponents/FC';
// import Expressions from './Expressions ';
// import Counter from './Components/Counter';
// import Objs from './Hooks/Objs';
// import Concept1 from './Components/Concept1';
import Exercise1 from './Hooks/Exercise1';
import Context from './Hooks/Context'
import Reducer from './Reducer';
import Ref from './Hooks/Ref';
import ParentUsinglocalstate from './Hooks/ParentUsinglocalstate';
function App(){
  return(
    <div className="App">
    {/* <FC/> */}
    {/* <Objs/> */}
    {/* <Github username='Saranyasparkout'/>  */}
    {/* <Expressions/> */}
    {/* <Counter/> */}
    {/* <Concept1/> */}
    {/* <Concept2/> */}     
    <Exercise1/>
    <Context/>
    <Ref/>
    <Reducer/>
    <Memo a={8} b={8}/>

    <ParentUsinglocalstate/>
    <Callback/>
    </div>                    
  )
}

export default App;