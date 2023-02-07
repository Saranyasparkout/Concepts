//How to import a Src new files or components in React 
import React from 'react'
import Property from './Components/Property';
import MyComponent from './Components/MyComponent';
import Counter from './Components/Counter';
function App() {
  return (
    <div className="App">
      <Property name="Saranya Sarah" age="20" place="cbe" />
      <MyComponent/>
      <Counter/>
     </div>
    
  );
}

export default App;