//How to import a Src new files or components in React 
import React from 'react';
import Hello  from "./Components/Hello";
import Message from "./Components/Message";
import Property from './Components/Property';
function App() {
  return (
    <div className="App">
      <Hello/>
      <Message messagecontent="This is a message from props"/>
      <Property name="Saranya Sarah" age="20" place="cbe" />
     </div>
  );
}

export default App;