import React, { useState } from "react";

function PadInput(props) {
  // set 8 pad inputs
  const [padInputs, setPadInputs] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <ul className={`pad-input ${props.editMode ? "" : "disabled"}`}>
      {/* render all the 8 pads using map method */}
      {padInputs.map((pad) => (
        //   set draggable to true so that element can be dragged
        <li
          key={pad}
          draggable
          // on dragStart, set currentDragged element by calling setCurrentDragged present
          // on the App.js
          onDragStart={(e) => {
            props.setCurrentDragged(pad);
          }}
        >
          {pad}
        </li>
      ))}
    </ul>
  );
}

export default PadInput;