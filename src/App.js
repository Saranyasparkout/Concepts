// How to import a Src new files or components in React 
import React from 'react'
import Firstcomfun from './Funccomponents/Firstcomfun';
import ArrowFunction from './Funccomponents/ArrowFunction';
import Profile from './Funccomponents/Profile';
import FunctionEvent from './Funccomponents/FunctionEvent';
import ClassEvent from './Funccomponents/ClassEvent';
import Counter from './Components/Counter';
import FunctionalCounter from './Funccomponents/FunctionalCounter';
function App(){
  return(
    <div className="App">
    <Firstcomfun/>
    <ArrowFunction/>
    <Profile firstname = "Saranya" lastname ="sarah"/>
    <FunctionEvent/><br/>
    <ClassEvent/>
    <Counter/>
    <FunctionalCounter/> 
    </div>
  )
}

export default App;