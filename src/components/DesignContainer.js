import React from "react";
import DesignBoard from "./DesignBoard";
import PadInput from "./PadInput";

function DesignContainer(props) {
    return (
        <div className="design-container">
            {/* Here is the padInput contains the 8 draggable inputs */}
            {/* edit mode and setCurrentDragged method is passed using props */}
            {/* to display disabled if editmode is false and set currentDragged element to the dragged element */}
            <PadInput
                editMode={props.editMode}
                setCurrentDragged={props.setCurrentDragged}
            />

            {/* Here is where we have the editButton which will toggle the state of the edit mode */}
            {/* using props.setEditMode the mehthod is called inside App.js */}
            <button
                className={`edit-button ${props.editMode ? "" : "edit-mode"}`}
                onClick={() => props.setEditMode(true)}
            >
                EDIT
            </button>

            {/* Here is the designBoard which contains the pads that change its color at drop */}
            <DesignBoard currentDragged={props.currentDragged} />
        </div>
    );
}

export default DesignContainer;