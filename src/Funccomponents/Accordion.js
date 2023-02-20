//Accordion and Panel - without lift
import React from "react";
import Panel from "./Panel";
const Accordion=()=>{
  return(
  <>
  <h2>Components without State Lifted</h2>
  <Panel title='Pradeep Kumar'>
    hi !I am a Singer
    </Panel>
    <Panel title='Sid Sriram'>
      hi! I am a Singer
      </Panel>

  
  </>
  )
}
export default  Accordion
