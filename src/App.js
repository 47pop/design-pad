import React from 'react';
// import './App.css';
// import PadInput from './components/PadInput';
// import DesignBoard from './components/DesignBoard';
// ------------------------------------------------------- //
import { useState } from "react";
import DesignContainer from "./components/DesignContainer";
import "./index.css";
function App() {

  // In the next following lines of code we are setting the stare already

  // we need a way to check the drgged element meaning it's state.
  const [currentDragged, setCurrentDragged] = useState(null);

  // we need to check at what state id the edit button
  // because by clicking it we will be able to drag elements.
  // So we are starting with a false state that will lock the entire app.
  const [editMode, setEditMode] = useState(false);
  return (
    <div className="container">
      <h1>DESIGN PAD</h1>
      <div id="componentsContainer">
        <DesignContainer
          setEditMode={setEditMode}
          editMode={editMode}
          currentDragged={currentDragged}
          setCurrentDragged={setCurrentDragged}
        />
      </div>
    </div>
  );
}

export default App;
