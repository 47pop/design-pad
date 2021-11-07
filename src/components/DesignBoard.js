import React from "react";
import DesignPad from "./DesignPad";

function DesignBoard(props) {
    return (
        <div className="design-board">
            {/* We have 4 pads */}
            {/* We pass currentDragged state using props */}
            <DesignPad currentDragged={props.currentDragged} />
            <DesignPad currentDragged={props.currentDragged} />
            <DesignPad currentDragged={props.currentDragged} />
            <DesignPad currentDragged={props.currentDragged} />
        </div>
    );
}
export default DesignBoard