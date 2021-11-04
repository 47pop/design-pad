import React, {Component} from "react"
import "./styles.css"
class Pad extends Component {
    onDragOverHandler=()=>{
        console.log("in Pad: "+this.props.id)
        this.props.handleOnDragOver(this.props.id)
    }
    onDropHandler=()=>{
        
    }
    render () {
        return(
            // <div id="pad" className="sameLineComponent">
                // <table id="designPadTable">
                //     <tr id="designPaTableRowOne">
                //         <td id="padOne" className="designPad" draggable onDragOver={this.onDragOver}>Upper Left</td>
                //         <td id="padTwo" className="designPad"droppable onDragOver={this.onDragOver}>Upper Right</td>
                //     </tr>
                //     <tr id="designPaTableRowTwo">
                //         <td id="padThree" className="designPad" droppable onDragOver={this.onDragOver}>Buttom Left</td>
                //         <td id="padFour" className="designPad" droppable onDragOver={this.onDragOver}>Buttom Right</td>
                //     </tr>
                // </table>
            // </div>
            // <td id={this.props.id} className="designPad" draggable onDragOver={this.onDragOver}>{this.props.name}</td>
            <div className="pad" 
                onDragOver={this.onDragOverHandler} 
                droppable onDrop={this.onDropHandler}>{this.props.name}</div>
            // <div></div>
        )
    }
}
export default Pad