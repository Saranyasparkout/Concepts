import React from 'react'
import Firstcomfun from './Firstcomfun';
import ArrowFunction from './ArrowFunction';
import Profile from './Profile';
import FunctionEvent from './FunctionEvent';
import ClassEvent from './ClassEvent';
import FunctionalCounter from './FunctionalCounter';
import ConditionalComponent from './ConditionalComponent';
import TernaryCondition from './TernaryCoundition';
import Course from './Course';
import Developer from './Developer';
import UseCount from './UseCount';
import Forms from './Newone/Forms';
import MyForm from './MyForm';
import Accordion from './Accordion';
import Acc from './Acc';
import Tick from './Tick';

const FC = () => {
  return (
    <div>
    <Firstcomfun/>
    <ArrowFunction/>
    <Profile firstname = "Saranya" lastname ="sarah"/>
    <FunctionEvent/><br/>
    <ClassEvent/>
    <FunctionalCounter/> 
    <ConditionalComponent/>
    <TernaryCondition/>
    <Course/>
    <Developer/>
    <UseCount/><br/>
    <Forms/><br/>
    <MyForm/>
    <Acc/>
    <Accordion/>
    <Tick/>
    </div>
  )
}

export default FC
