import React from "react";
// import PadInput from "./PadInput";

function DesignPad(props) {
  return (
    // dragover event will be used to drag the pads from padinput containing the colors
    // but the event does not allow other elements to be dropped by default
    // so to overcome that use preventDefault();

    // To notice how the div element below contains all of the design pads(or pads) in board; namelly 4.
    <div
      className="design-pad"
      onDragOver={(e) => e.preventDefault()}
      //   on calling ondrop event the classList is changed by appending current Dragged element using the props
      onDrop={(e) => {
        console.log("Here");
        e.preventDefault();
        e.target.classList.add(`pad-${props.currentDragged}`);
      }}
    ></div>
  );
}

export default DesignPad;
