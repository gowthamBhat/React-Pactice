import React from 'react';
import './App.css';
import FormComponent from './components/FormComponent'
// import './components/styleSheet.css';
// import ColorSheet from './components/colorSheet'
// import List from './components/List'
// import ParentComponent from './components/ParentComponent'
// import ConditionalRenderning from './components/ConditionalRenderning'

// import Greet, { AnotherGreet } from './components/Greetings'; // both components are imported from greetings.js file to use in app.js component
// import Greetings2 from './components/greetings2_cc';
// import Welcome from './components/welcome';
// import CounterCal from './components/Counter'
// import ClickHandler, { HandleEvent } from './components/ClickHandler'
function App() {
  return (
    <div className="App">
      <FormComponent />
      {/* <ColorSheet />
      <List /> */}
      {/* <ParentComponent />
      <ConditionalRenderning /> */}
      {/* <Greet name="Sitha-ram" secondName="Shree ram" />
      <AnotherGreet> arg passed to a functional component </AnotherGreet>
      <Greetings2> <p>argument passed to a class component</p> </Greetings2>
      <Welcome />
      <CounterCal />
      <ClickHandler />
      <HandleEvent /> */}

    </div>
  );
} // name gowtham is passed as argument to make the page dynamic, it will be handled in greetings.js file
//Greetings2 class component adralli pass mado prop access madodu this keyword use madi
export default App;
