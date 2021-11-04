import React from 'react';
import './App.css';
import PadInput from './components/PadInput';
import DesignBoard from './components/DesignBoard';
function App() {
  return (
    <div className="container">
      <h1>DESIGN PAD</h1>
      <div id="componentsContainer">
        <PadInput/>
        <DesignBoard/>
      </div>
    </div>
  );
}

export default App;
