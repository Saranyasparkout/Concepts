// How to import a Src new files or components in React 
import React from 'react'
import Firstcomfun from './Funccomponents/Firstcomfun';
import ArrowFunction from './Funccomponents/ArrowFunction';
import Profile from './Funccomponents/Profile';
import FunctionEvent from './Funccomponents/FunctionEvent';
import ClassEvent from './Funccomponents/ClassEvent';
import Counter from './Components/Counter';
import FunctionalCounter from './Funccomponents/FunctionalCounter';
import ConditionalComponent from './Funccomponents/ConditionalComponent';
import TernaryCondition from './Funccomponents/TernaryCoundition';
import Course from './Funccomponents/Course';
import Developer from './Funccomponents/Developer';
import UseCount from './Funccomponents/UseCount';
import Forms from './Funccomponents/Newone/Forms';
import MyForm from './Funccomponents/MyForm';
import Accordion from './Funccomponents/Accordion';
import Acc from './Funccomponents/Acc';
// import Card from './Funccomponents/Card';
function App(){
  return(
    <div className="App">
    <div className="SplitPane"></div>
    <div className="Chat" />
     <div className="Contacts" />
    <Firstcomfun/>
    <ArrowFunction/>
    <Profile firstname = "Saranya" lastname ="sarah"/>
    <FunctionEvent/><br/>
    <ClassEvent/>
    <Counter/>
    <FunctionalCounter/> 
    <ConditionalComponent/>
    <TernaryCondition/>
    <Course/>
    <Developer/>
    <UseCount/><br/>
    <Forms/><br/>
    {/* <Card><p>Hello paragraph</p></Card>
    <SplitPane/>
    <Contacts/>
    <Chat/> */}
    <MyForm/>
    <Acc/>
    <Accordion/>
    </div>
  )
}

export default App;