import React from 'react';
import './App.css';
import Greet, { AnotherGreet } from './Greetings';

function App() {
  return (
    <div className="App">
      <Greet />
      <AnotherGreet />
    </div>
  );
}

export default App;
